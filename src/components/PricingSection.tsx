import { Check, ArrowRight } from 'lucide-react';
export function PricingSection({onOpenCheckout}: {onOpenCheckout: () => void}) {
 return <section id="precos" className="py-24 px-4 bg-[#08090C]"><div className="max-w-3xl mx-auto">
 <div className="text-center mb-12"><div className="section-label">SEU PRÓXIMO PASSO</div><h2 className="text-3xl sm:text-5xl font-black mb-5">Comece pelo conhecimento.<br/><span>Treinamento Midas.</span></h2><p className="text-slate-300">Uma formação para entender a arbitragem e aprender a analisar operações com mais critério.</p></div>
 <div className="rounded-3xl border border-[#C4F82A]/60 bg-[#11131A] p-7 sm:p-12"><div className="text-xs font-mono text-[#C4F82A] mb-4">CURSO ONLINE • PAGAMENTO ÚNICO</div><h3 className="text-2xl font-bold">Treinamento de Arbitragem de Criptomoedas</h3><div className="my-8"><strong className="text-6xl font-black text-[#C4F82A]">R$ 197</strong><p className="text-sm text-slate-400 mt-3">Valor total do treinamento. Sem mensalidade do curso.</p></div>
 <ul className="space-y-4 mb-9">{['5 módulos com 68 aulas em vídeo','Fundamentos da arbitragem de criptomoedas','Modalidades, spreads e leitura de oportunidades','Taxas, liquidez e gestão de risco','Demonstrações práticas usando a plataforma Midas'].map(item=><li key={item} className="flex gap-3 text-slate-300"><Check className="text-[#C4F82A] shrink-0" size={20}/>{item}</li>)}</ul>
 <button onClick={onOpenCheckout} className="w-full bg-[#C4F82A] text-[#08090C] py-5 px-4 rounded-xl font-black cursor-pointer flex justify-center items-center gap-3">Quero entrar no treinamento <ArrowRight size={20}/></button>
 <p className="text-xs text-slate-400 leading-relaxed mt-5">Esta oferta é do treinamento. A plataforma é apresentada nas aulas; sua assinatura é vendida separadamente, em uma etapa posterior.</p></div>
 </div></section>;
}
