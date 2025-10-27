import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import FeaturesGrid from './components/FeaturesGrid';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      <Navbar />
      <Hero3D />
      <FeaturesGrid />
      <CTASection />
      <footer className="py-10 text-center text-white/60 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} BalanceAI — a calm, 3D‑futuristic mental wellness experience.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
