import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Brain, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-neutral-950/40 to-neutral-950" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-20 text-center sm:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
          <Sparkles className="h-4 w-4 text-blue-300" />
          <span className="text-white/90">Youth Mental Wellness · Generative Support</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Care for your mind.
          <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
            {' '}Grow every day.
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl text-balance text-white/80 sm:text-lg">
          A calm space with interactive tools, gentle coaching, and resources built for teens and young adults.
          Explore the 3D brain scene, check in with your mood, and practice guided breathing.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#mood"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-neutral-900 shadow/20 shadow-white/10 transition hover:bg-white/90"
          >
            <Heart className="h-5 w-5 text-rose-600" /> Quick Mood Check
          </a>
          <a
            href="#breathe"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Brain className="h-5 w-5 text-sky-300" /> Try Breath Coach
          </a>
        </div>
      </div>
    </section>
  );
}
