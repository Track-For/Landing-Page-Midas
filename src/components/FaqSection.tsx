import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredFaq = FAQ_ITEMS.filter(item => {
    if (activeCategory === 'todos') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="faq" className="py-24 bg-[#0A0C12] relative border-t border-white/5 bg-dot-grid">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#C4F82A]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-slate-300 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#C4F82A]" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Tudo o que você precisa saber sobre a plataforma Midas, segurança dos robôs e funcionamento da arbitragem.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveCategory('todos')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'todos'
                  ? 'bg-[#C4F82A] text-[#08090C]'
                  : 'bg-[#11131A] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              Todas as Dúvidas
            </button>
            <button
              onClick={() => setActiveCategory('geral')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'geral'
                  ? 'bg-[#C4F82A] text-[#08090C]'
                  : 'bg-[#11131A] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              Conceito & Modalidades
            </button>
            <button
              onClick={() => setActiveCategory('robos')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'robos'
                  ? 'bg-[#C4F82A] text-[#08090C]'
                  : 'bg-[#11131A] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              Robôs & Automação
            </button>
            <button
              onClick={() => setActiveCategory('seguranca')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'seguranca'
                  ? 'bg-[#C4F82A] text-[#08090C]'
                  : 'bg-[#11131A] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              Segurança & Riscos
            </button>
            <button
              onClick={() => setActiveCategory('planos')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'planos'
                  ? 'bg-[#C4F82A] text-[#08090C]'
                  : 'bg-[#11131A] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              Planos & Cancelamento
            </button>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all border ${
                  isOpen
                    ? 'bg-[#131720] border-[#C4F82A]/50 shadow-lg shadow-black/40'
                    : 'bg-[#11131A] border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-2">
                    {item.question}
                  </span>
                  <div className="p-1.5 rounded-lg bg-white/5 text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#C4F82A]" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Help Card */}
        <div className="mt-12 p-6 rounded-2xl bg-[#11131A] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C4F82A]/15 border border-[#C4F82A]/30 flex items-center justify-center text-[#C4F82A]">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Ainda tem alguma dúvida específica?</div>
              <div className="text-xs text-slate-400">Nossa equipe de especialistas responde em poucos minutos no WhatsApp.</div>
            </div>
          </div>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20a%20Midas"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-black text-[#08090C] bg-[#C4F82A] hover:bg-[#D4FF4D] transition-all flex items-center gap-2 shrink-0 font-mono shadow-md shadow-[#C4F82A]/20"
          >
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
