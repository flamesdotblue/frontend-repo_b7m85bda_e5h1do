import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="get-started" className="relative py-20 bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/30 via-fuchsia-500/20 to-cyan-500/30 p-8 md:p-10 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to feel more balanced?</h3>
          <p className="mt-3 text-white/80">Take a quick pulse check and get a personalized plan in minutes. No sign-up required.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a
              href="#"
              className="px-5 py-3 rounded-xl bg-white text-neutral-900 font-medium hover:bg-white/90"
            >
              Start 7‑Question Quiz
            </a>
            <a
              href="#"
              className="px-5 py-3 rounded-xl bg-neutral-900/60 border border-white/15 text-white hover:bg-neutral-900/80"
            >
              View Demo Plan
            </a>
          </div>
          <p className="mt-4 text-xs text-white/70">We never sell your data. You control what you share. 🛡️</p>
        </motion.div>
      </div>
    </section>
  );
}
