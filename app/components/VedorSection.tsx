import React from 'react';
import Image from 'next/image';

// --- Types & Interface definitions ---
interface Vendor {
  id: number;
  name: string;
  logoSrc: string; // Path to the logo image
  link?: string;   // Optional link for the vendor
}

// --- Mock Data based on the image ---
const vendors: Vendor[] = [
  { id: 1, name: 'Axcient', logoSrc: '/images/axcient_logo.png', link: '#' },
  { id: 2, name: 'Dell', logoSrc: '/images/dell_logo.png', link: '#' },
  { id: 3, name: 'HP', logoSrc: '/images/hp_logo.png', link: '#' },
  { id: 4, name: 'SentinelOne', logoSrc: '/images/sentinelone_logo.png', link: '#' },
  { id: 5, name: 'AppRiver', logoSrc: '/images/appriver_logo.png', link: '#' },
  { id: 6, name: 'BSN', logoSrc: '/images/bsn_logo.png', link: '#' },
];

const VendorsSection: React.FC = () => {
  return (
    <section className="bg-gray-300 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Vendors We Work With
          </h2>
          <a
            href="#" // Replace with actual link to all vendors page
            className="bg-[#0077C8] hover:bg-[#0066ad] text-white font-bold py-3 px-6 rounded text-sm transition-colors uppercase tracking-wider shrink-0"
          >
            View All Vendors
          </a>
        </div>

        {/* Vendors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-white flex items-center justify-center p-4 rounded-md shadow-sm h-32" // Fixed height for consistent look
            >
              {/* Using next/image for optimized images */}
              <Image
                src={vendor.logoSrc}
                alt={`${vendor.name} Logo`}
                width={150} // Adjust based on typical logo width needed
                height={80}  // Adjust based on typical logo height needed, maintains aspect ratio
                objectFit="contain" // Ensures the entire logo is visible within the bounds
                className="max-w-full max-h-full" // Ensure image scales down if needed
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorsSection;