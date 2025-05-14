'use client';
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import LegacySection from './LegacySection';
import PortfolioSection from './PortfolioSection';
import LeadershipSection from './LeadershipSection';
import LocationSection from './LocationSection';
import CTASection from './CTASection';
import Footer from './Footer';
import { Container } from './layout/container';

function LandingPageVariation2() {
  return (
    <main className="overflow-hidden bg-[#F4F5F5]">
      <Header />
      <HeroSection />
      <Container>
        <LegacySection />
        <PortfolioSection />
      </Container>

      <div className="bg-slate-800">
        <Container>
          <LeadershipSection />
        </Container>
      </div>
      <Container>
        <LocationSection />
      </Container>
      <div className="bg-sky-400">
        <Container className="">
          <CTASection />
        </Container>
      </div>
      <Footer />
    </main>
  );
}

export default LandingPageVariation2;
