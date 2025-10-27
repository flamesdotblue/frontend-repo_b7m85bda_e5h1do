import React from 'react';
import { Shield, Phone, BookOpen, Headphones } from 'lucide-react';

const resources = [
  {
    title: 'If you need urgent help',
    desc: 'If you or someone you know is in immediate danger, call your local emergency number right now.',
    icon: Shield,
    accent: 'from-rose-500/20 to-rose-400/10',
    link: 'tel:911',
    action: 'Call emergency',
  },
  {
    title: '24/7 crisis text line',
    desc: 'Text HOME to 741741 to connect with a crisis counselor for free, confidential support in the US/Canada/UK/IE.',
    icon: Phone,
    accent: 'from-sky-500/20 to-sky-400/10',
    link: 'sms:741741',
    action: 'Text HOME',
  },
  {
    title: 'Learn coping skills',
    desc: 'Explore articles, worksheets, and videos on anxiety, mood, and healthy habits curated for teens.',
    icon: BookOpen,
    accent: 'from-amber-500/20 to-amber-400/10',
    link: 'https://www.mind.org.uk/young-people/',
    action: 'Open resource',
  },
  {
    title: 'Talk to someone',
    desc: 'Reach out to a trusted adult, school counselor, or a youth helpline in your area for guidance.',
    icon: Headphones,
    accent: 'from-emerald-500/20 to-emerald-400/10',
    link: 'https://www.imalive.org/',
    action: 'Find support',
  },
];

export default function Resources() {
  return (
    <section className="bg-neutral-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Resources & safety</h2>
        <p className="mt-2 max-w-3xl text-white/70">
          This app is not a replacement for professional care. If you feel unsafe, seek help immediately. Save these options for quick access.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((r) => {
            const Icon = r.icon;
            return (
              <a
                key={r.title}
                href={r.link}
                target={r.link.startsWith('http') ? '_blank' : undefined}
                rel={r.link.startsWith('http') ? 'noreferrer' : undefined}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 transition hover:border-white/20 hover:from-white/10"
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${r.accent}`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="mt-4 font-medium">{r.title}</div>
                <p className="mt-1 text-sm leading-relaxed text-white/70">{r.desc}</p>
                <div className="mt-4 text-sm text-white/80 underline decoration-white/30 underline-offset-4 group-hover:decoration-white">
                  {r.action}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
