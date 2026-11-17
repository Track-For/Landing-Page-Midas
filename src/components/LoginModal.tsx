import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoggedIn(true);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-[#0F121A] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Fechar login"
        >
          <X className="w-5 h-5" />
        </button>

        {loggedIn ? (
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-[#C4F82A]/20 text-[#C4F82A] flex items-center justify-center mx-auto border border-[#C4F82A]/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-white">Bem-vindo de volta!</h3>
            <p className="text-xs text-slate-300">
              Redirecionando com segurança para o seu terminal de arbitragem Midas...
            </p>
            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-xl font-black text-xs text-[#08090C] bg-[#C4F82A] hover:bg-[#D4FF4D] transition-colors font-mono cursor-pointer"
            >
              Continuar para o Dashboard
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-[#C4F82A] flex items-center justify-center text-[#08090C] font-black text-sm">
                  M
                </div>
                <span className="text-lg font-black text-white">Entrar na Midas</span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Acesse seu monitor de spreads e robôs ativos.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-slate-300 font-semibold block mb-1">E-mail</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#161922] border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-slate-600 focus:border-[#C4F82A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs text-slate-300 font-semibold">Senha</label>
                  <a href="#" className="text-[11px] text-[#C4F82A] hover:underline font-mono">
                    Esqueceu a senha?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#161922] border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-slate-600 focus:border-[#C4F82A] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-black text-xs text-[#08090C] bg-[#C4F82A] hover:bg-[#D4FF4D] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C4F82A]/20 cursor-pointer font-mono disabled:opacity-50"
            >
              {loading ? (
                <span>Autenticando...</span>
              ) : (
                <>
                  <span>Entrar na Plataforma</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="text-center text-xs text-slate-400">
              Não tem uma assinatura ainda?{' '}
              <button
                type="button"
                onClick={onClose}
                className="text-[#C4F82A] font-bold hover:underline font-mono cursor-pointer"
              >
                Ver planos
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
