import type { Metadata } from "next"
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  Check,
  Clock,
  Dumbbell,
  Gift,
  HandHelping,
  Info,
  LayoutDashboard,
  Mail,
  MessageCircle,
  Scissors,
  Shirt,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
  UtensilsCrossed,
  Wrench,
} from "lucide-react"

import { ChatDemo } from "@/components/automatizacion/chat-demo"
import { Migas, Preguntas, Relacionados } from "@/components/paginas/bloques"
import { DatosEstructurados } from "@/components/paginas/datos-estructurados"
import { Marco } from "@/components/paginas/marco"
import { BorderBeam } from "@/components/ui/border-beam"
import { ShineBorder } from "@/components/ui/shine-border"
import {
  beneficios,
  condicionesPlanes,
  emailAutomatizacion,
  incluye,
  mensajeAutomatizacion,
  mensajeDemoGratis,
  mensajePlan,
  notaPlanes,
  pasos,
  planes,
  preguntasAutomatizacion,
  rubros,
  rutaAutomatizacion,
  seoAutomatizacion,
  telefonoAutomatizacion,
  type Plan,
} from "@/data/automatizacion"
import { linkWhatsappCon, perfil } from "@/data/perfil"
import { esquemaMigas, esquemaPreguntas, idNegocio } from "@/lib/schema"
import { cn } from "@/lib/utils"

/**
 * Página de la línea "Automatización de chats con inteligencia artificial"
 * (asistentes de WhatsApp). Los textos y precios están en
 * data/automatizacion.ts.
 */
const ruta = rutaAutomatizacion
const nombre = "Automatización de chats"
const { titulo, descripcion } = seoAutomatizacion

export const metadata: Metadata = {
  title: { absolute: titulo },
  description: descripcion,
  keywords: [
    "asistente de WhatsApp",
    "bot de WhatsApp",
    "chatbot WhatsApp Uruguay",
    "automatización de WhatsApp",
    "WhatsApp con inteligencia artificial",
    "atención automática WhatsApp Montevideo",
  ],
  alternates: { canonical: ruta },
  openGraph: { url: ruta, title: titulo, description: descripcion },
}

const iconosBeneficios = [
  UserRoundCheck,
  Clock,
  BadgeCheck,
  CalendarCheck,
  Sparkles,
]
const iconosRubros = [
  Scissors,
  UtensilsCrossed,
  Shirt,
  Building2,
  Stethoscope,
  Dumbbell,
  Wrench,
]
const iconosIncluye = [LayoutDashboard, ShieldCheck, HandHelping]

const linkInfo = linkWhatsappCon(mensajeAutomatizacion)

export default function AutomatizacionDeChats() {
  const url = `${perfil.url}${ruta}`
  const grafo = [
    {
      "@type": "Service",
      "@id": `${url}/#servicio`,
      name: "Asistente de WhatsApp con inteligencia artificial",
      alternateName: "Automatización de chats",
      description: descripcion,
      url,
      serviceType: "Automatización de chats con inteligencia artificial",
      provider: { "@id": idNegocio },
      areaServed: { "@type": "Country", name: "Uruguay" },
      audience: { "@type": "BusinessAudience", name: "Negocios y empresas" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Planes del asistente de WhatsApp",
        itemListElement: planes.map((p) => ({
          "@type": "Offer",
          name: `Plan ${p.nombre}`,
          description: `${p.conversaciones}. ${p.principales.join(". ")}.`,
          priceCurrency: "USD",
          priceSpecification: [
            {
              "@type": "UnitPriceSpecification",
              ...(p.desde ? { minPrice: p.mensual } : { price: p.mensual }),
              priceCurrency: "USD",
              unitText: "mes",
              valueAddedTaxIncluded: false,
            },
            {
              "@type": "PriceSpecification",
              name: "Instalación (pago único)",
              ...(p.desde
                ? { minPrice: p.instalacion }
                : { price: p.instalacion }),
              priceCurrency: "USD",
              valueAddedTaxIncluded: false,
            },
          ],
        })),
      },
    },
    esquemaPreguntas(preguntasAutomatizacion, ruta),
    esquemaMigas([{ nombre, ruta }]),
  ]

  return (
    <Marco>
      <DatosEstructurados grafo={grafo} />
      <Migas
        items={[
          { nombre: "Servicios", ruta: "/#lineas" },
          { nombre, ruta },
        ]}
      />

      {/* 1 y 2 · Encabezado con la demo animada. */}
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <p className="etiqueta-hud mb-4">
            Servicio · Automatización de chats con IA
          </p>
          <h1 className="display brillo max-w-[16ch] text-[clamp(2.3rem,5.5vw,4.2rem)]">
            Tu WhatsApp atiende solo, las{" "}
            <span className="degradado">24 horas</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--estrella-70)] md:text-xl">
            Un asistente con inteligencia artificial (IA) que responde a tus
            clientes como una persona: precios, stock, horarios, turnos y
            pedidos. Vos dejás de estar pendiente del celular y no se te escapa
            ninguna consulta.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BotonWhatsapp href={linkInfo}>
              Escribime por WhatsApp
            </BotonWhatsapp>
            <a
              href="#planes"
              className="boton-fantasma inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-base font-medium"
            >
              Ver planes y precios
            </a>
          </div>
          <p className="mono mt-6 text-xs text-[var(--estrella-45)]">
            Desde USD 35 por mes · Demo gratis con los datos de tu negocio
          </p>
        </div>
        <ChatDemo />
      </div>

      {/* 3 · Beneficios. */}
      <Seccion
        id="beneficios"
        etiqueta="Beneficios"
        titulo="Lo que gana tu negocio"
      >
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b, i) => {
            const Icono = iconosBeneficios[i % iconosBeneficios.length]
            return (
              <li key={b.titulo} className="vidrio rounded-3xl p-6 md:p-7">
                <Icono
                  className="size-6 text-[var(--cian)]"
                  aria-hidden="true"
                />
                <h3 className="display-md mt-4 text-xl">{b.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--estrella-70)] md:text-base">
                  {b.texto}
                </p>
              </li>
            )
          })}
        </ul>
      </Seccion>

      {/* 4 · Cómo funciona. */}
      <Seccion
        id="como-funciona"
        etiqueta="Cómo funciona"
        titulo="En tres pasos, sin que toques nada técnico"
      >
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {pasos.map((p, i) => (
            <li key={p.titulo} className="hud relative rounded-3xl p-6 md:p-7">
              <span className="mono flex size-10 items-center justify-center rounded-full border border-[var(--cian)]/50 text-sm text-[var(--cian)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display-md mt-5 text-xl">{p.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--estrella-70)] md:text-base">
                {p.texto}
              </p>
            </li>
          ))}
        </ol>
      </Seccion>

      {/* 5 · Rubros. */}
      <Seccion
        id="rubros"
        etiqueta="Rubros"
        titulo="Para negocios que reciben muchas consultas por WhatsApp"
      >
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {rubros.map((r, i) => {
            const Icono = iconosRubros[i % iconosRubros.length]
            return (
              <li
                key={r.nombre}
                className="vidrio flex gap-4 rounded-2xl px-5 py-4"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--cian)]/20 to-[var(--violeta)]/30 text-[var(--cian)] ring-1 ring-[var(--borde)]">
                  <Icono className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="display-md block text-base">{r.nombre}</span>
                  <span className="mt-1 block text-sm leading-snug text-[var(--estrella-70)]">
                    {r.ejemplo}
                  </span>
                </span>
              </li>
            )
          })}
        </ul>
      </Seccion>

      {/* 6 · Qué incluye. */}
      <Seccion
        id="incluye"
        etiqueta="Qué incluye"
        titulo="No te dejo solo con el asistente"
      >
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {incluye.map((it, i) => {
            const Icono = iconosIncluye[i % iconosIncluye.length]
            return (
              <li key={it.titulo} className="vidrio rounded-3xl p-6 md:p-7">
                <Icono
                  className="size-6 text-[var(--cian)]"
                  aria-hidden="true"
                />
                <h3 className="display-md mt-4 text-xl">{it.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--estrella-70)] md:text-base">
                  {it.texto}
                </p>
              </li>
            )
          })}
        </ul>
      </Seccion>

      {/* 7 · Planes y precios. */}
      <Seccion
        id="planes"
        etiqueta="Planes y precios"
        titulo="Elegí el plan según cuántas consultas recibís"
      >
        <ul className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {planes.map((p, i) => (
            <li
              key={p.id}
              className={cn("min-w-0", p.destacado && "lg:-translate-y-4")}
            >
              <TarjetaPlan plan={p} numero={i + 1} />
            </li>
          ))}
        </ul>
        <p className="mt-8 flex gap-3 text-sm leading-relaxed text-[var(--estrella)]">
          <Info
            className="mt-0.5 size-4 shrink-0 text-[var(--cian)]"
            aria-hidden="true"
          />
          {notaPlanes}
        </p>
        <ul className="mt-4 flex flex-col gap-2 pl-7 text-sm leading-relaxed text-[var(--estrella-70)]">
          {condicionesPlanes.map((c) => (
            <li key={c} className="list-disc">
              {c}
            </li>
          ))}
        </ul>
      </Seccion>

      {/* 8 · Demo gratis. */}
      <section
        aria-labelledby="titulo-demo"
        className="vidrio mt-24 grid items-center gap-6 rounded-3xl p-8 md:grid-cols-[auto_1fr_auto] md:p-10"
      >
        <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#25d366]/25 to-[var(--violeta)]/30 text-[#25d366] ring-1 ring-[var(--borde)]">
          <Gift className="size-7" aria-hidden="true" />
        </span>
        <div>
          <h2 id="titulo-demo" className="display-md text-2xl md:text-3xl">
            Pedí tu demo gratis
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--estrella-70)]">
            Te armo una prueba con la información de tu negocio para que veas
            cómo le respondería a tus clientes. Sin compromiso: si no te sirve,
            no pagás nada.
          </p>
        </div>
        <BotonWhatsapp href={linkWhatsappCon(mensajeDemoGratis)}>
          Quiero mi demo
        </BotonWhatsapp>
      </section>

      {/* 9 · Preguntas frecuentes. */}
      <Preguntas lista={preguntasAutomatizacion} />

      {/* 10 · Llamado final. */}
      <section
        aria-labelledby="titulo-llamado"
        className="hud relative mt-20 overflow-hidden rounded-3xl p-8 md:p-12"
      >
        <h2
          id="titulo-llamado"
          className="display text-[clamp(2rem,5vw,3.4rem)]"
        >
          ¿Lo ponemos a atender tu WhatsApp?
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--estrella-70)] md:text-lg">
          Contame de tu negocio y te respondo en el día. Si arrancamos esta
          semana, en 2 o 3 días hábiles lo tenés funcionando.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <BotonWhatsapp href={linkInfo}>
            WhatsApp {telefonoAutomatizacion}
          </BotonWhatsapp>
          <a
            href={`mailto:${emailAutomatizacion}?subject=${encodeURIComponent("Asistente de WhatsApp para mi negocio")}`}
            className="boton-fantasma inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-medium break-all"
          >
            <Mail className="size-5 shrink-0" aria-hidden="true" />
            {emailAutomatizacion}
          </a>
        </div>
        <BorderBeam
          size={220}
          duration={9}
          colorFrom="#25d366"
          colorTo="#7c5cff"
        />
      </section>

      <Relacionados rutas={["/sitios-web", "/turnos-online", "/barberias"]} />
    </Marco>
  )
}

function Seccion({
  id,
  etiqueta,
  titulo,
  children,
}: {
  id: string
  etiqueta: string
  titulo: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`titulo-${id}`}
      className="mt-24 scroll-mt-28"
    >
      <p className="etiqueta-hud mb-4">{etiqueta}</p>
      <h2
        id={`titulo-${id}`}
        className="display-md max-w-[24ch] text-3xl md:text-4xl"
      >
        {titulo}
      </h2>
      {children}
    </section>
  )
}

function BotonWhatsapp({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="boton-orbita inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-semibold"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      {children}
      <span className="sr-only">(se abre WhatsApp)</span>
    </a>
  )
}

function TarjetaPlan({ plan: p, numero }: { plan: Plan; numero: number }) {
  return (
    <article
      aria-labelledby={`plan-${p.id}`}
      className={cn(
        "hud relative flex h-full flex-col overflow-hidden rounded-3xl p-7 md:p-8",
        p.destacado && "shadow-[0_30px_90px_-30px_rgba(57,213,255,0.55)]"
      )}
      // Mismo truco que las tarjetas de precios de la portada: .hud define su
      // fondo fuera de las capas de Tailwind.
      style={
        p.destacado
          ? {
              background:
                "linear-gradient(180deg, rgba(57,213,255,0.10), rgba(124,92,255,0.06)), rgba(12,15,34,0.75)",
            }
          : undefined
      }
    >
      {p.destacado && (
        <ShineBorder
          borderWidth={1.5}
          duration={10}
          shineColor={["#39d5ff", "#7c5cff", "#f5f7ff"]}
          className="rounded-3xl"
        />
      )}
      <div className="flex items-center justify-between gap-3">
        <span className="mono text-[11px] tracking-widest text-[var(--estrella-45)]">
          PLAN_{String(numero).padStart(2, "0")}
        </span>
        {p.destacado && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--cian)] to-[var(--violeta)] px-3 py-1 text-xs font-semibold text-[var(--noche)]">
            <Sparkles className="size-3.5" aria-hidden="true" />
            El más elegido
          </span>
        )}
      </div>

      <h3 id={`plan-${p.id}`} className="display-md mt-5 text-2xl md:text-3xl">
        {p.nombre}
      </h3>
      <p className="mono mt-2 text-xs text-[var(--cian)]">{p.lema}</p>
      <p className="mt-3 text-sm text-[var(--estrella-70)]">{p.para}</p>

      {/* Precio mensual e instalación. */}
      <div className="mt-6 border-y border-[var(--borde)] py-5">
        <p className="flex items-baseline gap-2">
          {p.desde && (
            <span className="mono text-xs tracking-widest text-[var(--estrella-45)] uppercase">
              Desde
            </span>
          )}
          <span className="mono text-sm text-[var(--estrella-70)]">USD</span>
          <span
            className={cn(
              "display text-[2.6rem] md:text-5xl lg:text-[2.6rem] xl:text-5xl",
              p.destacado && "degradado"
            )}
          >
            {p.mensual}
          </span>
          <span className="mono text-sm text-[var(--estrella-70)]">
            por mes
          </span>
        </p>
        <p className="mt-2 text-sm text-[var(--estrella-70)]">
          Instalación (pago único): {p.desde ? "desde " : ""}USD {p.instalacion}
        </p>
      </div>

      <dl className="mt-5 flex flex-col gap-2 text-sm">
        <div>
          <dt className="sr-only">Conversaciones incluidas</dt>
          <dd className="font-semibold text-[var(--estrella)]">
            {p.conversaciones}
          </dd>
        </div>
        <div>
          <dt className="sr-only">Números de WhatsApp</dt>
          <dd className="text-[var(--estrella-70)]">{p.bots}</dd>
        </div>
      </dl>

      <ul className="mt-5 flex flex-1 flex-col gap-3" aria-label="Incluye">
        {p.principales.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-snug">
            <Check
              className="mt-0.5 size-4 shrink-0 text-[var(--cian)]"
              aria-hidden="true"
            />
            <span className="text-[var(--estrella-70)]">{item}</span>
          </li>
        ))}
        <li className="flex gap-3 text-sm leading-snug">
          <Check
            className="mt-0.5 size-4 shrink-0 text-[var(--cian)]"
            aria-hidden="true"
          />
          <span className="text-[var(--estrella-70)]">{p.soporte}</span>
        </li>
      </ul>

      <a
        href={linkWhatsappCon(mensajePlan(p))}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold",
          p.destacado ? "boton-orbita" : "boton-fantasma"
        )}
      >
        Quiero este plan
        <ArrowUpRight className="size-4" aria-hidden="true" />
        <span className="sr-only">({p.nombre}, se abre WhatsApp)</span>
      </a>
    </article>
  )
}
