import React from 'react';
import Navbar from '../components/Navbar';
import HeroAgents from '../components/landing/HeroAgents';
import LaunchBanner from '../components/landing/LaunchBanner';
import AgentLoopSection from '../components/landing/AgentLoopSection';
import UpskillSection from '../components/landing/UpskillSection';
import UseCasesSection from '../components/landing/UseCasesSection';
import FinalCTA from '../components/landing/FinalCTA';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="bg-ink text-white">
      <Navbar />
      <main>
        <HeroAgents />
        <LaunchBanner />
        <AgentLoopSection />
        <UpskillSection />
        <UseCasesSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
