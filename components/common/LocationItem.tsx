import React from 'react';
import { LocationItemProps } from '@/lib/types';

const LocationItem: React.FC<LocationItemProps> = ({ name, description, isLast = false }) => {
  return (
    <div
      className={`${!isLast ? 'border-b border-solid border-b-[#DFE3E7] pb-6' : 'border-b border-solid border-b-[#DFE3E7] py-6'} w-full max-md:max-w-full`}
    >
      <h3 className="w-full flex-1 shrink basis-0 gap-2 self-stretch text-2xl leading-none tracking-tighter text-slate-800 max-md:max-w-full">
        {name}
      </h3>
      <p className="mt-3 text-base leading-loose font-medium tracking-normal text-slate-600 max-md:max-w-full">
        {description}
      </p>
    </div>
  );
};

export default LocationItem;
