import React, { useState, useRef, TouchEvent } from 'react';
import PortfolioCard from '@/components/common/PortfolioCard';
import PortfolioCardWide from '@/components/common/PortfolioCardWide';
import ProfileCard from '@/components/common/ProfileCard';

// Define the card data type
interface PortfolioCardData {
  type: 'wide' | 'card';
  logo: string;
  title: string;
  description: React.ReactNode;
  image: string;
  buttonText?: string;
  buttonIcon?: string;
  hasButton?: boolean;
}

const PortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartRef = useRef<number>(0);
  const touchEndRef = useRef<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Cards data for slider
  const portfolioCards: PortfolioCardData[] = [
    {
      type: 'wide',
      logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5ee517557427711efbef029de5d5610b789fc14c?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e',
      title: 'InsuranceMarket.ae',
      description:
        "The UAE's largest digital insurance platform. Serving over 200,000 policyholders with 25+ years of trusted market presence.",
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/44911d3e07ac0b1ca9cd643c2972935c1f363225?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e',
      buttonText: 'Visit Website',
      buttonIcon:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/56699640b922009f97f1b06a51e1a367e7c99fe3?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e',
      hasButton: true,
    },
    {
      type: 'card',
      logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/78060c7213f1752f2184f3a57e6a7e63b77036be?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e',
      title: 'HolidayMarket.ae',
      description:
        'From flights to staycations, our travel portal offers handpicked experiences tailored for UAE travelers.',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/89e0e5d9-9c5c-45e5-9fd1-6bb65a5aa7c5?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e',
      buttonText: 'Visit Website',
      buttonIcon:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/56699640b922009f97f1b06a51e1a367e7c99fe3?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e',
      hasButton: true,
    },
    {
      type: 'card',
      logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/782ac5084d37cf2ee5f80c10e1a5dd5a361110d1?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e',
      title: 'InvestmentMarket.ae (Coming Soon)',
      description:
        'A smart platform for curated UAE investment opportunities, backed by data-driven insights and expert research.',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/b69299a618283a90216a03a4a4fc5bb25ca90d23?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e',
      hasButton: false,
    },
    {
      type: 'wide',
      logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/39584a2b12efdb5ca4dfc8546808087e371ee4cb?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e',
      title: 'CreditMarket.ae (Coming Soon)',
      description:
        'Compare and apply for top UAE credit cards and loans—all in one intelligent, easy-to-use hub.',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/d1c0058022a561a30c4586de2619f63d3d95e351?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e',
      hasButton: false,
    },
    {
      type: 'card',
      logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9f27a8de4c0d627ec968811060cc3ca7cd1c411f?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e',
      title: 'myAlfred.com',
      description:
        'A premium lifestyle platform offering curated savings on dining, wellness, and more—used by UAE individuals and corporates alike.',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/caae265a2c505a602742c4efd5326c7b67cd682f?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e',
      buttonText: 'Visit Website',
      buttonIcon:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/56699640b922009f97f1b06a51e1a367e7c99fe3?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e',
      hasButton: true,
    },
    {
      type: 'card',
      logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cdcc0951b1f65074d44c0dd47b8b4274cb855668?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e',
      title: 'InsuranceMarket.bh (Coming Soon)',
      description: (
        <>
          Bringing the UAE's most trusted digital insurance experience to Bahrain.{' '}
          <a
            href="http://InsuranceMarket.bh"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            InsuranceMarket.bh
          </a>{' '}
          is set to revolutionize how residents compare and buy insurance—fast, simple, and fully
          online.
        </>
      ),
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/b4a0fc0112e55a24cfb57c0659c933fa5aa92635?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e',
      hasButton: false,
    },
  ];

  // Handle transition between slides
  const changeSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;

    setIsTransitioning(true);
    setCurrentSlide(index);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  // Swipe handlers
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (isTransitioning) return;

    const touchStart = touchStartRef.current;
    const touchEnd = touchEndRef.current;

    // Minimum swipe distance (px)
    const minSwipeDistance = 50;

    if (touchStart - touchEnd > minSwipeDistance) {
      // Swiped left - go to next slide
      handleNextSlide();
    } else if (touchEnd - touchStart > minSwipeDistance) {
      // Swiped right - go to previous slide
      handlePrevSlide();
    }

    // Reset touch positions
    touchStartRef.current = 0;
    touchEndRef.current = 0;
  };

  // Navigation helpers
  const handlePrevSlide = () => {
    const prevIndex = currentSlide === 0 ? portfolioCards.length - 1 : currentSlide - 1;
    changeSlide(prevIndex);
  };

  const handleNextSlide = () => {
    const nextIndex = currentSlide === portfolioCards.length - 1 ? 0 : currentSlide + 1;
    changeSlide(nextIndex);
  };

  // Render card based on type
  const renderCard = (card: PortfolioCardData, className = '', forMobile = false) => {
    if (forMobile) {
      return (
        <ProfileCard
          logo={card.logo}
          title={card.title}
          description={card.description}
          image={card.image}
          buttonText={card.buttonText}
          buttonIcon={card.buttonIcon}
          hasButton={card.hasButton}
        />
      );
    }

    if (card.type === 'wide') {
      return (
        <PortfolioCardWide
          logo={card.logo}
          title={card.title}
          description={card.description}
          image={card.image}
          buttonText={card.buttonText}
          buttonIcon={card.buttonIcon}
          hasButton={card.hasButton}
          className={className}
        />
      );
    } else {
      return (
        <PortfolioCard
          logo={card.logo}
          title={card.title}
          description={card.description}
          image={card.image}
          buttonText={card.buttonText}
          buttonIcon={card.buttonIcon}
          hasButton={card.hasButton}
          className={className}
        />
      );
    }
  };

  // Mobile slider navigation - use changeSlide for animation
  const goToSlide = (index: number) => {
    changeSlide(index);
  };

  return (
    <section className="flex w-full flex-col pt-10 pb-20 lg:pt-20 lg:pb-40" id="portfolio">
      <div className="flex w-full flex-col justify-center max-md:max-w-full">
        <h2 className="font-sans text-5xl leading-none tracking-tighter text-slate-800 max-md:max-w-full max-md:text-4xl">
          <span className="text-[#1D83BC]">A Portfolio</span> of Trust-Driven Innovation
        </h2>
        <p className="mt-4 font-sans text-base leading-7 font-medium tracking-normal text-slate-600 max-md:max-w-full">
          Alfred Holdings powers a dynamic portfolio of ventures designed to simplify, enhance, and
          transform everyday experiences in the UAE and beyond.
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="mt-16 hidden max-w-full self-center lg:block">
        <div className="flex gap-5">
          {/* Left column - 2/3 width */}
          <div className="w-[67%]">
            <div className="flex w-full flex-col gap-5">
              {/* InsuranceMarket.ae - First horizontal card */}
              <PortfolioCardWide
                logo="https://cdn.builder.io/api/v1/image/assets/TEMP/5ee517557427711efbef029de5d5610b789fc14c?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                title="InsuranceMarket.ae"
                description="The UAE's largest digital insurance platform. Serving over 200,000 policyholders with 25+ years of trusted market presence."
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/44911d3e07ac0b1ca9cd643c2972935c1f363225?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                buttonText="Visit Website"
                buttonIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/56699640b922009f97f1b06a51e1a367e7c99fe3?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                className="h-[362px]"
              />

              {/* Middle row with two vertical cards */}
              <div className="flex gap-5">
                <div className="w-1/2">
                  <PortfolioCard
                    logo="https://cdn.builder.io/api/v1/image/assets/TEMP/78060c7213f1752f2184f3a57e6a7e63b77036be?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                    title="HolidayMarket.ae"
                    description="From flights to staycations, our travel portal offers handpicked experiences tailored for UAE travelers."
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/89e0e5d9-9c5c-45e5-9fd1-6bb65a5aa7c5?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                    buttonText="Visit Website"
                    buttonIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/56699640b922009f97f1b06a51e1a367e7c99fe3?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                    hasButton={true}
                    className="h-[584px]"
                  />
                </div>
                <div className="w-1/2">
                  <PortfolioCard
                    logo="https://cdn.builder.io/api/v1/image/assets/TEMP/782ac5084d37cf2ee5f80c10e1a5dd5a361110d1?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                    title="InvestmentMarket.ae (Coming Soon)"
                    description="A smart platform for curated UAE investment opportunities, backed by data-driven insights and expert research."
                    image="https://cdn.builder.io/api/v1/image/assets/TEMP/b69299a618283a90216a03a4a4fc5bb25ca90d23?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                    hasButton={false}
                    className="h-[584px]"
                  />
                </div>
              </div>

              {/* CreditMarket.ae - Second horizontal card */}
              <PortfolioCardWide
                logo="https://cdn.builder.io/api/v1/image/assets/TEMP/39584a2b12efdb5ca4dfc8546808087e371ee4cb?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                title="CreditMarket.ae (Coming Soon)"
                description="Compare and apply for top UAE credit cards and loans—all in one intelligent, easy-to-use hub."
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/d1c0058022a561a30c4586de2619f63d3d95e351?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                hasButton={false}
                className="h-[362px]"
              />
            </div>
          </div>

          {/* Right column - 1/3 width */}
          <div className="w-[33%]">
            <div className="flex flex-col gap-5">
              {/* myAlfred.com - First vertical card on right */}
              <PortfolioCard
                logo="https://cdn.builder.io/api/v1/image/assets/TEMP/9f27a8de4c0d627ec968811060cc3ca7cd1c411f?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                title="myAlfred.com"
                description="A premium lifestyle platform offering curated savings on dining, wellness, and more—used by UAE individuals and corporates alike."
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/caae265a2c505a602742c4efd5326c7b67cd682f?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                buttonText="Visit Website"
                buttonIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/56699640b922009f97f1b06a51e1a367e7c99fe3?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                hasButton={true}
                className="h-[646px]"
              />

              {/* InsuranceMarket.bh - Second vertical card on right */}
              <PortfolioCard
                logo="https://cdn.builder.io/api/v1/image/assets/TEMP/cdcc0951b1f65074d44c0dd47b8b4274cb855668?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                title="InsuranceMarket.bh (Coming Soon)"
                description={
                  <>
                    Bringing the UAE's most trusted digital insurance experience to Bahrain.{' '}
                    <a
                      href="http://InsuranceMarket.bh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans underline"
                    >
                      InsuranceMarket.bh
                    </a>{' '}
                    is set to revolutionize how residents compare and buy insurance—fast, simple,
                    and fully online.
                  </>
                }
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/b4a0fc0112e55a24cfb57c0659c933fa5aa92635?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                hasButton={false}
                className="h-[646px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="mt-10 lg:hidden">
        <div className="relative">
          {/* Slider container with transition effect and swipe handlers */}
          <div
            ref={sliderRef}
            className="overflow-hidden rounded-xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
            >
              {/* Current slide - consistent height for all cards on mobile */}
              {renderCard(portfolioCards[currentSlide], 'h-[500px]', true)}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="mt-5 flex justify-center gap-2">
            {portfolioCards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  currentSlide === index ? 'w-10 bg-[#1D83BC]' : 'w-2.5 bg-[#CBD5E1]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
