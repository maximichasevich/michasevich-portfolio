-- =====================================================================
-- Latido: consulta mínima para que Supabase no pause el proyecto
-- =====================================================================
-- El plan gratuito pausa los proyectos sin actividad durante unos días.
-- Una función programada de Netlify (netlify/functions/latido.mts) llama
-- a esta función todos los días. Solo devuelve la hora: no lee ni toca
-- ninguna tabla, así que es inofensiva aunque cualquiera la llame.
-- Se puede ejecutar más de una vez sin problema.
-- =====================================================================

create or replace function public.latido()
returns timestamptz
language sql
stable
set search_path = ''
as $$
  select now();
$$;

revoke all on function public.latido() from public;
grant execute on function public.latido() to anon, authenticated;
