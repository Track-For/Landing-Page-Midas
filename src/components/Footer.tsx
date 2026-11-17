import React from 'react';
import { Mail, Globe, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080B] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#C4F82A] p-[1px]">
                <div className="w-full h-full bg-[#08090C] rounded-[7px] flex items-center justify-center">
                  <span className="font-black text-[#C4F82A] text-sm">M</span>
                </div>
              </div>
              <span className="text-xl font-black text-white tracking-tight">MIDAS</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold font-mono rounded bg-[#C4F82A]/15 text-[#C4F82A] border border-[#C4F82A]/30">
                SaaS Brasil
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Plataforma líder em monitoramento e execução automatizada de arbitragem de criptomoedas em 13 corretoras. Tecnologia 100% não custodiante com robôs Automação no navegador, extensão web e mentoria inclusa.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="mailto:contato@midas.com.br"
                className="flex items-center gap-1.5 text-slate-300 hover:text-[#C4F82A] transition-colors font-mono"
              >
                <Mail className="w-4 h-4 text-[#C4F82A]" />
                <span>contato@midas.com.br</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Plataforma</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#modalidades" className="hover:text-white transition-colors">4 Modalidades</a>
              </li>
              <li>
                <a href="#robos" className="hover:text-white transition-colors">Automações do Pro</a>
              </li>
              <li>
                <a href="#monitor" className="hover:text-white transition-colors">Monitor em Tempo Real</a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-white transition-colors">Resultados e Ciclos</a>
              </li>
              <li>
                <a href="#precos" className="hover:text-white transition-colors">Planos e Assinaturas</a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Recursos</h4>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="https://chromewebstore.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#C4F82A] transition-colors flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-[#C4F82A]" />
                  <span>Extensão Chrome Web Store</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Central de Ajuda (FAQ)</a>
              </li>
              <li>
                <a href="#modalidades" className="hover:text-white transition-colors">Piloto Automático USDT/BRL</a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-white transition-colors">Painel de Operações</a>
              </li>
            </ul>
          </div>

          {/* Legal e Segurança */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Segurança & Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Aviso de Risco</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Auditoria de Segurança</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <p className="text-[11px] text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Midas Tecnologia Financeira Ltda. Todos os direitos reservados. CNPJ: 00.000.000/0001-00.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors text-xs border border-white/5 cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
