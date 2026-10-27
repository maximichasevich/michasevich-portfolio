import type { Metadata } from "next"

import "./inicio.css"
import { Chispas } from "@/components/inicio/chispas"
import { Cinta } from "@/components/inicio/cinta"
import { Contacto } from "@/components/inicio/contacto"
import { ComoTrabajo } from "@/components/inicio/como-trabajo"
import { Ejemplos } from "@/components/inicio/ejemplos"
import { Faq } from "@/components/inicio/faq"
import { Hero } from "@/components/inicio/hero"
import { CursorLuz } from "@/components/inicio/interacciones"
import { Nav } from "@/components/inicio/nav"
import { Precios } from "@/components/inicio/precios"
import { Razones } from "@/components/inicio/razones"
import { Servicios } from "@/components/inicio/servicios"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { perfil, preguntas } from "@/data/perfil"
import { paquetes } from "@/data/precios"

const titulo = "Diseño web en Montevideo, Uruguay · Maximiliano Michasevich"

export const metadata: Metadata = {
  title: { absolute: titulo },
  description: perfil.descripcion,
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: titulo,
    description:
      "Páginas web a medida, landing pages y tiendas online para negocios de todo Uruguay. Diseño propio, carga rápida y listas para Google.",
  },
}

/**
 * Datos estructurados (schema.org) para Google: quién ofrece el servicio,
 * dónde, qué paquetes hay y las preguntas frecuentes. Salen de los mismos
 * archivos de datos que la página, así nunca quedan desactualizados.
 */
function datosEstructurados() {
  const url = perfil.url
  const negocio = `${url}/#negocio`
  const persona = `${url}/#persona`

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#sitio`,
        url,
        name: perfil.nombre,
        description: perfil.descripcion,
        inLanguage: "es",
        publisher: { "@id": negocio },
      },
      {
        "@type": "Person",
        "@id": persona,
        name: perfil.nombre,
        jobTitle: perfil.rol,
        url,
        email: perfil.email,
        sameAs: ["https://github.com/maximichasevich"],
        knowsAbout: [
          "Diseño web",
          "Desarrollo web",
          "Landing pages",
          "Tiendas online",
          "SEO",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Montevideo",
          addressCountry: "UY",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": negocio,
        name: `${perfil.nombre} · Diseño web`,
        description: perfil.descripcion,
        url,
        image: `${url}/opengraph-image`,
        email: perfil.email,
        telephone: `+${perfil.whatsapp}`,
        priceRange: "US$ 150 - US$ 500+",
        founder: { "@id": persona },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Montevideo",
          addressRegion: "Montevideo",
          addressCountry: "UY",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -34.9011,
          longitude: -56.1645,
        },
        areaServed: [
          { "@type": "City", name: "Montevideo" },
          { "@type": "Country", name: "Uruguay" },
        ],
        knowsLanguage: "es",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Diseño y desarrollo de páginas web",
          itemListElement: paquetes.map((p) => ({
            "@type": "Offer",
            url: `${url}/#servicios`,
            itemOffered: {
              "@type": "Service",
              name: p.detalle ? `${p.nombre} (${p.detalle})` : p.nombre,
              description: `${p.para} ${p.incluye.join(". ")}.`,
              serviceType: "Diseño web",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: p.desde,
              priceCurrency: "USD",
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#preguntas`,
        mainEntity: preguntas.map((p) => ({
          "@type": "Question",
          name: p.pregunta,
          acceptedAnswer: { "@type": "Answer", text: p.respuesta },
        })),
      },
    ],
  }
}

export default function Page() {
  return (
    <div className={"inicio min-h-svh"}>
      <script
        type="application/ld+json"
        // "<" escapado para que ningún texto pueda cerrar la etiqueta.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(datosEstructurados()).replace(/</g, "\\u003c"),
        }}
      />
      <Chispas>
        <ScrollProgress className="h-0.5 from-[#39d5ff] via-[#7c5cff] to-[#39d5ff]" />
        <CursorLuz />
        <Nav />
        <main>
          <Hero />
          <Cinta />
          <Servicios />
          <Ejemplos />
          <ComoTrabajo />
          <Precios />
          <Razones />
          <Faq />
          <Contacto />
        </main>
      </Chispas>
    </div>
  )
}
