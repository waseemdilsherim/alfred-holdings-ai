import React from 'react';

interface PortfolioCardWideProps {
  logo: string;
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  buttonIcon?: string;
  hasButton?: boolean;
  extraTitleLine?: boolean;
  className?: string;
}

const PortfolioCardWide: React.FC<PortfolioCardWideProps> = ({
  logo,
  title,
  description,
  image,
  buttonText,
  buttonIcon,
  hasButton = true,
  extraTitleLine = false,
  className = '',
}) => {
  // Handle (Coming Soon) text in title
  const isSoon = title.includes('(Coming Soon)') || extraTitleLine;
  const baseTitle = title.replace(' (Coming Soon)', '');

  return (
    <article
      className={`flex h-full items-center justify-between gap-10 rounded-3xl border border-solid border-[#DFE3E7] bg-white pl-10 max-md:flex-col max-md:pl-5 ${className}`}
    >
      <div className="my-auto flex max-w-[340px] flex-col self-stretch">
        <div className="w-full">
          <div className="w-[219px] max-w-full border-b border-solid border-b-[#DFE3E7] pb-4">
            <img src={logo} alt={`${title} logo`} className="aspect-[6.85] w-full object-contain" />
          </div>
          <h3 className="mt-3 text-3xl leading-10 tracking-tighter text-slate-800">
            {baseTitle}
            {isSoon && <span className="mt-1 block">(Coming Soon)</span>}
          </h3>
          <p className="mt-3 text-base leading-7 font-medium tracking-normal text-slate-600">
            {description}
          </p>
        </div>
        {hasButton && (
          <a
            href="#"
            className="mt-6 flex items-center gap-2 self-start text-base leading-none font-semibold tracking-tight text-slate-800 capitalize"
          >
            <span className="my-auto self-stretch text-slate-800">{buttonText}</span>
            <img
              src={buttonIcon}
              alt="Arrow"
              className="my-auto aspect-square w-6 shrink-0 self-stretch object-contain"
            />
          </a>
        )}
      </div>
      <div className="flex w-full max-w-[320px] items-center justify-center self-stretch overflow-hidden p-6">
        <img src={image} alt={title} className="max-h-[280px] w-auto object-contain" />
      </div>
    </article>
  );
};

export default PortfolioCardWide;
