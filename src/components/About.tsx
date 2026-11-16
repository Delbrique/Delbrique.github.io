import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { expertise, timeline } from '../data/profile'
import Reveal, { SectionHeading } from './Reveal'
import { iconMap } from './Icons'

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading
        eyebrow="01 · À propos"
        title={<>De la donnée brute <span className="text-gradient">au produit utile</span></>}
        intro="Diplômé en génie informatique, option IA & Big Data (Keyce, ENSPY). J'aime partir d'un problème réel, souvent camerounais (agriculture, langues locales, orientation scolaire), et livrer une solution complète : données, modèle, interface et déploiement."
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 content-start">
          {expertise.map((e, i) => {
            const Icon = iconMap[e.icon]
            return (
              <Reveal key={e.title} delay={i * 0.08}>
                <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/30 hover:bg-white/[0.05]">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 text-neon-cyan transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{e.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="relative">
          <Reveal>
            <h3 className="mb-8 font-display text-xl font-semibold text-white">Parcours</h3>
          </Reveal>
          <ol className="relative space-y-8 border-l border-white/10 pl-8">
            <motion.span
              aria-hidden
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
              className="absolute -left-px top-0 h-full w-px origin-top bg-gradient-to-b from-neon-cyan via-neon-violet to-transparent"
            />
            {timeline.map((t, i) => {
              const Icon = t.kind === 'edu' ? GraduationCap : Briefcase
              return (
                <motion.li
                  key={t.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                    <span className="absolute -left-[45px] top-0.5 grid h-7 w-7 place-items-center rounded-full border border-white/15 bg-ink-900 text-neon-cyan">
                      <Icon size={13} />
                    </span>
                    <p className="font-mono text-xs text-neon-violet">{t.period}</p>
                    <h4 className="mt-1 font-semibold text-white">{t.title}</h4>
                    <p className="text-sm text-slate-400">{t.org}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{t.text}</p>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
