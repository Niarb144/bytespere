"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GoogleReview() {
  return (
    <section>
      {/* --- Google Review Badge --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="fixed absolute bottom-10 right-6 bg-white p-3 rounded-full shadow-xl flex items-center space-x-2 z-10"
      >
        <Image
          src="/images/google-icon.png"
          width={24}
          height={24}
          alt="Google"
        />
        <span className="font-bold text-lg">5.0 ⭐⭐⭐⭐⭐</span>
        <span className="text-sm text-gray-500">(27)</span>
      </motion.div>
    </section>
  );
}
