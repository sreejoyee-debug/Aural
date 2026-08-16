import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange'
  size?: 'sm' | 'md' | 'lg'
  width?: string | number
  height?: string | number
  customSize?: boolean
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
}

const sizeMap = { sm: 'glow-card-sm', md: 'glow-card-md', lg: 'glow-card-lg' }

export function GlowCard({
  children,
  className = '',
  glowColor = 'purple',
  size = 'md',
  width,
  height,
  customSize = false,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const syncPointer = (event: PointerEvent) => {
      cardRef.current?.style.setProperty('--x', event.clientX.toFixed(2))
      cardRef.current?.style.setProperty('--y', event.clientY.toFixed(2))
      cardRef.current?.style.setProperty('--xp', (event.clientX / window.innerWidth).toFixed(2))
    }
    document.addEventListener('pointermove', syncPointer)
    return () => document.removeEventListener('pointermove', syncPointer)
  }, [])

  const { base, spread } = glowColorMap[glowColor]
  const style = {
    '--base': base,
    '--spread': spread,
    ...(width !== undefined ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
    ...(height !== undefined ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
  } as CSSProperties

  return (
    <div
      ref={cardRef}
      data-glow
      style={style}
      className={`glow-card ${customSize ? '' : sizeMap[size]} ${className}`}
    >
      <div className="glow-card-light" aria-hidden="true" />
      {children}
    </div>
  )
}
