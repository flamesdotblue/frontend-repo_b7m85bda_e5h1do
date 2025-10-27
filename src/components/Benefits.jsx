import React, { useState } from 'react';
import { Shield, PlayCircle, BarChart3, MessageCircle } from 'lucide-react';

const items = [
  {
    title: 'Holistic wellness, personalized',
    desc: 'From mood and meditation to workouts and digital habits—your plan adapts to you.',
  },
  {
    title: 'Cognitive-friendly design',
    desc: 'Gentle flows, swipe-friendly UI, and simple choices reduce overwhelm and decision fatigue.',
  },
  {
    title: 'Private by default',
    desc: 'Local suggestions, encrypted sync, and consent‑first integrations for wearables and apps.',
  },
  {
    title: 'Community without pressure',
    desc: 'Anonymous tips and support features that keep you safe and respected.',
  },
];

export default function Benefits() {
  const [open, setOpen] = useState(false);

  return (
    <section id="benefits" className="bg-neutral-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-sky-500/5 to-amber-400/5 p-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Why BalanceAI?</h2>
            <p className="mt-2 max-w-prose text-white/70">
              A calm, neon‑orchid experience that brings together breathwork, workouts, mindful tech use, and family‑friendly features.
            </p>

            <button
              onClick={() => setOpen((v) => !v)}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-neutral-900 transition hover:bg-white/90"
              aria-expanded={open}
            >
              {open ? 'Hide benefits' : 'Show benefits'}
            </button>

            <div className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} mt-4`}>
              <div className="min-h-0">
                <ul className="space-y-3 text-white/80">
                  {items.map((it) => (
                    <li key={it.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="font-medium text-white">{it.title}</div>
                      <p className="text-sm text-white/70">{it.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FeatureCard
              icon={PlayCircle}
              title="Daily workouts & meditation"
              desc="Short guided videos with a weekly routine to keep you moving and grounded."
            />
            <FeatureCard
              icon={BarChart3}
              title="Smart trackers"
              desc="Screen time, sleep, steps, and more—privacy‑aware and consent‑first."
            />
            <FeatureCard
              icon={MessageCircle}
              title="24/7 assistant"
              desc="Ask questions, get nudges, and stay on track in a supportive tone."
            />
            <FeatureCard
              icon={Shield}
              title="Safety built‑in"
              desc="Crisis resources surface automatically when you need them most."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/20 via-sky-500/20 to-amber-400/20">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="mt-3 font-medium">{title}</div>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
    </div>
  );
}
