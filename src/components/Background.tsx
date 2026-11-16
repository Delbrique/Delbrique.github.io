import { useEffect } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'

/** Fond : grille, halos lumineux animés et projecteur qui suit la souris. */
export default function Background() {
  const mx = useMotionValue(-1000)
  const my = useMotionValue(-1000)
  const x = useSpring(mx, { stiffness: 80, damping: 20 })
  const y = useSpring(my, { stiffness: 80, damping: 20 })
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${x}px ${y}px, rgba(34,211,238,0.07), transparent 60%)`

  useEffect(() => {
    const onMove = (e: PointerEvent) => { mx.set(e.clientX); my.set(e.clientY) }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [mx, my])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-neon-violet/20 blur-[140px] animate-float" />
      <div className="absolute top-[40%] -left-40 h-[420px] w-[420px] rounded-full bg-neon-cyan/10 blur-[120px] animate-float [animation-delay:-3s]" />
      <div className="absolute bottom-0 -right-40 h-[460px] w-[460px] rounded-full bg-fuchsia-500/10 blur-[140px] animate-float [animation-delay:-5s]" />
      <motion.div className="absolute inset-0" style={{ background: spotlight }} />
    </div>
  )
}
