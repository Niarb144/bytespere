// app/hardware-networking/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  hardwareCategories,
  networkingSolutions,
  maintenancePlans,
} from "@/data";

export default function HardwareNetworkingPage() {
  const allSections = [
    ...hardwareCategories,
    ...networkingSolutions,
    ...maintenancePlans,
  ];

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
            Hardware & Networking
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mb-8">
            Modern devices, resilient networks, and maintenance plans that
            keep your business equipment running at its best.
          </p>

          {/* Quick-jump pills */}
          <div className="flex flex-wrap gap-2">
            {allSections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-4 py-2 rounded-full border border-white/30 transition-colors duration-200"
              >
                {item.title}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- Hardware Categories --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0077C8] mb-2 block">
            Hardware
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Modern Hardware Solutions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We source, configure, and support the devices your team relies
            on every day, matched to your workload and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {hardwareCategories.map((category, idx) => (
            <motion.div
              id={category.id}
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="scroll-mt-24 bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden flex flex-col sm:flex-row"
            >
              <div className="relative w-full sm:w-40 h-44 sm:h-auto flex-shrink-0">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 160px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="bg-[#0077C8] p-3 rounded-full w-fit">
                  <category.icon
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Networking Solutions --- */}
      <section className="bg-[#EAEAEA] py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0077C8] mb-2 block">
              Networking
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Network Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              From cabling to security, we design networks that stay fast
              and stable as your business grows.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {networkingSolutions.map((solution, idx) => (
              <motion.div
                id={solution.id}
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="scroll-mt-24 bg-white rounded-md shadow-sm overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-36">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-3 left-3 bg-[#0077C8] p-2.5 rounded-full shadow-md">
                    <solution.icon
                      className="w-4 h-4 text-white"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Maintenance Plans --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0077C8] mb-2 block">
            Maintenance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Maintenance & Lifecycle Support
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Hardware only pays off when it's kept running. Here's how we
            protect your investment over time.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {maintenancePlans.map((plan) => (
            <div
              id={plan.id}
              key={plan.id}
              className="scroll-mt-24 bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden flex flex-col sm:flex-row"
            >
              <div className="relative w-full sm:w-36 h-36 sm:h-auto flex-shrink-0">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 144px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 border-l-4 border-[#0077C8] flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="bg-[#EAEAEA] py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto bg-[#0077C8] rounded-md px-8 py-12 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Ready To Upgrade Your Setup?
            </h3>
            <p className="text-white/90 leading-relaxed">
              Whether it's new workstations, a network overhaul, or an
              ongoing maintenance plan, we'll help you figure out what's
              actually worth investing in.
            </p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap bg-white text-[#0077C8] font-semibold py-3 px-8 rounded-md uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors duration-200"
          >
            Request A Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}