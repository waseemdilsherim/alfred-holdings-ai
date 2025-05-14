import React from 'react';

const Header = () => {
  return (
    <header className="w-full overflow-hidden bg-[#4AACE3] text-base max-md:max-w-full">
      <div className="flex w-full flex-col items-center justify-center px-32 py-4 max-md:max-w-full max-md:px-5">
        <nav className="flex w-[706px] max-w-full flex-wrap items-center justify-between gap-3.5 rounded-[38px] bg-white py-2 pr-2 pl-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bba702e66a543ae322606ea1accf7387b7d792f8?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
            alt="Alfred Holdings Logo"
            className="my-auto aspect-[2.98] w-[119px] shrink-0 self-stretch object-contain"
          />
          <div className="my-auto flex min-w-60 items-center self-stretch rounded-[32px] bg-white leading-loose font-medium tracking-normal text-slate-800">
            <a
              href="#about"
              className="my-auto gap-2 self-stretch rounded-[32px] bg-white px-6 py-3 text-slate-800 max-md:px-5"
            >
              About us
            </a>
            <a
              href="#portfolio"
              className="my-auto gap-2 self-stretch rounded-[32px] bg-white px-6 py-3 text-slate-800 max-md:px-5"
            >
              Our Portfolio
            </a>
            <a
              href="#leadership"
              className="my-auto gap-2 self-stretch rounded-[32px] bg-white px-6 py-3 whitespace-nowrap text-slate-800 max-md:px-5"
            >
              Leadership
            </a>
          </div>
          <a
            href="#contact"
            className="my-auto min-h-12 gap-2 self-stretch rounded-[30px] bg-slate-800 px-7 py-3.5 leading-none font-semibold tracking-tight text-blue-50 capitalize max-md:px-5"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
