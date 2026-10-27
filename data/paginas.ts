import type { Pregunta } from "@/data/perfil"

/**
 * Páginas de servicios (/sitios-web, /tiendas-online, /landing-pages,
 * /turnos-online) y de rubros (/barberias, /comercios, /gastronomia,
 * /emprendimientos). Todas usan el mismo diseño: app/[pagina]/page.tsx.
 *
 * REVISAR: todos los textos de este archivo son nuevos (27/10/2026).
 * Cambiá lo que no suene a vos; el diseño se actualiza solo.
 */

export type Seccion = {
  titulo: string
  parrafos: string[]
  /** Links opcionales al pie de la sección (internos o a una demo). */
  enlaces?: { texto: string; href: string }[]
}

export type Pagina = {
  slug: string
  tipo: "servicio" | "rubro"
  /** Nombre corto para menús y links, por ejemplo "Tiendas online". */
  nombre: string
  /** Título para Google y la pestaña (hasta 60 caracteres). */
  titulo: string
  /** Descripción para Google (hasta 155 caracteres). */
  descripcion: string
  /** Etiqueta chica arriba del título. */
  etiqueta: string
  h1: string
  bajada: string
  secciones: Seccion[]
  incluye: string[]
  precio: {
    desde: number
    /** Qué se cobra con ese precio, por ejemplo "Landing page". */
    paquete: string
    /** Otros precios o aclaraciones. */
    notas: string[]
  }
  preguntas: Pregunta[]
  /** Rutas internas relacionadas, por ejemplo "/turnos-online". */
  relacionados: string[]
  /** Mensaje ya escrito para WhatsApp. */
  mensaje: string
}

/** Precio del sistema de turnos (no es uno de los tres paquetes). */
export const turnos = { desde: 300, mensual: 20 }

export const paginas: Pagina[] = [
  // ─── Servicios ──────────────────────────────────────────────────────
  {
    slug: "sitios-web",
    tipo: "servicio",
    nombre: "Sitios web para negocios",
    titulo: "Diseño de sitios web para negocios en Montevideo",
    descripcion:
      "Sitios web a medida para negocios de Montevideo y todo Uruguay: rápidos, perfectos en el celular y listos para Google. Desde US$300, precio cerrado.",
    etiqueta: "Servicio · Sitios web",
    h1: "Sitios web para negocios en Montevideo y todo Uruguay",
    bajada:
      "Un sitio de varias secciones que muestra qué hacés, dónde estás y cómo contactarte. Pensado para que quien te busca en Google te encuentre y te escriba.",
    secciones: [
      {
        titulo: "Para qué sirve un sitio web propio",
        parrafos: [
          "Instagram y WhatsApp son buenos para conversar, pero cuando alguien busca “cerrajería en Pocitos” o “estudio contable en Montevideo” en Google, lo que aparece son sitios web. Un sitio propio te da una dirección fija, con tu nombre, donde está toda la información que hoy respondés una y otra vez por mensaje.",
          "Además, es tuyo: no depende de que una red social cambie las reglas o de que te bloqueen una cuenta.",
        ],
      },
      {
        titulo: "Cómo lo hago",
        parrafos: [
          "Arrancamos con una charla corta sobre tu negocio y tus clientes. Te muestro el diseño antes de programar y lo ajustamos juntos. Después lo construyo, lo publico en tu dominio y te enseño a usar lo que necesites.",
          "Cada sitio se diseña desde cero, sin plantillas, con tus colores, tu logo y textos escritos para que se entiendan en cinco segundos.",
        ],
      },
    ],
    incluye: [
      "De 4 a 6 secciones: Inicio, Nosotros, Servicios, Galería y Contacto",
      "Diseño a medida con tu logo, colores y textos",
      "Adaptado a celulares y tablets",
      "Formulario de contacto y botón de WhatsApp",
      "Mapa de ubicación y links a tus redes",
      "Configuración básica para aparecer en Google",
      "Ayuda para conectar dominio y correo profesional",
      "Un mes de soporte después de la entrega",
    ],
    precio: {
      desde: 300,
      paquete: "Sitio institucional",
      notas: [
        "Si te alcanza con una sola página, la landing page arranca en US$150.",
        "Dominio y alojamiento van aparte; te asesoro para elegir la opción más económica.",
      ],
    },
    preguntas: [
      {
        pregunta: "¿Cuánto tarda en estar listo un sitio web?",
        respuesta:
          "Entre tres y cinco semanas, según la cantidad de secciones y lo rápido que tengamos textos y fotos. Te doy la fecha de entrega antes de empezar.",
      },
      {
        pregunta: "¿Puedo cambiar los textos y fotos yo mismo?",
        respuesta:
          "Sí. Si lo necesitás, agrego un panel simple para editar textos y fotos sin tocar código. Si preferís no ocuparte, me pedís los cambios y los hago yo.",
      },
      {
        pregunta: "¿El dominio y el sitio quedan a mi nombre?",
        respuesta:
          "Sí. Dominio, alojamiento y código quedan a tu nombre. Si mañana querés trabajar con otra persona, te llevás todo.",
      },
    ],
    relacionados: ["/comercios", "/landing-pages", "/ejemplos/estudio-faro"],
    mensaje: "Hola Maxi, quiero un sitio web para mi negocio.",
  },
  {
    slug: "tiendas-online",
    tipo: "servicio",
    nombre: "Tiendas online",
    titulo: "Tiendas online en Uruguay con Mercado Pago",
    descripcion:
      "Tu tienda online a medida en Uruguay: catálogo, carrito y pagos con Mercado Pago, con un panel simple para cargar productos. Desde US$500.",
    etiqueta: "Servicio · Tiendas online",
    h1: "Tiendas online para vender en todo Uruguay",
    bajada:
      "Catálogo, carrito y cobro con Mercado Pago, con un diseño propio y un panel simple para que cargues tus productos sin depender de nadie.",
    secciones: [
      {
        titulo: "Vender sin estar respondiendo mensajes todo el día",
        parrafos: [
          "Si hoy vendés por Instagram o WhatsApp, sabés lo que es contestar “¿precio?” cincuenta veces por día. Una tienda online muestra los productos con precio, stock y fotos, y el cliente compra y paga solo, a cualquier hora.",
          "Vos recibís el pedido ya pago y te dedicás a prepararlo.",
        ],
      },
      {
        titulo: "Hecha para comprar desde el celular",
        parrafos: [
          "La mayoría de las compras se hacen desde el teléfono, así que diseño primero para pantallas chicas: botones grandes, pocos pasos y pago con Mercado Pago, que tu cliente ya conoce.",
        ],
      },
    ],
    incluye: [
      "Catálogo de productos con fotos y precios",
      "Carrito de compras",
      "Pagos con Mercado Pago",
      "Panel para cargar y editar productos",
      "Diseño a medida, adaptado a celulares",
      "Configuración básica para aparecer en Google",
      "Un mes de soporte después de la entrega",
    ],
    precio: {
      desde: 500,
      paquete: "Tienda online",
      notas: [
        "El precio final depende de la cantidad de productos y de opciones como envíos por zona o cuentas de cliente.",
        "Mercado Pago cobra su comisión por cada venta; dominio y alojamiento van aparte.",
      ],
    },
    preguntas: [
      {
        pregunta: "¿Puedo cargar los productos yo?",
        respuesta:
          "Sí. La tienda tiene un panel donde agregás productos, cambiás precios y fotos, y marcás lo que no tenés en stock. Te enseño a usarlo en una videollamada.",
      },
      {
        pregunta: "¿Qué medios de pago acepta?",
        respuesta:
          "Mercado Pago, que incluye tarjetas de crédito y débito, y las opciones que Mercado Pago tenga activas en Uruguay.",
      },
      {
        pregunta: "¿Cuánto tarda una tienda online?",
        respuesta:
          "Entre tres y cinco semanas. Depende mucho de tener las fotos y los datos de los productos listos.",
      },
    ],
    relacionados: ["/emprendimientos", "/comercios", "/ejemplos/verde-tienda"],
    mensaje: "Hola Maxi, quiero una tienda online para mi negocio.",
  },
  {
    slug: "landing-pages",
    tipo: "servicio",
    nombre: "Landing pages",
    titulo: "Landing pages en Uruguay · Página de una sección",
    descripcion:
      "Landing page a medida para lanzar un servicio, un producto o presentarte como profesional en Uruguay. Rápida, clara y con WhatsApp. Desde US$150.",
    etiqueta: "Servicio · Landing pages",
    h1: "Landing pages para presentar tu negocio en una sola página",
    bajada:
      "Una página pensada para un solo objetivo: que la persona que llega entienda qué ofrecés y te escriba. Ideal para arrancar.",
    secciones: [
      {
        titulo: "Qué es una landing page",
        parrafos: [
          "Es una página web de una sola sección, larga, que cuenta una idea de principio a fin: qué hacés, para quién, por qué elegirte y cómo contactarte. No tiene menús complicados ni páginas que se pierden.",
          "Sirve para emprendedores que arrancan, profesionales independientes, lanzamientos de un producto o campañas en redes.",
        ],
      },
      {
        titulo: "Por qué conviene empezar por acá",
        parrafos: [
          "Es la forma más rápida y económica de tener presencia propia en internet. Y si tu negocio crece, la landing se puede ampliar a un sitio de varias secciones sin empezar de cero.",
        ],
      },
    ],
    incluye: [
      "Diseño a medida con tu logo, colores y textos",
      "Adaptada a celulares y tablets",
      "Formulario de contacto y botón de WhatsApp",
      "Mapa de ubicación y links a tus redes",
      "Un mes de soporte después de la entrega",
    ],
    precio: {
      desde: 150,
      paquete: "Página de una sección",
      notas: [
        "Dominio y alojamiento van aparte; te asesoro para elegir la opción más económica.",
      ],
    },
    preguntas: [
      {
        pregunta: "¿En cuánto tiempo está lista?",
        respuesta:
          "Una landing page está lista en una o dos semanas desde que tenemos los textos y las fotos.",
      },
      {
        pregunta: "¿Después la puedo ampliar?",
        respuesta:
          "Sí. Se puede sumar secciones o pasarla a un sitio completo reutilizando el diseño.",
      },
      {
        pregunta: "¿Me ayudás con los textos?",
        respuesta:
          "Sí. Te hago preguntas sobre tu negocio y te propongo textos claros. Si querés textos más trabajados, la redacción para la web es un servicio extra.",
      },
    ],
    relacionados: ["/emprendimientos", "/sitios-web", "/barberias"],
    mensaje: "Hola Maxi, quiero una landing page.",
  },
  {
    slug: "turnos-online",
    tipo: "servicio",
    nombre: "Turnos online",
    titulo: "Sistema de turnos online para tu negocio en Uruguay",
    descripcion:
      "Sistema de turnos online para peluquerías, barberías y servicios en Uruguay: tus clientes reservan solos. Desde US$300 más US$20 por mes.",
    etiqueta: "Servicio nuevo · Turnos online",
    h1: "Sistema de turnos online para peluquerías, barberías y servicios",
    bajada:
      "Tus clientes eligen día y hora desde el celular, sin llamarte ni escribirte. Vos ves la agenda del día en un solo lugar.",
    secciones: [
      {
        titulo: "El problema de agendar por WhatsApp",
        parrafos: [
          "Cuando los turnos se arreglan por mensaje, se pierde tiempo en idas y vueltas (“¿tenés a las 5?”, “no, a las 6”), se superponen horarios y es fácil olvidarse de anotar uno.",
          "Con un sistema de turnos online, el cliente ve solo los horarios libres, reserva en un minuto y el turno queda registrado.",
        ],
      },
      {
        titulo: "Un servicio nuevo, hecho a medida",
        parrafos: [
          "Es un servicio nuevo. Lo diseño y programo para tu negocio: tus servicios, tus horarios, tus profesionales y tu estética.",
        ],
      },
      {
        titulo: "Ideas parecidas en mis sitios de muestra",
        parrafos: [
          "Ninguna de mis demos es un sistema de turnos completo, pero dos tienen piezas parecidas. En La Espiga, el cliente arma su pedido y elige la hora de retiro. En Estudio Faro, la agenda de reuniones guía al cliente en cinco pasos para pedir una primera reunión; después el estudio coordina el día y la hora.",
        ],
        enlaces: [
          {
            texto: "Ver cómo se elige la hora de retiro en La Espiga",
            href: "/ejemplos/la-espiga",
          },
          {
            texto: "Ver la agenda de reuniones de Estudio Faro",
            href: "/ejemplos/estudio-faro",
          },
        ],
      },
    ],
    incluye: [
      "Reserva de turnos desde el celular, con los horarios libres a la vista",
      "Tus servicios y horarios de atención configurados",
      "Acceso con usuario y contraseña para ver y manejar la agenda",
      "Diseño con tu logo y colores",
      "Botón de WhatsApp para consultas",
      "Mantenimiento mensual del sistema",
    ],
    precio: {
      desde: turnos.desde,
      paquete: "Sistema de turnos",
      notas: [
        `Más US$${turnos.mensual} por mes de mantenimiento: alojamiento del sistema, copias de seguridad y ajustes chicos.`,
        "Se puede sumar a un sitio web o a una landing page que ya tengas.",
      ],
    },
    preguntas: [
      {
        pregunta: "¿Mis clientes tienen que crear una cuenta para reservar?",
        respuesta:
          "Lo definimos juntos según tu negocio. Se puede pedir solo nombre y teléfono, o usar cuentas para que cada cliente vea sus turnos.",
      },
      {
        pregunta: "¿Qué incluyen los US$20 por mes?",
        respuesta:
          "Mantener el sistema funcionando: alojamiento, copias de seguridad de los turnos, actualizaciones de seguridad y cambios chicos como horarios o servicios nuevos.",
      },
      {
        pregunta: "¿Es un servicio nuevo?",
        respuesta:
          "Sí. Lo armo a medida para cada negocio, así que se adapta a cómo trabajás vos y no al revés.",
      },
    ],
    relacionados: ["/barberias", "/ejemplos/estudio-faro", "/sitios-web"],
    mensaje: "Hola Maxi, quiero un sistema de turnos online para mi negocio.",
  },

  // ─── Rubros ─────────────────────────────────────────────────────────
  {
    slug: "barberias",
    tipo: "rubro",
    nombre: "Barberías y peluquerías",
    titulo: "Página web para barberías en Montevideo",
    descripcion:
      "Página web y turnos online para barberías y peluquerías de Montevideo: tus clientes reservan solos desde el celular. Precios desde US$150.",
    etiqueta: "Rubro · Barberías y peluquerías",
    h1: "Página web y turnos online para barberías y peluquerías",
    bajada:
      "Que tus clientes vean tus cortes, tus precios y reserven turno desde el celular, sin que tengas que soltar la máquina para contestar el WhatsApp.",
    secciones: [
      {
        titulo: "Qué le resuelve a una barbería",
        parrafos: [
          "En una barbería el teléfono suena mientras estás cortando. Cada “¿tenés lugar hoy?” es una interrupción, y cada turno anotado a las apuradas es un posible error.",
          "Una página con turnos online muestra los horarios libres, deja que el cliente reserve solo y te arma la agenda del día. La página también muestra tus trabajos, precios y ubicación, para que quien te encuentra en Google se decida.",
        ],
      },
      {
        titulo: "Qué conviene según tu barbería",
        parrafos: [
          "Si recién arrancás, una landing page con fotos de tus cortes, precios y WhatsApp es suficiente. Si ya tenés la agenda llena, el sistema de turnos te ahorra horas por semana.",
        ],
      },
    ],
    incluye: [
      "Galería de cortes y trabajos",
      "Lista de servicios con precios",
      "Turnos online con horarios libres (opcional)",
      "Botón de WhatsApp y mapa para llegar",
      "Diseño con la estética de tu barbería",
      "Adaptada a celulares",
    ],
    precio: {
      desde: 150,
      paquete: "Landing page",
      notas: [
        `Sistema de turnos online: desde US$${turnos.desde} más US$${turnos.mensual} por mes.`,
        "Sitio de varias secciones: desde US$300.",
      ],
    },
    preguntas: [
      {
        pregunta: "¿Puedo tener la página sin el sistema de turnos?",
        respuesta:
          "Sí. Podés empezar con una landing page con WhatsApp y sumar los turnos online más adelante.",
      },
      {
        pregunta: "¿Cada barbero puede tener su agenda?",
        respuesta:
          "Se puede configurar por profesional. Lo vemos en la primera charla según cuántos son y cómo trabajan.",
      },
      {
        pregunta: "¿Trabajás con barberías fuera de Montevideo?",
        respuesta: "Sí, con todo Uruguay. Las reuniones son por videollamada.",
      },
    ],
    relacionados: ["/turnos-online", "/landing-pages", "/emprendimientos"],
    mensaje: "Hola Maxi, tengo una barbería y quiero una página web.",
  },
  {
    slug: "comercios",
    tipo: "rubro",
    nombre: "Comercios",
    titulo: "Página web para comercios en Montevideo",
    descripcion:
      "Página web para comercios y locales de Montevideo: horarios, ubicación, productos y WhatsApp, lista para aparecer en Google. Desde US$150.",
    etiqueta: "Rubro · Comercios y locales",
    h1: "Página web para comercios y locales de barrio",
    bajada:
      "Ferreterías, almacenes, tiendas de ropa, ópticas, servicios técnicos: que cuando alguien busque lo que vendés en tu zona, te encuentre a vos.",
    secciones: [
      {
        titulo: "Qué le resuelve a un comercio",
        parrafos: [
          "La mayoría de la gente busca en Google antes de salir de casa: “ferretería abierta cerca”, “óptica en el Cerro”, “arreglo de celulares Montevideo”. Si tu comercio no tiene página, esa persona termina en el de al lado.",
          "Una página propia muestra horarios, cómo llegar, qué vendés y un botón para escribirte. Responde las preguntas de siempre antes de que te las hagan.",
        ],
      },
      {
        titulo: "Desde el Cerro, para comercios de todo Montevideo",
        parrafos: [
          "Trabajo desde el Cerro y conozco cómo funciona el comercio de barrio: la mayoría de los clientes son de la zona y llegan por recomendación o por Google Maps. La página está pensada para eso.",
        ],
      },
    ],
    incluye: [
      "Horarios, dirección y mapa para llegar",
      "Productos o servicios destacados",
      "Botón de WhatsApp y formulario de contacto",
      "Configuración básica para aparecer en Google",
      "Diseño a medida, adaptado a celulares",
      "Tienda online, si querés vender por internet",
    ],
    precio: {
      desde: 150,
      paquete: "Landing page",
      notas: [
        "Sitio de varias secciones: desde US$300.",
        "Tienda online con Mercado Pago: desde US$500.",
      ],
    },
    preguntas: [
      {
        pregunta: "¿Necesito una página si ya estoy en Google Maps?",
        respuesta:
          "Google Maps ayuda a que te encuentren; la página es la que convence. Ahí mostrás tus productos, tus precios y por qué elegirte, y Maps puede enlazar a tu página.",
      },
      {
        pregunta: "¿Puedo vender por la página?",
        respuesta:
          "Sí, con una tienda online con pagos por Mercado Pago. También se puede empezar con pedidos por WhatsApp y pasar a tienda después.",
      },
      {
        pregunta: "¿Atendés comercios fuera del Cerro?",
        respuesta:
          "Sí, de todo Montevideo y del resto del país. Si estás en Montevideo podemos reunirnos en persona.",
      },
    ],
    relacionados: ["/sitios-web", "/tiendas-online", "/ejemplos/la-espiga"],
    mensaje: "Hola Maxi, tengo un comercio y quiero una página web.",
  },
  {
    slug: "gastronomia",
    tipo: "rubro",
    nombre: "Gastronomía",
    titulo: "Página web para restaurantes, panaderías y cafés",
    descripcion:
      "Página web para restaurantes, panaderías, cafés y rotiserías en Uruguay: menú siempre actualizado, horarios y pedidos por WhatsApp. Desde US$150.",
    etiqueta: "Rubro · Gastronomía",
    h1: "Página web para restaurantes, panaderías y cafés",
    bajada:
      "Tu menú siempre al día, tus horarios claros y pedidos por WhatsApp ya armados, para que atiendas más rápido y con menos errores.",
    secciones: [
      {
        titulo: "Qué le resuelve a un local gastronómico",
        parrafos: [
          "El menú en una foto de Instagram queda viejo apenas cambia un precio, y los pedidos por teléfono se anotan mal. Una página propia tiene el menú en texto, fácil de leer en el celular y de actualizar.",
          "El cliente arma su pedido en la página y lo manda por WhatsApp con todo detallado: qué quiere, cuánto y a qué hora lo retira.",
        ],
      },
      {
        titulo: "Un ejemplo para ver",
        parrafos: [
          "La Espiga es una panadería de muestra que hice para mostrar cómo funciona: carta tipo pizarra, bolsa de pedido con hora de retiro y envío del pedido por WhatsApp.",
        ],
      },
    ],
    incluye: [
      "Menú o carta en texto, fácil de actualizar",
      "Pedidos armados que llegan por WhatsApp",
      "Horarios, dirección y mapa",
      "Fotos de tus platos o productos",
      "Diseño a medida, adaptado a celulares",
      "Configuración básica para aparecer en Google",
    ],
    precio: {
      desde: 150,
      paquete: "Landing page",
      notas: [
        "Sitio de varias secciones con menú completo: desde US$300.",
        "Pedidos con pago online por Mercado Pago: desde US$500.",
      ],
    },
    preguntas: [
      {
        pregunta: "¿Puedo cambiar los precios del menú yo?",
        respuesta:
          "Sí. Si lo necesitás, agrego un panel simple para cambiar precios y platos sin tocar código.",
      },
      {
        pregunta: "¿Los pedidos se pueden pagar online?",
        respuesta:
          "Sí, con Mercado Pago, como una tienda online. Para empezar, muchos locales prefieren pedidos por WhatsApp y cobro al retirar.",
      },
      {
        pregunta: "¿Sirve para delivery?",
        respuesta:
          "Sí. El pedido puede incluir dirección de entrega y se pueden marcar zonas de envío.",
      },
    ],
    relacionados: ["/ejemplos/la-espiga", "/sitios-web", "/tiendas-online"],
    mensaje: "Hola Maxi, tengo un local gastronómico y quiero una página web.",
  },
  {
    slug: "emprendimientos",
    tipo: "rubro",
    nombre: "Emprendimientos",
    titulo: "Página web para emprendedores en Uruguay",
    descripcion:
      "Página web para emprendimientos en Uruguay: landing page para arrancar o tienda online para vender. Diseño propio y precio cerrado desde US$150.",
    etiqueta: "Rubro · Emprendimientos",
    h1: "Página web para emprendimientos que están arrancando",
    bajada:
      "Una presencia profesional desde el primer día, con un precio pensado para quien recién empieza y la posibilidad de crecer después.",
    secciones: [
      {
        titulo: "Qué le resuelve a un emprendimiento",
        parrafos: [
          "Cuando arrancás, la confianza lo es todo. Una página propia con tu nombre, tus productos y tus datos de contacto hace que te tomen en serio, mucho más que un perfil en redes.",
          "Además, podés compartir un solo link en tu bio, en tus tarjetas y en tus mensajes, con todo lo que la gente necesita saber.",
        ],
      },
      {
        titulo: "Empezar chico y crecer",
        parrafos: [
          "Lo más común es empezar con una landing page y, cuando las ventas acompañan, pasar a una tienda online. Diseño todo pensando en ese crecimiento, así no hay que empezar de cero.",
        ],
      },
    ],
    incluye: [
      "Diseño a medida con tu logo y colores",
      "Presentación de tus productos o servicios",
      "Botón de WhatsApp y links a tus redes",
      "Adaptada a celulares",
      "Diseño de logo básico, si todavía no tenés (extra)",
      "Un mes de soporte después de la entrega",
    ],
    precio: {
      desde: 150,
      paquete: "Landing page",
      notas: ["Tienda online con Mercado Pago: desde US$500."],
    },
    preguntas: [
      {
        pregunta: "No tengo logo todavía, ¿es un problema?",
        respuesta:
          "No. Puedo hacerte un logo básico como servicio extra, o arrancamos con una tipografía y colores que después se adaptan al logo.",
      },
      {
        pregunta: "¿Puedo pagar en partes?",
        respuesta:
          "Sí: el 50% al empezar y el 50% al entregar la página.",
      },
      {
        pregunta: "¿Qué me conviene: landing page o tienda online?",
        respuesta:
          "Si vendés pocos productos o servicios a medida, una landing con WhatsApp alcanza. Si tenés catálogo y querés cobrar online, la tienda.",
      },
    ],
    relacionados: ["/landing-pages", "/tiendas-online", "/barberias"],
    mensaje: "Hola Maxi, tengo un emprendimiento y quiero una página web.",
  },
]

export const servicios = paginas.filter((p) => p.tipo === "servicio")
export const rubros = paginas.filter((p) => p.tipo === "rubro")

export function buscarPagina(slug: string) {
  return paginas.find((p) => p.slug === slug)
}
