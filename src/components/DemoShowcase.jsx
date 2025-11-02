import { motion } from 'framer-motion';

export default function DemoShowcase() {
  return (
    <section className="bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold">Veja o MDOFlow V2 em ação</h3>
            <p className="mt-2 max-w-xl text-neutral-300">
              Um painel único para centralizar contatos, tickets, funil de vendas e automações.
              Simples para a equipe. Poderoso para o negócio.
            </p>

            <div className="mt-6 rounded-xl border border-white/10 bg-neutral-900 p-4">
              <div className="rounded-lg border border-white/10 bg-neutral-950 p-4">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-xs text-neutral-400">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-3">mdoflow.app/dashboard</span>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <div className="text-xs font-medium text-neutral-200">Atividade recente</div>
                    <div className="mt-3 space-y-2 text-[11px] text-neutral-300">
                      <div className="rounded-md bg-white/5 p-2">WhatsApp • Novo lead de campanha Instagram</div>
                      <div className="rounded-md bg-white/5 p-2">IA • Resposta sugerida enviada</div>
                      <div className="rounded-md bg-white/5 p-2">n8n • Fluxo "qualificação" concluído</div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <div className="text-xs font-medium text-neutral-200">Metas do mês</div>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                      <div className="rounded-md bg-gradient-to-b from-cyan-500/30 to-blue-600/30 p-3">
                        <div className="text-lg font-semibold">1.2k</div>
                        <div className="text-[10px] text-neutral-200">Novos leads</div>
                      </div>
                      <div className="rounded-md bg-white/5 p-3">
                        <div className="text-lg font-semibold">78%</div>
                        <div className="text-[10px] text-neutral-300">SLAs OK</div>
                      </div>
                      <div className="rounded-md bg-white/5 p-3">
                        <div className="text-lg font-semibold">34%</div>
                        <div className="text-[10px] text-neutral-300">Win rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <div className="text-xs uppercase tracking-wider text-cyan-300">Confiado por equipes modernas</div>
              <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3 text-neutral-300">
                <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm">Nexa Group</span>
                <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm">Prime Digital</span>
                <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm">Venturo Labs</span>
                <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm">Orion CX</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[{
                quote: 'Reduzimos o tempo médio de resposta em 52% e aumentamos a conversão de inbound.',
                author: 'Carla Mendes, Head de CX • Nexa Group'
              }, {
                quote: 'A integração nativa com n8n e Typebot nos deu velocidade sem abrir mão de controle.',
                author: 'Diego Souza, Ops • Prime Digital'
              }].map((t) => (
                <div key={t.author} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-neutral-200">“{t.quote}”</p>
                  <div className="mt-3 text-xs text-neutral-400">{t.author}</div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-5">
              <div className="text-sm font-medium">Pronto para começar?</div>
              <p className="mt-1 text-sm text-neutral-300">Crie sua conta em minutos e conecte seu WhatsApp oficial com segurança e conformidade.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#precos" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white hover:from-cyan-400 hover:to-blue-500">Ver planos</a>
                <a href="#precos" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10">Testar grátis</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
