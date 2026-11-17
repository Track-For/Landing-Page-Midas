import { useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { siteConfig } from '../siteConfig';
export function Experience() {
 useEffect(() => {
 const circle = document.querySelector('#integracoes');
 const circleObserver = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('circle-visible');circleObserver.unobserve(entry.target);}}), {threshold: window.innerWidth < 768 ? .15 : .85});
 if(circle) circleObserver.observe(circle);
 const elements = document.querySelectorAll('main section h2, main section h3');
 const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } }), {threshold: .65});
 elements.forEach(el => {el.classList.add('reveal-title'); observer.observe(el)});
 return () => { observer.disconnect(); circleObserver.disconnect(); elements.forEach(el => el.classList.remove('reveal-title')); };
 }, []);
 return null;
}
export function Explainer({onStart}: {onStart: () => void}) {
 return <section className="explainer"><div className="section-label">UM ATIVO. DOIS PREÇOS.</div><h2>Você não precisa adivinhar<br/><span>a próxima direção.</span></h2><p>Entenda como a arbitragem identifica diferenças de preço entre corretoras.</p><div className="video-shell">{siteConfig.videoUrl ? <video controls preload="metadata" src={siteConfig.videoUrl}/> : <div className="video-preview"><span>PRÉVIA DA APRESENTAÇÃO</span><div className="price-orbit"><div>Corretora A<strong>$ 100,00</strong><small>COMPRA</small></div><ArrowRight size={40}/><div>Corretora B<strong>$ 102,00</strong><small>VENDA</small></div></div><p>A mesma moeda. Preços diferentes.</p><span><Play size={15}/> Vídeo explicativo em breve</span></div>}</div><button className="contact-pill" onClick={onStart}><span className="contact-pill-icon"><ArrowRight size={22}/></span><span>COMEÇAR AGORA</span></button></section>;
}
