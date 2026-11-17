import React from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Lock, 
  KeyRound, 
  CheckCircle2, 
  Activity, 
  Clock, 
  Layers, 
  Ban, 
  Shield
} from 'lucide-react';

export const SecuritySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0C12] relative border-t border-b border-white/5 bg-dot-grid">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#C4F82A]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5 text-[#C4F82A]" />
            <span>Segurança Institucional & Transparência</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            A verdade nua e crua.{' '}
            <span className="text-[#C4F82A]">Como protegemos você e quais riscos existem.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Nenhuma promessa de ganho mágico. Construímos a Midas para operadores sérios que priorizam controle patrimonial estrito e blindagem operacional.
          </p>
        </div>

        {/* 2-Column Contrast Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: Como protegemos você */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-[#C4F82A]/40 via-white/10 to-[#C4F82A]/5 shadow-xl">
            <div className="h-full bg-[#11131A] rounded-[15px] p-6 sm:p-8 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#C4F82A]/15 border border-[#C4F82A]/30 flex items-center justify-center text-[#C4F82A]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">Como Protegemos Você</h3>
                    <span className="text-xs text-[#C4F82A] font-mono">Arquitetura 100% não custodiante</span>
                  </div>
                </div>

                <div className="space-y-4">
                  
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <div className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-[#C4F82A] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          Dinheiro Fica Sempre nas Suas Corretoras
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Você nunca deposita capital na Midas. Seus saldos permanecem na Binance, Bybit, MEXC, Gate.io ou na corretora de sua escolha.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <div className="flex items-start gap-3">
                      <KeyRound className="w-5 h-5 text-[#C4F82A] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          Chaves de API Sem Permissão de Saque
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Os robôs conectam-se via API apenas com permissão de Leitura e Trade. A opção de saque é mantida desativada na corretora. Ninguém consegue retirar fundos.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#C4F82A] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          Transferências Só para Endereços Aprovados
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          No Piloto Automático do dólar, o robô só envia para carteiras próprias pré-cadastradas na whitelist de segurança da sua conta.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#C4F82A] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          Chaves Criptografadas de Ponta a Ponta
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Todas as credenciais de API são isoladas e protegidas por criptografia militar AES-256 no nível do navegador ou cofre em nuvem.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 font-mono flex items-center justify-between">
                <span>Auditoria de chaves ativa</span>
                <span className="text-[#C4F82A] font-bold">Zero custódia</span>
              </div>

            </div>
          </div>

          {/* Column 2: Os Riscos que Existem (Transparência Radical) */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-amber-500/30 via-white/10 to-amber-500/5 shadow-xl">
            <div className="h-full bg-[#141210] rounded-[15px] p-6 sm:p-8 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">Os Riscos que Existem</h3>
                    <span className="text-xs text-amber-400 font-mono">Transparência honesta sobre o mercado</span>
                  </div>
                </div>

                <div className="space-y-4">
                  
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <div className="flex items-start gap-3">
                      <Activity className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          Liquidez (Slippage em livro raso)
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Se o volume disponível nas melhores ofertas for menor que sua ordem, você pode sofrer derrapagem. Nossos robôs contornam isso parcelando ordens automaticamente.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          Funding Contra (Taxa de juros negativa)
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Em Spot × Futuros, se a posição demorar para convergir e a taxa de funding virar contra a sua ponta, parte do spread acumulado pode ser consumida.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <div className="flex items-start gap-3">
                      <Ban className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          Deslistagem de Moeda pela Corretora
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Em altcoins de baixa capitalização, uma exchange pode suspender negociações inesperadamente. Ensinamos a operar em pares com histórico consolidado.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                    <div className="flex items-start gap-3">
                      <Layers className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">
                          Transferência Lenta na Rede (Spot × Spot)
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Congestionamento na blockchain enquanto os tokens estão em trânsito. O monitor Midas avisa o status de saque de cada exchange antes do envio.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-amber-400 font-mono flex items-center justify-between">
                <span>Gestão ensinada na Mentoria</span>
                <span>Travas ativas nos bots</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
