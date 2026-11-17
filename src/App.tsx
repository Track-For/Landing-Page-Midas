import { useState } from 'react';
import { Experience, Explainer } from './components/Experience';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MentorshipSection } from './components/MentorshipSection';
import { CoursePractice } from './components/CoursePractice';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';

export function App() {
 const [checkoutOpen, setCheckoutOpen] = useState(false);
 const openCheckout = () => setCheckoutOpen(true);
 return <div className="min-h-screen bg-[#090A0F] text-slate-100 font-sans">
  <Navbar onOpenCheckout={openCheckout}/>
  <main><Experience/><Hero onOpenCheckout={openCheckout}/>
   <MentorshipSection/>
   <Explainer onStart={openCheckout}/>
   <CoursePractice/>
   <PricingSection onOpenCheckout={openCheckout}/>
   <FaqSection/>
   <CtaSection onOpenCheckout={openCheckout}/>
  </main>
  <Footer/>
  {checkoutOpen && <CheckoutModal isOpen onClose={() => setCheckoutOpen(false)}/>}
 </div>;
}
export default App;
