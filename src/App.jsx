import Hero from './components/Hero';
import Features from './components/Features';
import DemoShowcase from './components/DemoShowcase';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <Features />
      <DemoShowcase />
      <Pricing />

      <footer className="border-t border-white/10 bg-neutral-950/80 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="text-sm text-neutral-400">
            © {new Date().getFullYear()} MDOFlow V2 • Todos os direitos reservados
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-neutral-300">
            <a href="#" className="hover:text-white">Contato</a>
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Status</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
