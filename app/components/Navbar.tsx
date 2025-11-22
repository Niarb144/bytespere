"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react"; 
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  
  // 2. Create a Ref to hold the timer ID
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 3. Function to open menu (and cancel any pending close action)
  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenMenu(menu);
  };

  // 4. Function to close menu with a slight delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200); // 200ms delay allows cursor to cross the gap
  };

  return (
    <header className="w-full border-b border-gray-200">
      {/* ---------- TOP BAR ---------- */}
      <div className="w-full bg-white text-gray-700 text-sm border-b border-gray-300 h-14">
        <div className="max-w-7xl mx-auto flex justify-between px-4 py-4">
          <p>
            1101 W Randol Mill Rd, Arlington TX 76012{" "}
            <a href="https://google.com"><span className="text-blue-600">(View On Google)</span></a>
          </p>

          <p className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5c.621 0 1.125-.504 1.125-1.125v-2.846a1.125 1.125 0 0 0-.852-1.09l-3.525-.881a1.125 1.125 0 0 0-1.173.417l-.97 1.293c-.203.27-.553.403-.885.314A12.035 12.035 0 0 1 6.3 9.63c-.089-.332.044-.682.314-.885l1.293-.970a1.125 1.125 0 0 0 .417-1.173l-.881-3.525A1.125 1.125 0 0 0 6.252 3.75H3.406A1.125 1.125 0 0 0 2.25 4.875v1.875Z"
              />
            </svg>
            <span className="text-blue-600">972.602.0744</span>
          </p>
        </div>
      </div>

      {/* ---------- MAIN NAV ---------- */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between h-28">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Bytspere Logo"
              width={50}
              height={50}
            />
          </Link>

          {/* ---------- DESKTOP LINKS ---------- */}
          <div className="hidden lg:flex items-center space-x-8 text-sm text-gray-900">
            
            {/* ABOUT + DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("about")} // Updated
              onMouseLeave={handleMouseLeave} // Updated
            >
              <Link
                href="/about"
                className="hover:text-blue-800 transition"
              >
                ABOUT
              </Link>

              {openMenu === "about" && (
                <div className="absolute left-0 top-full mt-3 w-52 bg-white shadow-lg border border-gray-100 py-3 opacity-100 animate-fade z-50">
                  <Link
                    href="/about/company"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Company Overview
                  </Link>
                  <Link
                    href="/about/team"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/about/careers"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Careers
                  </Link>
                </div>
              )}
            </div>

            {/* IT SERVICES (NO DROPDOWN) */}
            <Link href="/it-services" className="hover:text-blue-600 transition">
              IT SERVICES
            </Link>

            {/* HARDWARE DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("hardware")} // Updated
              onMouseLeave={handleMouseLeave} // Updated
            >
              <Link href="/hardware" className="hover:text-blue-600 transition">
                HARDWARE & NETWORKING
              </Link>

              {openMenu === "hardware" && (
                <div className="absolute left-0 top-full mt-3 w-52 bg-white shadow-lg border border-gray-100 py-3 animate-fade z-50">
                  <Link
                    href="/hardware/devices"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Hardware Devices
                  </Link>
                  <Link
                    href="/hardware/networking"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Network Solutions
                  </Link>
                  <Link
                    href="/hardware/support"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Maintenance & Support
                  </Link>
                </div>
              )}
            </div>

            {/* INDUSTRIES DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("industries")} // Updated
              onMouseLeave={handleMouseLeave} // Updated
            >
              <Link href="/industries" className="hover:text-blue-600 transition">
                INDUSTRIES
              </Link>

              {openMenu === "industries" && (
                <div className="absolute left-0 top-full mt-3 w-52 bg-white shadow-lg  border-gray-100 py-3 animate-fade z-50">
                  <Link
                    href="/industries/healthcare"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Healthcare
                  </Link>
                  <Link
                    href="/industries/finance"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Finance
                  </Link>
                  <Link
                    href="/industries/retail"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Retail
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="hover:text-blue-600 transition">
              CONTACT
            </Link>
          </div>

          {/* ---------- RIGHT BUTTONS ---------- */}
          <div className="hidden lg:flex items-center space-x-2 w-90 h-50">
            {[
                { href: "/client-portal", label: "CLIENT PORTAL" },
                { href: "/quote", label: "REQUEST A QUOTE" },
                { href: "/help", label: "GET HELP" },
            ].map((item, i) => (
                <motion.div
                key={i}
                whileHover="hover"
                className="overflow-hidden"
                >
                <Link href={item.href}>
                    <motion.div
                    initial="rest"
                    animate="rest"
                    variants={{
                        rest: { backgroundColor: "#007bcb" },
                        hover: { backgroundColor: "#8dccf7ff" },
                    }}
                    className="px-4 py-3 text-sm text-white relative"
                    >
                        {/* Sliding text wrapper */}
                        <motion.span
                            variants={{
                            rest: { y: 0 },
                            hover: { y: -6 },
                            }}
                            transition={{ type: "tween", duration: 0.25 }}
                            className="block"
                        >
                            {item.label}
                        </motion.span>
                    </motion.div>
                </Link>
                </motion.div>
                ))}
            </div>

          {/* ---------- MOBILE BUTTON ---------- */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md border border-gray-300"
          >
            {mobileOpen ? (
              <span className="text-xl">×</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>

        {/* ---------- MOBILE MENU ---------- */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3 text-gray-900 font-semibold text-sm">
              <Link href="/about">ABOUT</Link>
              <Link href="/it-services">IT SERVICES</Link>
              <Link href="/hardware">HARDWARE & NETWORKING</Link>
              <Link href="/industries">INDUSTRIES</Link>
              <Link href="/contact">CONTACT</Link>

              {/* Buttons stacked */}
              <div className="pt-2 space-y-2">
                <Link
                  href="/client-portal"
                  className="block bg-[#007bcb] text-white text-center px-4 py-3 text-xs font-semibold"
                >
                  CLIENT PORTAL
                </Link>
                <Link
                  href="/quote"
                  className="block bg-[#007bcb] text-white text-center px-4 py-3 text-xs font-semibold"
                >
                  REQUEST A QUOTE
                </Link>
                <Link
                  href="/help"
                  className="block bg-[#007bcb] text-white text-center px-4 py-3 text-xs font-semibold"
                >
                  GET HELP
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}