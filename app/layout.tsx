import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"


import { Jost } from "next/font/google"

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // podes ajustar conforme quiseres
  variable: "--font-jost",
})

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard da Faturizze",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" }, // ou outra cor escura
  ],
  icons: {
    icon: "/favicon.png",
  },
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`dark ${jost.className}`}
      suppressHydrationWarning
    >
      <body
        className={`antialiased`}
      >
        {children}

      </body>
    </html>
  );
}
