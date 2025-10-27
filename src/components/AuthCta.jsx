import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function AuthCta() {
  return (
    <section id="auth" className="bg-neutral-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-xl text-center">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Get started</h3>
        <p className="mt-2 text-white/70">
          Create an account to take the assessment and unlock your personalized plan. No spam, no selling data.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-neutral-900 transition hover:bg-white/90 sm:w-auto"
          >
            Sign up with Email
          </a>
          <a
            href="#"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10 sm:w-auto"
          >
            Continue with Google
          </a>
        </div>
        <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/70">
          <ShieldCheck className="h-4 w-4" /> Your data stays with you — encryption and consent‑first integrations.
        </div>
      </div>
    </section>
  );
}
