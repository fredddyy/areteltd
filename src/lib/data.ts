import {
  Code2,
  Globe,
  Smartphone,
  Brain,
  Cloud,
  Building2,
  Shield,
  Zap,
  Target,
  Users,
  HeartHandshake,
  TrendingUp,
  Search,
  FileText,
  Hammer,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Company Info ───────────────────────────────────────────────

export const company = {
  name: "Arête LTD",
  tagline: "Building Technology That Moves Businesses Forward.",
  email: "hello@areteltd.com",
  phone: "+234 800 000 0000",
  address: "Lagos, Nigeria",
  linkedin: "https://linkedin.com/company/areteltd",
  twitter: "https://twitter.com/areteltd",
  whatsapp: "https://wa.me/2348000000000",
};

// ─── Navigation ─────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

// ─── Services ───────────────────────────────────────────────────

export interface ServiceItem {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  overview: string;
  problems: string[];
  deliverables: string[];
  capabilities: string[];
}

export const services: ServiceItem[] = [
  {
    slug: "custom-software",
    icon: Code2,
    title: "Custom Software Development",
    shortDescription:
      "Purpose-built software that solves the operational challenges unique to your organisation.",
    overview:
      "We design and build bespoke software systems tailored to your specific business processes, compliance requirements and growth objectives. From enterprise resource planning to specialised workflow tools, every solution is engineered for reliability and long-term maintainability.",
    problems: [
      "Off-the-shelf software that doesn't fit your processes",
      "Manual workflows slowing down operations",
      "Disconnected systems creating data silos",
      "Scaling limitations with existing tools",
    ],
    deliverables: [
      "Enterprise management systems",
      "Business process automation platforms",
      "Institutional and government platforms",
      "Workflow management applications",
      "Custom web applications",
    ],
    capabilities: [
      "Requirements analysis and system design",
      "Agile development with iterative delivery",
      "Integration with existing infrastructure",
      "Comprehensive testing and quality assurance",
      "Post-launch support and maintenance",
    ],
  },
  {
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    shortDescription:
      "High-performance websites and web applications that represent your brand and serve your users.",
    overview:
      "We build modern, responsive web experiences — from corporate websites and client portals to full-featured e-commerce platforms. Every project is optimised for speed, accessibility and search engine visibility.",
    problems: [
      "Outdated websites that don't reflect your brand",
      "Poor mobile experience driving users away",
      "Slow page loads hurting conversions",
      "Difficulty managing and updating content",
    ],
    deliverables: [
      "Corporate and institutional websites",
      "Web portals and dashboards",
      "E-commerce platforms",
      "Customer-facing web applications",
      "Content management systems",
    ],
    capabilities: [
      "Responsive, mobile-first design",
      "Performance optimisation and Core Web Vitals",
      "SEO-friendly architecture",
      "CMS integration and content workflows",
      "Analytics and conversion tracking",
    ],
  },
  {
    slug: "mobile-development",
    icon: Smartphone,
    title: "Mobile Application Development",
    shortDescription:
      "Native and cross-platform mobile apps that extend your business into your users' pockets.",
    overview:
      "We develop robust mobile applications for Android, iOS and cross-platform deployment. Whether you need a customer-facing app, an internal tool or a mobile companion to an existing system, we deliver polished, performant experiences.",
    problems: [
      "No mobile presence for your business",
      "Separate codebases increasing maintenance costs",
      "Poor app performance and user retention",
      "Difficulty reaching users on their preferred devices",
    ],
    deliverables: [
      "Android applications",
      "iOS applications",
      "Cross-platform applications",
      "Mobile business tools",
      "Companion apps for enterprise systems",
    ],
    capabilities: [
      "Native iOS and Android development",
      "Cross-platform frameworks (React Native, Flutter)",
      "Offline-capable architectures",
      "Push notifications and real-time features",
      "App store submission and launch support",
    ],
  },
  {
    slug: "ai-automation",
    icon: Brain,
    title: "Artificial Intelligence & Automation",
    shortDescription:
      "Intelligent systems that automate repetitive tasks and unlock insights from your data.",
    overview:
      "We integrate AI capabilities into business workflows — from intelligent document processing and automated customer support to predictive analytics. Our approach focuses on practical, measurable outcomes rather than technology for its own sake.",
    problems: [
      "Staff time consumed by repetitive manual tasks",
      "Slow document processing and data entry",
      "Inability to extract insights from growing data volumes",
      "Customer support that can't scale with demand",
    ],
    deliverables: [
      "AI-powered business applications",
      "Intelligent assistants and chatbots",
      "Workflow and process automation",
      "Document processing and extraction",
      "AI integration into existing systems",
    ],
    capabilities: [
      "Natural language processing and generation",
      "Computer vision and document analysis",
      "Machine learning model development",
      "Conversational AI and chatbot design",
      "Automation pipeline architecture",
    ],
  },
  {
    slug: "cloud-it",
    icon: Cloud,
    title: "Cloud & IT Solutions",
    shortDescription:
      "Reliable cloud infrastructure and IT services that keep your systems running and your data secure.",
    overview:
      "We help organisations migrate to the cloud, configure scalable infrastructure and maintain robust backend systems. From initial architecture to ongoing operations, we ensure your technology foundation is solid, secure and cost-effective.",
    problems: [
      "On-premise servers nearing end of life",
      "Unpredictable infrastructure costs",
      "Security vulnerabilities in legacy systems",
      "Difficulty scaling to meet demand spikes",
    ],
    deliverables: [
      "Cloud application deployment",
      "Infrastructure configuration and management",
      "System integration and API development",
      "Database and backend solutions",
      "Application maintenance and monitoring",
    ],
    capabilities: [
      "AWS, Azure and Google Cloud platforms",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "CI/CD pipeline setup",
      "Security hardening and compliance",
      "Performance monitoring and cost optimisation",
    ],
  },
  {
    slug: "enterprise-digital",
    icon: Building2,
    title: "Enterprise Digital Solutions",
    shortDescription:
      "End-to-end digital transformation for institutions ready to modernise how they operate.",
    overview:
      "We partner with large organisations and institutions to design and implement comprehensive digital solutions — from institutional management platforms and digital libraries to enterprise reporting systems. Every engagement begins with understanding your operational reality.",
    problems: [
      "Paper-based processes that limit efficiency",
      "Fragmented systems that don't share data",
      "Lack of real-time visibility into operations",
      "Difficulty meeting digital transformation mandates",
    ],
    deliverables: [
      "Institutional management platforms",
      "Digital libraries and information systems",
      "Enterprise workflow systems",
      "Reporting and analytics platforms",
      "Digital transformation consulting",
    ],
    capabilities: [
      "Business process mapping and re-engineering",
      "Enterprise architecture design",
      "Change management and user training",
      "Data migration and system consolidation",
      "Ongoing technical advisory",
    ],
  },
];

// ─── Why Choose Us ──────────────────────────────────────────────

export interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const valueProps: ValueProp[] = [
  {
    icon: Target,
    title: "Tailored to Your Needs",
    description:
      "We don't sell generic products. Every solution is shaped by your specific business context, constraints and objectives.",
  },
  {
    icon: TrendingUp,
    title: "Practical Business Outcomes",
    description:
      "Technology is a means, not the end. We focus on measurable improvements to efficiency, revenue or service delivery.",
  },
  {
    icon: Zap,
    title: "Modern Engineering Practices",
    description:
      "Clean architecture, automated testing, CI/CD pipelines and infrastructure as code — built to last, not just to launch.",
  },
  {
    icon: Shield,
    title: "Quality & Reliability",
    description:
      "Rigorous quality assurance, security best practices and robust error handling across every project we deliver.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Technical Partnership",
    description:
      "We stay engaged after delivery — providing maintenance, support and strategic guidance as your needs evolve.",
  },
  {
    icon: Users,
    title: "Collaborative Process",
    description:
      "Transparent communication, regular demos and stakeholder involvement ensure the final product meets expectations.",
  },
];

// ─── Process Steps ──────────────────────────────────────────────

export interface ProcessStep {
  icon: LucideIcon;
  phase: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    icon: Search,
    phase: "01",
    title: "Discover",
    description:
      "We listen, ask questions and study your operations to understand the real challenges before proposing solutions.",
  },
  {
    icon: FileText,
    phase: "02",
    title: "Plan",
    description:
      "We define the technical approach, project scope, milestones and success criteria in a clear, agreed roadmap.",
  },
  {
    icon: Hammer,
    phase: "03",
    title: "Build",
    description:
      "We design, develop and test iteratively — sharing progress regularly so you can steer the outcome.",
  },
  {
    icon: Rocket,
    phase: "04",
    title: "Deliver",
    description:
      "We deploy to production, train your team and provide post-launch support to ensure a smooth transition.",
  },
];

// ─── Projects ───────────────────────────────────────────────────

export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  image?: string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  capabilities: string[];
  technologies: string[];
  outcomes: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "institutional-management-platform",
    title: "Institutional Management Platform",
    client: "Internal Product",
    industry: "Education",
    category: "Enterprise Software",
    image: "/projects/institutional.webp",
    shortDescription:
      "A comprehensive platform for managing academic operations, student records and institutional workflows.",
    overview:
      "Designed and developed a full-featured institutional management system to digitise core academic and administrative processes for educational institutions.",
    problem:
      "Educational institutions relying on paper-based records and disconnected spreadsheets, leading to data inconsistencies, slow reporting and administrative bottlenecks.",
    solution:
      "A unified web platform covering student enrolment, academic records, timetabling, examination management and reporting — accessible to administrators, faculty and students through role-based dashboards.",
    capabilities: [
      "Student enrolment and records management",
      "Academic timetable generation",
      "Examination and grading system",
      "Role-based access control",
      "Automated report generation",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    outcomes: [
      "Centralised academic records replacing manual processes",
      "Real-time access to student data for authorised staff",
      "Automated transcript and report generation",
    ],
    featured: true,
  },
  {
    slug: "healthcare-management-system",
    title: "Healthcare Management System",
    client: "Internal Product",
    industry: "Healthcare",
    category: "Enterprise Software",
    image: "/projects/healthcare.webp",
    shortDescription:
      "A patient records and clinic management system designed for small to mid-size healthcare facilities.",
    overview:
      "Built a clinic management platform that streamlines patient registration, appointment scheduling, medical records and billing for healthcare providers.",
    problem:
      "Clinics and healthcare facilities using manual logbooks and fragmented tools, resulting in lost records, scheduling conflicts and slow billing cycles.",
    solution:
      "An integrated system handling patient intake, appointment scheduling, electronic medical records, prescription tracking and invoicing — with HIPAA-informed data handling practices.",
    capabilities: [
      "Patient registration and records",
      "Appointment scheduling and reminders",
      "Electronic medical records",
      "Prescription and pharmacy tracking",
      "Billing and invoicing",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Docker"],
    outcomes: [
      "Digitised patient records with structured search",
      "Reduced appointment conflicts through automated scheduling",
      "Streamlined billing and payment tracking",
    ],
    featured: true,
  },
  {
    slug: "ai-support-ticketing",
    title: "AI-Powered Support & Ticketing System",
    client: "Internal Product",
    industry: "Technology",
    category: "AI & Automation",
    image: "/projects/ai-support.webp",
    shortDescription:
      "An intelligent helpdesk system that uses AI to classify, route and assist with support ticket resolution.",
    overview:
      "Developed an AI-enhanced support ticketing platform that automatically categorises incoming requests, suggests responses and escalates complex issues to the appropriate team.",
    problem:
      "Growing organisations struggling to manage increasing support volumes, with slow response times, misrouted tickets and inconsistent service quality.",
    solution:
      "A smart ticketing system with natural language classification, automated routing, suggested response drafts and analytics dashboards — reducing first-response times and improving resolution consistency.",
    capabilities: [
      "AI ticket classification and routing",
      "Suggested response generation",
      "Escalation workflows",
      "SLA tracking and reporting",
      "Knowledge base integration",
    ],
    technologies: ["Python", "FastAPI", "OpenAI API", "React", "PostgreSQL", "Redis"],
    outcomes: [
      "Automated classification of incoming support requests",
      "Faster first-response times through AI-suggested replies",
      "Improved ticket routing accuracy",
    ],
    featured: true,
  },
  {
    slug: "document-processing-system",
    title: "Document Processing & Automation System",
    client: "Internal Prototype",
    industry: "Financial Services",
    category: "AI & Automation",
    shortDescription:
      "An automated system for extracting, validating and processing data from scanned documents and forms.",
    overview:
      "Built a document processing pipeline that uses OCR and AI to extract structured data from scanned documents, validate it against business rules and feed it into downstream systems.",
    problem:
      "Organisations processing high volumes of paper documents and forms manually — a slow, error-prone process that creates data entry backlogs and compliance risks.",
    solution:
      "An end-to-end pipeline combining optical character recognition, AI-powered field extraction, validation rules and API-based integration with existing databases and workflow tools.",
    capabilities: [
      "OCR and intelligent document parsing",
      "Field extraction and data validation",
      "Template-based processing for standard forms",
      "API integration with downstream systems",
      "Audit trail and processing reports",
    ],
    technologies: ["Python", "Tesseract OCR", "OpenAI API", "FastAPI", "PostgreSQL"],
    outcomes: [
      "Significant reduction in manual data entry time",
      "Improved data accuracy through automated validation",
      "Full audit trail for processed documents",
    ],
    featured: true,
  },
];

// ─── Team / Leadership ──────────────────────────────────────────

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export const team: TeamMember[] = [
  {
    name: "[Founder Name]",
    role: "Founder & CEO",
    bio: "Leads the company's strategic direction, client relationships and technology vision. Brings experience in software engineering and digital transformation across multiple industries.",
    initials: "FN",
  },
  {
    name: "[Technical Lead]",
    role: "Lead Software Engineer",
    bio: "Oversees technical architecture, code quality and engineering best practices. Specialises in building scalable, maintainable enterprise systems.",
    initials: "TL",
  },
  {
    name: "[Design Lead]",
    role: "Head of Design",
    bio: "Leads user experience research, interface design and design system development. Focused on creating intuitive, accessible digital products.",
    initials: "DL",
  },
];

// ─── Values ─────────────────────────────────────────────────────

export interface CoreValue {
  title: string;
  description: string;
}

export const coreValues: CoreValue[] = [
  {
    title: "Innovation",
    description: "We explore modern approaches and technologies to deliver better outcomes for our clients.",
  },
  {
    title: "Integrity",
    description: "We communicate honestly, set realistic expectations and deliver on our commitments.",
  },
  {
    title: "Excellence",
    description: "We hold our work to high standards — in code quality, design and project management.",
  },
  {
    title: "Accountability",
    description: "We take ownership of our deliverables and stand behind the solutions we build.",
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients, treating every project as a shared endeavour.",
  },
  {
    title: "Continuous Improvement",
    description: "We invest in learning, refine our processes and strive to get better with every project.",
  },
];
