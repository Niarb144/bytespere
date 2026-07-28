// app/quote/page.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  CheckCircleIcon,
  ClockIcon,
  DocumentTextIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import {
  quoteServiceOptions,
  companySizeOptions,
  budgetOptions,
  timelineOptions,
  quoteProcessSteps,
} from "@/data";

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  companySize: string;
  location: string;
  services: string[];
  budget: string;
  timeline: string;
  preferredDate: string;
  details: string;
}

const initialFormData: QuoteFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  companySize: "",
  location: "",
  services: [],
  budget: "",
  timeline: "",
  preferredDate: "",
  details: "",
};

export default function QuotePage() {
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceToggle = (value: string) => {
    setFormData((prev) => {
      const alreadySelected = prev.services.includes(value);
      return {
        ...prev,
        services: alreadySelected
          ? prev.services.filter((s) => s !== value)
          : [...prev.services, value],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.services.length === 0) {
      setError("Please select at least one service you're interested in.");
      return;
    }

    setError("");
    console.log("Quote request submitted:", formData);
    // Send to backend / CRM / email service here
    setSubmitted(true);
    setFormData(initialFormData);
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
            Request A Free Quote
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-2xl">
            Tell us a bit about your business and what you need, and we'll
            put together a tailored quote — no obligation, no pressure.
          </p>
        </motion.div>
      </section>

      {/* --- Trust Strip --- */}
      <section className="bg-[#EAEAEA] py-8 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <ClockIcon className="w-6 h-6 text-[#0077C8] flex-shrink-0" />
            <p className="text-sm text-gray-700 font-medium">
              Response within 1 business day
            </p>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <DocumentTextIcon className="w-6 h-6 text-[#0077C8] flex-shrink-0" />
            <p className="text-sm text-gray-700 font-medium">
              No obligation, transparent pricing
            </p>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <CheckCircleIcon className="w-6 h-6 text-[#0077C8] flex-shrink-0" />
            <p className="text-sm text-gray-700 font-medium">
              Tailored to your business size
            </p>
          </div>
        </div>
      </section>

      {/* --- Form Section --- */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        {submitted && (
          <div className="mb-8 bg-green-50 border border-green-200 text-green-700 text-sm px-5 py-4 rounded-md">
            Thank you! Your quote request has been received. A member of our
            team will be in touch within one business day.
          </div>
        )}

        {error && (
          <div className="mb-8 bg-red-50 border border-red-200 text-red-700 text-sm px-5 py-4 rounded-md">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-md shadow-sm p-6 md:p-10 flex flex-col gap-10"
        >
          {/* --- Contact Details --- */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Your Details
            </h2>
            <p className="text-gray-500 text-sm mb-5">
              How can we reach you about this quote?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-[#0077C8] focus:border-[#0077C8] outline-none text-gray-800"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-[#0077C8] focus:border-[#0077C8] outline-none text-gray-800"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 700 000 000"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-[#0077C8] focus:border-[#0077C8] outline-none text-gray-800"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Ltd."
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-[#0077C8] focus:border-[#0077C8] outline-none text-gray-800"
                />
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200" />

          {/* --- Business Context --- */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              About Your Business
            </h2>
            <p className="text-gray-500 text-sm mb-5">
              This helps us scope the right solution for your size and
              location.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Company Size
                </label>
                <select
                  name="companySize"
                  required
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-[#0077C8] focus:border-[#0077C8] outline-none text-gray-800 bg-white"
                >
                  <option value="">Select company size</option>
                  {companySizeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Westlands, Nairobi"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-[#0077C8] focus:border-[#0077C8] outline-none text-gray-800"
                />
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200" />

          {/* --- Services Needed --- */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Services You're Interested In
            </h2>
            <p className="text-gray-500 text-sm mb-5">
              Select all that apply — you can always adjust scope later.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {quoteServiceOptions.map((service) => {
                const isSelected = formData.services.includes(service.value);
                return (
                  <button
                    type="button"
                    key={service.value}
                    onClick={() => handleServiceToggle(service.value)}
                    className={`text-left text-sm px-4 py-3 rounded-md border transition-colors duration-200 ${
                      isSelected
                        ? "bg-[#0077C8] border-[#0077C8] text-white font-medium"
                        : "bg-white border-gray-300 text-gray-700 hover:border-[#0077C8]"
                    }`}
                  >
                    {service.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="h-px bg-gray-200" />

          {/* --- Budget & Timeline --- */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Budget & Timeline
            </h2>
            <p className="text-gray-500 text-sm mb-5">
              Rough estimates are fine — this just helps us tailor our
              recommendation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Estimated Budget
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-[#0077C8] focus:border-[#0077C8] outline-none text-gray-800 bg-white"
                >
                  <option value="">Select a budget range</option>
                  {budgetOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Preferred Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-[#0077C8] focus:border-[#0077C8] outline-none text-gray-800 bg-white"
                >
                  <option value="">Select a timeline</option>
                  {timelineOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Preferred Start Date{" "}
                  <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full sm:w-1/2 px-4 py-3 rounded-md border border-gray-300 focus:ring-[#0077C8] focus:border-[#0077C8] outline-none text-gray-800"
                />
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200" />

          {/* --- Additional Details --- */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              Anything Else We Should Know?
            </h2>
            <p className="text-gray-500 text-sm mb-5">
              Current pain points, number of devices, existing systems, or
              anything else that would help us scope this accurately.
            </p>
            <textarea
              name="details"
              rows={5}
              value={formData.details}
              onChange={handleChange}
              placeholder="e.g. We have 25 workstations, no current backup solution, and are moving offices in October..."
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-[#0077C8] focus:border-[#0077C8] outline-none text-gray-800 resize-none"
            />
          </div>

          <button
            type="submit"
            className="self-start bg-[#0077C8] hover:bg-[#0066ad] text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 uppercase tracking-wider text-sm"
          >
            Request My Quote
          </button>
        </form>
      </section>

      {/* --- How It Works --- */}
      <section className="bg-[#EAEAEA] py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Happens Next
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Here's what to expect after you submit your request.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quoteProcessSteps.map((item, idx) => (
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

      {/* --- Alternative Contact CTA --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="bg-[#0077C8] rounded-md px-8 py-12 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Prefer To Talk It Through First?
            </h3>
            <p className="text-white/90 leading-relaxed">
              If you'd rather explain your needs over the phone, our team is
              happy to talk before you fill anything out.
            </p>
          </div>
          <a
            href="tel:+254700511311"
            className="whitespace-nowrap inline-flex items-center gap-2 bg-white text-[#0077C8] font-semibold py-3 px-8 rounded-md uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors duration-200"
          >
            <PhoneIcon className="w-4 h-4" />
            Call +254 700 511 311
          </a>
        </div>
      </section>
    </main>
  );
}