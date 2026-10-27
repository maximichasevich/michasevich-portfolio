import { serializar } from "@/lib/schema"

/** Bloque de datos estructurados para Google (no se ve en la página). */
export function DatosEstructurados({ grafo }: { grafo: object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializar(grafo) }}
    />
  )
}
