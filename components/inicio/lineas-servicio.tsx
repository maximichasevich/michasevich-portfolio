import Link from "next/link"
import { ArrowRight, Check, Monitor, MessagesSquare } from "lucide-react"

import { BlurFade } from "@/components/ui/blur-fade"
import { ShineBorder } from "@/components/ui/shine-border"
import { rutaAutomatizacion } from "@/data/automatizacion"

/**
 * Bloque "Servicios" de la portada: las dos líneas de trabajo, con el mismo
 * tamaño y el mismo peso. Diseño web lleva a la sección de la portada;
 * automatización de chats, a su página propia.
 */
const lineas = [
  {
    id: "web",
    Icono: Monitor,
    etiqueta: "Línea 01",
    titulo: "Diseño web",
    texto:
      "Páginas web, landing pages y tiendas online a medida: rápidas, perfectas en el celular y listas para que te encuentren en Google.",
    puntos: [
      "Diseño propio, sin plantillas",
      "Botón de WhatsApp, mapa y formulario",
      "Tiendas con Mercado Pago",
    ],
    precio: "Desde USD 150, pago único",
    boton: "Ver diseño web",
    href: "/#que-hago",
    colores: ["#39d5ff", "#7c5cff", "#f5f7ff"],
  },
  {
    id: "chats",
    Icono: MessagesSquare,
    etiqueta: "Línea 02",
    titulo: "Automatización de chats con IA",
    texto:
      "Un asistente con inteligencia artificial que atiende el WhatsApp de tu negocio las 24 horas: responde, junta clientes y toma turnos o pedidos.",
    puntos: [
      "Responde como una persona",
      "Vos actualizás precios y stock",
      "Te pasa la charla cuando hace falta",
    ],
    precio: "Desde USD 35 por mes",
    boton: "Ver automatización de chats",
    href: rutaAutomatizacion,
    colores: ["#25d366", "#7c5cff", "#39d5ff"],
  },
]

export function LineasServicio() {
  return (
    <section
      id="lineas"
      className="relative scroll-mt-24 px-5 pt-24 md:px-10 md:pt-32"
      aria-labelledby="titulo-lineas"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="etiqueta-hud mb-4">Servicios</p>
          <h2
            id="titulo-lineas"
            className="display text-[clamp(2.2rem,5.5vw,4.2rem)]"
          >
            Dos formas de hacer crecer{" "}
            <span className="degradado">tu negocio</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--estrella-70)] md:text-lg">
            Una página que te hace encontrar y un asistente que atiende a
            quienes te escriben. Podés tener una de las dos o las dos juntas.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {lineas.map((l, i) => (
            <BlurFade
              as="li"
              key={l.id}
              inView
              delay={0.08 + i * 0.12}
              duration={0.6}
              offset={18}
              className="min-w-0"
            >
              <article
                aria-labelledby={`linea-${l.id}`}
                className="hud relative flex h-full flex-col overflow-hidden rounded-[2rem] p-7 md:p-10"
              >
                <ShineBorder
                  borderWidth={1}
                  duration={12}
                  shineColor={l.colores}
                  className="rounded-[2rem]"
                />
                <div
                  className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full blur-3xl"
                  style={{
                    background: `radial-gradient(closest-side, ${l.colores[0]}33, transparent)`,
                  }}
                  aria-hidden="true"
                />
                <div className="relative flex items-center justify-between gap-3">
                  <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--cian)]/20 to-[var(--violeta)]/30 text-[var(--cian)] ring-1 ring-[var(--borde)]">
                    <l.Icono className="size-7" aria-hidden="true" />
                  </span>
                  <span className="mono text-[11px] tracking-widest text-[var(--estrella-45)] uppercase">
                    {l.etiqueta}
                  </span>
                </div>
                <h3
                  id={`linea-${l.id}`}
                  className="display-md relative mt-7 text-3xl md:text-4xl"
                >
                  {l.titulo}
                </h3>
                <p className="relative mt-4 text-base leading-relaxed text-[var(--estrella-70)] md:text-lg">
                  {l.texto}
                </p>
                <ul className="relative mt-6 flex flex-1 flex-col gap-2.5">
                  {l.puntos.map((p) => (
                    <li key={p} className="flex gap-3 text-sm">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-[var(--cian)]"
                        aria-hidden="true"
                      />
                      <span className="text-[var(--estrella-70)]">{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--borde)] pt-6">
                  <span className="mono text-sm text-[var(--estrella)]">
                    {l.precio}
                  </span>
                  <Link
                    href={l.href}
                    className="boton-orbita inline-flex min-h-12 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                  >
                    {l.boton}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </BlurFade>
          ))}
        </ul>
      </div>
    </section>
  )
}
