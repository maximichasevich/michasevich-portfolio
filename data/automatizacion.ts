import type { Pregunta } from "@/data/perfil"

/**
 * Textos y precios de la línea "Automatización de chats con inteligencia
 * artificial" (asistentes de WhatsApp). Los usan la página
 * /automatizacion-de-chats y la sección de la portada (seccion-bots.tsx).
 *
 * Los planes salen de PLANES-Y-PRECIOS.md del panel (versión noviembre 2026,
 * con límites por plan y logros). Si cambiás
 * un precio allá, cambialo también acá: el diseño se actualiza solo.
 */

export const rutaAutomatizacion = "/automatizacion-de-chats"

/** Correo de contacto para esta línea de servicio. */
export const emailAutomatizacion = "contacto@michasevich.com"

/** Número tal como se muestra en la página. */
export const telefonoAutomatizacion = "096 962 132"

/** Mensaje ya escrito para el botón de WhatsApp. */
export const mensajeAutomatizacion =
  "Hola, quiero información sobre el asistente de WhatsApp para mi negocio"

export const mensajeDemoGratis =
  "Hola, quiero pedir la demo gratis del asistente de WhatsApp para mi negocio"

export const seoAutomatizacion = {
  /** Título para Google y la pestaña (hasta 60 caracteres aprox.). */
  titulo: "Asistente de WhatsApp con inteligencia artificial · Uruguay",
  /** Descripción para Google (hasta 155 caracteres aprox.). */
  descripcion:
    "Tu WhatsApp atiende solo, las 24 horas: responde precios, stock y horarios, toma turnos y junta clientes. Para negocios de Uruguay, desde USD 35 por mes.",
}

export type Plan = {
  id: string
  nombre: string
  /** Frase corta del plan. */
  lema: string
  para: string
  /** Precio mensual en dólares. */
  mensual: number
  /** Instalación (pago único) en dólares. */
  instalacion: number
  /** true si el precio es "desde" (plan Empresa). */
  desde?: boolean
  conversaciones: string
  bots: string
  soporte: string
  principales: string[]
  destacado?: boolean
}

export const planes: Plan[] = [
  {
    id: "esencial",
    nombre: "Esencial",
    lema: "Tu negocio atiende solo, las 24 horas",
    para: "Para comercios de barrio.",
    mensual: 35,
    instalacion: 120,
    conversaciones: "Hasta 500 conversaciones por mes",
    bots: "1 número de WhatsApp",
    soporte: "Soporte por WhatsApp, respuesta en menos de 24 h hábiles",
    principales: [
      "Responde precios, productos, horarios, ubicación y medios de pago",
      "Bienvenida y respuestas fuera de horario",
      "Junta los datos de los clientes interesados",
      "Te pasa la charla cuando hace falta una persona",
      "Portal propio: conversaciones, contactos, estadísticas básicas y logros",
      "Actualizás stock, precios y horarios vos mismo, sin límite",
      "Hasta 2 cambios por mes hechos por mí",
    ],
  },
  {
    id: "profesional",
    nombre: "Profesional",
    lema: "Tu mejor vendedor, trabajando por WhatsApp",
    para: "Para negocios con movimiento.",
    mensual: 79,
    instalacion: 250,
    conversaciones: "Hasta 2.000 conversaciones por mes",
    bots: "1 número de WhatsApp",
    soporte: "Soporte en menos de 8 h hábiles, de lunes a sábado",
    principales: [
      "Todo lo del plan Esencial",
      "Toma turnos o pedidos, que confirmás desde tu portal",
      "Catálogo completo importado desde una planilla",
      "Más memoria: entiende mejor las charlas largas",
      "Estadísticas completas y reporte mensual con recomendaciones",
      "Hasta 6 cambios por mes hechos por mí",
    ],
    destacado: true,
  },
  {
    id: "empresa",
    nombre: "Empresa",
    lema: "Atención profesional a gran escala",
    para: "Para empresas medianas o con sucursales.",
    mensual: 220,
    instalacion: 500,
    desde: true,
    conversaciones: "Hasta 8.000 conversaciones por mes",
    bots: "Hasta 3 números (por sucursal o por área)",
    soporte: "Urgencias en menos de 2 h, de lunes a sábado de 9 a 21",
    principales: [
      "Todo lo del plan Profesional",
      "Inteligencia artificial avanzada para reclamos y presupuestos",
      "Cambios hechos por mí ilimitados (dentro de lo razonable)",
      "Reunión mensual de seguimiento por videollamada",
      "Acceso al portal para varias personas de la empresa",
    ],
  },
]

export const notaPlanes =
  "Precios en dólares, sin impuestos. Los cargos de WhatsApp (Meta) se pagan aparte."

export const condicionesPlanes = [
  "Una conversación son todos los mensajes de una misma persona con el asistente en 24 horas.",
  "Si un mes te pasás de las conversaciones del plan, el asistente no se corta: se suma un paquete de 500 más por USD 10.",
  "Sin permanencia mínima: cancelás avisando con 30 días. La instalación no se reembolsa.",
  "Pagando el año por adelantado, pagás 10 meses y usás 12.",
  "Premiamos que crezcas: cuando tu asistente llega a 25, 100, 500 y 2.000 conversaciones, desbloqueás de 10% a 50% de descuento en el primer mes del plan siguiente.",
  "¿Más de 8.000 conversaciones o conexión con tu sistema de stock o facturación? Lo cotizamos aparte.",
]

/** Mensaje de WhatsApp con el plan elegido. */
export function mensajePlan(p: Plan) {
  return `Hola, me interesa el plan ${p.nombre} del asistente de WhatsApp para mi negocio. ¿Me contás más?`
}

/** Mensajes de la demo animada (negocio ficticio). */
export type MensajeChat = {
  de: "cliente" | "asistente"
  texto: string
  hora: string
}

export const negocioDemo = "Barbería La Navaja"

export const chatDemo: MensajeChat[] = [
  {
    de: "cliente",
    texto: "Hola! cuánto sale corte y barba?",
    hora: "21:47",
  },
  {
    de: "asistente",
    texto:
      "¡Hola! Corte + barba sale $650 y solo corte, $450. ¿Querés que te reserve un turno?",
    hora: "21:47",
  },
  {
    de: "cliente",
    texto: "tenés la cera mate? la que compré la otra vez",
    hora: "21:48",
  },
  {
    de: "asistente",
    texto:
      "Sí, nos quedan unidades de la cera mate, a $390. Si querés te la separamos para cuando vengas.",
    hora: "21:48",
  },
  {
    de: "cliente",
    texto: "dale. tenés turno mañana de tarde?",
    hora: "21:48",
  },
  {
    de: "asistente",
    texto:
      "Mañana tengo libre a las 16:30 y a las 18:00. ¿Cuál te queda mejor? Pasame tu nombre así lo anoto.",
    hora: "21:49",
  },
  {
    de: "cliente",
    texto: "18 perfecto, soy Martín",
    hora: "21:49",
  },
  {
    de: "asistente",
    texto:
      "Listo, Martín. Te anoté mañana a las 18:00 para corte + barba, con la cera separada. Cualquier cambio, escribinos por acá.",
    hora: "21:49",
  },
]

export const beneficios = [
  {
    titulo: "No perdés clientes",
    texto:
      "Responde al instante, también de noche, los domingos y cuando estás atendiendo. Nadie se queda esperando y se va con otro.",
  },
  {
    titulo: "Ganás tiempo",
    texto:
      "Dejás de contestar cincuenta veces por día “¿a qué hora abren?” o “¿cuánto sale?”. Vos te ocupás de lo que importa.",
  },
  {
    titulo: "Juntás contactos interesados",
    texto:
      "Anota el nombre y qué necesita cada persona que consulta, para que puedas volver a escribirle y cerrar la venta.",
  },
  {
    titulo: "Tomás turnos y pedidos",
    texto:
      "Ofrece horarios, anota pedidos y te los deja listos en tu portal para que los confirmes. Desde el plan Profesional.",
  },
  {
    titulo: "Te ves profesional",
    texto:
      "Respuestas rápidas, bien escritas y con buena onda, con el tono de tu negocio: de vos o de usted, con emojis o sin.",
  },
]

export const pasos = [
  {
    titulo: "Me pasás la información de tu negocio",
    texto:
      "Productos o servicios con precios, horarios, medios de pago y las preguntas que más te hacen. Una foto del menú o una planilla alcanza.",
  },
  {
    titulo: "Armo y pruebo tu asistente",
    texto:
      "Lo configuro con tus datos y tu tono, y lo probamos juntos hasta que responda como vos querés.",
  },
  {
    titulo: "Queda funcionando en tu WhatsApp",
    texto:
      "Lo conecto a tu número y te muestro cómo usar tu portal. En general, en 2 o 3 días hábiles desde que tengo tu información.",
  },
]

export const rubros = [
  {
    nombre: "Barberías y peluquerías",
    ejemplo: "Turnos, precios de cada servicio y horarios.",
  },
  {
    nombre: "Hamburgueserías y rotiserías",
    ejemplo: "Menú, precios, pedidos, demoras y zona de envío.",
  },
  {
    nombre: "Tiendas de ropa",
    ejemplo: "Talles, stock, envíos y medios de pago.",
  },
  {
    nombre: "Inmobiliarias",
    ejemplo: "Propiedades disponibles, visitas y datos de interesados.",
  },
  {
    nombre: "Consultorios y veterinarias",
    ejemplo: "Turnos, horarios y preguntas frecuentes.",
  },
  {
    nombre: "Gimnasios",
    ejemplo: "Horarios de clases, cuotas y cómo inscribirse.",
  },
  {
    nombre: "Servicio técnico y talleres",
    ejemplo: "Presupuestos orientativos y turnos para revisar equipos.",
  },
]

export const incluye = [
  {
    titulo: "Portal propio",
    texto:
      "Ves todas las conversaciones y los contactos interesados, y actualizás stock (“hay / no hay”), precios, horarios y promociones desde el celular. El asistente se entera al instante. También ves cuánto usaste de tu plan, cuántas horas te ahorró y tus logros.",
  },
  {
    titulo: "Monitoreo permanente",
    texto:
      "Lo vigilo todo el tiempo. Si un proveedor falla, el sistema pasa solo a otro y a mí me llega un aviso para resolverlo.",
  },
  {
    titulo: "Una persona cuando hace falta",
    texto:
      "Si no sabe algo o el cliente pide hablar con alguien, lo dice con claridad y te pasa la charla a vos.",
  },
]

export const preguntasAutomatizacion: Pregunta[] = [
  {
    pregunta: "¿Responde como una persona?",
    respuesta:
      "Sí. Entiende lo que le preguntan aunque esté mal escrito o con abreviaturas, y responde con frases naturales, con el tono que elijas. No son respuestas fijas como las del WhatsApp Business común.",
  },
  {
    pregunta: "¿Qué pasa si no sabe algo?",
    respuesta:
      "Solo responde con la información de tu negocio. Si le preguntan algo que no sabe, no inventa: lo dice y te pasa la conversación para que sigas vos. Además, ves todas las charlas desde tu portal.",
  },
  {
    pregunta: "¿Puedo cambiar precios y stock yo mismo?",
    respuesta:
      "Sí, desde tu portal en el celular y sin límite: stock con un botón de “hay / no hay”, precios, productos, horarios, cierres especiales y promociones. El asistente responde con la información nueva al instante.",
  },
  {
    pregunta: "¿Necesito un número nuevo?",
    respuesta:
      "Necesitás un número para el asistente: puede ser un chip nuevo o un número que ya no uses en la app común de WhatsApp. Te ayudo a crear la cuenta de Meta Business por videollamada.",
  },
  {
    pregunta: "¿Qué pasa si se cae?",
    respuesta:
      "Está monitoreado todo el tiempo. Si un proveedor de inteligencia artificial falla, el sistema pasa solo a otro de respaldo, y a mí me llega una alerta para resolverlo, en general antes de que lo notes.",
  },
  {
    pregunta: "¿Puedo cancelar cuando quiera?",
    respuesta:
      "Sí. No hay permanencia mínima: avisás con 30 días de anticipación y listo. Lo único que no se devuelve es la instalación. Tus datos son tuyos.",
  },
]

/** Charlas cortas (negocios ficticios) del carrusel de la portada. */
export const charlasPortada = [
  {
    negocio: "Hamburguesería",
    hora: "23:12",
    cliente: "hacen envíos a Pocitos?",
    asistente:
      "¡Sí! Llegamos a Pocitos en 35 a 45 minutos y el envío sale $90. ¿Te paso el menú?",
  },
  {
    negocio: "Tienda de ropa",
    hora: "08:05",
    cliente: "tenés el buzo negro en M?",
    asistente: "Sí, nos queda en M y en L, a $1.890. ¿Querés que te lo reserve?",
  },
  {
    negocio: "Veterinaria",
    hora: "21:40",
    cliente: "atienden el sábado?",
    asistente:
      "Los sábados atendemos de 9 a 13. ¿Te agendo un turno para tu mascota?",
  },
  {
    negocio: "Gimnasio",
    hora: "06:18",
    cliente: "a qué hora es funcional?",
    asistente:
      "Funcional es lunes, miércoles y viernes a las 19:00. La cuota sale $1.400 por mes.",
  },
  {
    negocio: "Inmobiliaria",
    hora: "22:57",
    cliente: "sigue disponible el apto de 2 dormitorios?",
    asistente:
      "Sí, sigue disponible. ¿Te queda bien visitarlo el jueves a las 17:00?",
  },
  {
    negocio: "Barbería",
    hora: "13:31",
    cliente: "tenés turno hoy?",
    asistente: "Hoy me queda libre a las 19:30. Pasame tu nombre y te lo anoto.",
  },
]
