"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Send to backend / email service here
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  return (
    <main className="font-sans">
      {/* --- Page Header Banner --- */}
      <section className="relative w-full bg-[#0077C8] py-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto"
        >
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4">
            Get In Touch With Our Team
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-2xl">
            Have a question about our managed IT services? Need support fast?
            Reach out and a member of our Nairobi-based team will get back to
            you promptly.
          </p>
        </motion.div>
      </section>

      {/* --- Contact Details Strip --- */}
      <section className="bg-[#EAEAEA] py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: PhoneIcon,
              title: "Call Us",
              detail: "+254 700 511 311",
            },
            {
              icon: EnvelopeIcon,
              title: "Email Us",
              detail: "info@bytespere.com",
            },
            {
              icon: MapPinIcon,
              title: "Visit Us",
              detail: "Westlands, Nairobi, Kenya",
            },
            {
              icon: ClockIcon,
              title: "Business Hours",
              detail: "Mon - Fri: 8:00am - 6:00pm",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-md shadow-sm p-6 flex flex-col items-start gap-3"
            >
              <div className="bg-[#0077C8] p-3 rounded-full">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Form + Map Section --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid lg:grid-cols-2 gap-12">
        {/* LEFT: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Send Us A Message
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Fill out the form below and one of our IT specialists will follow
            up with you shortly. We typically respond within one business
            day.
          </p>

          {submitted && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-md">
              Thanks for reaching out! We&apos;ve received your message and
              will be in touch soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
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
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Ltd."
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-[#0077C8] focus:border-[#0077C8] outline-none text-gray-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Service Interested In
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-[#0077C8] focus:border-[#0077C8] outline-none text-gray-800 bg-white"
              >
                <option value="">Select a service</option>
                <option value="managed-it">Managed IT Services</option>
                <option value="backup-recovery">Data Backup & Recovery</option>
                <option value="compliance">Compliance Testing</option>
                <option value="remote-support">Remote IT Support</option>
                <option value="office365">Office 365 / Email</option>
                <option value="helpdesk">HelpDesk Support</option>
                <option value="networking">Computer Networking</option>
                <option value="repair">Computer Repair</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us a bit about what you need help with..."
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-[#0077C8] focus:border-[#0077C8] outline-none text-gray-800 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#0077C8] hover:bg-[#0066ad] text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 uppercase tracking-wider text-sm cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT: Map */}
        <div className="flex flex-col gap-6">
          <div className="w-full h-[420px] rounded-md overflow-hidden shadow-sm border border-gray-200">
            <iframe
              title="Bytespere Location Map"
              src="https://www.google.com/maps?q=Westlands,+Nairobi,+Kenya&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="bg-[#0077C8] rounded-md p-8 text-white">
            <h3 className="text-xl font-bold mb-3">
              Prefer To Talk To Someone Directly?
            </h3>
            <p className="text-white/90 text-sm mb-6 leading-relaxed">
              Our support team is available during business hours to answer
              questions about our managed services, hardware, and networking
              solutions.
            </p>
            <a
              href="tel:+254700511311"
              className="inline-block bg-white text-[#0077C8] font-semibold py-3 px-6 rounded-md uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors duration-200"
            >
              Call +254 700 511 311
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}