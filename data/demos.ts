import type { Seccion } from "@/data/paginas"

/**
 * Textos de las páginas /ejemplos/<demo>. Las capturas, funciones y links
 * salen de `ejemplos` en data/trabajo.ts.
 *
 * REVISAR: textos nuevos (27/10/2026).
 */
export type PaginaDemo = {
  slug: string
  titulo: string
  descripcion: string
  h1: string
  bajada: string
  secciones: Seccion[]
  /** Servicio y rubro relacionados. */
  relacionados: string[]
}

export const aclaracionDemo =
  "Es un proyecto de muestra: el negocio es ficticio y no es un cliente real. Lo hice para mostrar cómo trabajo y qué se puede lograr en este rubro."

export const paginasDemo: PaginaDemo[] = [
  {
    slug: "la-espiga",
    titulo: "Ejemplo: página web para panadería · La Espiga",
    descripcion:
      "Proyecto de muestra de página web para una panadería de barrio: carta tipo pizarra, pedidos con hora de retiro y envío por WhatsApp.",
    h1: "La Espiga: ejemplo de página web para una panadería de barrio",
    bajada:
      "Una panadería de Pocitos que quiere dejar de tomar pedidos por teléfono. Público: vecinos, familias y gente mayor.",
    secciones: [
      {
        titulo: "El problema",
        parrafos: [
          "En una panadería de barrio los encargos llegan por teléfono en el peor momento: con el mostrador lleno. Se anotan a mano, se confunden cantidades y el cliente no sabe si su pedido está listo.",
        ],
      },
      {
        titulo: "La solución",
        parrafos: [
          "La página muestra la carta como una pizarra, con precios claros. El cliente arma su bolsa, elige la hora de retiro y manda el pedido por WhatsApp ya detallado. La panadería lo recibe ordenado y sin atender el teléfono.",
          "Como buena parte del público es gente mayor, tiene un botón para agrandar la letra y un indicador de si el local está abierto en ese momento.",
        ],
      },
    ],
    relacionados: ["/gastronomia", "/comercios", "/sitios-web"],
  },
  {
    slug: "estudio-faro",
    titulo: "Ejemplo: sitio web para estudio de arquitectura",
    descripcion:
      "Proyecto de muestra de sitio web para un estudio de arquitectura en Montevideo: portfolio de obras, área de clientes y agenda de reuniones.",
    h1: "Estudio Faro: ejemplo de sitio web para un estudio de arquitectura",
    bajada:
      "Un estudio que necesita transmitir nivel y confianza a clientes que invierten mucho dinero. Público: clientes de alto nivel y desarrolladores.",
    secciones: [
      {
        titulo: "El problema",
        parrafos: [
          "Un estudio de arquitectura vende confianza: el cliente necesita ver obras terminadas, entender cómo se trabaja y sentir que va a estar informado durante meses de obra.",
        ],
      },
      {
        titulo: "La solución",
        parrafos: [
          "Un sitio con estética editorial, donde cada obra tiene su ficha técnica, fotos y descripción. Incluye un área de clientes para seguir el avance de una obra y una agenda de reuniones en cinco pasos, que filtra consultas antes de la primera charla.",
        ],
      },
    ],
    relacionados: ["/sitios-web", "/landing-pages", "/comercios"],
  },
  {
    slug: "verde-tienda",
    titulo: "Ejemplo: tienda online de plantas con Mercado Pago",
    descripcion:
      "Proyecto de muestra de tienda online para un vivero: buscador, favoritos, quiz para elegir planta y compra en 4 pasos con Mercado Pago.",
    h1: "Verde Tienda: ejemplo de tienda online para un vivero",
    bajada:
      "Un vivero que quiere vender por internet a gente joven que compra desde el celular.",
    secciones: [
      {
        titulo: "El problema",
        parrafos: [
          "Vender plantas por Instagram significa responder las mismas preguntas todo el día: precio, tamaño, cuidados, envío. Y el cliente que no sabe qué planta elegir, muchas veces no compra.",
        ],
      },
      {
        titulo: "La solución",
        parrafos: [
          "Una tienda online con buscador, favoritos y cuenta de cliente. Un quiz recomienda plantas según el espacio y el tiempo de cada persona, y la compra se hace en cuatro pasos con pago por Mercado Pago y envíos por zona.",
        ],
      },
    ],
    relacionados: ["/tiendas-online", "/emprendimientos", "/comercios"],
  },
  {
    slug: "la-navaja",
    titulo: "Ejemplo: página web con turnos online para barbería",
    descripcion:
      "Proyecto de muestra de página web para una barbería: carta de servicios con precios, turnos online por barbero y seña o pago total con Mercado Pago.",
    h1: "La Navaja: ejemplo de página web con turnos online para una barbería",
    bajada:
      "Una barbería clásica de Ciudad Vieja que quiere dejar de agendar por WhatsApp y que nadie le deje el sillón vacío.",
    secciones: [
      {
        titulo: "El problema",
        parrafos: [
          "En una barbería el teléfono suena mientras estás cortando. Los turnos se arreglan con idas y vueltas por mensaje, se superponen horarios y, cuando alguien no viene, ese tiempo se pierde.",
        ],
      },
      {
        titulo: "La solución",
        parrafos: [
          "La página muestra la carta de servicios con precios y una agenda que solo ofrece horarios donde el servicio entra completo, según el horario del local y los días de cada barbero. El cliente elige servicio, barbero, día y hora en un minuto.",
          "Para confirmar el turno se paga una seña del 50 % o el total, con tarjeta, Mercado Pago, transferencia o Abitab y RedPagos. Si cancela con 24 horas o más se le devuelve todo; si no viene, la seña queda para el local. En la demo el pago es simulado y no se cobra nada.",
        ],
      },
    ],
    relacionados: ["/barberias", "/turnos-online", "/sitios-web"],
  },
]

export function buscarDemo(slug: string) {
  return paginasDemo.find((d) => d.slug === slug)
}
