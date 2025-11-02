import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'R$ 89/mês',
    highlight: 'Para equipes iniciando no WhatsApp + CRM',
    features: [
      '1 número WhatsApp',
      'Caixa de entrada unificada',
      'Pipeline de vendas básico',
      'Respostas com IA (limite justo)',
      'Integração Typebot',
    ],
    cta: 'Começar',
    popular: false,
  },
  {
    name: 'Pro',
    price: 'R$ 249/mês',
    highlight: 'Automação avançada e colaboração',
    features: [
      '3 números WhatsApp',
      'Filas, SLA e tags',
      'CRM completo + previsões',
      'IA nativa com sugestões',
      'Conectores n8n e Make.com',
    ],
    cta: 'Assinar Pro',
    popular: true,
  },
  {
    name: 'Business',
    price: 'Fale com vendas',
    highlight: 'Escala, segurança e sucesso dedicado',
    features: [
      'Números e usuários ilimitados',
      'SSO, auditoria e permissões',
      'SLA dedicado e onboarding',
      'Suporte prioritário 24/7',
      'Acesso antecipado a recursos',
    ],
    cta: 'Falar com vendas',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="precos" className="bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold sm:text-3xl"
          >
            Planos e Preços
          </motion.h3>
          <p className="mt-2 text-neutral-300">Transparente, simples e pronto para escalar com o seu negócio.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`relative rounded-2xl border bg-white/[0.03] p-6 backdrop-blur ${t.popular ? 'border-cyan-400/40 ring-1 ring-cyan-400/40' : 'border-white/10'}`}
            >
              {t.popular && (
                <span className="absolute -top-2 right-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">Mais popular</span>
              )}
              <div className="text-sm text-neutral-300">{t.name}</div>
              <div className="mt-1 text-2xl font-semibold">{t.price}</div>
              <div className="mt-1 text-sm text-neutral-300">{t.highlight}</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-200">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-cyan-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition ${t.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500' : 'border border-white/15 bg-white/5 text-white/90 hover:bg-white/10'}`}
              >
                {t.cta}
              </a>
              <div className="mt-3 text-center text-[11px] text-neutral-400">Sem taxa de implementação • Cancele quando quiser</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
