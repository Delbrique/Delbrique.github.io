import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { href: '#about', label: 'À propos' },
  { href: '#projects', label: 'Projets' },
  { href: '#skills', label: 'Compétences' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach((l) => { const el = document.querySelector(l.href); if (el) obs.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); obs.disconnect() }
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5 ${
          scrolled ? 'glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]' : 'border border-transparent'
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5 font-display font-bold text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-neon-cyan to-neon-violet text-sm text-ink-950 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
            VD
          </span>
          <span className="hidden sm:inline">{profile.lastName}<span className="text-neon-cyan">.</span></span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${active === l.href ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                {active === l.href && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-lg bg-white/[0.07]" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                )}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={profile.cv} target="_blank" rel="noreferrer" className="btn-primary hidden !py-2 sm:inline-flex">
            CV
          </a>
          <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl text-white glass md:hidden">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="glass mx-auto mt-2 flex max-w-6xl flex-col rounded-2xl p-2 md:hidden"
          >
            {[...links, { href: profile.cv, label: 'Télécharger le CV' }].map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-slate-200 hover:bg-white/5">
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
