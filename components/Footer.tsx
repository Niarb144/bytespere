'use client'; 

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing with email:', email);
    // Here you would typically send the email to your backend or a newsletter service
    alert(`Thank you for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <footer className="font-sans text-white">
      {/* --- Newsletter Sign-Up Section --- */}
      <div className="bg-[#EAEAEA] py-8 px-4 sm:px-6 lg:px-8 text-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center md:text-left leading-tight">
            Sign Up For News and Special Offers.
          </h3>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-3 rounded-md border border-gray-300 focus:ring-[#0077C8] focus:border-[#0077C8] outline-none text-gray-800 flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-[#0077C8] hover:bg-[#0066ad] text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 uppercase tracking-wider text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* --- Main Footer Content --- */}
      <div className="bg-[#0077C8] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">

          {/* Column 1: Company Info */}
          <div className="flex flex-col">
            <div className="flex items-start mb-4">
              {/* Using Next.js Image component for the logo */}
              <Image
                src="/images/logo.png" 
                alt="System Protection Partners, LLC Logo"
                width={70} 
                height={70} 
                className="mr-3"
              />
              <div className="text-sm">
                <p className="font-bold text-lg mb-1">Bytspere</p>
                <p>Westlands, Nairobi, Kenya</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Copyright 
              &copy; {new Date().getFullYear()} Bytespere. All rights reserved.
            </p>
            <p className="text-lg font-bold mb-4">
              1st Class Managed Service Provider With Global Coverage!
            </p>
            <div className="w-24 border-b-2 border-white mb-4"></div> {/* Underline */}
            <div className="text-sm flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/contact" className="hover:underline">Contact Us</Link>
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>
            </div>
          </div>

          {/* Column 2: Managed IT Services */}
          <div>
            <h4 className="font-bold text-xl mb-4">Managed IT Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/it-services" className="hover:underline">View All Managed IT</Link></li>
              <li><Link href="/it-services#cloud-services" className="hover:underline">Cloud Services</Link></li>
              <li><Link href="/it-services#data-backup-recovery" className="hover:underline">Data Backup & Recovery</Link></li>
              <li><Link href="/it-services#compliance-testing" className="hover:underline">Compliance Testing</Link></li>
              <li><Link href="/it-services#remote-it-support" className="hover:underline">Remote IT Support</Link></li>
              <li><Link href="/it-services#office-365-email" className="hover:underline">Office 365 / Email</Link></li>
              <li><Link href="/it-services#helpdesk-suppor" className="hover:underline">HelpDesk Support</Link></li>
              <li><Link href="/it-services#patch-management" className="hover:underline">Patch Management</Link></li>
            </ul>
          </div>

          {/* Column 3: Hardware / Networking */}
          <div>
            <h4 className="font-bold text-xl mb-4">Hardware / Networking</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hardware-and-networking" className="hover:underline">View All Services</Link></li>
              <li><Link href="/hardware-and-networking" className="hover:underline">Hardware Devices</Link></li>
              <li><Link href="/hardware-and-networking" className="hover:underline">Network Solutions</Link></li>
              <li><Link href="/hardware-and-networking" className="hover:underline">Maintenance & Support</Link></li>              
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/it-services" className="hover:underline">Managed Services</Link></li>
              <li><Link href="/hardware-and-networking" className="hover:underline">Hardware + Networking</Link></li>
              <li><Link href="/industries" className="hover:underline">Industries</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;