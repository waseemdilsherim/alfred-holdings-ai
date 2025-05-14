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
    <main className="overflow-hidden bg-white">
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
      <CTASection />
      <Footer />
    </main>
  );
}

export default LandingPageVariation2;
