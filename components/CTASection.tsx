import React from 'react';

const CTASection = () => {
  return (
    <section
      className="flex w-full flex-wrap items-center justify-between gap-10 max-md:max-w-full"
      id="contact"
    >
      <div className="relative my-auto flex w-[568px] min-w-60 flex-col items-start justify-center self-stretch max-md:max-w-full">
        <div className="border-opacity-50 z-0 w-full self-stretch border-b border-sky-200 pb-8 max-md:max-w-full">
          <h2 className="text-6xl leading-[74px] tracking-tighter text-white max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
            <span className="text-white">Let's </span>
            <span className="text-[#132B39]">Build</span>
            <span className="text-white"> the Future, </span>
            <span className="text-white">Together</span>
          </h2>
          <p className="mt-4 text-base leading-loose font-medium tracking-normal text-white max-md:max-w-full">
            Connect with us to explore endless possibilities.
          </p>
        </div>
        <div className="z-0 mt-8 flex items-start gap-10 text-base leading-loose font-medium tracking-normal text-white">
          <div className="whitespace-nowrap">
            <div className="flex items-start gap-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/91cc3ddb2e1f9855b5da214fafd1e4c0e15d4a5b?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                alt="Email icon"
                className="aspect-square w-6 shrink-0 object-contain"
              />
              <a href="mailto:contact@alfred.holdings" className="w-[185px] text-white">
                contact@alfred.holdings
              </a>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/752135848fe96f598abd4c286d246f08cca3c309?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                alt="Location icon"
                className="aspect-square w-6 shrink-0 object-contain"
              />
              <address className="text-white not-italic">Dubai, UAE</address>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/77303f02226966683a6b50b4ef73e72c7375cd96?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
          alt="Decorative element"
          className="absolute top-[60px] right-[50px] left-[150px] z-0 aspect-square h-[32px] w-[32px] object-contain md:top-[70px] md:right-[255px] md:left-auto md:h-[73px] md:w-[73px]"
        />
      </div>
      <div className="my-auto w-[542px] min-w-60 self-stretch overflow-hidden px-7 max-md:max-w-full max-md:px-5">
        <img
          // alfred-with-building.png
          src={'/assets/alfred-with-building.png'}
          // src="https://cdn.builder.io/api/v1/image/assets/TEMP/165480485adc9f4c4decb90f8851e094abda0c88?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
          alt="Alfred mascot"
          className="aspect-[0.93] w-full object-cover max-md:max-w-full"
        />
      </div>
    </section>
  );
};

export default CTASection;
