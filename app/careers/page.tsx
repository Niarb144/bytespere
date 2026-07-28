// app/careers/page.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  EnvelopeIcon,
  BellAlertIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import { careerPerks } from "@/data";

export default function CareersPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Career alert signup:", email);
    // Send to backend / email list service here
    setSubscribed(true);
    setEmail("");
  };

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
            Careers at Bytespere
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-2xl">
            We're always looking for talented, client-focused people who care
            about doing IT support the right way. Here's what it's like to
            work with us.
          </p>
        </motion.div>
      </section>

      {/* --- Intro --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Work With Us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Bytespere, we've spent three decades helping Nairobi businesses
            get the IT support they need to grow. That kind of longevity comes
            from a team that genuinely cares about the work — not just
            fixing tickets, but building real relationships with the
            businesses we support.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you're passionate about technology and want to be part of a
            forward-thinking company with a strong local reputation, we'd love
            to hear from you when the right opportunity comes up.
          </p>
        </div>
      </section>

      {/* --- Perks / Culture Grid --- */}
      <section className="bg-[#EAEAEA] py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What It's Like To Work Here
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A few things our team consistently says they value most.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPerks.map((perk, idx) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-md shadow-sm p-6 flex flex-col gap-3"
              >
                <div className="bg-[#0077C8] p-3 rounded-full w-fit">
                  <perk.icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">
                  {perk.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {perk.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- No Current Openings + Stay In Touch --- */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-gray-200 rounded-md shadow-sm p-8 md:p-12 text-center"
        >
          <div className="bg-[#0077C8]/10 p-4 rounded-full w-fit mx-auto mb-6">
            <BellAlertIcon className="w-7 h-7 text-[#0077C8]" aria-hidden="true" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            No Open Positions Right Now
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto mb-8">
            We don't have any active openings at the moment, but we're
            growing, and that changes. Leave your email below and we'll
            reach out directly whenever a role that fits comes up — no spam,
            just genuine opportunities.
          </p>

          {subscribed ? (
            <div className="max-w-md mx-auto bg-green-50 border border-green-200 text-green-700 text-sm px-5 py-4 rounded-md flex items-center justify-center gap-2">
              <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
              Thanks! We'll be in touch when a suitable role opens up.
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-md border border-gray-300 focus:ring-[#0077C8] focus:border-[#0077C8] outline-none text-gray-800 flex-grow"
              />
              <button
                type="submit"
                className="bg-[#0077C8] hover:bg-[#0066ad] text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 uppercase tracking-wider text-sm whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          )}
        </motion.div>
      </section>

      {/* --- Speculative Application CTA --- */}
      <section className="bg-[#EAEAEA] py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto bg-[#0077C8] rounded-md px-8 py-12 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Think You'd Be A Great Fit Anyway?
            </h3>
            <p className="text-white/90 leading-relaxed">
              We're happy to keep strong candidates on file even without an
              open role. Send your CV and a short note about what you're
              looking for, and we'll reach out if something matches.
            </p>
          </div>
          <a
            href="mailto:careers@bytespere.co.ke?subject=Speculative Application"
            className="whitespace-nowrap inline-flex items-center gap-2 bg-white text-[#0077C8] font-semibold py-3 px-8 rounded-md uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors duration-200"
          >
            <EnvelopeIcon className="w-4 h-4" />
            Email Your CV
          </a>
        </div>
      </section>
    </main>
  );
}