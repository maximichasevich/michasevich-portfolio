import { tamanoVistaPrevia, vistaPrevia } from "@/lib/vista-previa"

export const size = tamanoVistaPrevia
export const contentType = "image/png"
export const alt =
  "Asistente de WhatsApp con inteligencia artificial · Maximiliano Michasevich"

export default function Image() {
  return vistaPrevia({
    etiqueta: "Automatización de chats con IA",
    titulo: "Tu WhatsApp atiende solo, las 24 horas.",
  })
}
