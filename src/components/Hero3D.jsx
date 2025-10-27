import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glows - non-blocking for 3D interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-24 w-[48rem] h-[48rem] bg-fuchsia-500/15 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-[46rem] h-[46rem] bg-cyan-500/15 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[26rem] h-[26rem] bg-violet-400/10 blur-[110px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white tracking-tight">
            Cyber‑Calm Wellness, in 3D
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80">
            A dark, futuristic space where an explorer reaches toward balance. Take a breath, tap around, and let BalanceAI guide your next small step. ✨
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#get-started" className="px-5 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-cyan-500/30 transition">
              Start Your Journey
            </a>
            <a href="#features" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white/90 border border-white/10">
              Explore Features
            </a>
          </div>
          <div className="mt-6 inline-flex items-center gap-3 text-white/70">
            <span className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Privacy-first
            </span>
            <span>•</span>
            <span>Creamy, cyberpunk gradients</span>
            <span>•</span>
            <span>Interactive 3D hero</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
