"use client"

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react"
import { useInView, useMotionValue, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number
  startValue?: number
  direction?: "up" | "down"
  delay?: number
  decimalPlaces?: number
}

export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  // El HTML del servidor muestra el número final (lo leen Google y quien
  // navega sin JavaScript). La cuenta animada solo corre si el número
  // todavía no está en pantalla al cargar, así no salta de 150 a 0.
  const animar = useRef<boolean | null>(null)
  const motionValue = useMotionValue(direction === "down" ? startValue : value)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "0px" })

  useEffect(() => {
    const el = ref.current
    if (!el || animar.current !== null) return
    const r = el.getBoundingClientRect()
    const visible = r.top < window.innerHeight && r.bottom > 0
    const reducido = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    animar.current = !visible && !reducido
    if (animar.current) {
      motionValue.jump(direction === "down" ? value : startValue)
      el.textContent = formatear(
        direction === "down" ? value : startValue,
        decimalPlaces
      )
    }
  }, [motionValue, direction, value, startValue, decimalPlaces])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null

    if (isInView && animar.current) {
      timer = setTimeout(() => {
        motionValue.set(direction === "down" ? startValue : value)
      }, delay * 1000)
    }

    return () => {
      if (timer !== null) {
        clearTimeout(timer)
      }
    }
  }, [motionValue, isInView, delay, value, direction, startValue])

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = formatear(latest, decimalPlaces)
        }
      }),
    [springValue, decimalPlaces]
  )

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block tracking-wider text-black tabular-nums dark:text-white",
        className
      )}
      {...props}
    >
      {formatear(direction === "down" ? startValue : value, decimalPlaces)}
    </span>
  )
}

function formatear(n: number, decimales: number) {
  return Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  }).format(Number(n.toFixed(decimales)))
}
