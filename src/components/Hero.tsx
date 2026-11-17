import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenCheckout: (planId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {

  return (
    <section className="landing-hero relative pt-32 pb-20 lg:pt-38 lg:pb-28 overflow-hidden bg-dot-grid">
      
      {/* Background Radial Glow in Neon Lime */}
      <div className="hero-glow" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Header Text */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C4F82A]/10 border border-[#C4F82A]/30 text-xs sm:text-sm font-bold text-[#C4F82A] shadow-lg shadow-[#C4F82A]/10 mb-6 hover:border-[#C4F82A]/60 transition-colors">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C4F82A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C4F82A]"></span>
            </span>
            <span>TREINAMENTO MIDAS • ARBITRAGEM DE CRIPTOMOEDAS</span>
          </div>

          {/* Headline H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.06] mb-6">
            Aprenda arbitragem de criptomoedas.{' '}
            <span className="text-[#C4F82A] block sm:inline">
              Do conceito à prática.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-8">
            Entenda como analisar diferenças de preço, calcular custos e avaliar os riscos de uma operação. Um treinamento passo a passo, com <strong className="text-white font-semibold">68 aulas em vídeo</strong> e demonstrações usando a <strong className="text-[#C4F82A] font-semibold">plataforma Midas</strong>.
          </p>

          {/* Inline Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-300 mb-8 py-2.5 px-4 rounded-xl bg-[#11131A] border border-white/10 max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5 text-[#C4F82A] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4F82A]" />
              <span>68 aulas em vídeo</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5 text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>5 módulos de conteúdo</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5 text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>Exemplos práticos</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5 text-[#C4F82A] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4F82A] animate-pulse" />
              <span>Do zero à análise</span>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3">
            <button
              onClick={() => onOpenCheckout('pro')}
              className="contact-pill"
            >
              <span className="contact-pill-icon"><ArrowRight size={22}/></span><span>Quero aprender por R$ 197</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#treinamento"
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold text-sm text-slate-200 hover:text-white bg-[#11131A] hover:bg-[#161922] border border-white/10 hover:border-[#C4F82A]/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Conhecer as 5 módulos de conteúdo</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Microcopy */}
          <p className="text-xs text-slate-400 font-mono">
            Treinamento por <strong className="text-[#C4F82A] font-black">R$ 197</strong> · Pagamento único
          </p>

        </div>

      </div>
    </section>
  );
};
