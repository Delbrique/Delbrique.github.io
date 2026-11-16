import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Download, MapPin } from 'lucide-react'
import { profile, stats } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './Icons'

const ease = [0.22, 1, 0.36, 1] as const

function RotatingRole() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2400)
    return () => clearInterval(t)
  }, [])
  return (
    <span className="relative block h-[1.4em] overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={profile.roles[i]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease }}
          className="text-gradient block whitespace-nowrap"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const codeLines: [string, string][] = [
  ['c-violet', 'from'],
  ['', ' agricam '],
  ['c-violet', 'import'],
  ['', ' Detector, Classifier\n\n'],
  ['c-slate', '# Photo → fruits → diagnostic explicable\n'],
  ['', 'fruits = Detector('],
  ['c-lime', '"yolov8n.onnx"'],
  ['', ').crop(photo)\n'],
  ['c-violet', 'for'],
  ['', ' f '],
  ['c-violet', 'in'],
  ['', ' fruits:\n  pred, cam = Classifier('],
  ['c-lime', '"effnet_b3"'],
  ['', ')(f)\n  '],
  ['c-violet', 'if'],
  ['', ' pred.conf < '],
  ['c-cyan', '0.6'],
  ['', ': '],
  ['c-violet', 'abstain'],
  ['', '()\n\n'],
  ['c-slate', '# accuracy=0.959  latency=0.65s  offline=True'],
]
const colorOf: Record<string, string> = {
  'c-violet': 'text-neon-violet',
  'c-lime': 'text-neon-lime',
  'c-cyan': 'text-neon-cyan',
  'c-slate': 'text-slate-500',
  '': 'text-slate-200',
}

function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 12 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.5, ease }}
      whileHover={{ y: -6, rotateX: 2, rotateY: -3 }}
      style={{ transformPerspective: 1200 }}
      className="relative w-full min-w-0 max-w-md"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-neon-cyan/50 via-neon-violet/30 to-transparent opacity-60 blur-sm" />
      <div className="glass relative overflow-hidden rounded-2xl !bg-ink-900/80">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-300/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-slate-500">diagnose.py</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6">
          <code>
            {codeLines.map(([c, t], k) => (
              <span key={k} className={colorOf[c]}>{t}</span>
            ))}
            <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-neon-cyan" />
          </code>
        </pre>
      </div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="glass absolute -bottom-6 -left-6 hidden rounded-xl px-4 py-3 sm:block"
      >
        <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Diagnostic</p>
        <p className="text-sm font-semibold text-neon-lime">Tomate saine · 97 %</p>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pb-16 pt-32 sm:px-6">
      <div className="grid items-center gap-16 lg:grid-cols-[1.25fr_1fr] [&>*]:min-w-0">
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-1.5 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease }} className="break-words font-display text-[2.6rem] font-bold leading-[1.02] tracking-tight text-white sm:text-7xl">
            {profile.firstName.split(' ')[0]}{' '}
            <span className="text-slate-500">{profile.firstName.split(' ').slice(1).join(' ')}</span>
            <br />
            {profile.lastName}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease }} className="mt-6 font-display text-xl font-medium text-slate-200 sm:text-2xl">
            <RotatingRole />
          </motion.p>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35, ease }} className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45, ease }} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary group">
              Voir mes projets <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href={profile.cv} target="_blank" rel="noreferrer" className="btn-ghost">
              <Download size={16} /> CV
            </a>
            <div className="ml-1 flex items-center gap-2">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-xl text-slate-300 transition hover:-translate-y-0.5 hover:text-white glass">
                <GithubIcon />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-xl text-slate-300 transition hover:-translate-y-0.5 hover:text-white glass">
                <LinkedinIcon />
              </a>
            </div>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-6 flex items-center gap-1.5 text-sm text-slate-500">
            <MapPin size={14} /> {profile.location}
          </motion.p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <CodeCard />
        </div>
      </div>

      <motion.dl
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.8 } } }}
        className="mt-20 grid grid-cols-2 gap-3 sm:grid-cols-4"
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="glass rounded-2xl p-5 transition-colors hover:border-white/20"
          >
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-display text-3xl font-bold text-white">{s.value}</dd>
            <p className="mt-1 text-xs leading-snug text-slate-400">{s.label}</p>
          </motion.div>
        ))}
      </motion.dl>

      <motion.a href="#about" aria-label="Défiler" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="mx-auto mt-14 hidden text-slate-500 hover:text-white sm:block">
        <ArrowDown />
      </motion.a>
    </section>
  )
}
