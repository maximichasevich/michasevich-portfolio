import { tamanoVistaPrevia, vistaPrevia } from "@/lib/vista-previa"
import { perfil } from "@/data/perfil"

export const alt = `Diseño web en Montevideo · ${perfil.nombre}`
export const size = tamanoVistaPrevia
export const contentType = "image/png"

export default function OpengraphImage() {
  return vistaPrevia({ titulo: "Tu negocio merece una página que impresione." })
}
