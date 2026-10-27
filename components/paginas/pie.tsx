import Link from "next/link"

import { linkWhatsapp, perfil } from "@/data/perfil"
import { redesActivas } from "@/data/redes"
import {
  rutaSobreMi,
  rutasEjemplos,
  rutasRubros,
  rutasServicios,
  type Ruta,
} from "@/lib/rutas"

/**
 * Pie de página de todo el sitio: enlaces a cada servicio, rubro y ejemplo
 * (así Google y las personas llegan a todas las páginas), contacto y redes.
 */
export function Pie() {
  return (
    <footer className="relative border-t border-[var(--borde)] px-5 pt-16 pb-24 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <Columna titulo="Servicios" rutas={rutasServicios} />
        <Columna titulo="Por rubro" rutas={rutasRubros} />
        <Columna
          titulo="Ejemplos y más"
          rutas={[...rutasEjemplos, rutaSobreMi]}
        />
        <div>
          <p className="etiqueta-hud mb-4">Contacto</p>
          <ul className="flex flex-col gap-3 text-sm text-[var(--estrella-70)]">
            <li>
              <a
                href={linkWhatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                className="enlace"
              >
                WhatsApp {perfil.telefono}
              </a>
            </li>
            <li>
              <a href={`mailto:${perfil.email}`} className="enlace break-all">
                {perfil.email}
              </a>
            </li>
            <li>
              <Link href="/#contacto" className="enlace">
                Formulario de contacto
              </Link>
            </li>
            {redesActivas.map((r) => (
              <li key={r.nombre}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="enlace"
                >
                  {r.nombre} de {perfil.nombreCorto}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-wrap items-center justify-between gap-3 text-sm text-[var(--estrella-70)]">
        <p translate="no" className="notranslate">
          {perfil.nombre}, {new Date().getFullYear()}
        </p>
        <p>Diseño web desde el Cerro, Montevideo, para todo Uruguay.</p>
      </div>
    </footer>
  )
}

function Columna({ titulo, rutas }: { titulo: string; rutas: Ruta[] }) {
  return (
    <nav aria-label={titulo}>
      <p className="etiqueta-hud mb-4">{titulo}</p>
      <ul className="flex flex-col gap-3 text-sm text-[var(--estrella-70)]">
        {rutas.map((r) => (
          <li key={r.ruta}>
            <Link href={r.ruta} className="enlace">
              {r.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
