import { Experience, Explainer } from './components/Experience';
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Modalities } from './components/Modalities';
import { Automations } from './components/Automations';
import { MonitorSection } from './components/MonitorSection';
import { ResultsSection } from './components/ResultsSection';
import { Calculator } from './components/Calculator';
import { SecuritySection } from './components/SecuritySection';
import { MentorshipSection } from './components/MentorshipSection';
import { IntegrationsSection } from './components/IntegrationsSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { LoginModal } from './components/LoginModal';
import { LiveToast } from './components/LiveToast';

export function App() {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [selectedPlanId, setSelectedPlanId] = useState<string>('pro');
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const handleOpenCheckout = (planId: string = 'pro', cycle: 'monthly' | 'annual' = 'annual') => {
    setSelectedPlanId(planId);
    setBillingCycle(cycle);
    setCheckoutModalOpen(true);
  };

  const handleOpenLogin = () => {
    setLoginModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-300">
      
      {/* Fixed Header / Navbar */}
      <Navbar 
        onOpenCheckout={handleOpenCheckout} 
        onOpenLogin={handleOpenLogin} 
      />

      <main className="flex-1">
        {/* Section B: Hero Section with Live Monitor Demo */}
        <Experience /><Hero onOpenCheckout={handleOpenCheckout} /><Explainer onStart={() => handleOpenCheckout('pro')} />

        {/* Section C: 4 Modalities Grid with Real Examples */}
        <Modalities />

        {/* Section D: Automatic Execution (24h Cloud Robot + Extensions) */}
        <Automations onOpenCheckout={handleOpenCheckout} />

        {/* Section E: Live Monitor & Real-Time Alerts */}
        <MonitorSection onStart={() => handleOpenCheckout('pro')} />

        {/* Section F: Real Results & Operator Showcase */}
        <ResultsSection />

        {/* Interactive Capital & Spreads Profit Calculator */}
        <Calculator onOpenCheckout={handleOpenCheckout} />

        {/* Section G: Security & Risk Transparency */}
        <SecuritySection />

        {/* Section H: Mentorship & 68 Video Lessons */}
        <MentorshipSection />

        {/* Section I: 13 Exchange Integrations */}
        <IntegrationsSection />

        {/* Section J: Pricing & Subscriptions */}
        <PricingSection onOpenCheckout={handleOpenCheckout} />

        {/* Section K: FAQ Interactive Accordion */}
        <FaqSection />

        {/* Section L: Final CTA */}
        <CtaSection onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CheckoutModal
        key={`${checkoutModalOpen}-${billingCycle}`}
        initialCycle={billingCycle}
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        initialPlanId={selectedPlanId}
      />

      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />

      {/* Floating Live Toast with Real Arbitrage Alerts */}
      <div className="live-toast-desktop"><LiveToast /></div>

    </div>
  );
}

export default App;
