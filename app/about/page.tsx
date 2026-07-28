"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  UsersIcon,
  ShieldCheckIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

const stats = [
  { label: "Years In Business", value: "30+" },
  { label: "Clients Supported", value: "250+" },
  { label: "Avg. Response Time", value: "< 15 min" },
  { label: "Uptime Delivered", value: "99.9%" },
];

const values = [
  {
    icon: ShieldCheckIcon,
    title: "Reliability",
    description:
      "We keep your systems running with proactive monitoring and rapid response, so downtime never slows your business down.",
  },
  {
    icon: UsersIcon,
    title: "Client-First",
    description:
      "Every recommendation we make starts with your business goals, not ours. Your success is how we measure our own.",
  },
  {
    icon: ClockIcon,
    title: "Responsiveness",
    description:
      "IT problems don't wait for business hours to matter less. Our team is built around fast, honest communication.",
  },
  {
    icon: SparklesIcon,
    title: "Expertise",
    description:
      "Three decades of hands-on experience means we've seen it before, and we know how to fix it right the first time.",
  },
];

const team = [
  {
    name: "David Mwangi",
    role: "Founder & CEO",
    image: "/images/img1.jpg",
    bio: "David founded Bytespere with a mission to bring enterprise-grade IT support to growing businesses across Nairobi.",
  },
  {
    name: "Grace Wanjiru",
    role: "Head of Managed Services",
    image: "/images/img2.jpg",
    bio: "Grace leads the team responsible for keeping client networks secure, backed up, and running smoothly around the clock.",
  },
  {
    name: "Samuel Otieno",
    role: "Lead Network Engineer",
    image: "/images/img3.jpg",
    bio: "Samuel designs and maintains the hardware and networking infrastructure that keeps our clients connected.",
  },
  {
    name: "Amina Hassan",
    role: "Client Support Manager",
    image: "/images/img4.jpg",
    bio: "Amina makes sure every client question gets a fast, clear answer from someone who actually knows their setup.",
  },
];

export default function AboutPage() {
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
            About Bytespere
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-2xl">
            Nairobi-based managed IT services, built on three decades of
            experience and a genuine commitment to our clients&apos; success.
          </p>
        </motion.div>
      </section>

      {/* --- Company Story Section --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center" id="company-overview">
        {/* LEFT IMAGES */}
        <div className="space-y-4">
          <div className="w-full h-72 rounded-md overflow-hidden">
            <img
              src="/images/img4.jpg"
              alt="Bytespere Team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-36 rounded-md overflow-hidden">
              <img src="/images/img1.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="h-36 rounded-md overflow-hidden">
              <img src="/images/img2.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="h-36 rounded-md overflow-hidden">
              <img src="/images/img3.jpg" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-6">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Bytespere began as System Protection Partners with a simple goal:
            give growing businesses in Nairobi access to the same quality
            <span className="text-blue-600 font-semibold"> IT support </span>
            that large enterprises take for granted, without the enterprise
            price tag or the impersonal service.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            What started as a small team fixing computers and setting up
            networks has grown into a full managed services provider,
            covering everything from data backup and compliance testing to
            helpdesk support and hardware procurement. Through it all, the
            approach has stayed the same: listen first, solve it right, and
            treat every client&apos;s business like it&apos;s our own.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Today, our team supports businesses across Nairobi and the wider
            region, combining hands-on
            <span className="text-blue-600 font-semibold"> technical expertise </span>
            with a level of care that&apos;s become our reputation. We&apos;re
            proud of how far we&apos;ve come, and we&apos;re just getting
            started.
          </p>
        </div>
      </section>

      {/* --- Stats Strip --- */}
      <section className="bg-[#EAEAEA] py-14 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-md shadow-sm py-8 px-4">
              <p className="text-3xl md:text-4xl font-bold text-[#0077C8] mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Values Section --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What We Stand For
          </h2>
          <p className="text-gray-600 leading-relaxed">
            These are the principles that guide every project, every ticket,
            and every conversation with our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-md shadow-sm p-6 flex flex-col items-start gap-3"
            >
              <div className="bg-[#0077C8] p-3 rounded-full">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Team Section --- */}
      <section className="bg-[#EAEAEA] py-20 px-6 md:px-16" id="our-team">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet The Team
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A small, experienced team dedicated to keeping your business
              running smoothly, day in and day out.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-md shadow-sm overflow-hidden flex flex-col"
              >
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {member.name}
                  </h3>
                  <p className="text-[#0077C8] text-sm font-semibold uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Careers CTA Section --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-[#0077C8] rounded-md px-8 py-14 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Want To Join Our Team?
            </h3>
            <p className="text-white/90 leading-relaxed">
              We&apos;re always looking for talented, client-focused people
              who care about doing IT support the right way. Check out our
              current openings and see where you could fit in.
            </p>
          </div>
          <Link
            href="/careers"
            className="whitespace-nowrap bg-white text-[#0077C8] font-semibold py-3 px-8 rounded-md uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors duration-200"
          >
            View Open Positions
          </Link>
        </div>
      </section>
    </main>
  );
}