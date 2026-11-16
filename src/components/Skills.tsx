import { motion } from 'framer-motion'
import { skillGroups } from '../data/profile'
import Reveal, { SectionHeading } from './Reveal'
import { iconMap } from './Icons'

const marquee = ['Python', 'TensorFlow', 'YOLOv8', 'React', 'TypeScript', 'FastAPI', 'Docker', 'Firebase', 'Supabase', 'pandas', 'Power BI', 'n8n', 'SQL Server', 'Tailwind', 'ONNX', 'Streamlit']

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="03 · Compétences"
        title={<>Stack <span className="text-gradient">technique</span></>}
        intro="Les outils que j'utilise pour aller de l'idée au produit en ligne."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g, gi) => {
          const Icon = iconMap[g.icon]
          return (
            <Reveal key={g.title} delay={gi * 0.08}>
              <div className="glass group h-full rounded-3xl p-7 transition-all duration-300 hover:border-white/20">
                <div className="mb-6 flex items-center gap-3">
                  <div className={`grid h-11 w-11 place-items-center rounded-xl bg-white/5 ${g.color} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{g.title}</h3>
                  <span className="ml-auto font-mono text-xs text-slate-600">{String(g.skills.length).padStart(2, '0')}</span>
                </div>
                <motion.ul
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.035 } } }}
                  className="flex flex-wrap gap-2"
                >
                  {g.skills.map((s) => (
                    <motion.li
                      key={s}
                      variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
                      whileHover={{ y: -3 }}
                      className="cursor-default rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm text-slate-300 transition-colors hover:border-neon-cyan/40 hover:bg-neon-cyan/[0.06] hover:text-white"
                    >
                      {s}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </Reveal>
          )
        })}
      </div>

      <div className="relative mt-16 overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          className="flex w-max gap-12 font-display text-2xl font-semibold text-slate-700"
        >
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="whitespace-nowrap transition-colors hover:text-slate-300">{m}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
