import { buscarPagina, paginas } from "@/data/paginas"
import { tamanoVistaPrevia, vistaPrevia } from "@/lib/vista-previa"

export const size = tamanoVistaPrevia
export const contentType = "image/png"
export const alt = "Diseño web en Montevideo · Maximiliano Michasevich"

export function generateStaticParams() {
  return paginas.map((p) => ({ pagina: p.slug }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ pagina: string }>
}) {
  const p = buscarPagina((await params).pagina)
  return vistaPrevia({
    etiqueta: p?.etiqueta,
    titulo: p?.h1 ?? "Diseño web en Montevideo",
  })
}
