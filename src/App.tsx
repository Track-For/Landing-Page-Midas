import { Experience, Explainer } from './components/Experience';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MentorshipSection } from './components/MentorshipSection';
import { CoursePractice } from './components/CoursePractice';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

export function App() {
 return <div className="min-h-screen bg-[#090A0F] text-slate-100 font-sans">
  <Navbar/>
  <main><Experience/><Hero/>
   <MentorshipSection/>
   <Explainer/>
   <CoursePractice/>
   <PricingSection/>
   <FaqSection/>
   <CtaSection/>
  </main>
  <Footer/>
 </div>;
}
export default App;
