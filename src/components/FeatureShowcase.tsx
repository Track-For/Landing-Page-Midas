import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
const features = [
  {name:'Histórico de spread',title:'Veja o caminho antes de entrar.',text:'Compare o comportamento das diferenças de preço ao longo do tempo.',path:'M0 110 L30 96 L60 102 L90 50 L120 70 L150 36 L180 65 L210 30 L240 45 L270 16 L300 26',metric:'+2,50%'},
  {name:'Livro de ofertas',title:'Entenda a liquidez de cada lado.',text:'Observe preços e volumes disponíveis para planejar a execução.',path:'M0 120 H40 V100 H85 V80 H130 V60 H190 V40 H240 V15 H300',metric:'150 USDT'},
  {name:'Alertas de oportunidade',title:'Acompanhe os seus parâmetros.',text:'Escolha o spread que deseja acompanhar e receba os alertas configurados.',path:'M0 110 L50 110 L65 40 L80 110 L120 110 L145 20 L170 110 L215 110 L240 55 L260 110 L300 110',metric:'Alvo definido'},
];
export function FeatureShowcase({onStart}:{onStart:()=>void}) {
 const [active,setActive]=useState(0);const item=features[active];
 return <div className="feature-showcase"><div className="feature-display" aria-live="polite"><div className="section-label">MIDAS / PRÉVIA ILUSTRATIVA</div><strong>{item.metric}</strong><svg key={active} viewBox="0 0 300 140" role="img" aria-label={item.name}><defs><linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#c4f82a" stopOpacity=".3"/><stop offset="1" stopColor="#c4f82a" stopOpacity="0"/></linearGradient></defs><path d={`${item.path} L300 140 L0 140Z`} fill="url(#chart-fill)"/><path d={item.path} fill="none" stroke="#c4f82a" strokeWidth="2"/></svg><h3>{item.title}</h3><p>{item.text}</p></div><div><div className="section-label">EXPLORE O MONITOR</div>{features.map((feature,i)=><button className={`feature-option ${active===i?'active':''}`} key={feature.name} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)} onClick={()=>setActive(i)} aria-pressed={active===i}><span>0{i+1}</span>{feature.name}<ArrowRight size={18}/></button>)}<button className="contact-pill mt-8" onClick={onStart}><span className="contact-pill-icon"><ArrowRight/></span><span>COMEÇAR A OPERAR</span></button></div></div>;
}
