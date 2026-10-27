import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowUpRight, Check, Info } from "lucide-react"

import { Llamado, Migas, Relacionados } from "@/components/paginas/bloques"
import { DatosEstructurados } from "@/components/paginas/datos-estructurados"
import { Marco } from "@/components/paginas/marco"
import { aclaracionDemo, buscarDemo, paginasDemo } from "@/data/demos"
import { perfil } from "@/data/perfil"
import { ejemplos } from "@/data/trabajo"
import { esquemaMigas, idPersona } from "@/lib/schema"

/** Una página por sitio de muestra: /ejemplos/la-espiga, etc. */
export const dynamicParams = false

export function generateStaticParams() {
  return paginasDemo.map((d) => ({ demo: d.slug }))
}

type Props = { params: Promise<{ demo: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = buscarDemo((await params).demo)
  if (!d) return {}
  const ruta = `/ejemplos/${d.slug}`
  return {
    title: { absolute: d.titulo },
    description: d.descripcion,
    alternates: { canonical: ruta },
    openGraph: { url: ruta, title: d.titulo, description: d.descripcion },
  }
}

export default async function PaginaDemo({ params }: Props) {
  const d = buscarDemo((await params).demo)
  const e = ejemplos.find((x) => x.slug === d?.slug)
  if (!d || !e) notFound()
  const ruta = `/ejemplos/${d.slug}`

  const grafo = [
    {
      "@type": "CreativeWork",
      "@id": `${perfil.url}${ruta}/#proyecto`,
      name: `${e.nombre} · proyecto de muestra`,
      description: d.descripcion,
      url: e.ruta,
      creator: { "@id": idPersona },
      genre: e.rubro,
      image: `${perfil.url}${e.escritorio}`,
    },
    esquemaMigas([{ nombre: `Ejemplo: ${e.nombre}`, ruta }]),
  ]

  return (
    <Marco>
      <DatosEstructurados grafo={grafo} />
      <Migas
        items={[
          { nombre: "Ejemplos", ruta: "/#trabajos" },
          { nombre: e.nombre, ruta },
        ]}
      />

      <p className="etiqueta-hud mb-4">Proyecto de muestra · {e.rubro}</p>
      <h1 className="display brillo max-w-[22ch] text-[clamp(2.2rem,5.5vw,4rem)]">
        {d.h1}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--estrella-70)] md:text-xl">
        {d.bajada}
      </p>

      <p className="mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-[var(--cian)]/40 bg-[rgba(57,213,255,0.06)] px-5 py-4 text-sm leading-relaxed text-[var(--estrella)]">
        <Info
          className="mt-0.5 size-4 shrink-0 text-[var(--cian)]"
          aria-hidden="true"
        />
        {aclaracionDemo}
      </p>

      <div className="mt-12 grid items-end gap-6 sm:grid-cols-[1fr_auto]">
        <Image
          src={e.escritorio}
          alt={`Captura de escritorio de ${e.nombre}, ${e.rubro.toLowerCase()} de muestra`}
          width={970}
          height={700}
          sizes="(min-width: 1024px) 720px, 100vw"
          className="w-full rounded-2xl border border-[var(--borde)] shadow-[0_40px_120px_-30px_rgba(57,213,255,0.45)]"
          priority
        />
        <Image
          src={e.celular}
          alt={`Captura en celular de ${e.nombre}`}
          width={780}
          height={1688}
          sizes="180px"
          className="mx-auto w-40 rounded-3xl border border-[var(--borde)] sm:w-44"
        />
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-12">
          {d.secciones.map((s) => (
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
            </section>
          ))}
        </div>
        <aside className="flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start">
          <section
            aria-labelledby="titulo-funciones"
            className="vidrio rounded-3xl p-6 md:p-8"
          >
            <h2 id="titulo-funciones" className="display-md text-xl">
              Funciones
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {e.funciones.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 text-sm leading-relaxed text-[var(--estrella-70)]"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-[var(--cian)]"
                    aria-hidden="true"
                  />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-[var(--estrella-70)]">
              Público: {e.publico}.
            </p>
          </section>
          <a
            href={e.ruta}
            target="_blank"
            rel="noopener noreferrer"
            className="boton-fantasma inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium"
          >
            Recorrer la demo de {e.nombre}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </aside>
      </div>

      <Llamado
        titulo={`¿Querés una página así?`}
        mensaje={`Hola Maxi, vi el ejemplo de ${e.nombre} y quiero una página así para mi negocio.`}
      />
      <Relacionados rutas={d.relacionados} />
    </Marco>
  )
}
