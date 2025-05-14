import React from "react";

interface LegacyFeatureItemProps {
  icon: string;
  text: string;
}

const LegacyFeatureItem: React.FC<LegacyFeatureItemProps> = ({ icon, text }) => {
  return (
    <div className="flex-1 shrink basis-0">
      <div className="w-full">
        <img
          src={icon}
          alt={text}
          className="object-contain w-6 aspect-square"
        />
        <p className="mt-2.5 text-slate-600">
          {text}
        </p>
      </div>
    </div>
  );
};

export default LegacyFeatureItem;
