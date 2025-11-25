"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function ITServicesOverview() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

        {/* LEFT IMAGES */}
        <div className="flex flex-col items-center gap-10">
          <Image
            src="/images/img5.jpg" // replace with your actual image path
            alt="Computer Setup"
            width={350}
            height={200}
            className="rounded-lg"
          />

          <Image
            src="/images/img6.jpg" // replace with your actual image path
            alt="Server Rack"
            width={350}
            height={200}
            className="rounded-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Dallas IT Services Overview
          </h2>
          <p className="text-sm text-gray-600 mb-8">
            Located in Dallas, Texas, SPP serves clients throughout the United States.
          </p>

          <div className="grid sm:grid-cols-2 gap-10">

            {/* COLUMN 1 */}
            <ul className="space-y-4">
              {[
                "Managed Services",
                "IT Consulting",
                "Office 365",
                "24/7 Monitoring",
                "Onsite Support",
                "Technology Procurement",
                "Wireless Services",
                "Cloud Servers",
                "Firewalls & Routers",
                "Patch Management",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-blue-600 w-5 h-5 flex-none" />
                  <span className="text-gray-800 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* COLUMN 2 */}
            <ul className="space-y-4">
              {[
                "Anti-Spam Service",
                "VoIP Phone Service",
                "Network Management",
                "Cyber Awareness Training",
                "Network Cable Installs",
                "Compliance Testing",
                "Live-Local HelpDesk",
                "Data Backup/Recovery",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-blue-600 w-5 h-5 flex-none" />
                  <span className="text-gray-800 text-sm">{item}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
