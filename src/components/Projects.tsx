import { useMemo, useRef, useState, type MouseEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, ExternalLink, Sparkles } from 'lucide-react'
import { projects, profile, type Category, type Project } from '../data/profile'
import { SectionHeading } from './Reveal'
import { GithubIcon } from './Icons'

const filters: ('Tous' | Category)[] = ['Tous', 'IA', 'Full-Stack', 'Data', 'DevOps']

/** Carte avec projecteur lumineux qui suit le curseur. */
function SpotlightCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const onMove = (e: MouseEvent) => {
    const r = ref.current!.getBoundingClientRect()
    ref.current!.style.setProperty('--x', `${e.clientX - r.left}px`)
    ref.current!.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group glass relative h-full overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.35)] ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: 'radial-gradient(420px circle at var(--x) var(--y), rgba(167,139,250,0.14), transparent 60%)' }}
      />
      {children}
    </div>
  )
}

function Links({ p }: { p: Project }) {
  return (
    <div className="flex items-center gap-2">
      {p.repo && (
        <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-neon-cyan/40 hover:text-white">
          <GithubIcon className="h-3.5 w-3.5" /> Code
        </a>
      )}
      {p.demo && (
        <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-neon-cyan/15 px-3 py-1.5 text-xs font-medium text-neon-cyan transition hover:bg-neon-cyan/25">
          <ExternalLink size={13} /> Démo
        </a>
      )}
    </div>
  )
}

function FeaturedCard({ p }: { p: Project }) {
  return (
    <SpotlightCard>
      <div className={`absolute inset-x-0 top-0 h-48 bg-gradient-to-b ${p.accent}`} />
      <div className="relative flex h-full flex-col p-7 sm:p-9">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
            <Sparkles size={12} /> Projet phare
          </span>
          <Links p={p} />
        </div>
        <h3 className="font-display text-3xl font-bold text-white">{p.name}</h3>
        <p className="mt-1 font-medium text-neon-cyan">{p.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-400">{p.description}</p>
        {p.highlights && (
          <ul className="mt-5 space-y-2">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm text-slate-300">
                <Check size={16} className="mt-0.5 shrink-0 text-neon-lime" /> {h}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto flex flex-wrap gap-2 pt-7">
          {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
        </div>
      </div>
    </SpotlightCard>
  )
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <SpotlightCard>
      <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${p.accent} opacity-70`} />
      <div className="relative flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
          <a href={p.repo ?? p.demo} target="_blank" rel="noreferrer" aria-label={`Ouvrir ${p.name}`} className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 group-hover:rotate-45 group-hover:border-neon-cyan/50 group-hover:text-neon-cyan">
            <ArrowUpRight size={16} />
          </a>
        </div>
        <p className="mt-1 text-sm font-medium text-slate-300">{p.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">{p.description}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {p.stack.map((s) => <span key={s} className="chip !px-2.5 !py-0.5 !text-[11px]">{s}</span>)}
        </div>
      </div>
    </SpotlightCard>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Tous')
  const list = useMemo(() => (filter === 'Tous' ? projects : projects.filter((p) => p.categories.includes(filter))), [filter])
  const featured = list.filter((p) => p.featured)
  const others = list.filter((p) => !p.featured)

  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="02 · Projets"
        title={<>Ce que j'ai <span className="text-gradient">construit</span></>}
        intro="Une sélection de mes dépôts, de la vision par ordinateur embarquée aux tableaux de bord et à l'automatisation."
      />

      <div role="tablist" className="glass mb-10 inline-flex flex-wrap gap-1 rounded-2xl p-1.5">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-colors ${filter === f ? 'text-ink-950' : 'text-slate-400 hover:text-white'}`}
          >
            {filter === f && <motion.span layoutId="filter-pill" className="absolute inset-0 -z-0 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-violet" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {featured.map((p) => (
            <motion.div key={p.name} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.4 }}>
              <FeaturedCard p={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div layout className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {others.map((p, i) => (
            <motion.div key={p.name} layout initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}>
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-12 text-center">
        <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noreferrer" className="btn-ghost group">
          <GithubIcon className="h-4 w-4" /> Tous mes dépôts sur GitHub
          <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  )
}
