import React, { useState } from 'react';
import { 
  BarChart3, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Check,
  Zap,
  Layers,
  Sliders
} from 'lucide-react';
import { OPERATOR_SUMMARY, REAL_OPERATIONS, type OperationDetail } from '../data/mockData';

export const ResultsSection: React.FC = () => {
  const [selectedOpId, setSelectedOpId] = useState<string>('one');

  const selectedOp = REAL_OPERATIONS.find((op) => op.id === selectedOpId) || REAL_OPERATIONS[0];

  return (
    <section id="resultados" className="py-24 bg-[#0A0C12] relative border-t border-b border-white/5 bg-dot-grid">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-[#C4F82A]/5 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C4F82A]/10 border border-[#C4F82A]/25 text-[#C4F82A] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Métricas e Ciclos Auditados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Resultados Reais.{' '}
            <span className="text-[#C4F82A]">Clique e explore cada ciclo operacional.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Sem promessas teóricas de livro ideal. Veja as operações executadas pelos robôs com dados reais de parcelamento, funding creditado e lucro líquido descontando taxas.
          </p>
        </div>

        {/* Resumo do Operador (Victor I.) */}
        <div className="mb-12 rounded-3xl p-[1px] bg-gradient-to-r from-[#C4F82A]/50 via-white/10 to-[#C4F82A]/30 shadow-2xl">
          <div className="bg-[#11131A] rounded-[23px] p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#08090C] bg-[#C4F82A] px-2.5 py-0.5 rounded">
                    Operador Auditado
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Últimos {OPERATOR_SUMMARY.periodDays} dias de operação</span>
                </div>
                <h3 className="text-2xl font-black text-white">
                  {OPERATOR_SUMMARY.name} — Painel Consolidado de Robôs
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Estratégias delta-neutras em Spot × Futuros e Piloto Automático USDT/BRL com gestão conservadora de risco.
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 font-mono">
                
                <div className="bg-[#0C0E14] p-3.5 rounded-xl border border-white/5">
                  <div className="text-[11px] text-slate-400 font-sans">Robôs Ativos</div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-0.5 tabular-nums">
                    {OPERATOR_SUMMARY.activeBots} bots
                  </div>
                  <div className="text-[10px] text-[#C4F82A] flex items-center gap-1 mt-1 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4F82A] animate-pulse" />
                    24h na nuvem
                  </div>
                </div>

                <div className="bg-[#0C0E14] p-3.5 rounded-xl border border-white/5">
                  <div className="text-[11px] text-slate-400 font-sans">Total de Ordens</div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-0.5 tabular-nums">
                    {OPERATOR_SUMMARY.totalOrders.toLocaleString('pt-BR')}
                  </div>
                  <div className="text-[10px] text-slate-400 font-sans">fracionadas</div>
                </div>

                <div className="bg-[#0C0E14] p-3.5 rounded-xl border border-white/5">
                  <div className="text-[11px] text-slate-400 font-sans">Ciclos com Lucro</div>
                  <div className="text-xl sm:text-2xl font-black text-[#C4F82A] mt-0.5 tabular-nums">
                    {OPERATOR_SUMMARY.profitableCycles}
                  </div>
                  <div className="text-[10px] text-[#C4F82A] font-sans font-bold">
                    {OPERATOR_SUMMARY.winrate} de acerto
                  </div>
                </div>

                <div className="bg-[#121A15] p-3.5 rounded-xl border border-[#C4F82A]/30">
                  <div className="text-[11px] text-slate-400 font-sans">Lucro Líquido</div>
                  <div className="text-xl sm:text-2xl font-black text-[#C4F82A] mt-0.5 tabular-nums">
                    {OPERATOR_SUMMARY.totalProfitBRL}
                  </div>
                  <div className="text-[10px] text-slate-300 font-sans">
                    em {OPERATOR_SUMMARY.periodDays} dias
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Painel Interativo de 2 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
          
          {/* Coluna Esquerda: Detalhes da Operação Selecionada (Telemetria) */}
          <div className="lg:col-span-7 bg-[#11131A] rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            
            <div>
              {/* Header da Operação */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 mb-6">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl font-black text-white font-mono">{selectedOp.asset}</span>
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#C4F82A]/15 text-[#C4F82A] border border-[#C4F82A]/30 font-mono">
                      {selectedOp.mode}
                    </span>
                    <span className="text-xs text-slate-400">· {selectedOp.type}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-mono">
                    Rota: <strong className="text-white">{selectedOp.route}</strong>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-black text-[#C4F82A] font-mono tabular-nums">
                    {selectedOp.profitNetBRL}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Lucro líquido ({selectedOp.profitPercent})
                  </div>
                </div>
              </div>

              {/* História da Operação */}
              <div className="mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Histórico e Lógica de Execução:
                </span>
                <p className="text-sm text-slate-200 leading-relaxed bg-[#0C0E14] p-4 rounded-xl border border-white/5">
                  {selectedOp.story}
                </p>
              </div>

              {/* Grid de Telemetria da Operação */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs mb-6">
                
                <div className="bg-[#161922] p-3 rounded-xl border border-white/5">
                  <span className="text-slate-400 block text-[10px] font-sans">Duração do Ciclo</span>
                  <span className="font-bold text-white text-sm mt-0.5 block">{selectedOp.duration}</span>
                </div>

                <div className="bg-[#161922] p-3 rounded-xl border border-white/5">
                  <span className="text-slate-400 block text-[10px] font-sans">Entradas no Book</span>
                  <span className="font-bold text-[#C4F82A] text-sm mt-0.5 block">{selectedOp.entriesCount} parcelas</span>
                </div>

                <div className="bg-[#161922] p-3 rounded-xl border border-white/5">
                  <span className="text-slate-400 block text-[10px] font-sans">Spread de Abertura</span>
                  <span className="font-bold text-white text-sm mt-0.5 block">{selectedOp.openSpread}</span>
                </div>

                <div className="bg-[#161922] p-3 rounded-xl border border-white/5">
                  <span className="text-slate-400 block text-[10px] font-sans">Spread Fechamento</span>
                  <span className="font-bold text-slate-200 text-sm mt-0.5 block">{selectedOp.closeSpread}</span>
                </div>

                <div className="bg-[#161922] p-3 rounded-xl border border-white/5">
                  <span className="text-slate-400 block text-[10px] font-sans">Funding Yield</span>
                  <span className="font-bold text-[#C4F82A] text-sm mt-0.5 block">{selectedOp.fundingProfit}</span>
                </div>

                <div className="bg-[#161922] p-3 rounded-xl border border-white/5">
                  <span className="text-slate-400 block text-[10px] font-sans">Taxas Exchanges</span>
                  <span className="font-bold text-slate-400 text-sm mt-0.5 block">{selectedOp.exchangeFees}</span>
                </div>

              </div>
            </div>

            {/* Bottom status badge */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C4F82A]" />
                Taxas de corretagem e derrapagem já deduzidas
              </span>
              <span className="text-[#C4F82A] font-bold">● {selectedOp.status}</span>
            </div>

          </div>

          {/* Coluna Direita: Lista de Operações Clicáveis */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 px-1 mb-1">
              Selecione uma operação para inspecionar:
            </div>

            {REAL_OPERATIONS.map((op) => {
              const isSelected = selectedOpId === op.id;
              return (
                <button
                  key={op.id}
                  onClick={() => setSelectedOpId(op.id)}
                  className={`w-full p-4 rounded-xl text-left transition-all border flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-[#161922] border-[#C4F82A] shadow-lg shadow-[#C4F82A]/15 scale-[1.01]'
                      : 'bg-[#11131A] border-white/10 hover:border-white/20 hover:bg-[#14161F]'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-white text-base font-mono">{op.asset}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-mono">
                        {op.mode}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-mono">
                      {op.route} · <span className="text-slate-300">{op.duration}</span>
                    </div>
                  </div>

                  <div className="text-right flex items-center gap-2">
                    <div>
                      <div className="font-mono font-black text-sm text-[#C4F82A] tabular-nums">
                        {op.profitNetBRL}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        {op.profitPercent}
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#C4F82A] translate-x-0.5' : 'text-slate-600'
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Disclaimer Transparente de Risco */}
        <div className="max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-[#11131A] border border-[#C4F82A]/20 flex items-start gap-3 text-xs text-slate-300">
          <AlertTriangle className="w-5 h-5 text-[#C4F82A] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#C4F82A] block mb-0.5 font-mono">Aviso de Transparência Radical:</span>
            Resultados passados não garantem retornos futuros. A arbitragem com posições neutras elimina a exposição à volatilidade do preço do ativo, mas envolve riscos operacionais inerentes aos livros de ofertas e corretoras, descritos na seção de segurança abaixo.
          </div>
        </div>

      </div>
    </section>
  );
};
