import React from 'react';
import { LegacyFeatureItemProps } from '@/lib/types';

const LegacyFeatureItem: React.FC<LegacyFeatureItemProps> = ({ icon, text }) => {
  return (
    <div className="flex-1 shrink basis-0">
      <div className="w-full">
        <img src={icon} alt={text} className="aspect-square w-6 object-contain" />
        <p className="mt-2.5 text-slate-600">{text}</p>
      </div>
    </div>
  );
};

export default LegacyFeatureItem;
