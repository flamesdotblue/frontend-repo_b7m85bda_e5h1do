import React, { useMemo, useState } from 'react';
import { Smile, Meh, Frown, Sparkles } from 'lucide-react';

const moods = [
  { key: 'great', label: 'Great', icon: Smile, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { key: 'okay', label: 'Okay', icon: Meh, color: 'text-sky-400', bg: 'bg-sky-400/10' },
  { key: 'low', label: 'Low', icon: Frown, color: 'text-rose-400', bg: 'bg-rose-400/10' },
];

function generateSuggestion(mood, note) {
  const base = {
    great: [
      'Channel that energy into one small win today.',
      'Share your light—send a kind message to someone.',
      'Lock in the vibe with 3 deep breaths and a 5‑minute walk.',
    ],
    okay: [
      'Take a micro‑break: stand, stretch, sip water.',
      'Name one thing you can control in the next hour.',
      'Try a 4‑7‑8 breath cycle to reset your focus.',
    ],
    low: [
      'Be gentle. Do one tiny thing—make the bed or open a window.',
      'Text someone you trust and share one sentence about how you feel.',
      'Try box breathing: 4 in, 4 hold, 4 out, 4 hold (x4).',
    ],
  };

  const extras = [
    'Play a song that matches your mood (then one that lifts it 5%).',
    'Step outside and look for 3 blue things you can see.',
    'Drink a glass of water and roll your shoulders slowly.',
    'Write a one‑line note to your future self.',
  ];

  const moodSet = base[mood?.key || 'okay'];
  const pick = moodSet[Math.floor(Math.random() * moodSet.length)];
  const extra = extras[Math.floor(Math.random() * extras.length)];

  const fromNote = note?.trim()
    ? `Because you mentioned “${note.trim().slice(0, 120)}”, try breaking it into one next step you can do in 2 minutes.`
    : null;

  return [pick, fromNote, extra].filter(Boolean).join(' ');
}

export default function MoodCheck() {
  const [selected, setSelected] = useState(null);
  const [note, setNote] = useState('');
  const [tip, setTip] = useState('');

  const disabled = useMemo(() => !selected && note.trim().length === 0, [selected, note]);

  const onSuggest = () => {
    const suggestion = generateSuggestion(selected, note);
    setTip(suggestion);
  };

  return (
    <section id="mood" className="relative scroll-mt-24 bg-neutral-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Quick mood check</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Pick how you feel and add a short note. You’ll get a gentle, AI‑style nudge crafted on the fly—right in your browser.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {moods.map((m) => {
            const Icon = m.icon;
            const active = selected?.key === m.key;
            return (
              <button
                key={m.key}
                onClick={() => setSelected(m)}
                className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${active ? 'border-white/30 bg-white/10' : 'border-white/10 hover:border-white/20 hover:bg-white/5'}`}
              >
                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${m.bg}`}>
                  <Icon className={`h-6 w-6 ${m.color}`} />
                </span>
                <div>
                  <div className="font-medium">{m.label}</div>
                  <div className="text-sm text-white/60">
                    {m.key === 'great' && 'Energized, upbeat, motivated'}
                    {m.key === 'okay' && 'Neutral, steady, managing'}
                    {m.key === 'low' && 'Tired, sad, overwhelmed'}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-5">
          <label className="text-sm text-white/70">Add a quick note (optional)</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 outline-none ring-0 focus:border-white/20"
            placeholder="School stress, friendship stuff, big test coming up…"
          />
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={onSuggest}
            disabled={disabled}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-neutral-900 transition enabled:hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Sparkles className="h-5 w-5 text-violet-600" /> Get suggestion
          </button>
          <span className="text-sm text-white/60">No data leaves your device.</span>
        </div>

        {tip && (
          <div className="mt-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4">
            <div className="text-sm text-white/60">Your gentle nudge</div>
            <p className="mt-1 text-lg leading-relaxed text-white">{tip}</p>
          </div>
        )}
      </div>
    </section>
  );
}
