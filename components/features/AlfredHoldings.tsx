'use client';
import React from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import LegacySection from '@/components/sections/LegacySection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import LeadershipSection from '@/components/sections/LeadershipSection';
import LocationSection from '@/components/sections/LocationSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/layout/container';

function AlfredHoldings() {
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
      <div className="bg-[#4AACE3]">
        <Container className="">
          <CTASection />
        </Container>
      </div>
      <Footer />
    </main>
  );
}

export default AlfredHoldings;
