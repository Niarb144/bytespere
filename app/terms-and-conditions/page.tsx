// app/terms/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { termsSections } from "@/data";

const LAST_UPDATED = "July 1, 2026";

export default function TermsAndConditionsPage() {
  return (
    <main className="font-sans">
      {/* --- Page Header Banner --- */}
      <section className="relative w-full bg-[#0077C8] py-16 md:py-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto"
        >
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4">
            Terms and Conditions
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-2xl">
            Please review these terms carefully before using our website or
            engaging Bytespere for managed IT, hardware, or networking
            services.
          </p>
          <p className="text-white/70 text-sm mt-4">
            Last updated: {LAST_UPDATED}
          </p>
        </motion.div>
      </section>

      {/* --- Content + TOC --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">
        {/* Table of Contents */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 bg-[#EAEAEA] rounded-md p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              On This Page
            </p>
            <nav className="flex flex-col gap-3">
              {termsSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm text-gray-700 hover:text-[#0077C8] transition-colors duration-200"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          <p className="text-gray-600 leading-relaxed">
            Welcome to Bytespere. These Terms and Conditions govern your use
            of our website and services. By accessing or using our website,
            you agree to comply with these terms. Please read them carefully
            before proceeding.
          </p>

          {termsSections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <div className="flex flex-col gap-4">
                {section.content.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-gray-600 leading-relaxed text-sm md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Contact CTA --- */}
      <section className="bg-[#EAEAEA] py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto bg-[#0077C8] rounded-md px-8 py-12 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Questions About These Terms?
            </h3>
            <p className="text-white/90 leading-relaxed">
              If anything here is unclear, our team is happy to walk you
              through it before you sign up for any service.
            </p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap bg-white text-[#0077C8] font-semibold py-3 px-8 rounded-md uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}