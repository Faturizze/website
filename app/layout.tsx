import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import { Jost } from "next/font/google"

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // podes ajustar conforme quiseres
  variable: "--font-jost",
})


export const metadata: Metadata = {
  title: "Sistema de Monitoramento de Transações",
  description: "Monitoramento de transações em tempo real, detecção de fraudes e automação de processos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`${jost.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
