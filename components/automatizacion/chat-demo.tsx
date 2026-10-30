"use client"

import { useState } from "react"
import { RotateCcw } from "lucide-react"

import { chatDemo, negocioDemo, type MensajeChat } from "@/data/automatizacion"
import { cn } from "@/lib/utils"

/**
 * Demo animada de un chat de WhatsApp, hecha solo con HTML y CSS (sin
 * imágenes). Los mensajes aparecen uno por uno y, antes de cada respuesta,
 * se ve "escribiendo…". Las animaciones están en app/inicio.css (.chat-*);
 * con "reducir movimiento" activado se muestra la charla completa.
 *
 * "animado={false}" muestra solo los primeros mensajes, quietos (para la
 * franja de la portada).
 */
export function ChatDemo({
  animado = true,
  cantidad,
  className,
}: {
  animado?: boolean
  /** Cuántos mensajes mostrar (por defecto, todos). */
  cantidad?: number
  className?: string
}) {
  const [vuelta, setVuelta] = useState(0)
  const mensajes = chatDemo.slice(0, cantidad ?? chatDemo.length)
  const linea = calcularTiempos(mensajes)

  return (
    <figure
      className={cn(
        "chat-demo relative mx-auto w-full max-w-[380px] overflow-hidden rounded-[2rem] border border-[var(--borde)] shadow-[0_30px_90px_-30px_rgba(37,211,102,0.45)]",
        className
      )}
    >
      {/* Barra superior, como en WhatsApp. */}
      <div className="chat-cabecera flex items-center gap-3 px-4 py-3">
        <span
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--cian)] to-[var(--violeta)] text-sm font-bold text-[var(--noche)]"
          aria-hidden="true"
        >
          LN
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold text-white">
            {negocioDemo}
          </span>
          <span className="block text-xs text-[#8696a0]">
            en línea · responde al instante
          </span>
        </span>
      </div>

      {/* Conversación: se apila desde abajo, como un chat real. */}
      <ol
        key={vuelta}
        aria-label={`Ejemplo de conversación con el asistente de ${negocioDemo}`}
        className={cn(
          "chat-fondo flex flex-col justify-end overflow-hidden px-3 pt-2 pb-4",
          animado ? "h-[460px]" : "h-auto",
          animado && "chat-animado"
        )}
      >
        {mensajes.map((m, i) => (
          <Fila
            key={`${vuelta}-${i}`}
            mensaje={m}
            escribiendo={linea[i].escribiendo}
            aparece={linea[i].aparece}
            animado={animado}
          />
        ))}
      </ol>

      <figcaption className="chat-cabecera flex items-center justify-between gap-3 px-4 py-2.5 text-[11px] leading-snug text-[#8696a0]">
        <span>
          Ejemplo con un negocio ficticio. Tu asistente responde con tus datos.
        </span>
        {animado && (
          <button
            type="button"
            onClick={() => setVuelta((v) => v + 1)}
            className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-full border border-white/15 px-3 text-xs text-[#d1d7db] transition-colors hover:border-[#25d366] hover:text-white focus-visible:border-[#25d366] focus-visible:outline-none"
          >
            <RotateCcw className="size-3.5" aria-hidden="true" />
            Ver de nuevo
          </button>
        )}
      </figcaption>
    </figure>
  )
}

function Fila({
  mensaje: m,
  escribiendo,
  aparece,
  animado,
}: {
  mensaje: MensajeChat
  escribiendo?: number
  aparece: number
  animado: boolean
}) {
  const esCliente = m.de === "cliente"
  return (
    <>
      {/* "Escribiendo…" antes de cada respuesta del asistente. */}
      {animado && escribiendo !== undefined && (
        <li
          aria-hidden="true"
          className="chat-escribiendo self-start"
          style={{
            animationDelay: `${escribiendo}s`,
            animationDuration: `${aparece - escribiendo}s`,
          }}
        >
          <span className="chat-burbuja chat-burbuja-asistente inline-flex gap-1 px-3.5 py-3">
            <span className="chat-punto" />
            <span className="chat-punto" />
            <span className="chat-punto" />
          </span>
        </li>
      )}
      <li
        className={cn(
          "chat-mensaje flex",
          esCliente ? "justify-end" : "justify-start"
        )}
        style={animado ? { animationDelay: `${aparece}s` } : undefined}
      >
        <p
          className={cn(
            "chat-burbuja max-w-[82%] px-3 pt-1.5 pb-1 text-[13.5px] leading-snug",
            esCliente ? "chat-burbuja-cliente" : "chat-burbuja-asistente"
          )}
        >
          <span className="sr-only">
            {esCliente ? "Cliente:" : "Asistente:"}{" "}
          </span>
          {m.texto}
          <span
            className="float-right ml-2 inline-flex translate-y-1 items-center gap-0.5 text-[10px] text-[#8696a0]"
            aria-hidden="true"
          >
            {m.hora}
            {esCliente && <DobleTilde />}
          </span>
        </p>
      </li>
    </>
  )
}

/** Momento (en segundos) en que aparece cada mensaje y su "escribiendo…". */
function calcularTiempos(mensajes: MensajeChat[]) {
  let t = 0.6
  return mensajes.map((m) => {
    if (m.de === "asistente") {
      const escribiendo = t
      // Más texto, un poco más de "escribiendo…" (entre 1 y 2 segundos).
      const espera = Math.min(2, 0.9 + m.texto.length / 120)
      const aparece = t + espera
      t = aparece + 1.4
      return { escribiendo, aparece }
    }
    const aparece = t
    t += 1.1
    return { aparece }
  })
}

function DobleTilde() {
  return (
    <svg viewBox="0 0 16 11" width="15" height="10" fill="none">
      <path
        d="M1 5.5 4 8.5 10 1.5M6 8.5 7 9.5 15 1.5"
        stroke="#53bdeb"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
