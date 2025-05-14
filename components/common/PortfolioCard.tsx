import React from 'react';
import { PortfolioCardProps } from '@/lib/types';

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  logo,
  title,
  description,
  image,
  buttonText,
  buttonIcon,
  hasButton = true,
  className = '',
}) => {
  // Handle (Coming Soon) text in title
  const displayTitle = title.includes('(Coming Soon)') ? title : title;
  const isSoon =
    title.includes('(Coming Soon)') || title.includes('.bh') || title.includes('.ae (');

  return (
    <article
      className={`flex h-full flex-col rounded-3xl border border-solid border-[#DFE3E7] bg-white ${className}`}
    >
      <div className="flex w-full flex-col p-4 max-md:px-5 xl:p-8">
        <div className="w-full">
          <div className="w-full max-w-[220px] border-b border-solid border-b-[#DFE3E7] pb-4 max-md:max-w-[180px]">
            <div className="h-8">
              <img
                src={logo}
                alt={`${title} logo`}
                className="h-full max-w-full object-contain object-left"
              />
            </div>
          </div>
          <h3 className="mt-3 font-sans text-[26px] leading-none font-medium tracking-tighter text-slate-800 2xl:text-[32px]">
            {isSoon ? (
              <>
                {title.replace(' (Coming Soon)', '')}
                {title.includes('Coming Soon') && <span className="mt-1 block">(Coming Soon)</span>}
              </>
            ) : (
              displayTitle
            )}
          </h3>
          <p className="mt-3 font-sans text-base leading-7 font-medium tracking-normal text-slate-600">
            {description}
          </p>
        </div>
        {hasButton && (
          <a
            href="#"
            className="mt-6 flex items-center gap-2 self-start font-sans text-base leading-none font-semibold tracking-tight text-slate-800 capitalize"
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
      <div className="mt-auto w-full overflow-hidden px-2.5 max-md:pr-5">
        <img src={image} alt={title} className="aspect-[1.2] w-full object-contain" />
      </div>
    </article>
  );
};

export default PortfolioCard;
