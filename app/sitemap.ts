import type { MetadataRoute } from "next"

import { perfil } from "@/data/perfil"
import { todasLasRutas } from "@/lib/rutas"

/**
 * Mapa del sitio para Google: la portada y todas las páginas internas
 * (servicios, rubros, ejemplos y "Sobre mí"). Se arma solo con lib/rutas.ts,
 * así una página nueva aparece acá sin tocar este archivo.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const hoy = new Date()
  return [
    {
      url: perfil.url,
      lastModified: hoy,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...todasLasRutas.map((r) => ({
      url: `${perfil.url}${r.ruta}`,
      lastModified: hoy,
      changeFrequency: "monthly" as const,
      priority: r.ruta.startsWith("/ejemplos") ? 0.6 : 0.8,
    })),
  ]
}
