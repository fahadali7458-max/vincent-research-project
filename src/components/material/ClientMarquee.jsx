import React from 'react';

const ROW_ONE_LOGOS = [
  { name: 'Amazon', img: '/images/clients/amazon.png' },
  { name: 'Visa', img: '/images/clients/visa.png' },
  { name: 'Comerica', img: '/images/clients/comerica.png' },
  { name: 'Disney', img: '/images/clients/disney.png' },
  { name: 'Hilton', img: '/images/clients/hilton.png' },
  { name: 'Uber', img: '/images/clients/uber.png' },
  { name: 'Coca-Cola', img: '/images/clients/cocacola.png' },
];

const ROW_TWO_LOGOS = [
  { name: 'Johnson & Johnson', img: '/images/clients/jnj.png' },
  { name: 'TikTok', img: '/images/clients/tiktok.png' },
  { name: 'Google', img: '/images/clients/google.png' },
  { name: 'Target', img: '/images/clients/target.png' },
  { name: 'Microsoft', img: '/images/clients/microsoft.png' },
  { name: 'Verizon', img: '/images/clients/verizon.png' },
  { name: 'Meta', img: '/images/clients/meta.png' },
];

export default function ClientMarquee() {
  return (
    <section className="py-20 bg-white overflow-hidden border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold">
          TRUSTED BY GLOBAL ENTERPRISES & FORTUNE 500 BRANDS
        </span>
      </div>

      {/* TOP SLIDER: LEFT-TO-RIGHT */}
      <div className="relative w-full overflow-hidden mb-8 group">
        <div className="flex w-max animate-marquee-left group-hover:[animation-play-state:paused]">
          {[...ROW_ONE_LOGOS, ...ROW_ONE_LOGOS, ...ROW_ONE_LOGOS].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center mx-6 sm:mx-10 w-36 sm:w-44 h-20 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.img}
                alt={logo.name}
                className="max-h-12 max-w-full object-contain"
                onError={(e) => {
                  // Text fallback if network image fails
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.innerHTML = `<span class="text-base font-display font-bold text-neutral-800 tracking-tight">${logo.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM SLIDER: RIGHT-TO-LEFT */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex w-max animate-marquee-right group-hover:[animation-play-state:paused]">
          {[...ROW_TWO_LOGOS, ...ROW_TWO_LOGOS, ...ROW_TWO_LOGOS].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center mx-6 sm:mx-10 w-36 sm:w-44 h-20 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.img}
                alt={logo.name}
                className="max-h-12 max-w-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.innerHTML = `<span class="text-base font-display font-bold text-neutral-800 tracking-tight">${logo.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
