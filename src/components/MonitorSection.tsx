import React, { useState } from 'react';
import { 
  Activity, 
  Clock, 
  Radio, 
  SlidersHorizontal, 
  Volume2, 
  VolumeX, 
  TrendingUp, 
  CheckCheck,
  Send,
  Zap,
  ArrowRight
} from 'lucide-react';

export const MonitorSection: React.FC = () => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <section id="monitor" className="py-24 bg-[#08090C] relative">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#C4F82A]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C4F82A]/10 border border-[#C4F82A]/25 text-[#C4F82A] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>Radar de Oportunidades em Tempo Real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Monitor & Alertas em Tempo Real.{' '}
            <span className="text-[#C4F82A]">Não deixe nenhum spread passar.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Acompanhe livros de ordens de 13 exchanges sincronizados instantaneamente, receba notificações cirúrgicas no Telegram e filtre oportunidades com base no seu perfil de capital.
          </p>
        </div>

        {/* Top Grid: Feed Ao Vivo + Mockup Telegram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Left Column: Live Radar Feed */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Control Bar */}
            <div className="bg-[#11131A] p-3.5 rounded-xl border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-200">Filtro por Capital:</span>
                <button
                  onClick={() => setSelectedFilter('all')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    selectedFilter === 'all'
                      ? 'bg-[#C4F82A] text-[#08090C] font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Todos os Livros
                </button>
                <button
                  onClick={() => setSelectedFilter('high')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    selectedFilter === 'high'
                      ? 'bg-[#C4F82A] text-[#08090C] font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  &gt; $50k book
                </button>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-[#C4F82A] transition-colors"
                >
                  {soundEnabled ? (
                    <>
                      <Volume2 className="w-4 h-4 text-[#C4F82A]" />
                      <span className="font-mono">Alerta Sonoro (Ligado)</span>
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-4 h-4 text-slate-500" />
                      <span className="font-mono">Alerta Sonoro (Mudo)</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Live Cards Feed com pulsante verde */}
            <div className="space-y-3">
              
              {/* Card 1: OPENAI */}
              <div className="p-4 rounded-xl bg-[#11131A] border border-[#C4F82A]/30 hover:border-[#C4F82A] transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#C4F82A]" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pl-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-white text-base">OPENAI</span>
                      <span className="flex items-center gap-1 text-[10px] bg-[#C4F82A]/15 text-[#C4F82A] px-2 py-0.5 rounded font-bold border border-[#C4F82A]/30 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C4F82A] animate-ping" />
                        agora
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-mono flex items-center gap-1.5">
                      <span>Gate.io</span>
                      <ArrowRight className="w-3 h-3 text-[#C4F82A]" />
                      <span>MEXC</span>
                    </div>
                  </div>
                  <div className="text-right flex sm:flex-col items-center sm:items-end justify-between">
                    <span className="font-mono font-black text-xl text-[#C4F82A] tabular-nums">
                      +75,72%
                    </span>
                    <span className="text-[11px] text-slate-400">abertura bruta</span>
                  </div>
                </div>
              </div>

              {/* Card 2: BP */}
              <div className="p-4 rounded-xl bg-[#11131A] border border-[#C4F82A]/30 hover:border-[#C4F82A] transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#C4F82A]" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pl-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-white text-base">BP</span>
                      <span className="flex items-center gap-1 text-[10px] bg-[#C4F82A]/15 text-[#C4F82A] px-2 py-0.5 rounded font-bold border border-[#C4F82A]/30 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C4F82A] animate-ping" />
                        agora
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-mono flex items-center gap-1.5">
                      <span>MEXC</span>
                      <ArrowRight className="w-3 h-3 text-[#C4F82A]" />
                      <span>Gate.io</span>
                    </div>
                  </div>
                  <div className="text-right flex sm:flex-col items-center sm:items-end justify-between">
                    <span className="font-mono font-black text-xl text-[#C4F82A] tabular-nums">
                      +11,04%
                    </span>
                    <span className="text-[11px] text-slate-400">funding +1,2% a cada 8h</span>
                  </div>
                </div>
              </div>

              {/* Card 3: CATE */}
              <div className="p-4 rounded-xl bg-[#11131A] border border-white/10 hover:border-[#C4F82A]/40 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-white/40 group-hover:bg-[#C4F82A] transition-colors" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pl-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-white text-base">CATE</span>
                      <span className="flex items-center gap-1 text-[10px] bg-white/10 text-slate-300 px-2 py-0.5 rounded font-bold border border-white/10 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C4F82A] animate-ping" />
                        agora
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1 font-mono flex items-center gap-1.5">
                      <span>Gate.io</span>
                      <ArrowRight className="w-3 h-3 text-[#C4F82A]" />
                      <span>MEXC</span>
                    </div>
                  </div>
                  <div className="text-right flex sm:flex-col items-center sm:items-end justify-between">
                    <span className="font-mono font-black text-xl text-white group-hover:text-[#C4F82A] tabular-nums transition-colors">
                      +3,18%
                    </span>
                    <span className="text-[11px] text-slate-400">zero transferência de rede</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Telegram Notification Mockup com Texto Exato */}
          <div className="lg:col-span-5 bg-[#0D1017] rounded-2xl border border-sky-500/30 p-5 shadow-2xl relative">
            
            {/* Telegram Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2AABEE] flex items-center justify-center text-white shadow-md shadow-sky-500/30">
                  <Send className="w-5 h-5 -rotate-12 translate-x-0.5 -translate-y-0.5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white">Midas Bot Alertas</span>
                    <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <span className="text-[11px] text-sky-300 font-mono">bot oficial · 24h instantâneo</span>
                </div>
              </div>
              <span className="text-[10px] bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded font-mono font-bold">
                TELEGRAM VIP
              </span>
            </div>

            {/* Telegram Message Balloon com texto exato da especificação */}
            <div className="bg-[#151D2A] p-4 rounded-xl border border-sky-500/20 space-y-2.5 font-mono text-xs">
              
              <div className="flex items-center justify-between border-b border-white/5 pb-2 text-slate-300">
                <span className="font-bold text-[#C4F82A] flex items-center gap-1.5">
                  <Zap className="w-4 h-4 fill-current text-[#C4F82A]" />
                  ⚡ MIDAS · FECHAMENTO
                </span>
                <span className="text-[10px] text-slate-400">14:32</span>
              </div>

              <div className="space-y-1.5 text-slate-200 text-[11px] leading-relaxed">
                <p>🏷️ <strong>Par:</strong> BP/USDT</p>
                <p>🔗 <strong>Rota:</strong> MEXC(S) → Gate(F)</p>
                <p>📊 <strong>Spread fechamento:</strong> -1,20%</p>
                <p>🧾 <strong>Taxas operacionais:</strong> -0,0645 USDT</p>
              </div>

              {/* Resultado destacado */}
              <div className="pt-2 border-t border-[#C4F82A]/30 flex items-center justify-between bg-[#121A15] p-2.5 rounded-lg border border-[#C4F82A]/40">
                <span className="text-slate-300 font-sans font-semibold text-xs">💵 Resultado:</span>
                <span className="text-[#C4F82A] font-black text-sm font-mono">
                  +3,2296 USDT ✅
                </span>
              </div>

              <div className="text-[10px] text-slate-400 text-right flex items-center justify-end gap-1">
                <span>Saldo atualizado na corretora</span>
                <CheckCheck className="w-3 h-3 text-sky-400 inline" />
              </div>
            </div>

            {/* Telegram Footer Note */}
            <p className="text-[11px] text-slate-400 mt-3 text-center">
              Cada abertura, funding acumulado e fechamento é enviado em tempo real para o seu Telegram.
            </p>

          </div>

        </div>

        {/* Bottom Grid: 5 Destaques de Recursos do Monitor */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          <div className="bg-[#11131A] p-4 rounded-xl border border-white/10 hover:border-[#C4F82A]/40 transition-colors">
            <TrendingUp className="w-5 h-5 text-[#C4F82A] mb-2" />
            <h4 className="text-sm font-bold text-white mb-1">Máxima e Média</h4>
            <p className="text-xs text-slate-400">Histórico de spread das últimas 24h e 7 dias para balizar suas travas de saída.</p>
          </div>

          <div className="bg-[#11131A] p-4 rounded-xl border border-white/10 hover:border-[#C4F82A]/40 transition-colors">
            <Activity className="w-5 h-5 text-[#C4F82A] mb-2" />
            <h4 className="text-sm font-bold text-white mb-1">Inversões nas 12h</h4>
            <p className="text-xs text-slate-400">Contagem de quantas vezes o spread inverteu e convergiu nas últimas 12 horas.</p>
          </div>

          <div className="bg-[#11131A] p-4 rounded-xl border border-white/10 hover:border-[#C4F82A]/40 transition-colors">
            <Clock className="w-5 h-5 text-sky-400 mb-2" />
            <h4 className="text-sm font-bold text-white mb-1">Horário de Funding</h4>
            <p className="text-xs text-slate-400">Contagem regressiva de quando as exchanges cobram ou pagam taxas perpétuas.</p>
          </div>

          <div className="bg-[#11131A] p-4 rounded-xl border border-white/10 hover:border-[#C4F82A]/40 transition-colors">
            <SlidersHorizontal className="w-5 h-5 text-purple-400 mb-2" />
            <h4 className="text-sm font-bold text-white mb-1">Filtro por Corretora</h4>
            <p className="text-xs text-slate-400">Selecione apenas as corretoras onde você já possui saldo depositado.</p>
          </div>

          <div className="bg-[#11131A] p-4 rounded-xl border border-white/10 hover:border-[#C4F82A]/40 transition-colors">
            <Volume2 className="w-5 h-5 text-[#C4F82A] mb-2" />
            <h4 className="text-sm font-bold text-white mb-1">Alertas Customizáveis</h4>
            <p className="text-xs text-slate-400">Defina sons específicos para spreads acima de 5%, 10% ou moedas favoritas.</p>
          </div>

        </div>

      </div>
    </section>
  );
};
