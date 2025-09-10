import clsx from 'clsx'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll.js'

export default function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,          
  duration = 600,       
  children,
  once = true,
  ...rest
}) {
  const { ref, shown } = useRevealOnScroll({ once })

  return (
    <Tag
      ref={ref}
      className={clsx('reveal', shown && 'reveal-show', className)}
      style={{
        animationDelay: shown ? `${delay}ms` : undefined,
        animationDuration: `${duration}ms`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}