import "server-only"

import {
  createHash,
  createHmac,
  randomBytes,
  timingSafeEqual,
} from "node:crypto"
import { headers } from "next/headers"

import { textoPrueba } from "@/lib/prueba-trabajo"

/**
 * Desafíos de la prueba de trabajo del formulario (lado del servidor).
 *
 * Formato: "<emitido>.<sal>.<bits>.<firma>". La firma es un HMAC con una
 * clave derivada de MENSAJES_SAL e incluye la huella del visitante, así que
 * un desafío solo sirve desde la misma IP que lo pidió: resolver uno y
 * repartirlo entre muchas máquinas no funciona. No se guarda nada: todo lo
 * necesario para verificarlo viaja firmado.
 */

/** Bits en cero que se piden: ~260.000 intentos, uno o dos segundos. */
export const BITS = 18
/** Menos que esto desde que se pidió el desafío es un robot. */
const MINIMO_MS = 3000
/** Un desafío vale dos horas (alcanza para escribir con calma). */
const MAXIMO_MS = 2 * 60 * 60 * 1000

function clave() {
  const sal = process.env.MENSAJES_SAL
  if (!sal) return null
  return createHash("sha256").update(`desafio:${sal}`).digest()
}

/** IP del visitante según Netlify (o el servidor local). */
export async function ipVisitante() {
  const h = await headers()
  return (
    h.get("x-nf-client-connection-ip") ??
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    h.get("x-real-ip") ??
    null
  )
}

function firmar(k: Buffer, prefijo: string, ip: string) {
  return createHmac("sha256", k)
    .update(`${prefijo}|${ip}`)
    .digest("base64url")
}

/** Crea un desafío nuevo para este visitante, o null si falta la clave. */
export async function crearDesafio() {
  const k = clave()
  if (!k) return null
  const ip = (await ipVisitante()) ?? "sin-ip"
  const prefijo = `${Date.now()}.${randomBytes(6).toString("hex")}.${BITS}`
  return `${prefijo}.${firmar(k, prefijo, ip)}`
}

export type ResultadoDesafio = "ok" | "rapido" | "vencido" | "invalido"

/** Verifica el desafío firmado y su solución. */
export async function verificarDesafio(
  desafio: string,
  solucion: string
): Promise<ResultadoDesafio> {
  const k = clave()
  if (!k || desafio.length > 120 || !/^\d{1,10}$/.test(solucion))
    return "invalido"
  const partes = desafio.split(".")
  if (partes.length !== 4) return "invalido"
  const [emitido, sal, bits, firma] = partes
  if (!/^\d{13}$/.test(emitido) || !/^[0-9a-f]{12}$/.test(sal)) return "invalido"
  if (Number(bits) !== BITS) return "invalido"

  const prefijo = `${emitido}.${sal}.${bits}`
  const ip = (await ipVisitante()) ?? "sin-ip"
  const esperada = Buffer.from(firmar(k, prefijo, ip))
  const recibida = Buffer.from(firma)
  if (
    esperada.length !== recibida.length ||
    !timingSafeEqual(esperada, recibida)
  )
    return "invalido"

  const hash = createHash("sha256")
    .update(textoPrueba(prefijo, Number(solucion)))
    .digest()
  if (hash.readUInt32BE(0) >= 2 ** (32 - BITS)) return "invalido"

  const edad = Date.now() - Number(emitido)
  if (edad < MINIMO_MS) return "rapido"
  if (edad > MAXIMO_MS) return "vencido"
  return "ok"
}
