import { paginasDemo } from "@/data/demos"
import { paginas } from "@/data/paginas"
import { ejemplos } from "@/data/trabajo"

/**
 * Todas las páginas del sitio con el texto que se usa al enlazarlas.
 * Lo usan el pie de página, los "relacionados" y el sitemap.
 */
export type Ruta = { ruta: string; nombre: string }

export const rutasServicios: Ruta[] = paginas
  .filter((p) => p.tipo === "servicio")
  .map((p) => ({ ruta: `/${p.slug}`, nombre: p.nombre }))

export const rutasRubros: Ruta[] = paginas
  .filter((p) => p.tipo === "rubro")
  .map((p) => ({
    ruta: `/${p.slug}`,
    nombre: `Páginas para ${p.nombre.toLowerCase()}`,
  }))

export const rutasEjemplos: Ruta[] = paginasDemo.map((d) => {
  const e = ejemplos.find((x) => x.slug === d.slug)
  return {
    ruta: `/ejemplos/${d.slug}`,
    nombre: `${e?.nombre ?? d.slug}: ${e?.rubro.toLowerCase() ?? "ejemplo"}`,
  }
})

export const rutaSobreMi: Ruta = { ruta: "/sobre-mi", nombre: "Sobre mí" }

export const todasLasRutas: Ruta[] = [
  ...rutasServicios,
  ...rutasRubros,
  ...rutasEjemplos,
  rutaSobreMi,
]

/** Texto descriptivo para enlazar una ruta interna. */
export function nombreDeRuta(ruta: string) {
  return todasLasRutas.find((r) => r.ruta === ruta)?.nombre ?? ruta
}
