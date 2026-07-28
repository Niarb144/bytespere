'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

// --- Types & Interface definitions ---
interface IndustryItem {
  id: number;
  title: string;
  imageUrl: string;
}

// --- Mock Data based on the image ---
// Note: Using placeholder images from Unsplash matching the themes.
const industries: IndustryItem[] = [
  {
    id: 1,
    title: 'Managed IT For Manufacturing',
    imageUrl: '/images/img1.jpg',
  },
  {
    id: 2,
    title: 'Managed IT For Logistics Centers & Trucking Companies',
    imageUrl: '/images/img2.jpg',
  },
  {
    id: 3,
    title: 'Managed IT For Energy Companies',
    imageUrl: '/images/img3.jpg',
  },
  {
    id: 4,
    title: 'Managed IT Services For Healthcare',
    imageUrl: '/images/img4.jpg',
  },
  {
    id: 5,
    title: 'IT Services For Construction In Dallas Texas',
    imageUrl: '/images/img5.jpg',
  },
  {
    id: 6,
    title: 'Managed IT Services For Insurance Agencies',
    imageUrl: '/images/img6.jpg',
  },
  // Adding a duplicate to ensure scrolling behavior is visible
  {
    id: 7,
    title: 'Managed IT For Legal Firms',
    imageUrl: '/images/img7.jpg',
  },
];

const IndustrySliderSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Function to handle horizontal scrolling
  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { current } = sliderRef;
      // Scroll by the width of one card (approx 256px + gap)
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl leading-tight">
            Managed IT Provider Offering Services Tailored To Your Industry.
          </h2>
          <button className="bg-[#0077C8] hover:bg-[#0066ad] text-white font-bold py-3 px-6 rounded text-sm transition-colors uppercase tracking-wider shrink-0">
            View All Industry's Served
          </button>
        </div>

        {/* --- Slider Section --- */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-full z-10 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 hidden group-hover:block transition-opacity"
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          {/* Carousel Container (CSS Scroll Snap) */}
          {/* We use scrollbar-hide utilities (might need a plugin or custom CSS if not standard tailwind) */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto space-x-4 pb-4 snap-x snap-mandatory scroll-smooth overflow-y-hidden no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Inline styles to hide scrollbar across browsers
          >
            {industries.map((item) => (
              <div
                key={item.id}
                className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] flex-shrink-0 snap-start"
              >
                <div className="flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  {/* Text Container */}
                  <div className="pt-4 pr-4">
                    <h3 className="text-center text-gray-600 font-medium text-lg leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
             {/* Extra padding item to ensure last item isn't cut off by right arrow */}
             <div className="min-w-[20px] flex-shrink-0"></div>
          </div>

          {/* Right Arrow */}
          <button
             onClick={() => scroll('right')}
             // Note: In the image, the right arrow has a lighter background context, but for consistency we use the same dark overlay style
             className="absolute right-0 top-1/2 -translate-y-full z-10 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 hidden group-hover:block transition-opacity"
             aria-label="Scroll right"
           >
             <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustrySliderSection;