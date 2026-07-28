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
          <p className="text-white/90 text-base md:text-lg max-w-2xl mb-8">
            From storefronts to production floors, we tailor our managed IT
            approach to the way each industry actually operates.
          </p>

          {/* Quick-jump pills */}
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <a
                key={industry.id}
                href={`#${industry.id}`}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-4 py-2 rounded-full border border-white/30 transition-colors duration-200"
              >
                {industry.name}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- Industries Stack --- */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col gap-10 md:gap-14">
          {industries.map((industry, idx) => (
            <motion.div
              id={industry.id}
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4 }}
              className="scroll-mt-24 bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden min-h-[80vh] md:min-h-0 flex flex-col"
            >
              {/* Image with overlay */}
              <div className="relative w-full h-56 md:h-72 flex-shrink-0">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30" />

                {/* Position indicator */}
                <span className="absolute top-4 right-4 text-white/70 text-xs font-semibold uppercase tracking-wider">
                  {String(idx + 1).padStart(2, "0")} / {String(industries.length).padStart(2, "0")}
                </span>

                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="bg-[#0077C8] p-2.5 rounded-full">
                    <industry.icon
                      className="w-5 h-5 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-white font-bold text-xl md:text-2xl">
                    {industry.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 flex-1 flex flex-col justify-center">
                <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl md:text-base">
                  {industry.description}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  Example Clients
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {industry.companies.map((company) => (
                    <span
                      key={company}
                      className="bg-[#EAEAEA] text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {company}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="self-start bg-[#0077C8] hover:bg-[#0066ad] text-white font-semibold py-3 px-6 rounded-md uppercase tracking-wider text-xs transition-colors duration-200"
                >
                  Discuss Your Industry
                </Link>
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