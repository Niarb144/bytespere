// app/services/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { itServices, serviceProcess } from "@/data";

export default function ITServicesPage() {
  return (
    <main className="font-sans">
      {/* --- Page Header Banner --- */}
      <section className="relative w-full bg-[#0077C8] py-16 md:py-24 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto"
        >
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4">
            Managed IT Services
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mb-8">
            Full-scope IT operations designed to keep your business running,
            secure, and ready to grow — without the overhead of an in-house
            IT department.
          </p>

          {/* Quick-jump pills */}
          <div className="flex flex-wrap gap-2">
            {itServices.map((service) => (
              <a
                key={service.title}
                href={`#${service.id || service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-4 py-2 rounded-full border border-white/30 transition-colors duration-200"
              >
                {service.title}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- Overview Strip (quick-scan cards) --- */}
      <section className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {itServices.map((service) => (
            <a
              key={service.title}
              href={`#${service.id || service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="bg-white border border-gray-200 rounded-md p-4 flex flex-col items-center text-center gap-2 hover:border-[#0077C8] hover:shadow-sm transition-all duration-200"
            >
              <div className="bg-[#0077C8]/10 p-2.5 rounded-full">
                <service.icon className="w-5 h-5 text-[#0077C8]" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold text-gray-800 leading-tight">
                {service.title}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* --- Expansive Service Rows (alternating image/content) --- */}
      <section className="max-w-7xl mx-auto px-6 py-6 md:py-10">
        <div className="flex flex-col gap-16 md:gap-24">
          {itServices.map((service, idx) => {
            const isReversed = idx % 2 === 1;
            const anchorId = service.id || service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

            return (
              <motion.div
                id={anchorId}
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isReversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative w-full h-64 md:h-80 rounded-md overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-[#0077C8] p-3 rounded-full shadow-md">
                    <service.icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0077C8] mb-2 block">
                    Service {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-gray-700 flex items-start gap-2"
                      >
                        <span className="text-[#0077C8] font-bold leading-none mt-0.5">
                          •
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-block bg-[#0077C8] hover:bg-[#0066ad] text-white font-semibold py-3 px-6 rounded-md uppercase tracking-wider text-xs transition-colors duration-200"
                  >
                    Ask About This Service
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* --- How We Work Section --- */}
      <section className="bg-[#EAEAEA] py-16 md:py-20 px-6 md:px-16 mt-16 md:mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A simple, transparent process from first conversation to
              ongoing support.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceProcess.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-md shadow-sm p-6 relative"
              >
                <span className="text-4xl font-bold text-[#0077C8]/20 absolute top-4 right-5">
                  {item.step}
                </span>
                <h3 className="font-bold text-gray-900 text-lg mb-2 relative">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed relative">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="bg-[#0077C8] rounded-md px-8 py-12 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Not Sure Which Services You Need?
            </h3>
            <p className="text-white/90 leading-relaxed">
              Our team can assess your current setup and recommend a managed
              IT plan built around your business, not a one-size-fits-all
              package.
            </p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap bg-white text-[#0077C8] font-semibold py-3 px-8 rounded-md uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors duration-200"
          >
            Talk To Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}