import type { Metadata } from "next"

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
import { DatosEstructurados } from "@/components/paginas/datos-estructurados"
import { Pie } from "@/components/paginas/pie"
import { perfil } from "@/data/perfil"
import { esquemaInicio } from "@/lib/schema"

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

export default function Page() {
  return (
    <div className={"inicio min-h-svh"}>
      <DatosEstructurados grafo={esquemaInicio()} />
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
        <Pie />
      </Chispas>
    </div>
  )
}
