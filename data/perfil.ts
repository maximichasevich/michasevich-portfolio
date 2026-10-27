import { sitios } from "@/config/sitios"

/**
 * Datos personales y textos del portfolio.
 */

export const perfil = {
  nombre: "Maximiliano Michasevich",
  nombreCorto: "Maxi",
  /** URL pública del sitio: se define en config/sitios.ts. */
  url: sitios.portfolio,
  descripcion:
    "Diseño web en Montevideo y todo Uruguay: páginas web a medida, landing pages, tiendas online y turnos online. Rápidas, en tu celular y listas para Google.",
  rol: "Desarrollador y diseñador web",
  ciudad: "Montevideo, Uruguay",
  email: "maximilianomichasevich0@gmail.com",
  /** WhatsApp con código de país y sin espacios ni "+". */
  whatsapp: "59896962132",
  /** El mismo número, como se muestra en la página. */
  telefono: "+598 96 962 132",
  mensajeWhatsapp:
    "Hola Maxi, vi tu portfolio y quiero una página web para mi negocio.",
  formacion: [
    "Curso de Programación de 3 años (ITS Arias Balpardas)",
    "Bachillerato en Diseño Web",
  ],
}

export function linkWhatsapp() {
  const texto = encodeURIComponent(perfil.mensajeWhatsapp)
  return perfil.whatsapp
    ? `https://wa.me/${perfil.whatsapp}?text=${texto}`
    : `https://wa.me/?text=${texto}`
}

/** Enlace de WhatsApp con un mensaje ya escrito (por ejemplo, el paquete elegido). */
export function linkWhatsappCon(mensaje: string) {
  const texto = encodeURIComponent(mensaje)
  return perfil.whatsapp
    ? `https://wa.me/${perfil.whatsapp}?text=${texto}`
    : `https://wa.me/?text=${texto}`
}

export function linkEmail(asunto = "Quiero una página web") {
  return `mailto:${perfil.email}?subject=${encodeURIComponent(asunto)}`
}

export type Servicio = {
  titulo: string
  /** Explicación para alguien que no sabe de tecnología. */
  descripcion: string
  /** Lo que el cliente se lleva, en concreto. */
  incluye: string[]
}

export const servicios: Servicio[] = [
  {
    titulo: "Sitios web para negocios",
    descripcion:
      "La página que aparece cuando alguien busca tu negocio en Google. Muestra qué hacés, dónde estás y cómo contactarte, sin vueltas.",
    incluye: ["Diseño a medida", "Botón de WhatsApp", "Mapa y horarios"],
  },
  {
    titulo: "Landing pages",
    descripcion:
      "Una sola página pensada para convencer: para lanzar un servicio, un evento o mostrarte como profesional con tu propio estilo.",
    incluye: [
      "Una idea, un mensaje",
      "Formulario de contacto",
      "Lista en días",
    ],
  },
  {
    titulo: "Tiendas online",
    descripcion:
      "Vendé las 24 horas. Catálogo, carrito y cobro con Mercado Pago o tarjeta. Vos cargás los productos desde un panel simple.",
    incluye: [
      "Pagos con Mercado Pago",
      "Panel para cargar productos",
      "Envíos",
    ],
  },
]

export type Paso = {
  titulo: string
  descripcion: string
  duracion: string
}

export const proceso: Paso[] = [
  {
    titulo: "Reunión",
    descripcion:
      "Charlamos media hora, por videollamada o un café. Me contás tu negocio, a quién le vendés y qué querés lograr. Salís con un presupuesto claro.",
    duracion: "1 día",
  },
  {
    titulo: "Diseño",
    descripcion:
      "Te muestro cómo se va a ver la página antes de programar una sola línea. Ajustamos juntos hasta que digas “es esa”.",
    duracion: "1 semana",
  },
  {
    titulo: "Desarrollo",
    descripcion:
      "Construyo la página de verdad: rápida, segura y perfecta en el celular. Te mando avances para que no haya sorpresas.",
    duracion: "1 a 3 semanas",
  },
  {
    titulo: "Entrega",
    descripcion:
      "La publico en tu dominio, te enseño a usarla y me quedo cerca el primer mes por si necesitás cambios.",
    duracion: "1 día + soporte",
  },
]

export type Razon = {
  titulo: string
  descripcion: string
}

/** Por qué trabajar conmigo: argumentos en lenguaje de cliente. */
export const razones: Razon[] = [
  {
    titulo: "Hablamos claro",
    descripcion:
      "Nada de jerga técnica. Te explico cada decisión en palabras simples y vos decidís con la información completa.",
  },
  {
    titulo: "La página es tuya",
    descripcion:
      "Dominio, hosting y código quedan a tu nombre. Si mañana querés trabajar con otra persona, te llevás todo.",
  },
  {
    titulo: "Rápida de verdad",
    descripcion:
      "Optimizo cada imagen y cada línea para que cargue en segundos, incluso con datos móviles.",
  },
  {
    titulo: "Un mes de soporte",
    descripcion:
      "Después de entregar me quedo cerca. Cambios chicos, dudas y ajustes del primer mes van incluidos.",
  },
]

export type Pregunta = {
  pregunta: string
  respuesta: string
}

export const preguntas: Pregunta[] = [
  {
    pregunta: "¿Cuánto cuesta una página web?",
    respuesta:
      "Hay tres paquetes: una página de una sección desde 150 dólares, un sitio institucional desde 300 y una tienda online desde 500. En la primera charla te doy un presupuesto cerrado según lo que necesites, sin sorpresas después. Dominio y alojamiento van aparte.",
  },
  {
    pregunta: "¿Trabajás solo en Montevideo?",
    respuesta:
      "Trabajo desde el Cerro, en Montevideo, pero hago diseño web para negocios de todo Uruguay: Canelones, Maldonado, Punta del Este, Colonia, Salto y el interior. Las reuniones son por videollamada o, si estás en Montevideo, en persona.",
  },
  {
    pregunta: "¿Mi página va a aparecer en Google?",
    respuesta:
      "Sí. Cada página sale con lo necesario para el posicionamiento en buscadores (SEO): títulos y descripciones pensados para lo que busca tu cliente, carga rápida, versión para celular y mapa del sitio para que Google la encuentre.",
  },
  {
    pregunta: "¿Cuánto tarda?",
    respuesta:
      "Una página de presentación está lista en una o dos semanas. Un sitio completo o una tienda online, entre tres y cinco semanas. Te doy la fecha de entrega antes de empezar.",
  },
  {
    pregunta: "No sé nada de tecnología, ¿es un problema?",
    respuesta:
      "Para nada. Vos me contás tu negocio y yo me encargo de todo lo técnico: dominio, hosting, correo, Google. Al final te enseño a usar lo que necesites en una videollamada.",
  },
  {
    pregunta: "¿Puedo cambiar textos y fotos después yo mismo?",
    respuesta:
      "Sí. Si lo necesitás, agrego un panel simple para que edites textos, fotos y productos sin tocar código. Y si preferís no ocuparte, me lo pedís y lo cambio yo.",
  },
  {
    pregunta: "¿Qué pasa si quiero cambios después de la entrega?",
    respuesta:
      "Los ajustes del primer mes están incluidos. Después, podés pedirme cambios puntuales cuando los necesites o acordar un mantenimiento mensual.",
  },
]
