import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { fuentesInicio } from "@/components/inicio/fuentes"
import { WhatsappFlotante } from "@/components/whatsapp-flotante"
import { perfil } from "@/data/perfil"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  metadataBase: new URL(perfil.url),
  title: {
    default: `Diseño web en Montevideo, Uruguay · ${perfil.nombre}`,
    template: `%s · ${perfil.nombre}`,
  },
  description: perfil.descripcion,
  keywords: [
    "diseño web",
    "diseño web Montevideo",
    "diseño web Uruguay",
    "diseño de páginas web",
    "páginas web Montevideo",
    "páginas web Uruguay",
    "páginas web a medida",
    "desarrollo web Uruguay",
    "diseñador web Montevideo",
    "desarrollador web freelance",
    "tienda online Uruguay",
    "landing page Uruguay",
    "posicionamiento web SEO",
  ],
  authors: [{ name: perfil.nombre }],
  creator: perfil.nombre,
  openGraph: {
    type: "website",
    locale: "es_UY",
    siteName: perfil.nombre,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Código de verificación de Google Search Console (opcional): se carga en
  // Netlify como variable GOOGLE_SITE_VERIFICATION.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
}

export const viewport: Viewport = {
  themeColor: "#05060f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn(
        "dark font-sans antialiased",
        geist.variable,
        fuentesInicio
      )}
    >
      <body>
        {children}
        {/* Botón de WhatsApp visible en todas las páginas. */}
        <WhatsappFlotante />
      </body>
    </html>
  )
}
