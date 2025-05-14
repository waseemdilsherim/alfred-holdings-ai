import React from "react";

const CTASection = () => {
  return (
    <section className="flex flex-wrap gap-10 justify-between items-center pl-32 w-full bg-sky-400 max-md:pl-5 max-md:max-w-full" id="contact">
      <div className="flex relative flex-col justify-center items-start self-stretch my-auto min-w-60 w-[568px] max-md:max-w-full">
        <div className="z-0 self-stretch pb-8 w-full border-b border-sky-200 border-opacity-50 max-md:max-w-full">
          <h2 className="text-6xl tracking-tighter text-white leading-[74px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
            <span className="text-white">Let's </span>
            <span className="text-[#132B39]">Build</span>
            <span className="text-white"> the Future, </span>
            <span className="text-white">Together</span>
          </h2>
          <p className="mt-4 text-base font-medium tracking-normal leading-loose text-white max-md:max-w-full">
            Connect with us to explore endless possibilities.
          </p>
        </div>
        <div className="flex z-0 gap-10 items-start mt-8 text-base font-medium tracking-normal leading-loose text-white">
          <div className="whitespace-nowrap">
            <div className="flex gap-3 items-start">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/91cc3ddb2e1f9855b5da214fafd1e4c0e15d4a5b?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                alt="Email icon"
                className="object-contain shrink-0 w-6 aspect-square"
              />
              <a href="mailto:contact@alfred.holdings" className="text-white w-[185px]">
                contact@alfred.holdings
              </a>
            </div>
          </div>
          <div>
            <div className="flex gap-3 items-start">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/752135848fe96f598abd4c286d246f08cca3c309?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                alt="Location icon"
                className="object-contain shrink-0 w-6 aspect-square"
              />
              <address className="text-white w-[85px] not-italic">
                Dubai, UAE
              </address>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/77303f02226966683a6b50b4ef73e72c7375cd96?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
          alt="Decorative element"
          className="object-contain absolute z-0 aspect-square h-[73px] right-[232px] top-[70px] w-[73px]"
        />
      </div>
      <div className="overflow-hidden self-stretch px-7 my-auto min-w-60 w-[542px] max-md:px-5 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/165480485adc9f4c4decb90f8851e094abda0c88?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
          alt="Alfred mascot"
          className="object-contain w-full aspect-[0.93] max-md:max-w-full"
        />
      </div>
    </section>
  );
};

export default CTASection;
