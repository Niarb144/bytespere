// data.ts
import {
  ServerIcon,
  ShieldCheckIcon,
  CloudIcon,
  LifebuoyIcon,
  EnvelopeIcon,
  ClipboardDocumentCheckIcon,
  WifiIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  PrinterIcon,
  CircleStackIcon,
  SignalIcon,
  LockClosedIcon,
  WrenchScrewdriverIcon,
  BuildingStorefrontIcon,
  BuildingOffice2Icon,
  BuildingLibraryIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";

// ---------- IT SERVICES ----------
// data.ts — updated itServices array (add `image` to each entry)
export const itServices = [
  {
    id: "managed-it",
    icon: ServerIcon,
    title: "Managed IT Support",
    image: "/images/img1.jpg",
    description:
      "24/7 monitoring and support for your entire IT environment, keeping systems running before small issues become big problems.",
    features: [
      "Round-the-clock monitoring",
      "Proactive issue resolution",
      "Dedicated account manager",
      "Monthly performance reporting",
    ],
  },
  {
    id: "backup-recovery",
    icon: CircleStackIcon,
    title: "Data Backup & Recovery",
    image: "/images/img2.jpg",
    description:
      "Automated, encrypted backups with fast recovery options so your business data is never more than a few clicks from being restored.",
    features: [
      "Automated daily backups",
      "Offsite & cloud redundancy",
      "Rapid disaster recovery",
      "Regular restore testing",
    ],
  },
  {
    id: "compliance-testing",
    icon: ClipboardDocumentCheckIcon,
    title: "Compliance Testing",
    image: "/images/img3.jpg",
    description:
      "Regular audits and testing to keep your business aligned with data protection and industry compliance requirements.",
    features: [
      "Security audits",
      "Policy documentation",
      "Risk assessments",
      "Regulatory alignment",
    ],
  },
  {
    id: "remote-it-support",
    icon: LifebuoyIcon,
    title: "Remote IT Support",
    image: "/images/img4.jpg",
    description:
      "Fast, secure remote troubleshooting for your team, wherever they're working, without waiting for an onsite visit.",
    features: [
      "Secure remote access",
      "Fast ticket response",
      "Cross-platform support",
      "Employee self-service portal",
    ],
  },
  {
    id: "office-365-email",
    icon: EnvelopeIcon,
    title: "Office 365 / Email",
    image: "/images/img1.jpg",
    description:
      "Setup, migration, and ongoing management of your email and productivity suite, tuned for security and reliability.",
    features: [
      "Migration & setup",
      "Spam & phishing protection",
      "Mailbox management",
      "License optimization",
    ],
  },
  {
    id: "helpdesk-support",
    icon: WifiIcon,
    title: "HelpDesk Support",
    image: "/images/img2.jpg",
    description:
      "A responsive helpdesk your team can rely on, with clear SLAs so you always know when to expect a resolution.",
    features: [
      "Multi-channel ticketing",
      "Defined response SLAs",
      "Knowledge base access",
      "Escalation management",
    ],
  },
  {
    id: "patch-management",
    icon: ShieldCheckIcon,
    title: "Patch Management",
    image: "/images/img3.jpg",
    description:
      "Scheduled updates and vulnerability patching across your devices, closing security gaps before they're exploited.",
    features: [
      "Automated patch scheduling",
      "Vulnerability scanning",
      "Change tracking",
      "Minimal downtime windows",
    ],
  },
  {
    id: "cloud-services",
    icon: CloudIcon,
    title: "Cloud Services",
    image: "/images/img4.jpg",
    description:
      "Migration and management of cloud infrastructure, giving your business flexibility without sacrificing control or security.",
    features: [
      "Cloud migration planning",
      "Infrastructure management",
      "Cost optimization",
      "Hybrid cloud setups",
    ],
  },
];

// New: process steps for the "How We Work" section
export const serviceProcess = [
  {
    step: "01",
    title: "Assess",
    description:
      "We review your current setup, pain points, and business goals before recommending anything.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "A tailored IT roadmap and support plan, scoped to your budget and priorities.",
  },
  {
    step: "03",
    title: "Implement",
    description:
      "Our team rolls out the plan with minimal disruption to your day-to-day operations.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "Ongoing monitoring, maintenance, and helpdesk support to keep everything running.",
  },
];

// ---------- HARDWARE ----------
export const hardwareCategories = [
  {
    icon: ComputerDesktopIcon,
    title: "Workstations & Desktops",
    description:
      "Business-grade desktops and all-in-ones sized to your workload, from everyday office use to demanding design work.",
    image: "/images/img1.jpg",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Laptops & Mobile Devices",
    description:
      "Durable, secure laptops and mobile devices for hybrid and field teams, configured and enrolled before they reach your staff.",
    image: "/images/img2.jpg",
  },
  {
    icon: CpuChipIcon,
    title: "Servers & Storage",
    description:
      "On-premise and rack server solutions sized for your business, with storage architecture built around your growth plans.",
    image: "/images/img3.jpg",
  },
  {
    icon: PrinterIcon,
    title: "Printers & Peripherals",
    description:
      "Networked printers, scanners, and accessories procured, installed, and maintained as part of your broader IT environment.",
    image: "/images/img4.jpg",
  },
];

export const networkingSolutions = [
  {
    icon: WifiIcon,
    title: "Enterprise Wi-Fi",
    description:
      "Commercial-grade wireless coverage designed for reliability across offices, warehouses, and multi-floor buildings.",
  },
  {
    icon: SignalIcon,
    title: "Structured Cabling",
    description:
      "Clean, certified network cabling installations that keep your infrastructure organized, fast, and easy to maintain.",
  },
  {
    icon: LockClosedIcon,
    title: "Firewalls & Network Security",
    description:
      "Perimeter security hardware configured and monitored to keep threats out while keeping legitimate traffic moving.",
  },
  {
    icon: ServerIcon,
    title: "Switches & Routing",
    description:
      "Managed switches and routing equipment configured for performance, segmentation, and future scalability.",
  },
];

export const maintenancePlans = [
  {
    title: "Preventive Maintenance",
    description:
      "Scheduled hardware health checks and cleaning to extend the life of your equipment and catch failures early.",
  },
  {
    title: "On-Site Repair",
    description:
      "Technicians dispatched to your location for hands-on repairs when remote troubleshooting isn't enough.",
  },
  {
    title: "Equipment Lifecycle Management",
    description:
      "Planning around warranty windows and refresh cycles so hardware is replaced on your schedule, not after it fails.",
  },
  {
    title: "Asset Tracking & Inventory",
    description:
      "A clear record of every device on your network, its warranty status, and its maintenance history.",
  },
];

// ---------- INDUSTRIES ----------
export const industries = [
  {
    icon: BuildingStorefrontIcon,
    name: "Retail",
    image: "/images/img1.jpg",
    description:
      "Point-of-sale uptime, inventory system support, and secure payment network management for retail businesses of every size.",
    companies: ["Highstreet Fashion Group", "UrbanMart Retailers", "Prime Grocers Ltd."],
  },
  {
    icon: BuildingLibraryIcon,
    name: "Malls & Shopping Centres",
    image: "/images/img2.jpg",
    description:
      "Shared network infrastructure, tenant connectivity, and centralized security systems for shopping centre operators.",
    companies: ["Westview Mall Management", "Riverside Shopping Centre", "Metro Plaza Holdings"],
  },
  {
    icon: Cog8ToothIcon,
    name: "Manufacturing",
    image: "/images/img3.jpg",
    description:
      "Rugged networking and systems support for production floors, warehouses, and logistics operations that can't afford downtime.",
    companies: ["Alloy Works Manufacturing", "Coastal Packaging Co.", "Precision Tools Ltd."],
  },
  {
    icon: BuildingOffice2Icon,
    name: "Business & Professional Services",
    image: "/images/img4.jpg",
    description:
      "Reliable IT foundations for law firms, accounting practices, and consultancies where uptime and confidentiality both matter.",
    companies: ["Kestrel Legal Partners", "Horizon Accounting Group", "Meridian Consulting"],
  },
];