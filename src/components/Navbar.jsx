import { Home, Brain, BarChart2, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-white/90 hover:text-white"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 shadow-lg shadow-cyan-500/20 grid place-items-center">
            <Brain size={18} className="text-white" />
          </div>
          <span className="font-semibold tracking-tight">BalanceAI</span>
        </motion.a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-white inline-flex items-center gap-2"><Home size={16} /> Home</a>
          <a href="#insights" className="hover:text-white inline-flex items-center gap-2"><BarChart2 size={16} /> Insights</a>
          <a href="#chat" className="hover:text-white inline-flex items-center gap-2"><MessageCircle size={16} /> Chat</a>
        </nav>
        <a
          href="#get-started"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-cyan-500/30 transition"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
