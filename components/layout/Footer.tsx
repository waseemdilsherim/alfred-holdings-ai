import React from "react";

const Footer = () => {
  return (
    <footer className="overflow-hidden px-32 py-20 w-full bg-slate-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        <div className="overflow-hidden min-w-60 w-[643px] max-md:max-w-full">
          <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
            <div className="self-stretch my-auto bg-white rounded w-[101px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/757f88dd984c8034950f09167c011f9d5a403aed?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                alt="Alfred Holdings Logo"
                className="object-contain max-w-full aspect-[2.97] w-[101px]"
              />
            </div>
            <p className="self-stretch my-auto text-2xl tracking-tighter leading-none text-white">
              | GCC Growth Leader
            </p>
          </div>
          <p className="mt-6 w-full text-sm font-medium tracking-normal leading-5 text-zinc-200 max-md:max-w-full">
            Alfred Holdings is a Dubai-based investment group behind
            InsuranceMarket.ae and more. We build trust-driven ventures
            across the GCC.
          </p>
        </div>
        <div className="flex overflow-hidden flex-col flex-1 shrink basis-0 min-w-60 max-md:max-w-full">
          <nav className="flex flex-wrap items-start w-full text-sm font-semibold leading-loose text-blue-50 max-md:max-w-full">
            <a href="#about" className="flex-1 shrink py-2 text-blue-50 basis-0">
              About Us
            </a>
            <a href="#portfolio" className="flex-1 shrink py-2 text-blue-50 whitespace-nowrap basis-0">
              Companies
            </a>
            <a href="#" className="flex-1 shrink py-2 text-blue-50 whitespace-nowrap basis-0">
              Careers
            </a>
            <a href="#contact" className="flex-1 shrink py-2 text-blue-50 basis-0">
              Contact Us
            </a>
          </nav>
          <div className="flex gap-6 items-start self-start mt-6">
            <a href="#" aria-label="LinkedIn">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2f586c2f22b68ebffa22244d9ccd05b2a572e8b?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                alt="LinkedIn"
                className="object-contain shrink-0 w-6 aspect-square"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ecc9f3ae4145085a375014c7187440ecb7aafdf?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                alt="Twitter"
                className="object-contain shrink-0 w-6 aspect-square"
              />
            </a>
            <a href="#" aria-label="Facebook">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/03947edb859f62f923798b5676e014fb4114b0a3?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                alt="Facebook"
                className="object-contain shrink-0 w-6 aspect-square"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9e6b107f8209cf95cea49d0d0b31f5edb9b5d50?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                alt="Instagram"
                className="object-contain shrink-0 w-6 aspect-square"
              />
            </a>
            <a href="#" aria-label="YouTube">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6a4d7a84a852ab930b7fa5d7c0acda4d619e4fa?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                alt="YouTube"
                className="object-contain shrink-0 w-6 aspect-square"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 w-full text-sm font-medium tracking-normal text-zinc-200 max-md:mt-10 max-md:max-w-full">
        <div className="w-full bg-sky-200 border border-sky-200 border-solid opacity-60 min-h-px max-md:max-w-full" />
        <div className="flex flex-wrap gap-10 justify-between items-start mt-8 w-full max-md:max-w-full">
          <p className="text-zinc-200">
            © 2025 Alfred Investments LLC. All rights reserved.
          </p>
          <div className="flex gap-6 items-start min-w-60">
            <a href="#" className="text-zinc-200">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-200">
              Terms of Use
            </a>
            <button className="text-zinc-200">
              Cookies Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
