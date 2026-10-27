import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Check } from "lucide-react"

import {
  Llamado,
  Migas,
  Preguntas,
  Relacionados,
} from "@/components/paginas/bloques"
import { DatosEstructurados } from "@/components/paginas/datos-estructurados"
import { Marco } from "@/components/paginas/marco"
import { buscarPagina, paginas } from "@/data/paginas"
import { perfil } from "@/data/perfil"
import { esquemaMigas, esquemaPreguntas, idNegocio } from "@/lib/schema"

/**
 * Páginas de servicios y de rubros (/sitios-web, /barberias, …). Los textos
 * están en data/paginas.ts; las direcciones que no existen dan 404.
 */
export const dynamicParams = false

export function generateStaticParams() {
  return paginas.map((p) => ({ pagina: p.slug }))
}

type Props = { params: Promise<{ pagina: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = buscarPagina((await params).pagina)
  if (!p) return {}
  const ruta = `/${p.slug}`
  return {
    title: { absolute: p.titulo },
    description: p.descripcion,
    alternates: { canonical: ruta },
    openGraph: { url: ruta, title: p.titulo, description: p.descripcion },
  }
}

export default async function PaginaServicio({ params }: Props) {
  const p = buscarPagina((await params).pagina)
  if (!p) notFound()
  const ruta = `/${p.slug}`
  const seccionPadre =
    p.tipo === "servicio"
      ? { nombre: "Servicios", ruta: "/#que-hago" }
      : { nombre: "Rubros", ruta: "/#que-hago" }

  const grafo = [
    {
      "@type": "Service",
      "@id": `${perfil.url}${ruta}/#servicio`,
      name: p.h1,
      description: p.descripcion,
      url: `${perfil.url}${ruta}`,
      serviceType: p.tipo === "servicio" ? p.nombre : "Diseño web",
      provider: { "@id": idNegocio },
      areaServed: { "@type": "Country", name: "Uruguay" },
      ...(p.tipo === "rubro" && {
        audience: { "@type": "BusinessAudience", name: p.nombre },
      }),
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: p.precio.desde,
          priceCurrency: "USD",
        },
      },
    },
    esquemaPreguntas(p.preguntas, ruta),
    esquemaMigas([{ nombre: p.nombre, ruta }]),
  ]

  return (
    <Marco>
      <DatosEstructurados grafo={grafo} />
      <Migas items={[seccionPadre, { nombre: p.nombre, ruta }]} />

      <p className="etiqueta-hud mb-4">{p.etiqueta}</p>
      <h1 className="display brillo max-w-[20ch] text-[clamp(2.2rem,5.5vw,4rem)]">
        {p.h1}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--estrella-70)] md:text-xl">
        {p.bajada}
      </p>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-12">
          {p.secciones.map((s) => (
            <section key={s.titulo}>
              <h2 className="display-md text-2xl md:text-3xl">{s.titulo}</h2>
              {s.parrafos.map((t) => (
                <p
                  key={t.slice(0, 40)}
                  className="mt-4 text-base leading-relaxed text-[var(--estrella-70)] md:text-lg"
                >
                  {t}
                </p>
              ))}
              {s.enlaces && (
                <ul className="mt-5 flex flex-col gap-2">
                  {s.enlaces.map((e) => (
                    <li key={e.href}>
                      <Link href={e.href} className="enlace">
                        {e.texto}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <aside className="flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start">
          <section
            aria-labelledby="titulo-incluye"
            className="vidrio rounded-3xl p-6 md:p-8"
          >
            <h2 id="titulo-incluye" className="display-md text-xl">
              Qué incluye
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {p.incluye.map((i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-[var(--estrella-70)]"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-[var(--cian)]"
                    aria-hidden="true"
                  />
                  {i}
                </li>
              ))}
            </ul>
          </section>

          <section
            aria-labelledby="titulo-precio"
            className="hud rounded-3xl p-6 md:p-8"
          >
            <h2 id="titulo-precio" className="etiqueta-hud">
              Precio de referencia
            </h2>
            <p className="mt-4 text-sm text-[var(--estrella-70)]">
              {p.precio.paquete}, desde
            </p>
            <p className="display mt-1 text-5xl">
              <span className="mr-1 text-2xl text-[var(--cian)]">US$</span>
              {p.precio.desde}
            </p>
            <ul className="mt-5 flex flex-col gap-2 text-sm leading-relaxed text-[var(--estrella-70)]">
              {p.precio.notas.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </section>
        </aside>
      </div>

      <Preguntas lista={p.preguntas} />
      <Llamado mensaje={p.mensaje} />
      <Relacionados rutas={p.relacionados} />
    </Marco>
  )
}
