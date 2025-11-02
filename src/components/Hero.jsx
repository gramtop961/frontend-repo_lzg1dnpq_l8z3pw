import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-40" aria-hidden>
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/70 to-neutral-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            <Shield className="h-3.5 w-3.5 text-cyan-300" />
            SaaS pronto para uso • IA embutida • Conectores externos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
          >
            MDOFlow V2
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
            className="mt-4 text-lg text-neutral-300"
          >
            Gerencie atendimentos, leads e automações em um só lugar. Uma plataforma completa
            com WhatsApp, CRM, conectores (n8n, Typebot, Make.com) e inteligência artificial nativa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#precos"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:from-cyan-400 hover:to-blue-500"
            >
              <Rocket className="h-4 w-4" />
              Começar agora
            </a>
            <a
              href="#precos"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10"
            >
              Testar grátis
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
