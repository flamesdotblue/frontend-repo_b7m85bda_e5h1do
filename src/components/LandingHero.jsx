import React from 'react';
import Spline from '@splinetool/react-spline';
import { Brain, Sparkles } from 'lucide-react';

export default function LandingHero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/40 to-neutral-950" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center sm:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
          <Sparkles className="h-4 w-4 text-fuchsia-300" />
          <span className="text-white/90">BalanceAI · Mind · Body · Digital</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          <span className="inline-flex items-center justify-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/30 via-sky-500/30 to-amber-400/30 ring-1 ring-white/15">
              <Brain className="h-6 w-6 text-white" />
            </span>
            <span className="bg-[conic-gradient(at_top_left,theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.amber.300),theme(colors.violet.400),theme(colors.fuchsia.400))] bg-clip-text text-transparent">
              BalanceAI
            </span>
          </span>
          <div className="mt-2 bg-[conic-gradient(at_top_right,theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.amber.300),theme(colors.violet.400))] bg-clip-text text-transparent">
            Balance your Mind, Body & Digital Life
          </div>
        </h1>

        <p className="mt-4 max-w-2xl text-balance text-white/80 sm:text-lg">
          A dark, cyber‑futuristic wellness experience with interactive 3D — harmonizing mental health, movement, and digital habits.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#auth"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-neutral-900 shadow/20 shadow-white/10 transition hover:bg-white/90"
          >
            Sign Up
          </a>
          <a
            href="#benefits"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Learn More
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-3xl grid-cols-3 gap-3 text-sm text-white/80">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-2xl font-semibold text-white">10k+</div>
            Active users
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-2xl font-semibold text-white">95%</div>
            Satisfaction rate
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-2xl font-semibold text-white">24/7</div>
            AI Support
          </div>
        </div>
      </div>
    </section>
  );
}
