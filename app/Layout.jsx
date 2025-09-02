import React from "react"
import "../src/styles/global.css"

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#c41e3a" />
        <meta
          name="description"
          content="Universidad  - Más de 60 años formando profesionales"
        />
        <title>Universidad </title>
      </head>
      <body>{children}</body>
    </html>
  )
}
