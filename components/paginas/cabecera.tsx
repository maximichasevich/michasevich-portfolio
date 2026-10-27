import Link from "next/link"

import { linkWhatsapp, perfil } from "@/data/perfil"

const enlaces = [
  { href: "/#que-hago", texto: "Servicios" },
  { href: "/#trabajos", texto: "Ejemplos" },
  { href: "/#servicios", texto: "Precios" },
  { href: "/sobre-mi", texto: "Sobre mí" },
]

/**
 * Barra superior de las páginas internas: más simple que la de la portada
 * (que navega por secciones) y sin JavaScript.
 */
export function Cabecera() {
  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <div className="vidrio flex w-full max-w-4xl items-center justify-between gap-2 rounded-full py-2 pr-2 pl-5">
        <Link
          href="/"
          translate="no"
          className="notranslate display-md flex min-h-10 items-center gap-2 text-base tracking-tight"
        >
          <span aria-hidden="true">
            {perfil.nombreCorto}
            <span className="text-[var(--cian)]">.</span>
          </span>
          <span className="sr-only">Inicio · {perfil.nombre}</span>
        </Link>
        <nav aria-label="Principal" className="flex items-center gap-1">
          {enlaces.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="hidden rounded-full px-3 py-2 text-sm text-[var(--estrella-70)] transition-colors hover:text-[var(--estrella)] focus-visible:text-[var(--estrella)] focus-visible:outline-none md:inline"
            >
              {e.texto}
            </Link>
          ))}
          <a
            href={linkWhatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className="boton-orbita ml-1 inline-flex min-h-10 items-center rounded-full px-4 py-2 text-sm font-semibold"
          >
            Escribime
          </a>
        </nav>
      </div>
    </header>
  )
}
