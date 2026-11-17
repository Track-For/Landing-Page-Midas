import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Copy, 
  CheckCheck, 
  CreditCard, 
  QrCode, 
  ArrowRight,
  Lock
} from 'lucide-react';
import { PLANS } from '../data/mockData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: string;
  initialCycle?: 'monthly' | 'annual';
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  initialPlanId = 'pro',
  initialCycle = 'annual',
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(initialPlanId);
  const [annual, setAnnual] = useState(initialCycle === 'annual');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [copiedPix, setCopiedPix] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form states for credit card simulation
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  if (!isOpen) return null;

  const currentPlan = PLANS.find((p) => p.id === selectedPlanId) || PLANS[0];
  const orderPrice = annual ? currentPlan.priceAnnualEquivalent * 12 : currentPlan.priceMonthly;
  const simulatedPixCode = `00020126580014br.gov.bcb.pix0136midas-${currentPlan.id}-assinatura5204000053039865405${orderPrice}.005802BR5915MIDAS TEC SAAS6009SAO PAULO62070503***6304E8A9`;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(simulatedPixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const handleCompleteOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0F121A] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Fechar checkout"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex gap-3 mb-6"><button onClick={() => setAnnual(false)} aria-pressed={!annual} className="p-3 border rounded-xl">Mensal · R$ 97</button><button onClick={() => setAnnual(true)} aria-pressed={annual} className="p-3 border rounded-xl">Anual · R$ 936</button></div>
        {isSuccess ? (
          /* Success Screen */
          <div className="text-center py-8 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#C4F82A]/20 border border-[#C4F82A]/40 text-[#C4F82A] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">
                Assinatura Confirmada com Sucesso!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Parabéns! Seu acesso ao <strong>{currentPlan.name}</strong> e à Mentoria com 68 aulas em vídeo já está liberado.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/10 max-w-md mx-auto text-left text-xs text-slate-300 space-y-2 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-400 font-sans">Plano ativado:</span>
                <span className="text-[#C4F82A] font-bold">{currentPlan.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-sans">Valor:</span>
                <span className="text-white font-bold">R$ {orderPrice},00 {annual ? "/ano" : "/mês"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-sans">Status da chave:</span>
                <span className="text-[#C4F82A] font-bold">Plano Pro selecionado</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3.5 rounded-xl font-black text-sm text-[#08090C] bg-[#C4F82A] hover:bg-[#D4FF4D] transition-colors font-mono cursor-pointer"
            >
              Acessar Terminal Midas
            </button>
          </div>
        ) : (
          /* Checkout Content */
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#C4F82A]/10 border border-[#C4F82A]/25 text-[#C4F82A] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <Lock className="w-3 h-3" />
                <span>Ambiente Seguro Criptografado</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Finalizar Assinatura Midas
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Sem carência ou fidelidade. Cancele com 1 clique quando quiser.
              </p>
            </div>

            {/* Plan Selector Radio Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-2.5">
              {PLANS.map((plan) => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all relative cursor-pointer ${
                    selectedPlanId === plan.id
                      ? 'bg-[#161922] border-[#C4F82A] shadow-md shadow-[#C4F82A]/15'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{plan.name}</span>
                    {plan.highlighted && (
                      <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-[#C4F82A] text-[#08090C] font-mono">
                        PRO
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-lg font-black text-[#C4F82A] font-mono tabular-nums">
                    R$ {orderPrice}
                    <span className="text-[11px] font-normal text-slate-400">{annual ? "/ano" : "/mês"}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Payment Method Tabs */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block">
                Forma de Pagamento:
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-black transition-all cursor-pointer font-mono ${
                    paymentMethod === 'pix'
                      ? 'bg-[#C4F82A] border-[#C4F82A] text-[#08090C] shadow-sm'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <QrCode className="w-4 h-4" />
                  <span>Pix (Aprovação Imediata)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-black transition-all cursor-pointer font-mono ${
                    paymentMethod === 'card'
                      ? 'bg-[#C4F82A] border-[#C4F82A] text-[#08090C] shadow-sm'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Cartão de Crédito</span>
                </button>
              </div>
            </div>

            {/* Pix Flow */}
            {paymentMethod === 'pix' && (
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-4">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {/* Simulated QR Code Canvas/SVG */}
                  <div className="w-28 h-28 bg-white p-2 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900 fill-current">
                      <rect x="0" y="0" width="30" height="30" />
                      <rect x="5" y="5" width="20" height="20" fill="white" />
                      <rect x="10" y="10" width="10" height="10" />
                      <rect x="70" y="0" width="30" height="30" />
                      <rect x="75" y="5" width="20" height="20" fill="white" />
                      <rect x="80" y="10" width="10" height="10" />
                      <rect x="0" y="70" width="30" height="30" />
                      <rect x="5" y="75" width="20" height="20" fill="white" />
                      <rect x="10" y="80" width="10" height="10" />
                      <rect x="40" y="15" width="10" height="20" />
                      <rect x="40" y="45" width="20" height="20" />
                      <rect x="70" y="55" width="15" height="15" />
                      <rect x="70" y="80" width="25" height="15" />
                    </svg>
                  </div>

                  <div className="space-y-1.5 text-center sm:text-left text-xs">
                    <div className="font-bold text-white">Escaneie o QR Code ou copie a chave Pix</div>
                    <p className="text-slate-400 leading-relaxed text-[11px]">
                      Abra o aplicativo do seu banco, escolha Pix &gt; Pagar com QR Code ou Copia e Cola. O robô libera o acesso automaticamente em até 10 segundos.
                    </p>
                    <div className="text-[#C4F82A] font-mono font-black text-sm">
                      Valor: R$ {orderPrice},00
                    </div>
                  </div>
                </div>

                {/* Copyable code */}
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={simulatedPixCode}
                    className="w-full bg-[#161922] border border-white/10 rounded-lg px-3 py-2 text-[11px] font-mono text-slate-300 focus:outline-none"
                  />
                  <button
                    onClick={handleCopyPix}
                    className={`px-3 py-2 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 shrink-0 font-mono cursor-pointer ${
                      copiedPix
                        ? 'bg-[#C4F82A] text-[#08090C]'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    {copiedPix ? <CheckCheck className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedPix ? 'Copiado!' : 'Copiar'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Credit Card Flow */}
            {paymentMethod === 'card' && (
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-3 text-xs">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Número do Cartão</label>
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full bg-[#161922] border border-white/10 rounded-lg px-3 py-2 text-white font-mono placeholder:text-slate-600 focus:border-[#C4F82A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Nome no Cartão</label>
                  <input
                    type="text"
                    placeholder="Nome completo do titular"
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                    className="w-full bg-[#161922] border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-slate-600 focus:border-[#C4F82A] focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">Validade (MM/AA)</label>
                    <input
                      type="text"
                      placeholder="MM/AA"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full bg-[#161922] border border-white/10 rounded-lg px-3 py-2 text-white font-mono placeholder:text-slate-600 focus:border-[#C4F82A] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">CVV</label>
                    <input
                      type="password"
                      placeholder="123"
                      maxLength={4}
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      className="w-full bg-[#161922] border border-white/10 rounded-lg px-3 py-2 text-white font-mono placeholder:text-slate-600 focus:border-[#C4F82A] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Total and Action Button */}
            <div className="pt-2 border-t border-white/10 space-y-4">
              <div className="flex justify-between items-center text-sm font-mono">
                <span className="text-slate-400 font-sans">Total a pagar:</span>
                <span className="text-2xl font-black text-[#C4F82A] tabular-nums">
                  R$ {orderPrice},00
                </span>
              </div>

              <button
                onClick={handleCompleteOrder}
                disabled={isProcessing}
                className="w-full py-4 rounded-xl font-black text-sm text-[#08090C] bg-[#C4F82A] hover:bg-[#D4FF4D] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C4F82A]/25 disabled:opacity-50 cursor-pointer font-mono"
              >
                {isProcessing ? (
                  <span>Processando ativação...</span>
                ) : (
                  <>
                    <span>Confirmar e Ativar {currentPlan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
