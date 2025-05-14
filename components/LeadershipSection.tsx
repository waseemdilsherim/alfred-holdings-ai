import React from 'react';

const LeadershipSection = () => {
  return (
    <section className="flex w-full flex-col justify-center py-20" id="leadership">
      <div className="flex w-full flex-wrap items-center gap-10 max-md:max-w-full">
        <div className="my-auto flex aspect-square w-[407px] min-w-60 flex-col items-center justify-center self-stretch overflow-hidden rounded-3xl border-[0.5px] border-solid border-[#1D83BC]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4eec0fd93601e4cbf080c6ca9fe7a8c6733c1dbc?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
            alt="Avinash Babur - Founder & Chairman"
            className="aspect-[0.99] w-full object-contain"
          />
        </div>
        <article className="my-auto flex flex-1 shrink basis-0 flex-col self-stretch max-md:max-w-full">
          <h2 className="w-full text-5xl leading-none tracking-tighter text-blue-50 max-md:max-w-full max-md:text-4xl">
            <span className="text-[#EEF7FC]">Message</span> from the{' '}
            <span className="text-[#4AACE3]">Chairman</span>
          </h2>
          <blockquote className="mt-6 w-full text-2xl leading-9 tracking-tighter text-white max-md:max-w-full">
            <p className="w-full flex-1 shrink basis-0 gap-3 self-stretch text-white max-md:max-w-full">
              At Alfred Holdings, our philosophy is simple: lead with integrity, invest with
              purpose, and grow with the region. From our roots in insurance to our expansion across
              sectors and markets, our goal remains consistent—to create long-term value for the
              communities we serve. As we scale across the GCC, our commitment to trust, innovation,
              and regional impact is stronger than ever.
            </p>
          </blockquote>
          <footer className="mt-6 text-xl leading-snug font-medium tracking-tight text-white max-md:max-w-full">
            <span className="font-bold">⎯ Avinash Babur</span>, Founder & Chairman, Alfred Holdings
          </footer>
          <div className="mt-6 flex items-center gap-6 self-start">
            <a href="#" aria-label="LinkedIn">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5db300143cd2bbe3e2507466afe2a08860156735?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                alt="LinkedIn"
                className="my-auto aspect-square w-6 shrink-0 self-stretch object-contain"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1ca4810d71bf5a0260284d1972366d823d5e841?placeholderIfAbsent=true&apiKey=ebedc071c73046979fbf35305379ab4e"
                alt="Twitter"
                className="my-auto aspect-square w-5 shrink-0 self-stretch object-contain"
              />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default LeadershipSection;
