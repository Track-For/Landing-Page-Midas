import React, { useState } from 'react';
import { Check, Zap, ArrowRight, Star } from 'lucide-react';
import { PLANS } from '../data/mockData';

interface PricingSectionProps {
  onOpenCheckout: (planId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenCheckout }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <section id="precos" className="py-24 bg-[#08090C] relative">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#C4F82A]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C4F82A]/10 border border-[#C4F82A]/25 text-[#C4F82A] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Assinaturas Transparentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Escolha o nível da sua operação.{' '}
            <span className="text-[#C4F82A]">Cancele quando quiser.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8">
            Preços acessíveis construídos para se pagarem rapidamente com os primeiros spreads capturados pelos robôs.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center bg-[#11131A] p-1.5 rounded-2xl border border-white/10 shadow-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#08090C] shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Recorrência Mensal
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-[#C4F82A] text-[#08090C] shadow-md shadow-[#C4F82A]/25 font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Plano Anual</span>
              <span className="bg-[#08090C] text-[#C4F82A] text-[10px] px-2 py-0.5 rounded-md font-mono font-black">
                -20% OFF
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS.map((plan) => {
            const isHighlight = plan.highlighted;
            const price = billingCycle === 'annual' 
              ? plan.priceAnnualEquivalent 
              : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-[1px] transition-all duration-300 flex flex-col ${
                  isHighlight
                    ? 'bg-gradient-to-b from-[#C4F82A] via-[#C4F82A]/40 to-white/10 shadow-2xl shadow-[#C4F82A]/15 scale-[1.03] z-20'
                    : 'bg-gradient-to-b from-white/15 to-white/5 hover:border-white/20 z-10'
                }`}
              >
                {/* Most Chosen Tag */}
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C4F82A] text-[#08090C] font-black text-xs tracking-wider uppercase shadow-lg shadow-[#C4F82A]/30 flex items-center gap-1.5 font-mono">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>MAIS ESCOLHIDO</span>
                  </div>
                )}

                <div className={`h-full rounded-[23px] p-8 flex flex-col justify-between ${
                  isHighlight ? 'bg-[#131720]' : 'bg-[#11131A]'
                }`}>
                  
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                        isHighlight
                          ? 'bg-[#C4F82A]/15 text-[#C4F82A] border-[#C4F82A]/40'
                          : 'bg-white/5 text-slate-400 border-white/10'
                      }`}>
                        {plan.badge}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 min-h-[36px] mb-6">
                      {plan.subtitle}
                    </p>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-white/10">
                      <div className="flex items-baseline gap-1 font-mono">
                        <span className="text-2xl font-bold text-slate-300">R$</span>
                        <span className={`text-5xl font-black tracking-tight tabular-nums ${
                          isHighlight ? 'text-[#C4F82A]' : 'text-white'
                        }`}>
                          {price}
                        </span>
                        <span className="text-sm text-slate-400 font-sans">
                          {billingCycle === 'annual' ? '/mês no anual' : '/mês'}
                        </span>
                      </div>
                      {billingCycle === 'annual' && (
                        <div className="text-[11px] text-[#C4F82A] font-mono font-semibold mt-1">
                          A partir de R$ 40/mês · Economize até R$ {(plan.priceMonthly * 12 * 0.2).toFixed(0)}/ano
                        </div>
                      )}
                    </div>

                    {/* Features list */}
                    <div className="space-y-3 mb-8">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                        O que está incluso:
                      </div>
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isHighlight ? 'text-[#C4F82A]' : 'text-slate-400'
                          }`} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div>
                    <button
                      onClick={() => onOpenCheckout(plan.id)}
                      className={`w-full py-4 rounded-xl font-black text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer ${
                        isHighlight
                          ? 'bg-[#C4F82A] hover:bg-[#D4FF4D] text-[#08090C] shadow-[#C4F82A]/25'
                          : 'bg-white/10 hover:bg-white/15 text-white hover:text-[#C4F82A] border border-white/10 hover:border-[#C4F82A]/40'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="text-center text-[10px] text-slate-500 mt-2 font-mono">
                      {plan.ctaBadge} · Ativação Imediata
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Footer Notice */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto font-mono">
          <p>
            Pagamento via <strong className="text-white">Pix</strong> ou <strong className="text-white">Cartão de Crédito</strong> · Recorrência mensal ou anual sem fidelidade · Cancele quando quiser diretamente no painel.
          </p>
        </div>

      </div>
    </section>
  );
};
