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

      {/* About + Credits */}
      <section id="about" className="py-16 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">About BalanceAI</h3>
          <p className="mt-3 text-white/75 max-w-3xl mx-auto">
            BalanceAI is a calm, futuristic mental wellness experience with an immersive 3D hero, friendly design, and features like quick self-checks, personalized plans, insights, chat, and gentle reminders.
          </p>
          <p className="mt-5 text-white/80">
            Created by <span className="font-semibold">Sarang</span> and <span className="font-semibold">Dhananjay Kadam</span>.
          </p>
        </div>
      </section>

      <footer className="py-10 text-center text-white/60 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} BalanceAI — Built with love by Sarang and Dhananjay Kadam.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
