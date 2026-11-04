import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  CheckCheck,
  Dumbbell,
  Scissors,
  Shirt,
  Stethoscope,
  UtensilsCrossed,
  Wrench,
} from "lucide-react"

import { Marquee } from "@/components/ui/marquee"
import {
  charlasPortada,
  rubros,
  rutaAutomatizacion,
} from "@/data/automatizacion"

/** Un ícono por rubro, en el mismo orden que `rubros`. */
const iconosRubros = [
  Scissors,
  UtensilsCrossed,
  Shirt,
  Building2,
  Stethoscope,
  Dumbbell,
  Wrench,
]

const datos = [
  { valor: "24 h", texto: "atiende todos los días" },
  { valor: "2 a 3 días", texto: "y queda funcionando" },
  { valor: "USD 35", texto: "por mes, sin permanencia" },
]

type Charla = (typeof charlasPortada)[number]

function TarjetaCharla({ charla }: { charla: Charla }) {
  return (
    <figure className="flex w-full flex-col gap-2 rounded-2xl border border-white/10 bg-[#0b141a]/90 p-2.5 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)] sm:p-3">
      <figcaption className="flex items-center gap-2 border-b border-white/5 pb-2">
        <span className="size-7 shrink-0 rounded-full bg-gradient-to-br from-[#25d366] to-[var(--violeta)]" />
        <span className="min-w-0 flex-1">
          <span className="block truncate text-xs font-semibold text-white">
            {charla.negocio}
          </span>
          <span className="block text-[10px] text-[#8696a0]">en línea</span>
        </span>
      </figcaption>
      <p className="max-w-[92%] self-start rounded-xl rounded-tl-sm bg-[#202c33] px-2.5 py-1.5 text-[12px] leading-snug text-[#e9edef] sm:max-w-[85%] sm:px-3 sm:py-2 sm:text-[13px]">
        {charla.cliente}
        <span className="ml-2 align-bottom text-[10px] text-[#8696a0]">
          {charla.hora}
        </span>
      </p>
      <p className="max-w-[95%] self-end rounded-xl rounded-tr-sm bg-[#005c4b] px-2.5 py-1.5 text-[12px] leading-snug text-[#e9edef] sm:max-w-[90%] sm:px-3 sm:py-2 sm:text-[13px]">
        {charla.asistente}
        <span className="ml-2 inline-flex items-center gap-0.5 align-bottom text-[10px] text-[#8fc7b8]">
          {charla.hora}
          <CheckCheck className="size-3.5 text-[#53bdeb]" />
        </span>
      </p>
    </figure>
  )
}

/**
 * Sección de la portada dedicada a la automatización de chats: ocupa todo
 * el ancho, con imagen de fondo y colores propios (.seccion-bots en
 * app/inicio.css), carruseles de charlas y de rubros. Toda la sección es un
 * solo enlace a /automatizacion-de-chats (el ::after del título la cubre),
 * así que adentro no hay botones. Los carruseles son decorativos.
 */
export function SeccionBots() {
  const mitad = Math.ceil(charlasPortada.length / 2)
  const columnaB = [
    ...charlasPortada.slice(mitad),
    ...charlasPortada.slice(0, mitad),
  ]

  return (
    <section
      id="automatizacion"
      aria-labelledby="titulo-automatizacion"
      className="seccion-bots group relative isolate my-16 scroll-mt-24 overflow-hidden md:my-24"
    >
      <Image
        src="/automatizacion/fondo-chats.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
      />
      <div
        className="seccion-bots-velo pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pt-32 md:px-10 md:pt-44 lg:grid-cols-[1fr_minmax(0,32rem)] lg:gap-16">
        <div>
          <p className="mono inline-flex items-center gap-3 rounded-full border border-[#25d366]/40 bg-[#25d366]/10 px-4 py-1.5 text-xs tracking-widest text-[#7ef0a8] uppercase">
            <span className="logo-m text-sm normal-case" aria-hidden="true">
              {"<M/>"}
            </span>
            Automatización de chats con IA
          </p>
          <h2
            id="titulo-automatizacion"
            className="display mt-6 max-w-[14ch] text-[clamp(2.6rem,6.5vw,5.6rem)]"
          >
            <Link
              href={rutaAutomatizacion}
              className="outline-none after:absolute after:inset-0 after:z-20 after:content-[''] focus-visible:after:ring-4 focus-visible:after:ring-[#25d366] focus-visible:after:ring-inset"
            >
              Tu WhatsApp atiende solo,{" "}
              <span className="seccion-bots-degradado">las 24 horas.</span>
              <span className="sr-only">
                {" "}
                Ver cómo funciona el asistente de WhatsApp
              </span>
            </Link>
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-[var(--estrella-70)] md:text-xl">
            Un asistente con inteligencia artificial que responde a tus clientes
            como una persona, con tus precios, tu stock y tus horarios. Toma
            turnos y pedidos, junta interesados y te pasa la charla cuando hace
            falta.
          </p>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {datos.map((d) => (
              <div key={d.valor}>
                <dt className="sr-only">{d.texto}</dt>
                <dd>
                  <span className="display-md block text-2xl text-white md:text-4xl">
                    {d.valor}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-[var(--estrella-45)] md:text-sm">
                    {d.texto}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <p className="mono mt-10 inline-flex items-center gap-2 text-sm tracking-wide text-[#7ef0a8] md:text-base">
            Conocé cómo funciona
            <ArrowRight
              className="size-5 transition-transform duration-300 group-hover:translate-x-1.5"
              aria-hidden="true"
            />
          </p>
        </div>

        {/* Carrusel vertical infinito de charlas: una columna sube y la otra
            baja (también en el celular). */}
        <div
          className="seccion-bots-columnas grid h-[32rem] grid-cols-2 gap-3 overflow-hidden sm:gap-4 md:h-[38rem]"
          aria-hidden="true"
        >
          <Marquee vertical repeat={3} className="h-full p-0 [--duration:45s]">
            {charlasPortada.map((c) => (
              <TarjetaCharla key={c.negocio} charla={c} />
            ))}
          </Marquee>
          <Marquee
            vertical
            reverse
            repeat={3}
            className="h-full p-0 [--duration:52s]"
          >
            {columnaB.map((c) => (
              <TarjetaCharla key={c.negocio} charla={c} />
            ))}
          </Marquee>
        </div>
      </div>

      {/* Carrusel horizontal de rubros. */}
      <div className="mt-14 pb-28 md:mt-20 md:pb-36">
        <p className="sr-only">
          Sirve para barberías, hamburgueserías, tiendas de ropa, inmobiliarias,
          consultorios, gimnasios y talleres.
        </p>
        <div className="seccion-bots-cinta" aria-hidden="true">
          <Marquee className="[--duration:35s] [--gap:0.75rem]">
            {rubros.map((r, i) => {
              const Icono = iconosRubros[i] ?? Wrench
              return (
                <span
                  key={r.nombre}
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm whitespace-nowrap text-[var(--estrella)] md:text-base"
                >
                  <Icono className="size-4 text-[#25d366] md:size-5" />
                  {r.nombre}
                </span>
              )
            })}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
