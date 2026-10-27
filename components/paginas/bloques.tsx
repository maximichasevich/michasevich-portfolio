import Link from "next/link"
import { ArrowUpRight, ChevronDown, MessageCircle } from "lucide-react"

import { BorderBeam } from "@/components/ui/border-beam"
import { linkWhatsappCon, type Pregunta } from "@/data/perfil"
import { nombreDeRuta } from "@/lib/rutas"

/** Piezas comunes de las páginas internas. Todo se ve sin JavaScript. */

export function Migas({
  items,
}: {
  items: { nombre: string; ruta: string }[]
}) {
  return (
    <nav
      aria-label="Estás en"
      className="mono mb-6 text-xs text-[var(--estrella-70)]"
    >
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="enlace">
            Inicio
          </Link>
        </li>
        {items.map((it, i) => (
          <li key={it.ruta} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {i === items.length - 1 ? (
              <span aria-current="page">{it.nombre}</span>
            ) : (
              <Link href={it.ruta} className="enlace">
                {it.nombre}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/** Preguntas frecuentes con <details>: abren sin JavaScript y Google las lee. */
export function Preguntas({ lista }: { lista: Pregunta[] }) {
  return (
    <section aria-labelledby="titulo-preguntas" className="mt-20">
      <h2 id="titulo-preguntas" className="display-md text-3xl md:text-4xl">
        Preguntas frecuentes
      </h2>
      <div className="vidrio mt-8 rounded-3xl px-6 md:px-8">
        {lista.map((p) => (
          <details
            key={p.pregunta}
            className="group border-b border-[var(--borde)] last:border-b-0"
          >
            <summary className="display-md flex cursor-pointer list-none items-start justify-between gap-4 py-6 text-lg focus-visible:text-[var(--cian)] focus-visible:outline-none md:text-xl [&::-webkit-details-marker]:hidden">
              <h3>{p.pregunta}</h3>
              <ChevronDown
                className="mt-1 size-5 shrink-0 text-[var(--cian)] transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="pb-6 text-base leading-relaxed text-[var(--estrella-70)]">
              {p.respuesta}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}

/** Llamado a contactar: WhatsApp con mensaje ya escrito o formulario. */
export function Llamado({
  titulo = "¿Hablamos de tu proyecto?",
  texto = "Contame qué necesitás y te respondo en el día con un presupuesto cerrado.",
  mensaje,
}: {
  titulo?: string
  texto?: string
  mensaje: string
}) {
  return (
    <section
      aria-labelledby="titulo-llamado"
      className="hud relative mt-20 overflow-hidden rounded-3xl p-8 md:p-12"
    >
      <h2 id="titulo-llamado" className="display text-[clamp(2rem,5vw,3.4rem)]">
        {titulo}
      </h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--estrella-70)] md:text-lg">
        {texto}
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={linkWhatsappCon(mensaje)}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-orbita inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-semibold"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          Escribime por WhatsApp
        </a>
        <Link
          href="/#contacto"
          className="boton-fantasma inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-base font-medium"
        >
          Usar el formulario de contacto
        </Link>
      </div>
      <BorderBeam
        size={220}
        duration={9}
        colorFrom="#39d5ff"
        colorTo="#7c5cff"
      />
    </section>
  )
}

/** Enlaces a páginas relacionadas, con texto descriptivo. */
export function Relacionados({ rutas }: { rutas: string[] }) {
  return (
    <section aria-labelledby="titulo-relacionados" className="mt-20">
      <h2 id="titulo-relacionados" className="display-md text-2xl md:text-3xl">
        También te puede servir
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-3">
        {rutas.map((r) => (
          <li key={r}>
            <Link
              href={r}
              className="vidrio group flex h-full min-h-16 items-center justify-between gap-3 rounded-2xl px-5 py-4 transition-colors focus-visible:ring-2 focus-visible:ring-[var(--cian)] focus-visible:outline-none"
            >
              <span className="display-md text-lg">{nombreDeRuta(r)}</span>
              <ArrowUpRight
                className="size-5 shrink-0 text-[var(--cian)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
