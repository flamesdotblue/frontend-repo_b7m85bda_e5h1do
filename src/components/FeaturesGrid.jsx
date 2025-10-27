import { Sparkles, Shield, Activity, Clock, Bot, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Sparkles,
    title: 'Personalized Plans',
    desc: 'AI-crafted tips for sleep, focus, and screen-time balance. 🌙📱',
  },
  {
    icon: Activity,
    title: 'Quick Self-Check',
    desc: 'A 7-question pulse check with friendly progress and badges.',
  },
  {
    icon: BarChart2,
    title: 'Beautiful Insights',
    desc: 'Simple charts to visualize your balance journey over time.',
  },
  {
    icon: Bot,
    title: 'Chat with BalanceBot',
    desc: 'Ask anything about mental fitness in a safe, supportive chat.',
  },
  {
    icon: Clock,
    title: 'Gentle Reminders',
    desc: 'Optional nudges to re-check progress every 2 weeks.',
  },
  {
    icon: Shield,
    title: 'Safety-first',
    desc: 'Built-in safety gate with crisis resources if needed. 🛟',
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative py-20 bg-neutral-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">All the tools for calm, in one place</h2>
          <p className="mt-3 text-white/70">Modern, minimal, and kind. Designed with soft gradients, elegant type, and a friendly tone.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-cyan-500/20 blur-2xl" />
              </div>
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/10 grid place-items-center">
                  <f.icon className="text-cyan-300" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{f.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
