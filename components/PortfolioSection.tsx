import React from 'react';
import PortfolioCard from './PortfolioCard';
import PortfolioCardWide from './PortfolioCardWide';

const PortfolioSection = () => {
  return (
    <section className="flex w-full flex-col pb-20 lg:pb-40" id="portfolio">
      <div className="flex w-full flex-col justify-center max-md:max-w-full">
        <h2 className="text-5xl leading-none tracking-tighter text-slate-800 max-md:max-w-full max-md:text-4xl">
          <span className="text-[#1D83BC]">A Portfolio</span> of Trust-Driven Innovation
        </h2>
        <p className="mt-4 text-base leading-7 font-medium tracking-normal text-slate-600 max-md:max-w-full">
          Alfred Holdings powers a dynamic portfolio of ventures designed to simplify, enhance, and
          transform everyday experiences in the UAE and beyond.
        </p>
      </div>
      <div className="mt-16 max-w-full self-center rounded-3xl max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex w-full flex-col gap-5">
              <PortfolioCardWide
                logo="https://cdn.builder.io/api/v1/image/assets/TEMP/5ee517557427711efbef029de5d5610b789fc14c?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                title="InsuranceMarket.ae"
                description="The UAE's largest digital insurance platform. Serving over 200,000 policyholders with 25+ years of trusted market presence."
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/44911d3e07ac0b1ca9cd643c2972935c1f363225?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                buttonText="Visit Website"
                buttonIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/56699640b922009f97f1b06a51e1a367e7c99fe3?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                className="h-[362px]"
              />

              <div className="flex gap-5 max-md:flex-col">
                <div className="w-1/2 max-md:w-full">
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
                <div className="w-1/2 max-md:w-full">
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

          <div className="w-[33%] max-md:w-full">
            <div className="flex flex-col gap-5">
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
                      className="underline"
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
    </section>
  );
};

export default PortfolioSection;
