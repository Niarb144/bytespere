"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden mt-28">
        {/* Banner */}
        <div className="absolute top-0 left-0 w-full h-12 bg-gray-800 flex items-center justify-center z-2">
            <p className="text-white text-sm md:text-base font-medium">
            Update your compter network today!{" "}
            {/* <a href="tel:+1234567890" className="underline">
                (123) 456-7890
            </a> */}
            </p>
        </div>
      {/* --- Background Grid (3 Images) --- */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Image
            src="/images/img1.jpg"
            alt="Left"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative hidden md:block">
          <Image
            src="/images/img4.jpg"
            alt="Center"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative hidden md:block">
          <Image
            src="/images/img3.jpg"
            alt="Right"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* --- Dark Overlay --- */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* --- Headline --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16"
      >
        <h1 className="text-white text-xl md:text-3xl font-bold max-w-3xl leading-tight drop-shadow-md">
          Providing Business IT Services In Dallas
          <br /> and across United States for over 20 years.
        </h1>
      </motion.div>
    </section>
  );
}
