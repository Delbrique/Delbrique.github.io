import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Copy, Download, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { /* presse-papiers indisponible */ }
  }

  const channels = [
    { label: 'GitHub', value: `@${profile.githubHandle}`, href: profile.github, Icon: GithubIcon },
    { label: 'LinkedIn', value: 'Valentin Delbrique', href: profile.linkedin, Icon: LinkedinIcon },
  ]

  return (
    <section id="contact" className="section">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-16 sm:py-20">
          <div aria-hidden className="absolute -top-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-neon-cyan/25 to-neon-violet/25 blur-[100px]" />
          <div className="relative">
            <p className="eyebrow mb-4">04 · Contact</p>
            <h2 className="h2 mx-auto max-w-3xl">
              Un projet IA, data ou web ? <span className="text-gradient">Parlons-en.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
              Je suis disponible pour un poste, un stage, une alternance ou une mission freelance. Je réponds rapidement.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`mailto:${profile.email}`} className="btn-primary group">
                <Mail size={16} /> {profile.email}
                <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <motion.button whileTap={{ scale: 0.95 }} onClick={copy} className="btn-ghost" aria-live="polite">
                {copied ? <><Check size={16} className="text-neon-lime" /> Copié !</> : <><Copy size={16} /> Copier l'e-mail</>}
              </motion.button>
            </div>

            <div className="mx-auto mt-12 grid max-w-2xl gap-3 sm:grid-cols-3">
              {channels.map(({ label, value, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition-all hover:-translate-y-1 hover:border-neon-cyan/40">
                  <Icon className="h-5 w-5 text-slate-300 group-hover:text-neon-cyan" />
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="truncate text-sm font-medium text-white">{value}</p>
                  </div>
                </a>
              ))}
              <a href={profile.cv} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition-all hover:-translate-y-1 hover:border-neon-cyan/40">
                <Download className="h-5 w-5 text-slate-300 group-hover:text-neon-cyan" />
                <div>
                  <p className="text-xs text-slate-500">Curriculum</p>
                  <p className="text-sm font-medium text-white">Télécharger le CV</p>
                </div>
              </a>
            </div>

            <p className="mt-8 flex items-center justify-center gap-1.5 text-sm text-slate-500">
              <MapPin size={14} /> {profile.location} · ouvert au télétravail
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
