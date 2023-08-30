import { ReactNode } from 'react'
import { animated, useSpring } from '@react-spring/web'

type Props = {
  children: ReactNode
}

export function FadeInComponent({ children }: Props) {
  // Hooks
  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
  })

  // Components
  return <animated.div style={fadeIn}>{children}</animated.div>
}
