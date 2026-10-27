import {
  perfil,
  preguntas as preguntasInicio,
  type Pregunta,
} from "@/data/perfil"
import { paquetes } from "@/data/precios"
import { turnos } from "@/data/paginas"
import { redesActivas } from "@/data/redes"

/**
 * Datos estructurados (schema.org) para Google. Cada página suma los suyos
 * y se enlazan con el negocio y la persona por su "@id".
 */
const url = perfil.url
export const idNegocio = `${url}/#negocio`
export const idPersona = `${url}/#persona`
export const idSitio = `${url}/#sitio`

const montevideo = {
  "@type": "PostalAddress",
  addressLocality: "Montevideo",
  addressRegion: "Montevideo",
  addressCountry: "UY",
}

export function esquemaPersona() {
  return {
    "@type": "Person",
    "@id": idPersona,
    name: perfil.nombre,
    jobTitle: perfil.rol,
    url: `${url}/sobre-mi`,
    email: perfil.email,
    sameAs: redesActivas.map((r) => r.url),
    worksFor: { "@id": idNegocio },
    alumniOf: [
      { "@type": "EducationalOrganization", name: "ITS Arias Balpardas" },
      { "@type": "EducationalOrganization", name: "Liceo N.º 38" },
    ],
    knowsAbout: [
      "Diseño web",
      "Desarrollo web",
      "Landing pages",
      "Tiendas online",
      "Sistemas de turnos online",
      "SEO",
    ],
    address: montevideo,
  }
}

/**
 * Negocio de servicios profesionales sin local a la calle: se informa la
 * ciudad (sin dirección) y que atiende todo Uruguay.
 */
export function esquemaNegocio() {
  const servicio = (nombre: string, desde: number, descripcion: string) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: nombre,
      description: descripcion,
      serviceType: "Diseño web",
    },
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: desde,
      priceCurrency: "USD",
    },
  })
  return {
    "@type": "ProfessionalService",
    "@id": idNegocio,
    name: `${perfil.nombre} · Diseño web`,
    description: perfil.descripcion,
    url,
    image: `${url}/opengraph-image`,
    email: perfil.email,
    telephone: `+${perfil.whatsapp}`,
    priceRange: "US$150 - US$500+",
    founder: { "@id": idPersona },
    address: montevideo,
    areaServed: [
      { "@type": "City", name: "Montevideo" },
      { "@type": "Country", name: "Uruguay" },
    ],
    sameAs: redesActivas.map((r) => r.url),
    knowsLanguage: "es",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Diseño y desarrollo de páginas web",
      itemListElement: [
        ...paquetes.map((p) =>
          servicio(
            p.detalle ? `${p.nombre} (${p.detalle})` : p.nombre,
            p.desde,
            `${p.para} ${p.incluye.join(". ")}.`
          )
        ),
        servicio(
          "Sistema de turnos online",
          turnos.desde,
          `Reserva de turnos desde el celular. Más US$${turnos.mensual} por mes de mantenimiento.`
        ),
      ],
    },
  }
}

export function esquemaSitio() {
  return {
    "@type": "WebSite",
    "@id": idSitio,
    url,
    name: perfil.nombre,
    description: perfil.descripcion,
    inLanguage: "es",
    publisher: { "@id": idNegocio },
  }
}

export function esquemaPreguntas(lista: Pregunta[], ruta: string) {
  return {
    "@type": "FAQPage",
    "@id": `${url}${ruta === "/" ? "" : ruta}/#preguntas`,
    mainEntity: lista.map((p) => ({
      "@type": "Question",
      name: p.pregunta,
      acceptedAnswer: { "@type": "Answer", text: p.respuesta },
    })),
  }
}

/** Migas de pan: Inicio › página. */
export function esquemaMigas(items: { nombre: string; ruta: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ nombre: "Inicio", ruta: "/" }, ...items].map(
      (it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.nombre,
        item: `${url}${it.ruta === "/" ? "" : it.ruta}`,
      })
    ),
  }
}

/** Datos de la portada. */
export function esquemaInicio() {
  return [
    esquemaSitio(),
    esquemaPersona(),
    esquemaNegocio(),
    esquemaPreguntas(preguntasInicio, "/"),
  ]
}

/** Texto listo para un <script type="application/ld+json">. */
export function serializar(grafo: object[]) {
  // "<" escapado para que ningún texto pueda cerrar la etiqueta.
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": grafo,
  }).replace(/</g, "\u003c")
}
