import { ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} {profile.lastName} {profile.firstName}. Conçu et développé avec React, TypeScript et Tailwind.</p>
        <a href="#top" className="group inline-flex items-center gap-1.5 hover:text-white">
          Haut de page <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  )
}
