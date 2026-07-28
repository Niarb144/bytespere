"use client";

import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";

// Interface for article data
interface Article {
  imageSrc: string;
  overlayText?: string;
  title: string;
  link: string;
}

// Sample data based on the image
const articles: Article[] = [
  {
    imageSrc: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', // Apartment building placeholder
    overlayText: 'Enhancing Cybersecurity in Property Management with MSPs',
    title: 'Enhancing Cybersecurity in the Property Management Industry with MSPs',
    link: '#',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', // People outside building placeholder
    overlayText: 'MANAGED IT FOR PROPERTY MANAGEMENT COMPANIES',
    title: 'Grow Your Real Estate Management Company With Managed IT Services',
    link: '#',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', // Split image placeholder (man on phone vs people at computers)
    // No overlay text in the third example from the image
    title: 'What are the differences between outsourcing your IT and Managed Services',
    link: '#',
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white font-sans relative">
      {/* Header Section */}
      <div className="bg-[#0083C9] py-8 px-4">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-left px-4">
          Partnering With A Managed Service Provider Has It's Benefits.
        </h2>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col">
              {/* Image Container with Overlay */}
              <div className="relative h-48 md:h-56 overflow-hidden rounded-t-md">
                <img
                  src={article.imageSrc}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay Text */}
                {article.overlayText && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                    <h3 className="text-white text-lg md:text-xl font-bold text-center uppercase leading-tight">
                      {article.overlayText}
                    </h3>
                  </div>
                )}
                 {/* VS Graphic for the third item (hardcoded for this example) */}
                 {index === 2 && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="text-white text-5xl font-black bg-black/20 px-2">VS</span>
                    </div>
                  )}
              </div>

              {/* Title */}
              <div className="flex-grow py-4">
                <h3 className="text-gray-900 text-lg md:text-xl font-semibold leading-snug">
                  {article.title}
                </h3>
              </div>

              {/* Button */}
              <div>
                <a
                  href={article.link}
                  className="inline-flex items-center bg-[#0083C9] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
                >
                  <ChevronRightIcon className="h-5 w-5 mr-1" aria-hidden="true" />
                  READ ARTICLE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}