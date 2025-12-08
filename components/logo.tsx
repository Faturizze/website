import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
  return (
    <img
      src="/logo.svg"
      alt="Faturizze Logo"
      className={cn('h-5 w-auto', className)}
    />
  )
}

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <img
      src="/logo.svg"
      alt="Faturizze Logo Icon"
      className={cn('h-5 w-auto', className)}
    />
  )
}

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <img
      src="/logo.svg"
      alt="Faturizze Logo Stroke"
      className={cn('h-5 w-auto', className)}
    />
  )
}
