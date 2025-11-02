import { motion } from 'framer-motion';
import { MessageSquare, Brain, Workflow, Plug } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'WhatsApp oficial e multiatendimento',
    desc: 'Conecte seu número, crie filas, SLA e roteamento inteligente. Histórico unificado por contato.'
  },
  {
    icon: Plug,
    title: 'Conectores prontos',
    desc: 'Integre n8n, Typebot, Make.com e mais. Dispare fluxos, receba eventos e sincronize dados.'
  },
  {
    icon: Workflow,
    title: 'CRM integrado',
    desc: 'Pipeline de vendas, etapas personalizadas, tarefas, tags e previsões. Tudo no mesmo painel.'
  },
  {
    icon: Brain,
    title: 'IA nativa',
    desc: 'Respostas inteligentes, sugestão de próxima ação e análise de sentimento em tempo real.'
  }
];

export default function Features() {
  return (
    <section className="relative bg-neutral-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(34,211,238,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold sm:text-3xl"
          >
            Centralize comunicação e automação em um único lugar
          </motion.h2>
          <p className="mt-3 text-neutral-300">Funcionalidades essenciais para operação, vendas e suporte em escala.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 backdrop-blur transition hover:from-white/10 hover:to-white/[0.06]"
            >
              <f.icon className="h-5 w-5 text-cyan-300" />
              <h3 className="mt-3 text-base font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mini mockup */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-xl border border-white/10 bg-neutral-900 p-4"
        >
          <div className="rounded-lg border border-white/10 bg-neutral-950 p-3">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <div className="h-3 w-3 rounded-full bg-red-500/70" />
              <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <div className="h-3 w-3 rounded-full bg-green-500/70" />
              <div className="ml-4 text-xs text-neutral-400">mdoflow.app/painel</div>
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-neutral-900 p-4">
                <div className="text-sm font-medium text-neutral-200">Pipeline</div>
                <div className="mt-3 space-y-2">
                  <div className="rounded-md bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-3 text-xs text-neutral-300">
                    Lead novo • WhatsApp • Tag: Qualificado
                  </div>
                  <div className="rounded-md bg-white/5 p-3 text-xs text-neutral-300">
                    Demonstração agendada • Proposta enviada
                  </div>
                  <div className="rounded-md bg-white/5 p-3 text-xs text-neutral-300">
                    Follow-up • 2 dias
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-neutral-900 p-4">
                <div className="text-sm font-medium text-neutral-200">Atendimento</div>
                <div className="mt-3 space-y-2">
                  <div className="rounded-md bg-white/5 p-3 text-xs text-neutral-300">
                    Cliente: Olá! Preciso integrar com Typebot.
                  </div>
                  <div className="rounded-md bg-gradient-to-r from-cyan-600/30 to-blue-600/30 p-3 text-xs text-neutral-100">
                    IA: Posso sugerir um fluxo no n8n conectado ao seu WhatsApp. Enviar?
                  </div>
                  <div className="rounded-md bg-white/5 p-3 text-xs text-neutral-300">
                    Agente: Sim, pode seguir com a automação.
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-neutral-900 p-4">
                <div className="text-sm font-medium text-neutral-200">Insights</div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-gradient-to-b from-cyan-500/30 to-blue-600/30 p-3 text-center">
                    <div className="text-xl font-semibold">92%</div>
                    <div className="text-[10px] text-neutral-200">Satisfação</div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-3 text-center">
                    <div className="text-xl font-semibold">2.3m</div>
                    <div className="text-[10px] text-neutral-300">Tempo médio</div>
                  </div>
                  <div className="rounded-lg bg-white/5 p-3 text-center">
                    <div className="text-xl font-semibold">+36%</div>
                    <div className="text-[10px] text-neutral-300">Conversão</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
