import { siteConfig } from '../siteConfig';
import { ArrowRight, MessageCircle, ShieldCheck, Zap } from 'lucide-react';

export const CtaSection = () => {
  return (
    <section className="py-24 bg-[#08090C] relative overflow-hidden bg-dot-grid">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-[#C4F82A]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-[1px] bg-gradient-to-r from-[#C4F82A] via-white/20 to-[#C4F82A] shadow-2xl shadow-[#C4F82A]/10">
          <div className="bg-[#11131A] rounded-[23px] p-8 sm:p-14 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C4F82A]/10 border border-[#C4F82A]/25 text-[#C4F82A] text-xs font-mono font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>PRONTO PARA COMEÇAR A APRENDER?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
              Entenda a diferença.{' '}
              <span className="text-[#C4F82A] block sm:inline">
                Aprenda a analisar.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              Dê o primeiro passo na arbitragem de criptomoedas com 5 módulos, 68 aulas em vídeo e exemplos práticos usando a Midas. Treinamento por R$ 97 em pagamento único.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={siteConfig.courseCheckoutUrl}
                className="checkout-cta w-full sm:w-auto px-8 py-4 rounded-xl font-black text-base text-[#08090C] bg-[#C4F82A] hover:bg-[#D4FF4D] shadow-xl shadow-[#C4F82A]/25 hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer font-mono"
              >
                <span>Quero o treinamento por R$ 97</span>
                <ArrowRight className="w-5 h-5" />
              </a>


            </div>

            {siteConfig.whatsappNumber && <a className="whatsapp-link" href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer"><MessageCircle size={20}/> Fale com a Midas no WhatsApp</a>}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C4F82A]" />
                <span>Curso online</span>
              </div>
              <span>·</span>
              <div>68 aulas em vídeo</div>
              <span>·</span>
              <div>Pagamento único</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
