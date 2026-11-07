-- =====================================================================
-- Refuerzo de los mensajes del formulario (7/11/2026)
-- =====================================================================
-- 1. Solo se aceptan mensajes con huella. El servidor del portfolio siempre
--    la manda, así que un mensaje sin huella vino de otro lado (alguien que
--    usó la clave pública directo, salteando las protecciones del sitio).
-- 2. Tope diario además del de una hora: como máximo 300 mensajes por día
--    en total, para que la tabla nunca pueda crecer sin control.
-- Se puede ejecutar más de una vez sin problema.
-- =====================================================================

drop policy if exists "Cualquiera puede enviar un mensaje" on public.mensajes;
create policy "Cualquiera puede enviar un mensaje"
  on public.mensajes
  for insert
  to anon, authenticated
  with check (leido = false and huella is not null);

create or replace function public.limitar_mensajes()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.huella is not null and (
    select count(*) from public.mensajes
    where huella = new.huella and creado > now() - interval '1 hour'
  ) >= 5 then
    raise exception 'Demasiados mensajes. Probá de nuevo más tarde.'
      using errcode = 'P0001';
  end if;

  if (
    select count(*) from public.mensajes
    where creado > now() - interval '1 hour'
  ) >= 100 then
    raise exception 'Demasiados mensajes. Probá de nuevo más tarde.'
      using errcode = 'P0001';
  end if;

  if (
    select count(*) from public.mensajes
    where creado > now() - interval '1 day'
  ) >= 300 then
    raise exception 'Demasiados mensajes. Probá de nuevo más tarde.'
      using errcode = 'P0001';
  end if;

  return new;
end;
$$;

revoke all on function public.limitar_mensajes() from public, anon, authenticated;
