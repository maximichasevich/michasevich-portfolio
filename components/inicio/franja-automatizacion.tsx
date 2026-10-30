import Link from "next/link"
import { ArrowRight, CalendarCheck, Clock, UserRoundCheck } from "lucide-react"

import { ChatDemo } from "@/components/automatizacion/chat-demo"
import { mensajeDemoGratis, rutaAutomatizacion } from "@/data/automatizacion"
import { linkWhatsappCon } from "@/data/perfil"

const puntos = [
  { Icono: Clock, texto: "Responde al instante, de día y de noche" },
  { Icono: UserRoundCheck, texto: "Junta los datos de cada interesado" },
  { Icono: CalendarCheck, texto: "Toma turnos y pedidos por vos" },
]

/**
 * Franja destacada de la portada dedicada a la automatización de chats.
 * Tiene fondo y forma propios (.franja-chats en app/inicio.css) para que se
 * lea como un segmento aparte del diseño web.
 */
export function FranjaAutomatizacion() {
  return (
    <section
      id="automatizacion"
      aria-labelledby="titulo-automatizacion"
      className="franja-chats relative my-16 scroll-mt-24 px-5 py-28 md:my-24 md:px-10 md:py-36"
    >
      <div
        className="franja-chats-rejilla pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mono inline-flex items-center gap-3 rounded-full border border-[#25d366]/40 bg-[#25d366]/10 px-4 py-1.5 text-xs tracking-widest text-[#7ef0a8] uppercase">
            <span className="logo-m text-sm normal-case" aria-hidden="true">
              {"<M/>"}
            </span>
            Automatización de chats con IA
          </p>
          <h2
            id="titulo-automatizacion"
            className="display mt-6 max-w-[16ch] text-[clamp(2.3rem,5.5vw,4.4rem)]"
          >
            Tu WhatsApp atiende solo, las 24 horas.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--estrella-70)] md:text-lg">
            Un asistente con inteligencia artificial que responde a tus clientes
            como una persona, con tus precios, tu stock y tus horarios. Vos
            actualizás todo desde tu celular y él se encarga de contestar.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {puntos.map(({ Icono, texto }) => (
              <li
                key={texto}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-snug text-[var(--estrella)]"
              >
                <Icono
                  className="mt-0.5 size-4 shrink-0 text-[#25d366]"
                  aria-hidden="true"
                />
                {texto}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={rutaAutomatizacion}
              className="boton-orbita inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-semibold"
            >
              Ver cómo funciona
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
            <a
              href={linkWhatsappCon(mensajeDemoGratis)}
              target="_blank"
              rel="noopener noreferrer"
              className="boton-fantasma inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-base font-medium"
            >
              Pedí tu demo gratis
              <span className="sr-only">(se abre WhatsApp)</span>
            </a>
          </div>
          <p className="mono mt-6 text-xs text-[var(--estrella-45)]">
            Planes desde USD 35 por mes · sin permanencia mínima
          </p>
        </div>
        <ChatDemo animado={false} cantidad={4} className="max-w-[360px]" />
      </div>
    </section>
  )
}
