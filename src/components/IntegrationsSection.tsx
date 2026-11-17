import React from 'react';
import { Network, ShieldCheck } from 'lucide-react';
import { EXCHANGES } from '../data/mockData';

export const IntegrationsSection: React.FC = () => {
  return (
    <section id="integracoes" className="py-24 bg-[#0A0C12] relative border-t border-b border-white/5 bg-dot-grid">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C4F82A]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Network className="w-3.5 h-3.5 text-[#C4F82A]" />
            <span>Ecossistema Multicorretoras</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Conectado às principais <span className="draw-circle">corretoras<svg viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true"><ellipse cx="150" cy="50" rx="146" ry="46" pathLength="1" /></svg></span>.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Conecte suas contas em segundos via chaves de API sem custódia e acesse livros de ordens sincronizados de exchanges centralizadas e DEX on-chain.
          </p>
        </div>

        {/* 13 Exchanges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {EXCHANGES.map((exchange) => (
            <div
              key={exchange.name}
              className="bg-[#11131A] rounded-xl p-4 border border-white/10 hover:border-[#C4F82A]/50 hover:bg-[#161922] transition-all group relative overflow-hidden"
            >
              {exchange.specialBadge && (
                <div className="absolute top-2 right-2 text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-[#C4F82A]/10 text-[#C4F82A] border border-[#C4F82A]/30">
                  {exchange.specialBadge}
                </div>
              )}

              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-2xl">{exchange.logo}</span>
                <span className="font-bold text-white text-sm group-hover:text-[#C4F82A] transition-colors">
                  {exchange.name}
                </span>
              </div>

              {/* Badges: Spot and Futures */}
              <div className="flex items-center gap-1.5 mb-2.5 font-mono">
                {exchange.spot && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-slate-200 border border-white/10">
                    Spot
                  </span>
                )}
                {exchange.futures && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#C4F82A]/15 text-[#C4F82A] border border-[#C4F82A]/30">
                    Futuros
                  </span>
                )}
              </div>

              <div className="text-[11px] text-slate-400 font-mono">
                Vol 24h: <span className="text-white font-bold">{exchange.volume24h}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-4 rounded-xl bg-[#11131A] border border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C4F82A]" />
            <span>Chaves de negociação salvas de forma segura diretamente no seu navegador ou cofre criptografado.</span>
          </div>
          <div className="text-[#C4F82A] font-semibold flex items-center gap-1">
            <span>+ Novas corretoras adicionadas periodicamente</span>
          </div>
        </div>

      </div>
    </section>
  );
};
