import type { Metadata } from "next"
import Link from "next/link"

import { Marco } from "@/components/paginas/marco"
import { rutasRubros, rutasServicios } from "@/lib/rutas"

export const metadata: Metadata = {
  title: { absolute: "Página no encontrada · Maximiliano Michasevich" },
  description: "Esta página no existe. Desde acá podés ir al inicio, a los servicios o a contacto.",
  robots: { index: false, follow: true },
}

/** Página 404: explica qué pasó y ofrece caminos para seguir. */
export default function NoEncontrada() {
  return (
    <Marco>
      <p className="etiqueta-hud mb-4">Error 404</p>
      <h1 className="display brillo max-w-[18ch] text-[clamp(2.2rem,5.5vw,4rem)]">
        Esta página no existe (o se mudó)
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--estrella-70)]">
        Puede que el link esté mal escrito o que la página ya no esté. Estos
        caminos sí funcionan:
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link
          href="/"
          className="boton-orbita inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-base font-semibold"
        >
          Ir al inicio
        </Link>
        <Link
          href="/#contacto"
          className="boton-fantasma inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-base font-medium"
        >
          Contactarme
        </Link>
      </div>
      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        {[
          { titulo: "Servicios", rutas: rutasServicios },
          { titulo: "Por rubro", rutas: rutasRubros },
        ].map((g) => (
          <section key={g.titulo}>
            <h2 className="display-md text-xl">{g.titulo}</h2>
            <ul className="mt-4 flex flex-col gap-3 text-[var(--estrella-70)]">
              {g.rutas.map((r) => (
                <li key={r.ruta}>
                  <Link href={r.ruta} className="enlace">
                    {r.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Marco>
  )
}
