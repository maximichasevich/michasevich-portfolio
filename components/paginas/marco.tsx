import { Cabecera } from "@/components/paginas/cabecera"
import { Pie } from "@/components/paginas/pie"

/** Estructura de las páginas internas: barra, contenido y pie. */
export function Marco({ children }: { children: React.ReactNode }) {
  return (
    <div className="inicio relative min-h-svh">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(124,92,255,0.25),transparent)]"
        aria-hidden="true"
      />
      <Cabecera />
      <main className="relative mx-auto max-w-5xl px-5 pt-32 pb-10 md:px-10 md:pt-40">
        {children}
      </main>
      <Pie />
    </div>
  )
}
