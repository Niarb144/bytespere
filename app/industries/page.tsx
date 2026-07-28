// app/industries/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { industries } from "@/data";

export default function IndustriesPage() {
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
            Industries We Serve
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-2xl">
            From storefronts to production floors, we tailor our managed IT
            approach to the way each industry actually operates.
          </p>
        </motion.div>
      </section>

      {/* --- Industries Grid --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((industry, idx) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="bg-[#0077C8] p-2.5 rounded-full">
                    <industry.icon
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-white font-bold text-xl">
                    {industry.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {industry.description}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  Example Clients
                </p>
                <div className="flex flex-wrap gap-2">
                  {industry.companies.map((company) => (
                    <span
                      key={company}
                      className="bg-[#EAEAEA] text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="bg-[#EAEAEA] py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto bg-[#0077C8] rounded-md px-8 py-12 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Don't See Your Industry Listed?
            </h3>
            <p className="text-white/90 leading-relaxed">
              We work with businesses of every kind across Nairobi and the
              wider region. Reach out and let's talk about what your
              industry needs from its IT partner.
            </p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap bg-white text-[#0077C8] font-semibold py-3 px-8 rounded-md uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}