import React from 'react';
import { UserPlus, ClipboardList, ScanLine, LayoutDashboard } from 'lucide-react';

const steps = [
  { title: 'Sign up', desc: 'Create your account and set preferences.', icon: UserPlus },
  { title: 'Assessment', desc: 'Quick lifestyle + cognitive questions.', icon: ClipboardList },
  { title: 'Analysis', desc: 'See insights and suggested plan.', icon: ScanLine },
  { title: 'Dashboard', desc: 'Track progress and explore features.', icon: LayoutDashboard },
];

export default function WorkflowPreview() {
  return (
    <section className="bg-neutral-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How it flows</h2>
        <p className="mt-2 max-w-prose text-white/70">
          A simple, supportive journey built for clarity. Start with a quick sign up, glide through an assessment, and unlock your personalized plan.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5">
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/20 via-sky-500/20 to-amber-400/20">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">{i + 1}/4</div>
                </div>
                <div className="mt-3 font-medium">{s.title}</div>
                <p className="mt-1 text-sm text-white/70">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
