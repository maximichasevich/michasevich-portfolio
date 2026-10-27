"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Renderiza el contenido recién cuando el bloque se acerca a la pantalla.
 * Sirve para adornos pesados (3D, animaciones): no se arman ni ocupan el
 * procesador durante la carga inicial. El contenedor reserva el lugar con
 * su `className`, así nada se mueve cuando aparecen.
 */
export function MontarCerca({
  children,
  className,
  oculto = true,
}: {
  children: React.ReactNode
  className?: string
  /** true si es solo decorativo (se oculta a lectores de pantalla). */
  oculto?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: "400px 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={className} aria-hidden={oculto || undefined}>
      {visible ? children : null}
    </div>
  )
}
