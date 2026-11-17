import React, { useState, useRef, useEffect } from 'react';
import { 
  Cpu, 
  Hand, 
  Sparkles, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  TrendingUp,
  Layers
} from 'lucide-react';

interface ModalityCardData {
  id: string;
  badgeLabel: string;
  badgeType: 'bot' | 'manual' | 'auto';
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  example: {
    action1: {
      type: string;
      price: string;
      exchangeName: string;
      exchangeIcon: string;
      exchangeColor: string;
    };
    action2: {
      type: string;
      price: string;
      exchangeName: string;
      exchangeIcon: string;
      exchangeColor: string;
    };
    result: string;
    resultTag: string;
    note?: string;
  };
}

const MODALITY_CARDS: ModalityCardData[] = [
  {
    id: 'spot-futures',
    badgeLabel: 'AUTOMAÇÃO',
    badgeType: 'bot',
    title: 'Spot × Futuros',
    subtitle: 'Cash & Carry Neutro',
    description: 'Compra no spot de uma corretora e vende no futuro de outra ao mesmo tempo.',
    benefits: [
      'Posição neutra (protegida da alta e da queda)',
      'Funding pode somar ao lucro',
      'Automação pela extensão do navegador'
    ],
    example: {
      action1: {
        type: 'Compra',
        price: '1,04',
        exchangeName: 'MEXC',
        exchangeIcon: '🟢',
        exchangeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
      },
      action2: {
        type: 'Vende',
        price: '1,16',
        exchangeName: 'Gate.io',
        exchangeIcon: '🔵',
        exchangeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      },
      result: '+11,04%',
      resultTag: 'abertura',
      note: 'Funding recebido: +1,20% a cada 8h durante o ciclo'
    }
  },
  {
    id: 'futures-futures',
    badgeLabel: 'AUTOMAÇÃO',
    badgeType: 'bot',
    title: 'Futuros × Futuros',
    subtitle: 'Cross-Exchange Perpétuo',
    description: 'Compra o futuro numa corretora (Long) e vende na outra (Short) sem transferir moedas.',
    benefits: [
      'Nenhuma transferência entre corretoras',
      'Funding dos dois lados com horário',
      'Automação pela extensão do navegador'
    ],
    example: {
      action1: {
        type: 'Long',
        price: '0,0552',
        exchangeName: 'Gate.io',
        exchangeIcon: '🔵',
        exchangeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      },
      action2: {
        type: 'Short',
        price: '0,0570',
        exchangeName: 'MEXC',
        exchangeIcon: '🟢',
        exchangeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
      },
      result: '+3,18%',
      resultTag: 'abertura',
      note: 'Diferencial positivo de taxa em ambas as pontas'
    }
  },
  {
    id: 'spot-spot',
    badgeLabel: 'EXECUÇÃO MANUAL',
    badgeType: 'manual',
    title: 'Spot × Spot',
    subtitle: 'Arbitragem Espacial',
    description: 'Compra numa corretora, transfere a moeda pela rede e vende na outra onde está mais caro.',
    benefits: [
      'Sem alavancagem e sem derivativos',
      'Livro das duas corretoras na tela',
      'Taxas e rede de transferência já calculadas'
    ],
    example: {
      action1: {
        type: 'Compra',
        price: '0,1886',
        exchangeName: 'Mercado Bitcoin',
        exchangeIcon: '🇧🇷',
        exchangeColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      },
      action2: {
        type: 'Vende',
        price: '0,1989',
        exchangeName: 'Gate.io',
        exchangeIcon: '🔵',
        exchangeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      },
      result: '+4,98%',
      resultTag: 'líquido',
      note: 'Taxas de rede e corretagem já descontadas'
    }
  },
  {
    id: 'usdt-brl',
    badgeLabel: 'PILOTO AUTOMÁTICO',
    badgeType: 'auto',
    title: 'USDT/BRL',
    subtitle: 'Dólar Cripto via Pix',
    description: 'Arbitragem de dólar cripto comprando USDT em reais onde está mais barato e vendendo onde está mais caro.',
    benefits: [
      'Em 1 clique ou no piloto automático',
      'Lucro já líquido de taxas',
      'Só transfere para endereços aprovados'
    ],
    example: {
      action1: {
        type: 'Compra',
        price: 'R$ 5,09',
        exchangeName: 'Binance',
        exchangeIcon: '🟡',
        exchangeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30'
      },
      action2: {
        type: 'Vende',
        price: 'R$ 5,16',
        exchangeName: 'MEXC',
        exchangeIcon: '🟢',
        exchangeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
      },
      result: '+R$ 53,77',
      resultTag: 'líquido em R$ 5 mil',
      note: 'Ciclo completo executado em 58 segundos'
    }
  }
];

export const Modalities: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = MODALITY_CARDS.length;

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  const stage = useRef<HTMLDivElement>(null);
  const [spread, setSpread] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => {
      if (!stage.current) return;
      const rect = stage.current.getBoundingClientRect();
      setSpread(window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (Math.min(window.innerHeight, rect.height) * .8))));
    }); };
    update(); window.addEventListener('scroll', update, {passive:true}); window.addEventListener('resize', update);
    return () => {cancelAnimationFrame(frame); window.removeEventListener('scroll', update); window.removeEventListener('resize', update);};
  }, []);


  return (
    <section id="modalidades" className="py-24 bg-[#08090C] relative overflow-hidden select-none">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#C4F82A]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            <span>Quatro estratégias.</span><br/>Uma plataforma.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Escolha a modalidade que melhor se adapta ao seu perfil e capital disponível.
          </p>
        </div>

        {/* 3D Cover Flow Carousel Stage */}
        <div 
          className="relative w-full max-w-5xl mx-auto h-[560px] sm:h-[530px] flex items-center justify-center"
          ref={stage} tabIndex={0} role="region" aria-label="Modalidades de arbitragem"
          onKeyDown={e => {if(e.key === 'ArrowLeft') {e.preventDefault();prevSlide();} if(e.key === 'ArrowRight') {e.preventDefault();nextSlide();}}}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ perspective: '1200px' }}
        >
          {MODALITY_CARDS.map((card, index) => {
            // Calculate circular offset
            const diff = (index - activeIndex + total) % total;
            
            let positionStyle: React.CSSProperties = {};
            let isCenter = false;
            let isLeft = false;
            let isRight = false;

            if (diff === 0) {
              // Active Center Card
              isCenter = true;
              positionStyle = {
                transform: 'translateX(0%) translateZ(0px) scale(1) rotateY(0deg)',
                opacity: 1,
                zIndex: 20,
                pointerEvents: 'auto',
              };
            } else if (diff === 1) {
              // Next Card (Right)
              isRight = true;
              positionStyle = {
                transform: `translateX(${48 * spread}%) translateZ(-90px) scale(0.85) rotateZ(${8 * spread}deg)`,
                opacity: 0.35,
                zIndex: 10,
                pointerEvents: 'auto',
                cursor: 'pointer',
              };
            } else if (diff === total - 1) {
              // Prev Card (Left)
              isLeft = true;
              positionStyle = {
                transform: `translateX(${-48 * spread}%) translateZ(-90px) scale(0.85) rotateZ(${-8 * spread}deg)`,
                opacity: 0.35,
                zIndex: 10,
                pointerEvents: 'auto',
                cursor: 'pointer',
              };
            } else {
              // Behind / Hidden Card
              positionStyle = {
                transform: 'translateX(0%) translateZ(-200px) scale(0.7)',
                opacity: 0,
                zIndex: 0,
                pointerEvents: 'none',
              };
            }

            return (
              <div
                key={card.id}
                onClick={() => {
                  if (isLeft) prevSlide();
                  if (isRight) nextSlide();
                }}
                className="absolute top-0 w-full max-w-[420px] sm:max-w-[460px] h-[540px] sm:h-[510px] rounded-3xl p-[1px] transition-all duration-[450ms]"
                style={{
                  ...positionStyle,
                  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  transitionProperty: 'transform, opacity, z-index, box-shadow, border-color',
                }}
              >
                {/* Outer illuminated border for active card */}
                <div className={`h-full w-full rounded-3xl p-[1px] ${
                  isCenter
                    ? 'bg-gradient-to-b from-[#C4F82A]/70 via-[#C4F82A]/20 to-transparent shadow-[0_15px_40px_-10px_rgba(196,248,42,0.18)]'
                    : 'bg-white/10'
                }`}>
                  
                  {/* Card Surface */}
                  <div className={`h-full w-full rounded-[23px] p-6 sm:p-7 flex flex-col justify-between transition-colors ${
                    isCenter ? 'bg-[#11131A]' : 'bg-[#0D0F15]'
                  }`}>
                    
                    {/* Top Header: Badge on top-right */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                          {card.subtitle}
                        </span>

                        {/* Pill Badge in Lime Green */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wide bg-[#C4F82A]/15 text-[#C4F82A] border border-[#C4F82A]/35 font-mono shadow-sm">
                          {card.badgeType === 'bot' && <Cpu className="w-3.5 h-3.5 animate-pulse" />}
                          {card.badgeType === 'auto' && <Sparkles className="w-3.5 h-3.5" />}
                          {card.badgeType === 'manual' && <Hand className="w-3.5 h-3.5" />}
                          <span>{card.badgeLabel}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2.5">
                        {card.title}
                      </h3>

                      {/* Objective Description */}
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                        {card.description}
                      </p>

                      {/* 3 Bullet Points with Lime Checks */}
                      <div className="space-y-2.5 mb-5">
                        {card.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-[#C4F82A] shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlighted Bottom Box: EXEMPLO REAL NA PLATAFORMA */}
                    <div className="rounded-2xl bg-black/60 border border-white/10 p-3.5 sm:p-4 mt-auto">
                      
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                          <TrendingUp className="w-3 h-3 text-[#C4F82A]" />
                          EXEMPLO REAL NA PLATAFORMA
                        </span>

                        {/* Result Highlighted in Lime */}
                        <span className="font-mono font-black text-xs sm:text-sm text-[#C4F82A] bg-[#C4F82A]/10 px-2 py-0.5 rounded border border-[#C4F82A]/30 tabular-nums">
                          {card.example.result} <span className="text-[10px] font-normal text-slate-300">{card.example.resultTag}</span>
                        </span>
                      </div>

                      {/* Action 1 & Action 2 side by side */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        
                        {/* Action 1 */}
                        <div className="bg-[#161922] p-2 sm:p-2.5 rounded-xl border border-white/5 flex flex-col justify-between">
                          <div className="flex items-center justify-between text-[10px] text-slate-400 mb-0.5 font-mono">
                            <span>{card.example.action1.type}</span>
                            <span className="text-[11px]">{card.example.action1.exchangeIcon}</span>
                          </div>
                          <div className="font-mono font-black text-white text-sm sm:text-base tabular-nums">
                            {card.example.action1.price}
                          </div>
                          <div className="text-[10px] font-bold text-slate-400 mt-0.5">
                            {card.example.action1.exchangeName}
                          </div>
                        </div>

                        {/* Action 2 */}
                        <div className="bg-[#161922] p-2 sm:p-2.5 rounded-xl border border-white/5 flex flex-col justify-between">
                          <div className="flex items-center justify-between text-[10px] text-slate-400 mb-0.5 font-mono">
                            <span>{card.example.action2.type}</span>
                            <span className="text-[11px]">{card.example.action2.exchangeIcon}</span>
                          </div>
                          <div className="font-mono font-black text-white text-sm sm:text-base tabular-nums">
                            {card.example.action2.price}
                          </div>
                          <div className="text-[10px] font-bold text-slate-400 mt-0.5">
                            {card.example.action2.exchangeName}
                          </div>
                        </div>

                      </div>

                      {card.example.note && (
                        <div className="mt-2.5 text-[10px] text-slate-400 font-mono flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C4F82A] inline-block" />
                          <span>{card.example.note}</span>
                        </div>
                      )}

                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Pagination Bar: Circular Buttons < > & Lime Pill Dots */}
        <div className="flex items-center justify-center gap-6 mt-10">
          
          {/* Circular Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Modalidade anterior"
            className="w-11 h-11 rounded-full bg-[#11131A] hover:bg-[#161922] border border-white/10 hover:border-[#C4F82A]/50 text-slate-200 hover:text-[#C4F82A] transition-all flex items-center justify-center shadow-lg cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 -translate-x-0.5" />
          </button>

          {/* 4 Dots (Active turns into a Lime Pill) */}
          <div className="flex items-center gap-2">
            {MODALITY_CARDS.map((_, dotIdx) => {
              const isActive = activeIndex === dotIdx;
              return (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  aria-label={`Ir para modalidade ${dotIdx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-[450ms] cursor-pointer ${
                    isActive
                      ? 'w-8 bg-[#C4F82A] shadow-md shadow-[#C4F82A]/30'
                      : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                  style={{
                    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                />
              );
            })}
          </div>

          {/* Circular Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Próxima modalidade"
            className="w-11 h-11 rounded-full bg-[#11131A] hover:bg-[#161922] border border-white/10 hover:border-[#C4F82A]/50 text-slate-200 hover:text-[#C4F82A] transition-all flex items-center justify-center shadow-lg cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 translate-x-0.5" />
          </button>

        </div>

      </div>
    </section>
  );
};
