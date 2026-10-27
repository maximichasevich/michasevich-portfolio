import type { Metadata } from "next"
import Link from "next/link"

import { Llamado, Migas, Relacionados } from "@/components/paginas/bloques"
import { DatosEstructurados } from "@/components/paginas/datos-estructurados"
import { Marco } from "@/components/paginas/marco"
import { perfil, proceso, razones } from "@/data/perfil"
import { redesActivas } from "@/data/redes"
import { esquemaMigas, esquemaPersona, idPersona } from "@/lib/schema"

/**
 * Página "Sobre mí".
 * REVISAR: textos nuevos (27/10/2026), armados con los datos que pasaste.
 */
const titulo = "Sobre mí · Maximiliano Michasevich, diseñador web"
const descripcion =
  "Soy Maximiliano Michasevich, diseñador y desarrollador web del Cerro, Montevideo. Trabajo solo: hablás directo con quien hace tu página."

export const metadata: Metadata = {
  title: { absolute: titulo },
  description: descripcion,
  alternates: { canonical: "/sobre-mi" },
  openGraph: {
    url: "/sobre-mi",
    title: titulo,
    description: descripcion,
    type: "profile",
  },
}

const formacion = [
  {
    anios: "2018 – 2020",
    lugar: "Liceo N.º 38",
    que: "Orientación en informática.",
  },
  {
    anios: "2021 – 2023",
    lugar: "ITS Arias Balpardas",
    que: "Bachillerato en Diseño Web y curso de Programación de 3 años.",
  },
  {
    anios: "2026",
    lugar: "Por mi cuenta",
    que: "Empiezo a ofrecer páginas web a negocios de Montevideo y todo Uruguay.",
  },
]

export default function SobreMi() {
  const grafo = [
    {
      "@type": "ProfilePage",
      "@id": `${perfil.url}/sobre-mi/#pagina`,
      url: `${perfil.url}/sobre-mi`,
      name: titulo,
      mainEntity: { "@id": idPersona },
    },
    esquemaPersona(),
    esquemaMigas([{ nombre: "Sobre mí", ruta: "/sobre-mi" }]),
  ]

  return (
    <Marco>
      <DatosEstructurados grafo={grafo} />
      <Migas items={[{ nombre: "Sobre mí", ruta: "/sobre-mi" }]} />

      <p className="etiqueta-hud mb-4">Sobre mí</p>
      <h1 className="display brillo max-w-[18ch] text-[clamp(2.2rem,5.5vw,4rem)]">
        Hola, soy Maxi: diseño y programo páginas web desde el Cerro
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--estrella-70)] md:text-xl">
        Me llamo {perfil.nombre}, tengo 20 años y soy de Montevideo. Hago
        páginas web para comercios, emprendedores y pequeños negocios de todo
        Uruguay.
      </p>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-12">
          <section>
            <h2 className="display-md text-2xl md:text-3xl">Mi historia</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--estrella-70)] md:text-lg">
              Me interesa la informática desde el liceo, donde hice la
              orientación en informática. Después estudié el bachillerato de
              diseño web y un curso de programación de tres años en el ITS Arias
              Balpardas: ahí aprendí a pensar una página como diseñador y a
              construirla como programador.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--estrella-70)] md:text-lg">
              En 2026 empecé a ofrecer páginas web a negocios. Para mostrar cómo
              trabajo hice tres sitios de muestra, cada uno para un rubro
              distinto:{" "}
              <Link href="/ejemplos/la-espiga" className="enlace">
                La Espiga, una panadería de barrio
              </Link>
              ,{" "}
              <Link href="/ejemplos/estudio-faro" className="enlace">
                Estudio Faro, un estudio de arquitectura
              </Link>{" "}
              y{" "}
              <Link href="/ejemplos/verde-tienda" className="enlace">
                Verde Tienda, una tienda online de plantas
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="display-md text-2xl md:text-3xl">
              Por qué trabajo solo
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--estrella-70)] md:text-lg">
              No soy una agencia. Cuando me escribís, hablás directamente con
              quien diseña y programa tu página: no hay intermediarios, nada se
              pierde en el camino y las respuestas llegan en el día.
            </p>
          </section>

          <section>
            <h2 className="display-md text-2xl md:text-3xl">Cómo trabajo</h2>
            <ol className="mt-6 flex flex-col gap-5">
              {proceso.map((p, i) => (
                <li key={p.titulo} className="flex gap-4">
                  <span className="mono flex size-9 shrink-0 items-center justify-center rounded-full border border-[var(--cian)]/60 text-xs text-[var(--cian)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="display-md block text-lg">
                      {p.titulo}{" "}
                      <span className="mono text-xs font-normal text-[var(--estrella-70)]">
                        · {p.duracion}
                      </span>
                    </span>
                    <span className="mt-1 block text-base leading-relaxed text-[var(--estrella-70)]">
                      {p.descripcion}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="display-md text-2xl md:text-3xl">
              Lo que podés esperar
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {razones.map((r) => (
                <li key={r.titulo} className="vidrio rounded-2xl p-5">
                  <h3 className="display-md text-lg">{r.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--estrella-70)]">
                    {r.descripcion}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start">
          <section
            aria-labelledby="titulo-formacion"
            className="vidrio rounded-3xl p-6 md:p-8"
          >
            <h2 id="titulo-formacion" className="display-md text-xl">
              Formación
            </h2>
            <ol className="mt-5 flex flex-col gap-5">
              {formacion.map((f) => (
                <li key={f.anios}>
                  <p className="mono text-xs text-[var(--cian)]">{f.anios}</p>
                  <p className="display-md mt-1 text-base">{f.lugar}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--estrella-70)]">
                    {f.que}
                  </p>
                </li>
              ))}
            </ol>
          </section>
          {redesActivas.length > 0 && (
            <section
              aria-labelledby="titulo-perfiles"
              className="hud rounded-3xl p-6 md:p-8"
            >
              <h2 id="titulo-perfiles" className="etiqueta-hud">
                Mis perfiles
              </h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                {redesActivas.map((r) => (
                  <li key={r.nombre}>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="enlace"
                    >
                      Mi perfil de {r.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>
      </div>

      <Llamado
        titulo="¿Hacemos tu página?"
        mensaje="Hola Maxi, leí sobre vos y quiero hablar de una página web para mi negocio."
      />
      <Relacionados rutas={["/sitios-web", "/turnos-online", "/comercios"]} />
    </Marco>
  )
}
