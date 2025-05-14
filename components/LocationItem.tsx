import React from "react";

interface LocationItemProps {
  name: string;
  description: string;
  isLast?: boolean;
}

const LocationItem: React.FC<LocationItemProps> = ({ name, description, isLast = false }) => {
  return (
    <div className={`${!isLast ? 'pb-6 border-b border-solid border-b-[#DFE3E7]' : 'py-6 border-b border-solid border-b-[#DFE3E7]'} w-full max-md:max-w-full`}>
      <h3 className="flex-1 shrink gap-2 self-stretch w-full text-2xl tracking-tighter leading-none basis-0 text-slate-800 max-md:max-w-full">
        {name}
      </h3>
      <p className="mt-3 text-base font-medium tracking-normal leading-loose text-slate-600 max-md:max-w-full">
        {description}
      </p>
    </div>
  );
};

export default LocationItem;
