import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Play, Pause, Cpu, ShieldCheck, Activity, Maximize2, Radio } from 'lucide-react';
import { LiveMonitorDemo } from './LiveMonitorDemo';

interface HeroProps {
  onOpenCheckout: (planId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section className="relative pt-32 pb-20 lg:pt-38 lg:pb-28 overflow-hidden bg-dot-grid">
      
      {/* Background Radial Glow in Neon Lime */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#C4F82A]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Header Text */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C4F82A]/10 border border-[#C4F82A]/30 text-xs sm:text-sm font-bold text-[#C4F82A] shadow-lg shadow-[#C4F82A]/10 mb-6 hover:border-[#C4F82A]/60 transition-colors">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C4F82A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C4F82A]"></span>
            </span>
            <span>✦ Plataforma Completa de Arbitragem — Monitor + Robôs</span>
          </div>

          {/* Headline H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.06] mb-6">
            Arbitragem de Criptomoedas.{' '}
            <span className="text-[#C4F82A] block sm:inline">
              Com execução automática.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-8">
            Você configura. O bot opera. A Midas monitora spreads em <strong className="text-white font-semibold">13 corretoras</strong>, identifica as melhores oportunidades de arbitragem e executa a operação completa — <strong className="text-[#C4F82A] font-semibold">abertura e fechamento</strong> — automaticamente.
          </p>

          {/* Inline Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-300 mb-8 py-2.5 px-4 rounded-xl bg-[#11131A] border border-white/10 max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5 text-[#C4F82A] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4F82A]" />
              <span>+1500 moedas ativas</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5 text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>4 modalidades</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5 text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>13 corretoras</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5 text-[#C4F82A] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4F82A] animate-pulse" />
              <span>Execução automática</span>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3">
            <button
              onClick={() => onOpenCheckout('pro')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-black text-base text-[#08090C] bg-[#C4F82A] hover:bg-[#D4FF4D] shadow-xl shadow-[#C4F82A]/25 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Começar agora</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#modalidades"
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold text-sm text-slate-200 hover:text-white bg-[#11131A] hover:bg-[#161922] border border-white/10 hover:border-[#C4F82A]/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Conhecer as 4 modalidades</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Microcopy */}
          <p className="text-xs text-slate-400 font-mono">
            Planos a partir de <strong className="text-[#C4F82A] font-black">R$ 40/mês</strong> no plano anual · Pix ou cartão
          </p>

        </div>

        {/* Player / Mockup Central Demonstrativo */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-[#C4F82A]/40 via-white/10 to-[#C4F82A]/20 shadow-2xl shadow-black/80">
            <div className="bg-[#11131A] rounded-2xl overflow-hidden border border-white/5">
              
              {/* Player Top Navigation Bar */}
              <div className="px-4 py-3 bg-[#0C0E14] border-b border-white/10 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#C4F82A]/80 inline-block" />
                  </div>
                  <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">
                    midas.com.br — Como a Midas funciona
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 bg-[#C4F82A]/10 border border-[#C4F82A]/30 px-2.5 py-0.5 rounded text-[11px] font-bold text-[#C4F82A]">
                    <Radio className="w-3 h-3 text-[#C4F82A] animate-pulse" />
                    <span>DEMO INTERATIVA AO VIVO</span>
                  </span>
                  <button
                    onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    title={isPlayingVideo ? 'Pausar demonstração' : 'Executar demonstração'}
                  >
                    {isPlayingVideo ? <Pause className="w-3.5 h-3.5 text-[#C4F82A]" /> : <Play className="w-3.5 h-3.5 text-[#C4F82A] fill-[#C4F82A]" />}
                  </button>
                </div>
              </div>

              {/* Dynamic Live Monitor embedded into the mockup */}
              <LiveMonitorDemo />

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
