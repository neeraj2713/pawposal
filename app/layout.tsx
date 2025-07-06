'use client'

import type { Metadata } from "next";
import "./globals.css";

const metadata: Metadata = {
  title: "Pawposal",
  description: "an ai-powered proposal writer",
};

import { SessionProvider } from 'next-auth/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SessionProvider>
  )
}

