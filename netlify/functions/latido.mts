/**
 * Latido diario a Supabase para que el plan gratuito no pause el proyecto
 * por falta de actividad (si se pausa, el formulario deja de guardar
 * mensajes).
 *
 * Es una función programada de Netlify: corre sola todos los días a las
 * 9:00 de Montevideo (12:00 UTC) y llama a public.latido(), que solo
 * devuelve la hora (ver supabase/migrations/20261107130000_latido.sql).
 * Usa las mismas variables SUPABASE_URL y SUPABASE_ANON_KEY del sitio.
 *
 * Para ver si corrió: Netlify → el sitio → Logs → Functions → latido.
 */
export default async function latido() {
  const url = process.env.SUPABASE_URL
  const clave = process.env.SUPABASE_ANON_KEY
  if (!url || !clave) {
    console.error("Latido: faltan SUPABASE_URL o SUPABASE_ANON_KEY")
    return new Response("Faltan variables", { status: 500 })
  }

  // Dos intentos, por si la base tarda en responder.
  for (let intento = 1; intento <= 2; intento++) {
    try {
      const r = await fetch(`${url}/rest/v1/rpc/latido`, {
        method: "POST",
        headers: {
          apikey: clave,
          Authorization: `Bearer ${clave}`,
          "Content-Type": "application/json",
        },
        body: "{}",
        signal: AbortSignal.timeout(15000),
      })
      if (r.ok) {
        console.log(`Latido OK: ${await r.text()}`)
        return new Response("OK")
      }
      console.error(`Latido: respuesta ${r.status} (intento ${intento})`)
    } catch (e) {
      console.error(`Latido: sin conexión (intento ${intento})`, e)
    }
  }
  return new Response("Error", { status: 502 })
}

export const config = {
  schedule: "0 12 * * *",
}
