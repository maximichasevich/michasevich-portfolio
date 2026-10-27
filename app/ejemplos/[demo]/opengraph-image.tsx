import { buscarDemo, paginasDemo } from "@/data/demos"
import { tamanoVistaPrevia, vistaPrevia } from "@/lib/vista-previa"

export const size = tamanoVistaPrevia
export const contentType = "image/png"
export const alt = "Proyecto de muestra · Maximiliano Michasevich"

export function generateStaticParams() {
  return paginasDemo.map((d) => ({ demo: d.slug }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ demo: string }>
}) {
  const d = buscarDemo((await params).demo)
  return vistaPrevia({
    etiqueta: "Proyecto de muestra",
    titulo: d?.h1 ?? "Proyecto de muestra",
  })
}
