import React from 'react';
import LegacyFeatureItem from '@/components/common/LegacyFeatureItem';

const LegacySection = () => {
  const features = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4e2eac0727c41f951a30d42ea5fa20855bb83253?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e',
      text: 'Supporting Gulf economic diversification',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a68a9a5eb1ff04a8c73f609d8241257d78d0f210?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e',
      text: 'Investing in sustainable, scalable ventures',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bec879fb961ccf6e9ad621f4d7a2531d276b31a8?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e',
      text: 'Partnering with trusted regional players',
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-10 pt-20 pb-10 lg:flex-row lg:gap-24 lg:pt-40 lg:pb-20 2xl:justify-between">
      <div className="my-auto self-stretch overflow-hidden rounded-3xl max-md:max-w-full md:min-w-[400px] 2xl:min-w-[450px]">
        <div className="relative flex min-h-[570px] w-full flex-col pt-20 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/844c2e831fe8eaf713adea20fb8b2ed55dc8a229?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
            alt="Alfred Holdings Legacy Background"
            className="absolute inset-0 size-full object-cover"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46440f75aa9469603ef77fe966416f9a99e81128?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
            alt="Alfred Holdings Legacy"
            className="absolute bottom-0 z-10 aspect-[0.92] w-full object-contain max-md:max-w-full"
          />
        </div>
      </div>
      <article className="my-auto self-stretch max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="w-full border-b border-solid border-b-[#B9C5C9] pb-8 max-md:max-w-full">
            <h2 className="text-5xl leading-[56px] tracking-tighter text-slate-800 max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
              Built on Legacy, <span className="text-[#1D83BC]">Driven by Innovation</span>
            </h2>
            <p className="mt-4 text-base leading-7 font-medium tracking-normal text-slate-600 max-md:max-w-full">
              Born from the success of InsuranceMarket.ae, Alfred Holdings expands a legacy of trust
              into new industries. Our beloved mascot, Alfred, once simplified insurance—now he
              symbolises our broader purpose: creating long-term regional value through ethical,
              innovative investment.
            </p>
          </div>
          <div className="mt-8 w-full max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <h3 className="w-full flex-1 shrink basis-0 gap-2 self-stretch text-2xl leading-none tracking-tighter text-slate-800 max-md:max-w-full">
                Strategic Investments with Purpose
              </h3>
              <p className="mt-3 text-base leading-7 font-medium tracking-normal text-slate-600 max-md:max-w-full">
                Our focus goes beyond returns. Every investment is a step toward shaping the Gulf's
                diversified, innovation-first future.
              </p>
            </div>
            <div className="mt-8 flex w-full flex-wrap items-start gap-8 text-sm leading-5 font-medium tracking-normal text-slate-600 max-md:max-w-full">
              {features.map((feature, index) => (
                <LegacyFeatureItem key={index} icon={feature.icon} text={feature.text} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default LegacySection;
