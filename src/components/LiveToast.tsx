import React, { useState, useEffect } from 'react';
import { Zap, X, CheckCheck } from 'lucide-react';

interface ToastData {
  title: string;
  profit: string;
  pair: string;
  strategy: string;
  timeAgo: string;
}

const TOASTS: ToastData[] = [
  {
    title: '⚡ Ciclo Fechado com Lucro',
    profit: '+3,2296 USDT',
    pair: 'BP/USDT',
    strategy: 'Spot × Futuros (Nuvem 24h)',
    timeAgo: 'agora'
  },
  {
    title: '⚡ Spread Capturado',
    profit: '+R$ 53,77',
    pair: 'USDT/BRL',
    strategy: 'Piloto Automático (58s)',
    timeAgo: 'há 1min'
  },
  {
    title: '⚡ Super Funding Creditado',
    profit: '+R$ 212,95',
    pair: 'FATCOIN/USDT',
    strategy: 'Posição Neutra Delta 0',
    timeAgo: 'há 3min'
  }
];

export const LiveToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % TOASTS.length);
        setIsVisible(true);
      }, 600);
    }, 7000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  if (isDismissed) return null;

  const current = TOASTS[currentIndex];

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 max-w-sm transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-[#11131A]/95 backdrop-blur-xl border border-[#C4F82A]/30 rounded-2xl p-3.5 shadow-2xl shadow-black/90 flex items-start gap-3 text-xs">
        <div className="w-9 h-9 rounded-xl bg-[#C4F82A]/15 border border-[#C4F82A]/30 flex items-center justify-center text-[#C4F82A] shrink-0 mt-0.5">
          <Zap className="w-5 h-5 fill-current text-[#C4F82A]" />
        </div>

        <div className="space-y-0.5 flex-1 pr-1">
          <div className="flex items-center justify-between">
            <span className="font-extrabold text-white text-[11px] tracking-wide">
              {current.title}
            </span>
            <span className="text-[10px] text-slate-500 font-mono">{current.timeAgo}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#C4F82A] font-black font-mono text-sm tabular-nums">
              {current.profit}
            </span>
            <span className="text-[11px] font-bold text-slate-300 font-mono">
              · {current.pair}
            </span>
          </div>

          <div className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
            <CheckCheck className="w-3 h-3 text-[#C4F82A]" />
            <span>{current.strategy}</span>
          </div>
        </div>

        <button
          onClick={() => setIsDismissed(true)}
          className="text-slate-500 hover:text-white p-1 rounded-md cursor-pointer"
          title="Fechar notificação"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
