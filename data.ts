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

// -------LEGAL DOCUMENTS-------
// TERMS & CONDITIONS
export const termsSections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the Bytespere website, requesting a quote, or engaging any of our managed IT, hardware, or networking services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.",
      "These terms apply to all visitors, clients, and users of our website and services, in addition to any separate signed service agreement or statement of work that may govern a specific engagement.",
    ],
  },
  {
    id: "services",
    title: "2. Description of Services",
    content: [
      "Bytespere provides managed IT support, data backup and recovery, compliance testing, remote and helpdesk support, hardware procurement, and network design and maintenance services to business clients.",
      "Specific service scope, response times, and deliverables for any engagement are defined in the relevant service agreement, proposal, or statement of work signed between Bytespere and the client. These website Terms and Conditions apply in addition to, and do not replace, any such agreement.",
      "We reserve the right to modify, suspend, or discontinue any service, in whole or in part, with reasonable notice to affected clients.",
    ],
  },
  {
    id: "client-responsibilities",
    title: "3. Client Responsibilities",
    content: [
      "Clients are responsible for providing accurate information about their systems, granting necessary access for support and maintenance work, and maintaining valid software licenses for any third-party products in use.",
      "Clients must ensure that any account credentials, network access, or physical access provided to Bytespere staff is authorized and used only for the agreed scope of work.",
      "Clients remain responsible for backing up critical data independently of any backup services provided, unless otherwise specified in a signed service agreement.",
    ],
  },
  {
    id: "payment",
    title: "4. Fees & Payment Terms",
    content: [
      "Fees for managed services, hardware, and one-time projects are outlined in the applicable invoice, proposal, or service agreement. Unless otherwise agreed, invoices are due within 30 days of the invoice date.",
      "Late payments may result in suspension of services until outstanding balances are settled. Bytespere reserves the right to charge reasonable interest on significantly overdue accounts, where permitted by law.",
      "Hardware and third-party licensing costs are billed separately from managed service fees unless bundled into a specific package.",
    ],
  },
  {
    id: "service-levels",
    title: "5. Service Availability & Limitations",
    content: [
      "While we work to maintain high system availability and prompt response times, Bytespere does not guarantee uninterrupted or error-free service. Scheduled maintenance windows will be communicated in advance where possible.",
      "We are not liable for service interruptions caused by factors outside our reasonable control, including internet service provider outages, power failures, third-party software failures, or force majeure events.",
      "Specific uptime commitments and response-time guarantees, where applicable, are defined in individual service level agreements (SLAs) with clients.",
    ],
  },
  {
    id: "intellectual-property",
    title: "6. Intellectual Property",
    content: [
      "All website content, including text, graphics, logos, and design elements, is the property of Bytespere unless otherwise credited, and may not be reproduced without written permission.",
      "Any custom scripts, documentation, or configurations developed specifically for a client as part of a paid engagement remain the property of the client upon full payment, unless otherwise agreed in writing.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "7. Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, Bytespere shall not be liable for indirect, incidental, or consequential damages arising from the use of our website or services, including loss of data, revenue, or business opportunities.",
      "Our total liability for any claim arising from services provided shall not exceed the fees paid by the client for the specific service giving rise to the claim in the preceding three months.",
      "Nothing in these terms limits liability for gross negligence, willful misconduct, or any liability that cannot be excluded under applicable Kenyan law.",
    ],
  },
  {
    id: "termination",
    title: "8. Termination",
    content: [
      "Either party may terminate an ongoing service agreement in accordance with the notice period specified in that agreement. In the absence of a specific notice period, 30 days' written notice is required.",
      "Bytespere reserves the right to suspend or terminate services immediately in cases of non-payment, misuse of services, or violation of these terms.",
    ],
  },
  {
    id: "governing-law",
    title: "9. Governing Law",
    content: [
      "These Terms and Conditions are governed by the laws of the Republic of Kenya. Any disputes arising from these terms or use of our services shall be subject to the exclusive jurisdiction of the courts of Kenya.",
    ],
  },
  {
    id: "changes",
    title: "10. Changes to These Terms",
    content: [
      "We may update these Terms and Conditions from time to time to reflect changes in our services or legal requirements. The updated version will be posted on this page with a revised effective date. Continued use of our website or services after changes take effect constitutes acceptance of the revised terms.",
    ],
  },
];

// PRIVACY POLICY
export const privacySections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: [
      "We may collect personal information such as your name, email address, phone number, company name, and any other information you voluntarily provide when you contact us, request a quote, or use our services.",
      "We may also collect non-personal information such as your IP address, browser type, device information, and browsing behavior on our website through standard web analytics tools.",
      "If you engage us for managed IT services, we may also process technical information related to your systems and networks as necessary to deliver those services.",
    ],
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: [
      "The information we collect is used to provide and improve our services, respond to inquiries, send important service updates, process payments, and personalize your experience on our website.",
      "We may use your contact information to send occasional newsletters or service updates. You can unsubscribe from these communications at any time.",
      "We do not sell your personal information to third parties. We do not share it for third-party marketing purposes.",
    ],
  },
  {
    id: "data-security",
    title: "3. Data Security",
    content: [
      "We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.",
      "Access to client data by our staff is limited to what is necessary to deliver the relevant service, and is subject to internal confidentiality obligations.",
      "While we take data security seriously, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking Technologies",
    content: [
      "Our website may use cookies and similar tracking technologies to enhance your browsing experience, understand how visitors use our site, and improve our content over time.",
      "You can manage or disable cookies through your browser settings. Disabling cookies may affect certain functionality on our website.",
    ],
  },
  {
    id: "data-sharing",
    title: "5. Sharing of Information",
    content: [
      "We may share information with trusted third-party vendors who assist us in operating our website or delivering services (such as cloud hosting or email delivery providers), under confidentiality obligations.",
      "We may disclose information where required by law, regulation, or legal process, or to protect the rights, property, or safety of Bytespere, our clients, or others.",
    ],
  },
  {
    id: "third-party-links",
    title: "6. Third-Party Links",
    content: [
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites, and we encourage you to review their privacy policies independently.",
    ],
  },
  {
    id: "data-retention",
    title: "7. Data Retention",
    content: [
      "We retain personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Client technical data related to managed services is retained per the terms of the applicable service agreement.",
    ],
  },
  {
    id: "your-rights",
    title: "8. Your Rights",
    content: [
      "You have the right to request access to, correction of, or deletion of your personal information held by us, subject to applicable law. To exercise these rights, please contact us using the details below.",
    ],
  },
  {
    id: "changes",
    title: "9. Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we protect your information.",
    ],
  },
];

// ------QUOTE FORM OPTIONS------
export const quoteServiceOptions = [
  { value: "managed-it", label: "Managed IT Support" },
  { value: "backup-recovery", label: "Data Backup & Recovery" },
  { value: "compliance", label: "Compliance Testing" },
  { value: "remote-support", label: "Remote IT Support" },
  { value: "office365", label: "Office 365 / Email" },
  { value: "helpdesk", label: "HelpDesk Support" },
  { value: "patch-management", label: "Patch Management" },
  { value: "cloud", label: "Cloud Services" },
  { value: "hardware", label: "Hardware Procurement" },
  { value: "networking", label: "Networking & Structured Cabling" },
  { value: "maintenance", label: "Hardware Maintenance Plan" },
  { value: "other", label: "Other / Not Sure Yet" },
];

export const companySizeOptions = [
  { value: "1-10", label: "1 - 10 employees" },
  { value: "11-50", label: "11 - 50 employees" },
  { value: "51-200", label: "51 - 200 employees" },
  { value: "200+", label: "200+ employees" },
];

export const budgetOptions = [
  { value: "under-50k", label: "Under KES 50,000" },
  { value: "50k-150k", label: "KES 50,000 - 150,000" },
  { value: "150k-500k", label: "KES 150,000 - 500,000" },
  { value: "500k-plus", label: "KES 500,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

export const timelineOptions = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-4-weeks", label: "Within 1 - 4 weeks" },
  { value: "1-3-months", label: "Within 1 - 3 months" },
  { value: "flexible", label: "Flexible / Just researching" },
];

export const quoteProcessSteps = [
  {
    step: "01",
    title: "Submit Your Request",
    description:
      "Tell us about your business, the services you need, and your timeline using the form below.",
  },
  {
    step: "02",
    title: "We Review & Follow Up",
    description:
      "Our team reviews your request and reaches out within one business day to clarify scope if needed.",
  },
  {
    step: "03",
    title: "Receive Your Quote",
    description:
      "We put together a tailored quote based on your specific needs, with no hidden costs or obligations.",
  },
  {
    step: "04",
    title: "Get Started",
    description:
      "Once you're happy with the quote, we schedule an onboarding date that works for your business.",
  },
];