# Maximiliano Michasevich · Portfolio

Mi página principal como diseñador y desarrollador web en Montevideo, Uruguay.
Muestra mis servicios, precios, proyectos de ejemplo y un formulario de
contacto que guarda los mensajes en una base de datos.

**Versión publicada:** [michasevich.com](https://michasevich.com)

## Tecnologías

- [Next.js 16](https://nextjs.org) con App Router y acciones de servidor
- React 19 y TypeScript
- Tailwind CSS 4, componentes de shadcn/ui y Radix
- Motion para animaciones y cobe para el globo 3D en WebGL
- [Supabase](https://supabase.com) (PostgreSQL) para los mensajes de contacto
- Publicado en [Netlify](https://www.netlify.com)

## Funcionalidades principales

- **Portada futurista** con globo 3D interactivo y modelos 3D hechos en CSS.
- **Carrusel de proyectos** con capturas de escritorio y celular, y enlace a cada demo publicada.
- **Servicios y precios** por paquete, con servicios extra y preguntas frecuentes.
- **Cómo trabajo:** las etapas de un proyecto, de la primera charla a la publicación.
- **Formulario de contacto** que guarda en Supabase, con validación en el servidor y protección contra spam: campo trampa, tiempo mínimo y límite de envíos por hora.
- **Contacto directo** por WhatsApp con el mensaje ya armado según el paquete elegido.
- **Traducción** a otros idiomas con el traductor de Google.
- **Seguridad:** encabezados CSP, HSTS y otros, y una tabla que la página solo puede escribir, nunca leer.
- **Accesible y rápida:** pensada primero para celular y respeta la preferencia de "reducir movimiento".

## Proyectos de ejemplo

| Proyecto | Repositorio | Publicado |
|---|---|---|
| La Espiga, panadería de barrio | [demo-la-espiga](https://github.com/maximichasevich/demo-la-espiga) | [laespiga.michasevich.com](https://laespiga.michasevich.com) |
| Estudio Faro, estudio de arquitectura | [demo-estudio-faro](https://github.com/maximichasevich/demo-estudio-faro) | [estudiofaro.michasevich.com](https://estudiofaro.michasevich.com) |
| Verde Tienda, tienda online de plantas | [demo-verde-tienda](https://github.com/maximichasevich/demo-verde-tienda) | [verdetienda.michasevich.com](https://verdetienda.michasevich.com) |

## Cómo correrlo en local

Necesitás [Node.js](https://nodejs.org) 20.9 o más nuevo. Recomiendo la versión 22.

```bash
git clone https://github.com/maximichasevich/michasevich-portfolio.git
cd michasevich-portfolio
npm install
cp .env.example .env.local   # completá las claves de Supabase
npm run dev                  # http://localhost:3000
```

Sin las claves de Supabase la página funciona igual. El formulario muestra un
aviso y ofrece WhatsApp o correo.

Otros comandos:

```bash
npm run build && npm start   # versión optimizada
npm run lint                 # revisión de código
npm run typecheck            # revisión de tipos
```

## Variables de entorno

Están listadas en `.env.example`. En tu computadora van en `.env.local`, que
nunca se sube a git. En Netlify se cargan en *Site configuration >
Environment variables*.

| Variable | Para qué |
|---|---|
| `SUPABASE_URL` | Dirección del proyecto de Supabase |
| `SUPABASE_ANON_KEY` | Clave pública de Supabase |
| `MENSAJES_SAL` | Texto secreto al azar para la huella anónima del límite de envíos |
| `SUPABASE_DB_PASSWORD` | Solo para la CLI de Supabase en tu computadora |
| `NEXT_PUBLIC_SITE_URL` | Dirección pública del portfolio (opcional) |
| `NEXT_PUBLIC_DEMO_*_URL` | Direcciones de las tres demos (opcional) |

## Base de datos

La tabla `mensajes` se crea con la migración de `supabase/migrations/`:

```bash
npx supabase link --project-ref <tu-proyecto>
npx supabase db push
```

La clave pública solo puede insertar mensajes. Hay un límite de 5 mensajes
por hora por visitante y 100 por hora en total. La IP no se guarda: se usa
una huella SHA-256 con una sal secreta.

## Dónde se cambia cada cosa

| Qué | Archivo |
|---|---|
| Nombre, correo, WhatsApp, textos y preguntas | `data/perfil.ts` |
| Paquetes, precios y servicios extra | `data/precios.ts` |
| Etapas de trabajo y ejemplos del carrusel | `data/trabajo.ts` |
| Direcciones del portfolio y las demos | `config/sitios.ts` |
| Imágenes | `public/` |

## Estructura

```
app/            Páginas, metadatos y acciones de servidor
components/     Secciones de la portada y componentes de interfaz
config/         Direcciones de los sitios
data/           Textos, precios y datos editables
hooks/          Hooks reutilizables
lib/            Utilidades y cliente de Supabase
public/         Imágenes
supabase/       Configuración y migraciones de la base de datos
docs/           Notas de diseño
```

## Contacto

[michasevich.com](https://michasevich.com) · contacto@michasevich.com

---

## English

**Maximiliano Michasevich · Portfolio.** Personal site of a web designer and
developer based in Montevideo, Uruguay. It presents services, pricing, three
live demo projects and a contact form backed by Supabase.

- **Live site:** [michasevich.com](https://michasevich.com)
- **Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Supabase, Netlify.
- **Highlights:** interactive 3D globe and CSS 3D models, a server-validated contact form with spam protection and rate limiting, security headers, and a mobile-first, accessible design.
- **Run locally:** `npm install`, copy `.env.example` to `.env.local`, then `npm run dev`.
- **Contact:** contacto@michasevich.com
