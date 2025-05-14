import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="flex w-full flex-col bg-gradient-to-b from-[#4AACE3] to-[#FFFFFF] pt-20 max-md:max-w-full"
      id="about"
    >
      <div className="flex flex-col self-center p-4 md:p-0">
        <div className="flex w-full max-w-[949px] flex-col text-center text-white">
          <h1 className="w-full flex-1 shrink basis-0 gap-2 text-6xl leading-[74px] tracking-tighter text-white max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
            Empowering GCC's Future – One Strategic Investment at a{' '}
            <span className="text-white">Time</span>
          </h1>
          <p className="mt-4 max-w-full flex-1 shrink basis-0 gap-2 self-center text-base leading-7 font-medium tracking-normal text-white max-md:max-w-full">
            <span className="text-lg leading-7 font-semibold tracking-[-0.36px] text-white">
              Alfred Holdings
            </span>
            <span className="text-white"> is a visionary </span>
            <span className="text-lg leading-7 font-semibold tracking-[-0.36px] text-white">
              investment group based in Dubai, UAE
            </span>
            <span className="text-white">
              , driving strategic growth across the GCC through innovation and trust.
            </span>
          </p>
        </div>
        <a
          href="#portfolio"
          className="mt-10 min-h-12 gap-2 self-center rounded-[30px] border-2 border-solid border-[#F4F5F5] bg-white px-7 py-3.5 text-base leading-none font-semibold tracking-tight text-slate-800 capitalize max-md:px-5"
        >
          Explore Our Vision
        </a>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0eb5adb5b357ee7ebc77f9b4ff6b270433cbd0d9?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
        alt="Alfred Holdings Vision"
        className="mt-5 aspect-[1.48] w-full object-contain max-md:max-w-full"
      />
    </section>
  );
};

export default HeroSection;
