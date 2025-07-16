import type { Service } from "../../types/service";
import { serviceDescriptions } from "./ServiceDescriptions";
import { Code, Database, MessageSquare, Monitor } from "lucide-react";

export const servicesData: Service[] = [
  {
    title: "Web Development",
    subtitle: "Responsive, Scalable & Polished",
    description: serviceDescriptions.webDevelopment,
    features: [
      "Modern, mobile-first layouts",
      "Clean, maintainable code",
      "Smooth animations (Framer Motion)",
      "SEO & performance best practices",
      "Multi-device & browser support",
      "Seamless backend/API integration",
    ],
    cta: "Build your site",
    icon: Code,
  },
  {
    title: "Application Architecture",
    subtitle: "Solid Foundations for Scalable Apps",
    description: serviceDescriptions.applicationArchitecture,
    features: [
      "Modular, scalable architecture",
      "Database integration (MySQL, PostgreSQL)",
      "GraphQL API design",
      "Authentication & security basics",
      "Cloud deployment (Vercel, GitHub)",
      "Clear and thorough documentation",
    ],
    cta: "Start your app",
    icon: Database,
  },
  {
    title: "Tech Consulting",
    subtitle: "Tailored Technical Guidance",
    description: serviceDescriptions.techConsulting,
    features: [
      "Code reviews & audits",
      "MVP planning & tech stack advice",
      "Performance and structure optimization",
      "Process improvement suggestions",
      "Project mentoring & support",
      "Practical guidance at all levels",
    ],
    cta: "Let’s talk",
    icon: MessageSquare,
  },
  {
    title: "UI/UX Design",
    subtitle: "User-Focused Experience",
    description: serviceDescriptions.uiuxDesign,
    features: [
      "Clean, modern layouts",
      "Clear visual hierarchy",
      "Smooth user flows",
      "Interactive prototypes",
      "Accessibility best practices",
      "Developer-ready designs",
    ],
    cta: "See portfolio",
    icon: Monitor,
  },
];
