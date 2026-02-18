'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function Logo() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Garante que só renderiza após montar no cliente
  useEffect(() => {
    setMounted(true)
  }, [])


  return <img style={{ height: '37px', width: 'auto' }} src="https://minio.faturizze.com/statics/1.png" alt="Logo" />
}
