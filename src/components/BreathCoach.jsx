import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Play, Pause, Timer } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

const patterns = {
  box: { name: 'Box (4-4-4-4)', phases: ['Inhale', 'Hold', 'Exhale', 'Hold'], counts: [4, 4, 4, 4] },
  fourSevenEight: { name: '4-7-8', phases: ['Inhale', 'Hold', 'Exhale'], counts: [4, 7, 8] },
};

export default function BreathCoach() {
  const [mode, setMode] = useState('fourSevenEight');
  const [running, setRunning] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const intervalRef = useRef(null);

  const pattern = useMemo(() => patterns[mode], [mode]);

  useEffect(() => {
    if (!running) return;

    setCount(pattern.counts[phaseIndex]);

    controls.start({
      scale: phaseIndex === 0 ? 1.1 : phaseIndex === 2 ? 0.9 : 1.0,
      transition: { duration: 0.4, ease: 'easeInOut' },
    });

    intervalRef.current = setInterval(() => {
      setCount((c) => {
        if (c > 1) return c - 1;
        // Move to next phase
        setPhaseIndex((i) => (i + 1) % pattern.phases.length);
        return pattern.counts[(phaseIndex + 1) % pattern.phases.length];
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [running, phaseIndex, pattern, controls]);

  useEffect(() => {
    if (!running) {
      setPhaseIndex(0);
      setCount(0);
      controls.start({ scale: 1, transition: { duration: 0.2 } });
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }, [running, controls]);

  return (
    <section id="breathe" className="bg-neutral-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Breath coach</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Follow the rhythm to calm your nervous system. Choose a pattern and press play. Try 4 cycles to feel the reset.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none"
          >
            {Object.entries(patterns).map(([key, p]) => (
              <option key={key} value={key} className="bg-neutral-900">
                {p.name}
              </option>
            ))}
          </select>

          <button
            onClick={() => setRunning((r) => !r)}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition ${
              running ? 'bg-rose-500 text-white hover:bg-rose-600' : 'bg-white text-neutral-900 hover:bg-white/90'
            }`}
          >
            {running ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            {running ? 'Pause' : 'Play'}
          </button>

          <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
            <Timer className="h-4 w-4" />
            <span>
              {pattern.name}
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <div className="text-sm text-white/60">Current phase</div>
            <div className="mt-1 text-3xl font-semibold">
              {running ? pattern.phases[phaseIndex] : 'Ready'}
            </div>
            <div className="mt-6 flex items-center gap-2 text-white/80">
              Seconds remaining: <span className="font-mono text-lg text-white">{running ? count : 0}</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <motion.div
              animate={controls}
              className="relative h-56 w-56 rounded-full bg-gradient-to-br from-sky-400/30 via-fuchsia-400/30 to-amber-300/30 p-1"
            >
              <div className="h-full w-full rounded-full bg-neutral-900/60 backdrop-blur-sm" />
              <div className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-white/10" />
            </motion.div>
          </div>
        </div>

        <p className="mt-8 text-sm text-white/60">
          Tip: If you feel dizzy, stop and return to normal breath. Breath work should feel gentle, never forced.
        </p>
      </div>
    </section>
  );
}
