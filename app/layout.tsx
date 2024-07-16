import type { Metadata } from "next"
import React from "react"
import "./globals.css"
import Navbar from "../components/layout/Navbar"

export const metadata: Metadata = {
  title: "The Movie Database (TMDB)",
  description: "tmdb clone for personal project",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
