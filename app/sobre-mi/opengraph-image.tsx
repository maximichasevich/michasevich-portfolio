import { tamanoVistaPrevia, vistaPrevia } from "@/lib/vista-previa"

export const size = tamanoVistaPrevia
export const contentType = "image/png"
export const alt = "Sobre mí · Maximiliano Michasevich"

export default function Image() {
  return vistaPrevia({
    etiqueta: "Sobre mí · Cerro, Montevideo",
    titulo: "Hola, soy Maxi: diseño y programo páginas web.",
  })
}
