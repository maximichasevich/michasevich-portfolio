import type { Metadata } from "next"
import Link from "next/link"

import { Migas } from "@/components/paginas/bloques"
import { DatosEstructurados } from "@/components/paginas/datos-estructurados"
import { Marco } from "@/components/paginas/marco"
import { perfil } from "@/data/perfil"
import { esquemaMigas } from "@/lib/schema"

/**
 * Política de privacidad (Ley 18.331 de Protección de Datos Personales).
 * REVISAR: texto nuevo (7/11/2026). Si cambia dónde se guardan los mensajes
 * o cuánto tiempo se conservan, actualizalo acá.
 */
const titulo = "Política de privacidad"
const descripcion =
  "Qué datos guarda el formulario de contacto de michasevich.com, para qué se usan y cómo pedir que se borren."
const actualizada = "7 de noviembre de 2026"

export const metadata: Metadata = {
  title: titulo,
  description: descripcion,
  alternates: { canonical: "/privacidad" },
  openGraph: { url: "/privacidad", title: titulo, description: descripcion },
}

export default function Privacidad() {
  const migas = [{ nombre: "Privacidad", ruta: "/privacidad" }]
  return (
    <Marco>
      <DatosEstructurados grafo={[esquemaMigas(migas)]} />
      <Migas items={migas} />

      <p className="etiqueta-hud mb-4">Privacidad</p>
      <h1 className="display brillo max-w-[18ch] text-[clamp(2.2rem,5.5vw,4rem)]">
        Tus datos, en pocas palabras
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--estrella-70)]">
        Uso lo que me escribís solo para responderte. No lo vendo, no lo
        comparto para publicidad y no te agrego a ninguna lista de correos.
      </p>
      <p className="mono mt-4 text-xs text-[var(--estrella-45)]">
        Última actualización: {actualizada}
      </p>

      <div className="mt-14 flex max-w-3xl flex-col gap-12 text-base leading-relaxed text-[var(--estrella-70)] md:text-lg">
        <Seccion titulo="Quién es responsable">
          <p>
            {perfil.nombre}, diseñador web en Montevideo, Uruguay. Para
            cualquier consulta sobre tus datos escribime a{" "}
            <a href={`mailto:${perfil.email}`} className="enlace break-all">
              {perfil.email}
            </a>
            .
          </p>
        </Seccion>

        <Seccion titulo="Qué datos guardo">
          <p>Cuando enviás el formulario de contacto guardo:</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>Tu nombre y tu correo.</li>
            <li>Tu teléfono, si lo escribiste.</li>
            <li>Tu mensaje y las opciones que tocaste en el formulario.</li>
            <li>
              Un código anónimo que sale de tu dirección IP mezclada con una
              clave secreta. Sirve solo para frenar envíos automáticos: con él
              no se puede saber tu IP, y tu IP no se guarda.
            </li>
          </ul>
          <p className="mt-3">
            Si me escribís por WhatsApp o por correo, esos mensajes quedan en
            esas aplicaciones, con sus propias reglas de privacidad.
          </p>
        </Seccion>

        <Seccion titulo="Para qué los uso">
          <p>
            Para responder tu consulta, armarte un presupuesto y, si trabajamos
            juntos, coordinar el proyecto. Nada más.
          </p>
        </Seccion>

        <Seccion titulo="Dónde se guardan y por cuánto tiempo">
          <p>
            Los mensajes se guardan en una base de datos de Supabase, con
            servidores en São Paulo, Brasil, y solo yo puedo leerlos. El sitio
            está alojado en Netlify. Borro los mensajes que no terminan en un
            trabajo como máximo un año después de recibirlos.
          </p>
        </Seccion>

        <Seccion titulo="Cookies">
          <p>
            Este sitio no usa cookies propias de seguimiento ni de publicidad.
            Si elegís otro idioma en el traductor, se guarda una cookie con el
            idioma elegido y se carga el traductor de Google, que puede usar sus
            propias cookies según la política de Google.
          </p>
        </Seccion>

        <Seccion titulo="Registros técnicos">
          <p>
            Como cualquier sitio web, el servicio de alojamiento (Netlify)
            registra datos técnicos de cada visita, como la dirección IP, el
            navegador y la página pedida, para que el sitio funcione y para
            protegerlo de ataques. No uso esos registros para identificarte ni
            para hacer estadísticas de visitas.
          </p>
        </Seccion>

        <Seccion titulo="Cómo cuido tus datos">
          <p>
            El sitio funciona solo con conexión segura (HTTPS). Los mensajes se
            guardan en una base protegida a la que no se puede acceder desde la
            página: nadie puede leerlos, cambiarlos ni borrarlos desde afuera.
            El formulario tiene protecciones contra envíos automáticos y un
            límite de mensajes por hora.
          </p>
        </Seccion>

        <Seccion titulo="Enlaces a otros sitios">
          <p>
            Este sitio tiene enlaces a WhatsApp, a mis redes y a los sitios de
            ejemplo. Al abrirlos pasás a otro sitio, con su propia política de
            privacidad.
          </p>
        </Seccion>

        <Seccion titulo="Menores de edad">
          <p>
            Mis servicios están pensados para negocios y personas adultas. Si
            sos menor de 18 años, pedile a una persona adulta responsable que se
            comunique conmigo.
          </p>
        </Seccion>

        <Seccion titulo="Tus derechos">
          <p>
            Según la Ley 18.331 de Protección de Datos Personales, podés pedirme
            en cualquier momento ver, corregir o borrar tus datos. Escribime a{" "}
            <a href={`mailto:${perfil.email}`} className="enlace break-all">
              {perfil.email}
            </a>{" "}
            y te respondo en el día. Si creés que no se respetaron tus derechos,
            podés acudir a la Unidad Reguladora y de Control de Datos Personales
            (URCDP).
          </p>
        </Seccion>

        <Seccion titulo="Cambios en esta política">
          <p>
            Si cambio algo de lo que dice esta página, lo actualizo acá y cambio
            la fecha de arriba. Si el cambio es importante y ya me escribiste,
            te aviso por correo.
          </p>
        </Seccion>

        <p>
          <Link href="/#contacto" className="enlace">
            Volver al formulario de contacto
          </Link>
        </p>
      </div>
    </Marco>
  )
}

function Seccion({
  titulo,
  children,
}: {
  titulo: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h2 className="display-md text-2xl text-[var(--estrella)] md:text-3xl">
        {titulo}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}
