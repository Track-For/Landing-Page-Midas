import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

interface NavbarProps {
  onOpenCheckout: (planId?: string) => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout, onOpenLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Robôs', href: '#robos' },
    { label: 'Monitor', href: '#monitor' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Preços', href: '#precos' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090C]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#C4F82A] via-[#A3E635] to-[#4D7C0F] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-[#C4F82A]/20">
              <div className="w-full h-full bg-[#08090C] rounded-[10px] flex items-center justify-center">
                <span className="text-xl font-black text-[#C4F82A]">M</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-white group-hover:text-[#C4F82A] transition-colors">
                  MIDAS
                </span>
                {/* <span className="px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider rounded bg-[#C4F82A]/15 text-[#C4F82A] border border-[#C4F82A]/30">
                  SaaS
                </span> */}
              </div>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 -mt-1 font-semibold">
                Arbitragem Cripto
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C4F82A] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenLogin}
              className="px-4 py-2 text-sm font-semibold text-slate-200 hover:text-white rounded-lg border border-white/10 hover:border-[#C4F82A]/40 hover:bg-white/[0.04] transition-all duration-200"
            >
              Entrar
            </button>
            <button
              onClick={() => onOpenCheckout('pro')}
              className="relative group px-5 py-2.5 rounded-lg font-black text-sm text-[#08090C] bg-[#C4F82A] hover:bg-[#D4FF4D] hover:shadow-lg hover:shadow-[#C4F82A]/30 transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-current text-[#08090C]" />
              <span>Assinar agora</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenCheckout('pro')}
              className="px-3 py-1.5 rounded-md text-xs font-black text-[#08090C] bg-[#C4F82A]"
            >
              Assinar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 border border-white/10"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08090C]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-[#C4F82A] transition-colors px-2 py-1.5 rounded-md hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-slate-200 rounded-lg border border-white/15 hover:bg-white/5"
            >
              Entrar na conta
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckout('pro');
              }}
              className="w-full py-2.5 text-center text-sm font-black text-[#08090C] bg-[#C4F82A] rounded-lg shadow-lg shadow-[#C4F82A]/20"
            >
              Assinar agora — a partir de R$ 78/mês
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
