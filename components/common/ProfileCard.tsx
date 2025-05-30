import React, { ReactNode } from 'react';

interface ProfileCardProps {
  logo: string;
  title: string;
  description: ReactNode;
  image: string;
  buttonText?: string;
  buttonIcon?: string;
  hasButton?: boolean;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  logo,
  title,
  description,
  image,
  buttonText,
  buttonIcon,
  hasButton = false,
  className = '',
}) => {
  // Extract base title without "Coming Soon" text
  const displayTitle = title.includes('(Coming Soon)')
    ? title.replace(' (Coming Soon)', '')
    : title;
  const isSoon = title.includes('(Coming Soon)');

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl border border-solid border-[#DFE3E7] bg-white shadow-sm ${className}`}
    >
      {/* Card content */}
      <div className="p-5">
        {/* Logo */}
        <div className="mb-3 h-8">
          <img
            src={logo}
            alt={`${title} logo`}
            className="h-[32px] max-w-full object-contain object-left"
          />
        </div>

        {/* Title */}
        <h3 className="mb-2.5 font-sans text-2xl leading-tight font-medium tracking-tight text-slate-800">
          {displayTitle}
          {isSoon && <span className="mt-1 block">(Coming Soon)</span>}
        </h3>

        {/* Description */}
        <p className="mb-4 font-sans text-sm leading-relaxed font-normal text-slate-600">
          {description}
        </p>

        {/* Button */}
        {hasButton && (
          <a
            href="#"
            className="mb-2 flex items-center gap-2 self-start font-sans text-sm font-medium tracking-tight text-slate-800"
          >
            <span>{buttonText}</span>
            {buttonIcon && <img src={buttonIcon} alt="Arrow" className="h-4 w-4 object-contain" />}
          </a>
        )}
      </div>

      {/* Image */}
      <div className="mt-auto overflow-hidden">
        <img src={image} alt={title} className="w-full object-contain" />
      </div>
    </div>
  );
};

export default ProfileCard;
