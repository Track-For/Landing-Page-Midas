import React from 'react';
import { 
  Globe, 
  Sliders, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  BellRing, 
  Zap, 
  RefreshCw,
  PowerOff,
  Layers,
  ShieldAlert,
  Coins
} from 'lucide-react';

interface AutomationsProps {
  onOpenCheckout: (planId?: string) => void;
}

export const Automations: React.FC<AutomationsProps> = ({ onOpenCheckout }) => {
  return (
    <section id="robos" className="py-24 bg-[#0A0C12] relative border-t border-b border-white/5 bg-dot-grid">
      
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#C4F82A]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C4F82A]/10 border border-[#C4F82A]/25 text-[#C4F82A] text-xs font-bold uppercase tracking-wider mb-4 font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Infraestrutura de Alta Precisão</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Execução Automática.{' '}
            <span className="text-[#C4F82A]">Desligue o computador e deixe o bot rodar.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A oportunidade de spread dura segundos. Nossos robôs operam na velocidade da luz diretamente na nuvem e no seu navegador com proteção rigorosa contra derrapagens.
          </p>
        </div>

        {/* Bloco Principal: Robô 24h na Nuvem */}
        <div className="mb-12 rounded-3xl p-[1px] bg-gradient-to-r from-[#C4F82A]/40 via-white/10 to-[#C4F82A]/30 shadow-2xl shadow-black/80">
          <div className="bg-[#11131A] rounded-[23px] p-8 lg:p-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Explicação */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C4F82A]/15 border border-[#C4F82A]/30 text-[#C4F82A] text-xs font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#C4F82A] animate-ping inline-block" />
                  <span>ROBÔ 24H NA NUVEM (API DEDICADA)</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Defina o spread de abertura, fechamento e quantidade. O bot faz o resto.
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  Você escolhe o spread mínimo de abertura, o alvo de fechamento e a quantidade. Depois disso, pode desligar o computador. O robô monitora o mercado 24h na nuvem, abre no spread alvo, entra em parcelas conforme a liquidez do livro, fecha sozinho e avisa no Telegram.
                </p>

                {/* Destaques Técnicos */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="bg-[#161922] p-4 rounded-xl border border-white/5">
                    <Sliders className="w-5 h-5 text-[#C4F82A] mb-2" />
                    <h4 className="text-sm font-bold text-white mb-1">Entrada em Parcelas</h4>
                    <p className="text-xs text-slate-400">Fraciona ordens conforme a liquidez real do livro sem derrapagem.</p>
                  </div>

                  <div className="bg-[#161922] p-4 rounded-xl border border-white/5">
                    <RefreshCw className="w-5 h-5 text-[#C4F82A] mb-2" />
                    <h4 className="text-sm font-bold text-white mb-1">Fecha Sozinho</h4>
                    <p className="text-xs text-slate-400">Desmonta ambas as pontas automaticamente assim que o spread convergir.</p>
                  </div>

                  <div className="bg-[#161922] p-4 rounded-xl border border-white/5">
                    <BellRing className="w-5 h-5 text-sky-400 mb-2" />
                    <h4 className="text-sm font-bold text-white mb-1">Avisa no Telegram</h4>
                    <p className="text-xs text-slate-400">Receba notificações de cada ciclo aberto e lucro liquidado em segundos.</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => onOpenCheckout('black')}
                    className="px-6 py-3.5 rounded-xl font-black text-sm text-[#08090C] bg-[#C4F82A] hover:bg-[#D4FF4D] transition-all shadow-lg shadow-[#C4F82A]/20 cursor-pointer"
                  >
                    Ativar Robô na Nuvem
                  </button>
                  <span className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                    <PowerOff className="w-4 h-4 text-[#C4F82A]" />
                    Pode desligar o PC 100%
                  </span>
                </div>
              </div>

              {/* Right Column: Fluxo Visual em 2 Passos */}
              <div className="lg:col-span-5 bg-[#0C0E14] p-6 rounded-2xl border border-white/10 space-y-4">
                
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 border-b border-white/10 pb-2">
                  Fluxo Visual em 2 Passos
                </div>

                {/* Passo 1 */}
                <div className="p-4 rounded-xl bg-[#161922] border border-[#C4F82A]/30 relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#C4F82A] flex items-center gap-1.5 font-mono">
                      <span>1 ·</span> Você Configura
                    </span>
                    <span className="text-[10px] bg-[#C4F82A]/10 text-[#C4F82A] px-2 py-0.5 rounded font-mono font-bold">
                      1 minuto
                    </span>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Spread Abertura:</span>
                      <span className="text-[#C4F82A] font-bold">&gt;= 8,50%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Spread Fechamento:</span>
                      <span className="text-white font-bold">&lt;= 0,40%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Capital por Ciclo:</span>
                      <span className="text-white font-bold">$ 500,00</span>
                    </div>
                  </div>
                </div>

                {/* Seta indicativa */}
                <div className="flex justify-center text-slate-500">
                  <ArrowRight className="w-5 h-5 rotate-90 text-[#C4F82A]" />
                </div>

                {/* Passo 2 */}
                <div className="p-4 rounded-xl bg-[#121A15] border border-[#C4F82A]/50 relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#C4F82A] flex items-center gap-2 font-mono">
                      <span className="w-2 h-2 rounded-full bg-[#C4F82A] animate-pulse" />
                      <span>2 ·</span> O Robô Opera na Nuvem
                    </span>
                    <span className="text-[10px] bg-[#C4F82A] text-[#08090C] px-2 py-0.5 rounded font-black font-mono">
                      ● RODANDO 24 H
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Monitora livros sem parar, abre no spread alvo, entra fracionado, acumula taxas periódicas de funding e encerra as duas pontas automaticamente quando o spread converge.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Dois Cards Complementares Lado a Lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Extensão do Chrome */}
          <div className="group rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-white/5 hover:from-[#C4F82A]/40 hover:to-[#C4F82A]/10 transition-all duration-300 shadow-xl">
            <div className="h-full bg-[#11131A] rounded-[15px] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C4F82A]/10 border border-[#C4F82A]/20 flex items-center justify-center text-[#C4F82A]">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#C4F82A]/15 text-[#C4F82A] border border-[#C4F82A]/30">
                    BOT POR EXTENSÃO WEB
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#C4F82A] transition-colors">
                  Extensão do Chrome (Moedas Novas)
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Opera direto na tela da corretora para moedas novas ou de baixa liquidez não liberadas na API. O bot simula cliques humanos em milissegundos com quatro camadas estritas de proteção:
                </p>

                <div className="space-y-3 mb-6 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C4F82A] shrink-0" />
                    <span><strong>Travas contra picos falsos:</strong> Exige tempo mínimo de sustentação do spread antes do disparo.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C4F82A] shrink-0" />
                    <span><strong>Fracionamento com intervalo:</strong> Quebra ordens no tempo para absorver o book gradualmente.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C4F82A] shrink-0" />
                    <span><strong>Saldo máximo por moeda e teto por ordem:</strong> Limita a exposição de capital de forma rígida.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Incluso no Plano Pro e Black</span>
                <span className="text-[#C4F82A] font-semibold">Chrome Web Store Oficial</span>
              </div>
            </div>
          </div>

          {/* Card 2: Piloto Automático USDT/BRL */}
          <div className="group rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-white/5 hover:from-[#C4F82A]/40 hover:to-[#C4F82A]/10 transition-all duration-300 shadow-xl">
            <div className="h-full bg-[#11131A] rounded-[15px] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C4F82A]/10 border border-[#C4F82A]/20 flex items-center justify-center text-[#C4F82A]">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#C4F82A]/15 text-[#C4F82A] border border-[#C4F82A]/30">
                    PILOTO AUTOMÁTICO DÓLAR
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#C4F82A] transition-colors">
                  Piloto Automático USDT/BRL
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Compra USDT em reais na corretora mais barata, transfere e vende na mais cara em 1 clique ou piloto automático integrado com o sistema financeiro nacional via Pix.
                </p>

                <div className="space-y-3 mb-6 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C4F82A] shrink-0" />
                    <span><strong>Varredura em 6 corretoras:</strong> Binance, Bybit, Bitget, MEXC, Mercado Bitcoin e Foxbit.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C4F82A] shrink-0" />
                    <span><strong>Whitelist de carteiras:</strong> Transferência de cripto autorizada apenas para contas próprias aprovadas.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C4F82A] shrink-0" />
                    <span><strong>100% à vista:</strong> Zero alavancagem ou risco de chamada de margem.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Velocidade média: 58 segundos</span>
                <span className="text-[#C4F82A] font-semibold">1 Clique ou 100% Auto</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
