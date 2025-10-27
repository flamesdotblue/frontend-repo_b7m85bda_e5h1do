import React from 'react';
import LandingHero from './components/LandingHero';
import Benefits from './components/Benefits';
import WorkflowPreview from './components/WorkflowPreview';
import AuthCta from './components/AuthCta';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-inter text-white">
      <LandingHero />
      <main>
        <Benefits />
        <WorkflowPreview />
        <AuthCta />
      </main>
      <footer className="border-t border-white/10 bg-neutral-950 px-6 py-8 text-center text-sm text-white/60">
        BalanceAI · A neon‑orchid wellness experience. For emergencies, contact local services immediately.
      </footer>
    </div>
  );
}

export default App;
