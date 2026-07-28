"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DropdownItem = { href: string; label: string };

const DROPDOWNS: Record<string, DropdownItem[]> = {
  about: [
    { href: "/about#company-overview", label: "Company Overview" },
    { href: "/about#our-team", label: "Our Team" },
    { href: "/careers", label: "Careers" },
  ],
  "it-services": [
    { href: "/it-services#managed-it", label: "Managed IT Support" },
    { href: "/it-services#cloud-services", label: "Cloud Solutions" },
    { href: "/it-services#compliance-testing", label: "Compliance Testing" },
    { href: "/it-services#backup-recovery", label: "Backup & Disaster Recovery" },
    { href: "/it-services#helpdesk-support", label: "Helpdesk & Support" },
    { href: "/it-services#office-365-email", label: "Office 365 / Email" },
    { href: "/it-services#patch-management", label: "Patch Management" },
    { href: "/it-services#remote-it-support", label: "Remote IT Support" },
  ],
  hardware: [
    { href: "/hardware-and-networking#workstations-desktops", label: "Hardware Devices" },
    { href: "/hardware-and-networking#enterprise-wifi", label: "Network Solutions" },
    { href: "/hardware-and-networking#preventive-maintenance", label: "Maintenance & Support" },
  ],
  industries: [
    { href: "/industries#retail", label: "Retail" },
    { href: "/industries#malls", label: "Shopping Centres" },
    { href: "/industries#manufacturing", label: "Manufacturing" },
    { href: "/industries#business", label: "Business"}
  ],
};

const NAV_LINKS: { key: string; href: string; label: string }[] = [
  { key: "about", href: "/about", label: "ABOUT" },
  { key: "it-services", href: "/it-services", label: "IT SERVICES" },
  { key: "hardware", href: "/hardware-and-networking", label: "HARDWARE & NETWORKING" },
  { key: "industries", href: "/industries", label: "INDUSTRIES" },
];

const CTA_BUTTONS = [
  // { href: "/client-portal", label: "CLIENT PORTAL" },
  { href: "/quote", label: "REQUEST A QUOTE" },
  { href: "/contact", label: "GET HELP" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const headerRef = useRef<HTMLElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Collapse the top bar on scroll
  useEffect(() => {
    const handleScroll = () => setHideTopBar(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep a spacer in sync with the fixed header's REAL height, at any
  // breakpoint and in any state (topbar shown/hidden, mobile menu open/closed).
  // This is what actually fixes the overlap/jump on scroll.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () => setHeaderHeight(el.getBoundingClientRect().height);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [mobileOpen, hideTopBar]);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(menu);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 200);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-20 bg-white border-b border-gray-200 shadow-sm"
      >
        {/* ---------- TOP BAR ---------- */}
        <motion.div
          animate={{ height: hideTopBar ? 0 : "auto", opacity: hideTopBar ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="hidden sm:block overflow-hidden bg-white border-b border-gray-300"
        >
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-gray-700 text-xs sm:text-sm">
            <p className="truncate">
              Westlands, Nairobi, Kenya{" "}
              <a href="https://google.com" className="text-blue-600 whitespace-nowrap">
                (View On Google)
              </a>
            </p>
            <p className="flex items-center gap-1 whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-500 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span className="text-blue-600">0700 511 311</span>
            </p>
          </div>
        </motion.div>

        {/* ---------- MAIN NAV ---------- */}
        <nav className="w-full">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* LOGO */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="Bytspere Logo"
                width={48}
                height={48}
                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
              />
            </Link>

            {/* ---------- DESKTOP LINKS ---------- */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm text-gray-900">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={link.href} className="hover:text-blue-600 transition">
                    {link.label}
                  </Link>

                  <AnimatePresence>
                    {openMenu === link.key && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 max-w-[90vw] bg-white shadow-lg border border-gray-100 py-3 z-50"
                      >
                        {DROPDOWNS[link.key].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link href="/contact" className="hover:text-blue-600 transition">
                CONTACT
              </Link>
            </div>

            {/* ---------- RIGHT BUTTONS (desktop) ---------- */}
            <div className="hidden lg:flex items-center gap-2">
              {CTA_BUTTONS.map((item) => (
                <motion.div key={item.href} whileHover="hover" className="overflow-hidden">
                  <Link href={item.href}>
                    <motion.div
                      initial="rest"
                      animate="rest"
                      variants={{
                        rest: { backgroundColor: "#007bcb" },
                        hover: { backgroundColor: "#8dccf7" },
                      }}
                      className="px-3 xl:px-4 py-2.5 text-xs xl:text-sm text-white whitespace-nowrap relative overflow-hidden"
                    >
                      <motion.span
                        variants={{ rest: { y: 0 }, hover: { y: -6 } }}
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
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden p-2 rounded-md border border-gray-300"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span className="text-xl leading-none">{mobileOpen ? "×" : "☰"}</span>
            </button>
          </div>

          {/* ---------- MOBILE MENU ---------- */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
              >
                <div className="px-4 py-4 space-y-1 text-gray-900 font-semibold text-sm max-h-[70vh] overflow-y-auto">
                  {NAV_LINKS.map((link) => (
                    <div key={link.key} className="border-b border-gray-100 last:border-0">
                      <button
                        onClick={() =>
                          setMobileSubOpen(mobileSubOpen === link.key ? null : link.key)
                        }
                        className="flex items-center justify-between w-full py-3"
                      >
                        {link.label}
                        <span
                          className={`transition-transform text-gray-400 ${
                            mobileSubOpen === link.key ? "rotate-180" : ""
                          }`}
                        >
                          ⌄
                        </span>
                      </button>

                      <AnimatePresence>
                        {mobileSubOpen === link.key && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden font-normal text-gray-600"
                          >
                            {DROPDOWNS[link.key].map((item) => (
                              <Link key={item.href} href={item.href} className="block py-2 pl-3">
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  <Link href="/contact" className="block py-3">
                    CONTACT
                  </Link>

                  <div className="pt-3 space-y-2">
                    {CTA_BUTTONS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block bg-[#007bcb] text-white text-center px-4 py-3 text-xs font-semibold"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Spacer — always matches the real fixed-header height, at every
          breakpoint and every state, so content never jumps or hides under it */}
      <div style={{ height: headerHeight }} />
    </>
  );
}