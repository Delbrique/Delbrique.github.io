import { motion, type HTMLMotionProps } from 'framer-motion'

type Props = HTMLMotionProps<'div'> & { delay?: number; y?: number }

/** Apparition douce au défilement. */
export default function Reveal({ delay = 0, y = 28, children, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro?: string }) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="h2">{title}</h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-slate-400">{intro}</p>}
    </Reveal>
  )
}
