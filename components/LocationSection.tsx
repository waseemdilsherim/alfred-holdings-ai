import React from 'react';
import LocationItem from './LocationItem';

const LocationSection = () => {
  const locations = [
    {
      name: 'United Arab Emirates (UAE)',
      description: 'Headquarter',
    },
    {
      name: 'Bahrain',
      description: 'Launch partnerships underway',
    },
  ];

  return (
    <section className="flex w-full flex-wrap items-center justify-between gap-10 py-40 max-md:max-w-full max-md:px-5 max-md:py-24">
      <div className="my-auto w-[508px] min-w-60 self-stretch max-md:max-w-full">
        <h2 className="w-full text-5xl leading-none tracking-tighter text-slate-800 max-md:max-w-full max-md:text-4xl">
          Proudly <span className="text-[#1D83BC]">Serving the Gulf</span>
        </h2>
        <div className="mt-16 w-full max-md:mt-10 max-md:max-w-full">
          {locations.map((location, index) => (
            <LocationItem
              key={index}
              name={location.name}
              description={location.description}
              isLast={index === locations.length - 1}
            />
          ))}
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0334e4358ab915d311523cdcd7b1c44a56cb381f?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
        alt="Map of Gulf region showing Alfred Holdings presence"
        className="my-auto aspect-[1.4] w-[632px] min-w-60 self-stretch object-contain max-md:max-w-full"
      />
    </section>
  );
};

export default LocationSection;
