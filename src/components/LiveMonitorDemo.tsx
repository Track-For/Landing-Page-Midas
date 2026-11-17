import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  RefreshCw, 
  TrendingUp, 
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { LIVE_OPPORTUNITIES, type LiveOpportunity } from '../data/mockData';

export const LiveMonitorDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [opportunities, setOpportunities] = useState<LiveOpportunity[]>(LIVE_OPPORTUNITIES);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState<number>(0);
  const [autoTick, setAutoTick] = useState(true);

  // Micro-fluctuation simulation for live crypto spreads
  useEffect(() => {
    if (!autoTick) return;
    const interval = setInterval(() => {
      setOpportunities(prev => 
        prev.map(item => {
          const delta = (Math.random() - 0.48) * 0.08;
          const newSpread = Math.max(0.8, +(item.spread + delta).toFixed(2));
          return {
            ...item,
            spread: newSpread,
            spreadFormatted: `+${newSpread.toFixed(2).replace('.', ',')}%`
          };
        })
      );
    }, 2800);
    return () => clearInterval(interval);
  }, [autoTick]);

  const filteredOpportunities = opportunities.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'spot-fut') return item.type.includes('Spot × Futuros');
    if (activeTab === 'fut-fut') return item.type.includes('Futuros × Futuros');
    if (activeTab === 'usdt-brl') return item.type.includes('Dólar Cripto');
    return true;
  });

  const runSimulation = () => {
    setIsSimulating(true);
    setSimulationStep(1);
    setTimeout(() => setSimulationStep(2), 900);
    setTimeout(() => setSimulationStep(3), 2000);
    setTimeout(() => setSimulationStep(4), 3100);
  };

  return (
    <div className="bg-[#11131A] overflow-hidden text-slate-100">
      
      {/* Filter Navigation Tabs */}
      <div className="px-4 py-3 bg-[#0C0E14] border-b border-white/5 flex items-center justify-between gap-2 overflow-x-auto text-xs">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-[#C4F82A] text-[#08090C] shadow-md shadow-[#C4F82A]/20'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Todas (5)
          </button>
          <button
            onClick={() => setActiveTab('spot-fut')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'spot-fut'
                ? 'bg-[#C4F82A] text-[#08090C] font-bold'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Spot × Futuros
          </button>
          <button
            onClick={() => setActiveTab('fut-fut')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'fut-fut'
                ? 'bg-[#C4F82A] text-[#08090C] font-bold'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Futuros × Futuros
          </button>
          <button
            onClick={() => setActiveTab('usdt-brl')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'usdt-brl'
                ? 'bg-[#C4F82A] text-[#08090C] font-bold'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            USDT/BRL
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={runSimulation}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black bg-[#C4F82A] hover:bg-[#D4FF4D] text-[#08090C] transition-all shadow-md shadow-[#C4F82A]/20 shrink-0 cursor-pointer"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Simular Ciclo do Robô</span>
          </button>
          <button
            onClick={() => setAutoTick(!autoTick)}
            title={autoTick ? "Pausar atualização em tempo real" : "Ativar tempo real"}
            className="p-1.5 rounded bg-white/5 text-[#C4F82A] border border-white/10 hover:bg-white/10"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${autoTick ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          </button>
        </div>
      </div>

      {/* Live Opportunities Table / Cards */}
      <div className="p-3 sm:p-4 space-y-2.5 max-h-[360px] overflow-y-auto">
        {filteredOpportunities.map((opp) => (
          <div
            key={opp.id}
            className="group p-3 sm:p-3.5 rounded-xl bg-[#161922] hover:bg-[#1C202C] border border-white/5 hover:border-[#C4F82A]/40 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            {/* Asset & Strategy */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C4F82A]/10 border border-[#C4F82A]/20 flex items-center justify-center font-black text-xs text-[#C4F82A] shrink-0 font-mono">
                {opp.pair.split('/')[0].slice(0, 4)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm group-hover:text-[#C4F82A] transition-colors">
                    {opp.pair}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-medium">
                    {opp.type}
                  </span>
                  {opp.status === 'new' && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#C4F82A]/20 text-[#C4F82A] border border-[#C4F82A]/40 font-extrabold animate-pulse">
                      NOVO SPREAD
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-400">
                  <span>Liq: <strong className="text-slate-300 font-mono">{opp.liquidity}</strong></span>
                  <span>·</span>
                  <span className="text-[#C4F82A] font-semibold">{opp.fundingRate}</span>
                </div>
              </div>
            </div>

            {/* Route & Prices */}
            <div className="flex items-center gap-2 text-xs bg-black/50 px-3 py-1.5 rounded-lg border border-white/5">
              <div className="text-left">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Comprar ({opp.buyExchange})</div>
                <div className="font-mono font-bold text-slate-200 tabular-nums">{opp.buyPrice}</div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#C4F82A] shrink-0 mx-1" />
              <div className="text-left">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Vender ({opp.sellExchange})</div>
                <div className="font-mono font-bold text-slate-200 tabular-nums">{opp.sellPrice}</div>
              </div>
            </div>

            {/* Spread & Result */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-slate-400">Spread:</span>
                <span className="font-mono font-black text-sm text-[#C4F82A] tabular-nums bg-[#C4F82A]/10 px-2 py-0.5 rounded border border-[#C4F82A]/20">
                  {opp.spreadFormatted}
                </span>
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Lucro est.: <span className="text-[#C4F82A] font-bold font-mono">{opp.estimatedNetProfit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Live Bot Execution Cycle Simulation Popup */}
      {isSimulating && (
        <div className="p-4 bg-[#141822] border-t border-[#C4F82A]/30 animate-in fade-in duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#C4F82A] animate-spin" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Execução de Ciclo em Andamento — Robô Midas
              </span>
            </div>
            <button
              onClick={() => { setIsSimulating(false); setSimulationStep(0); }}
              className="text-xs text-slate-400 hover:text-white"
            >
              Fechar simulação ✕
            </button>
          </div>

          {/* Stepper */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
            <div className={`p-2.5 rounded-lg border text-xs transition-all ${
              simulationStep >= 1 
                ? 'bg-[#C4F82A]/15 border-[#C4F82A]/50 text-[#C4F82A]' 
                : 'bg-black/40 border-white/5 text-slate-500'
            }`}>
              <div className="font-bold flex items-center gap-1.5">
                {simulationStep > 1 ? <CheckCircle2 className="w-3.5 h-3.5 text-[#C4F82A]" /> : '1.'}
                <span>Gatilho Atingido</span>
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Spread BP +11,04% detectado</div>
            </div>

            <div className={`p-2.5 rounded-lg border text-xs transition-all ${
              simulationStep >= 2 
                ? 'bg-[#C4F82A]/15 border-[#C4F82A]/50 text-[#C4F82A]' 
                : 'bg-black/40 border-white/5 text-slate-500'
            }`}>
              <div className="font-bold flex items-center gap-1.5">
                {simulationStep > 2 ? <CheckCircle2 className="w-3.5 h-3.5 text-[#C4F82A]" /> : '2.'}
                <span>Ordem Fracionada</span>
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Compra Spot MEXC + Short Gate</div>
            </div>

            <div className={`p-2.5 rounded-lg border text-xs transition-all ${
              simulationStep >= 3 
                ? 'bg-[#C4F82A]/15 border-[#C4F82A]/50 text-[#C4F82A]' 
                : 'bg-black/40 border-white/5 text-slate-500'
            }`}>
              <div className="font-bold flex items-center gap-1.5">
                {simulationStep > 3 ? <CheckCircle2 className="w-3.5 h-3.5 text-[#C4F82A]" /> : '3.'}
                <span>Neutro & Funding</span>
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Zero oscilação do mercado</div>
            </div>

            <div className={`p-2.5 rounded-lg border text-xs transition-all ${
              simulationStep >= 4 
                ? 'bg-[#C4F82A] border-[#C4F82A] text-[#08090C] font-black' 
                : 'bg-black/40 border-white/5 text-slate-500'
            }`}>
              <div className="font-bold flex items-center gap-1.5">
                {simulationStep === 4 ? <CheckCircle2 className="w-3.5 h-3.5 text-[#08090C]" /> : '4.'}
                <span>Fechamento</span>
              </div>
              <div className={`text-[10px] mt-0.5 ${simulationStep === 4 ? 'text-[#08090C] font-bold' : 'text-slate-400'}`}>
                {simulationStep === 4 ? 'Lucro líquido: +$88.30 ✅' : 'Aguardando convergência'}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dashboard Bottom Telemetry */}
      <div className="px-4 py-2.5 bg-[#090A0F] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#C4F82A]" />
          <span>Chaves API sem permissão de saque · Criptografia de ponta a ponta</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Latência média: <strong className="text-white font-mono">18ms</strong></span>
          <span>Spreads hoje: <strong className="text-[#C4F82A] font-mono">+142 ciclos</strong></span>
        </div>
      </div>

    </div>
  );
};
