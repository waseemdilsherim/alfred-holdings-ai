import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full overflow-hidden bg-[#4AACE3] text-base max-md:max-w-full">
      {/* web header */}
      <div className="hidden w-full flex-col items-center justify-center px-32 py-4 max-md:max-w-full max-md:px-5 lg:flex">
        <nav className="fixed top-5 z-20 flex max-w-full flex-wrap items-center justify-between gap-3.5 rounded-[38px] border border-[#4AACE3] bg-white py-2 pr-2 pl-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bba702e66a543ae322606ea1accf7387b7d792f8?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
            alt="Alfred Holdings Logo"
            className="my-auto aspect-[2.98] w-[119px] shrink-0 self-stretch object-contain"
          />
          <div className="my-auto flex items-center self-stretch rounded-[32px] bg-white leading-loose font-medium tracking-normal text-slate-800">
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

      {/* mobile header */}
      <div className="flex items-center justify-between px-5 py-4 lg:hidden">
        <div className="rounded-full bg-white px-6 py-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bba702e66a543ae322606ea1accf7387b7d792f8?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
            alt="Alfred Holdings Logo"
            className="h-8 w-auto"
          />
        </div>

        <button onClick={toggleMenu} className="rounded-full bg-white p-4" aria-label="Toggle menu">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21"
              stroke="#0F1924"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="#0F1924"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H21"
              stroke="#0F1924"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-transparent px-5 py-4">
            <div className="flex h-full w-full flex-col">
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-full bg-white px-6 py-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bba702e66a543ae322606ea1accf7387b7d792f8?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                    alt="Alfred Holdings Logo"
                    className="h-8 w-auto"
                  />
                </div>
                <button
                  onClick={toggleMenu}
                  className="rounded-full bg-slate-800 p-4"
                  aria-label="Close menu"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-4 rounded-3xl bg-white p-8">
                <div className="flex flex-col space-y-6">
                  <a
                    href="#about"
                    onClick={toggleMenu}
                    className="text-lg font-medium text-slate-800"
                  >
                    About Us
                  </a>
                  <a
                    href="#portfolio"
                    onClick={toggleMenu}
                    className="text-lg font-medium text-slate-800"
                  >
                    Our Portfolio
                  </a>
                  <a
                    href="#leadership"
                    onClick={toggleMenu}
                    className="text-lg font-medium text-slate-800"
                  >
                    Leadership
                  </a>

                  <a
                    href="#contact"
                    onClick={toggleMenu}
                    className="mt-4 flex w-full justify-center rounded-[30px] bg-slate-800 px-7 py-4 text-center font-semibold tracking-tight text-blue-50"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
