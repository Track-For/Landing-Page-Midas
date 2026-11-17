import React, { useState } from 'react';
import { Calculator as CalcIcon, ArrowRight, ShieldCheck } from 'lucide-react';

interface CalculatorProps {
  onOpenCheckout: (planId?: string) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onOpenCheckout }) => {
  const [capital, setCapital] = useState<number>(5000);
  const [tradesPerDay, setTradesPerDay] = useState<number>(3);
  const [avgSpread, setAvgSpread] = useState<number>(1.8);

  // Estimative calculations with conservative factor factoring fees & slippage
  const dailyReturnPercent = tradesPerDay * avgSpread * 0.45;
  const estimatedDailyBRL = capital * (dailyReturnPercent / 100);
  const estimatedMonthlyBRL = estimatedDailyBRL * 30;
  const roiMonthlyPercent = (estimatedMonthlyBRL / capital) * 100;

  return (
    <section className="py-20 bg-[#08090C] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl p-[1px] bg-gradient-to-r from-[#C4F82A]/40 via-white/10 to-[#C4F82A]/30 shadow-2xl">
          <div className="bg-[#11131A] rounded-[23px] p-6 sm:p-10 lg:p-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Sliders */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C4F82A]/10 border border-[#C4F82A]/30 text-[#C4F82A] text-xs font-mono font-bold">
                  <CalcIcon className="w-3.5 h-3.5" />
                  <span>SIMULADOR DE ESTIMATIVA</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Quanto você pode lucrar com a arbitragem?
                </h3>
                <p className="text-slate-300 text-sm">
                  Ajuste o capital operacional disponível e veja a projeção conservadora com base na média diária de ciclos executados pelos robôs.
                </p>

                {/* Slider 1: Capital */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-mono">
                    <span className="text-slate-300 font-sans">Capital Operacional:</span>
                    <span className="text-xl font-black text-[#C4F82A] tabular-nums">
                      R$ {capital.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={capital}
                    onChange={(e) => setCapital(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#C4F82A]"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                    <span>R$ 1.000</span>
                    <span>R$ 25.000</span>
                    <span>R$ 50.000</span>
                  </div>
                </div>

                {/* Slider 2: Ciclos por dia */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-mono">
                    <span className="text-slate-300 font-sans">Ciclos do Robô por dia:</span>
                    <span className="text-lg font-bold text-white tabular-nums">
                      {tradesPerDay} {tradesPerDay === 1 ? 'ciclo' : 'ciclos/dia'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={tradesPerDay}
                    onChange={(e) => setTradesPerDay(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#C4F82A]"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                    <span>1 ciclo (moderado)</span>
                    <span>5 ciclos (ativo)</span>
                    <span>10 ciclos (24h)</span>
                  </div>
                </div>

                {/* Slider 3: Spread médio */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-mono">
                    <span className="text-slate-300 font-sans">Spread Médio Alvo:</span>
                    <span className="text-lg font-black text-[#C4F82A] tabular-nums">
                      {avgSpread.toFixed(1)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.8"
                    max="6.0"
                    step="0.2"
                    value={avgSpread}
                    onChange={(e) => setAvgSpread(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#C4F82A]"
                  />
                </div>

              </div>

              {/* Right Column: Estimated Returns Card */}
              <div className="lg:col-span-5 bg-[#0C0E14] rounded-2xl p-6 border border-[#C4F82A]/30 flex flex-col justify-between space-y-6">
                
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Projeção Líquida Estimada
                  </span>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-[#C4F82A] tabular-nums">
                    R$ {Math.round(estimatedMonthlyBRL).toLocaleString('pt-BR')}
                    <span className="text-sm font-sans font-medium text-slate-400"> /mês</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-mono">
                    Retorno estimado de aprox. <strong className="text-[#C4F82A]">+{roiMonthlyPercent.toFixed(1)}% a.m.</strong>
                  </div>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-sans">Retorno diário médio:</span>
                    <span className="text-white font-bold">R$ {estimatedDailyBRL.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-sans">Desconto de taxas operacionais:</span>
                    <span className="text-[#C4F82A] font-bold">Já embutido</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-sans">Exposição ao preço:</span>
                    <span className="text-white font-bold">Neutra (0%)</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenCheckout('pro')}
                  className="w-full py-4 rounded-xl font-black text-sm text-[#08090C] bg-[#C4F82A] hover:bg-[#D4FF4D] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C4F82A]/20 cursor-pointer"
                >
                  <span>Começar a Arbitrar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-slate-500 text-center leading-normal">
                  *Valores estimados para fins educativos. O resultado real depende da liquidez dos livros e das janelas de spread encontradas no mercado.
                </p>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
