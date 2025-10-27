import React from 'react';
import Hero from './components/Hero';
import MoodCheck from './components/MoodCheck';
import BreathCoach from './components/BreathCoach';
import Resources from './components/Resources';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-inter text-white">
      <Hero />
      <main>
        <MoodCheck />
        <BreathCoach />
        <Resources />
      </main>
      <footer className="border-t border-white/10 bg-neutral-950 px-6 py-8 text-center text-sm text-white/60">
        Built for mindful moments. If you’re in crisis, use the resources above or contact local emergency services.
      </footer>
    </div>
  );
}

export default App;
