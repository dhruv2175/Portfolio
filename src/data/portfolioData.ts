import { Project, Skill, ExperienceItem, SkillPillar } from '../types';
import portraitGreen from '../img/IMG_8831.PNG';
import oceanWave from '../img/IMG_8832.PNG';
import signaturePortrait from '../img/WhatsApp Image 2026-07-17 at 12.45.42 (1).jpeg';

export const PERSONAL_INFO = {
  name: "Dhruv Patel",
  title: "UI/UX Designer",
  location: "Ahmedabad, Gujarat, India",
  experience: "B.Tech Computer Engineering (2023–2027)",
  email: "dspatel2175@gmail.com",
  phone: "+91 99097 52175",
  bio: "Creative and detail-oriented UI/UX Designer based in Ahmedabad. Equipped with advanced expertise in Figma for high-fidelity UI/UX prototyping and design systems, and Adobe Photoshop for digital graphic editing. Possesses solid foundational knowledge and hands-on familiarity with Adobe Illustrator (for vector graphics and custom illustrations) and Adobe InDesign (for professional layouts and brand guidelines). Passionate about crafting visually stunning user interface elements, building clean layouts, and collaborating with cross-functional product and engineering teams to build high-performance solutions.",
  quote: "Passionate about creating visually stunning, user-centric, and high-performance digital experiences.",
  specializations: ["Figma & High-Fidelity UI/UX Prototyping", "Adobe Photoshop & Digital Graphic Design", "Adobe Illustrator (Vector Art & Custom Icons)", "Adobe InDesign (Layout & Brand Guidelines)"],
  socials: {
    github: "https://github.com/dhruv2175",
    linkedin: "https://www.linkedin.com/in/pateldhruvvv",
    instagram: "https://www.instagram.com/whodhulooo/",
    twitter: "#",
    email: "mailto:dspatel2175@gmail.com",
  }
};

export const MAIN_SKILL_PILLARS: SkillPillar[] = [
  {
    id: "figma-uiux",
    title: "Figma & UI/UX Design",
    subtitle: "Creating interactive, user-centric interfaces, custom design systems, and responsive layouts.",
    category: "Product & UI/UX",
    accent: "#F24E1E",
    bgAccent: "#F24E1E15",
    iconName: "Figma",
    experience: "EXPERT",
    subSkills: [
      { name: "Figma", level: "Expert", description: "Creating pixel-perfect high-fidelity mockups, vector shapes, and user journeys.", badge: "CORE" },
      { name: "Design Systems", level: "Skilled", description: "Developing reusable UI component libraries, typography, and color tokens.", badge: "SYSTEMS" },
      { name: "Interactive Prototyping", level: "Skilled", description: "Configuring user flows, transitions, and component states for validation.", badge: "UX" },
      { name: "User Interface Design", level: "Skilled", description: "Optimizing dashboard structures, layouts, and data visualizations.", badge: "PRODUCT" },
      { name: "Responsive Layouts", level: "Skilled", description: "Designing interfaces optimized for both mobile devices and wide desktop screens.", badge: "UI" }
    ]
  },
  {
    id: "adobe-photoshop",
    title: "Adobe Photoshop",
    subtitle: "High-impact digital imaging, graphic editing, marketing collaterals, and asset preparation.",
    category: "Graphic Design",
    accent: "#31A8FF",
    bgAccent: "#31A8FF15",
    iconName: "Palette",
    experience: "SKILLED",
    subSkills: [
      { name: "Image Manipulation", level: "Skilled", description: "Advanced compositing, photo retouching, and color grading.", badge: "CORE" },
      { name: "Marketing Graphics", level: "Skilled", description: "Designing digital banners, social media assets, and promotional banners.", badge: "CREATIVE" },
      { name: "Texture & Mockups", level: "Skilled", description: "Creating realistic product previews and custom graphical elements.", badge: "ASSETS" },
      { name: "Raster Art", level: "Skilled", description: "Crafting digital assets with custom brushes, layers, and masks.", badge: "EDITING" }
    ]
  },
  {
    id: "adobe-illustrator",
    title: "Adobe Illustrator",
    subtitle: "Vector illustrations, custom iconography, logo design, and scalable graphic assets.",
    category: "Vector & Assets",
    accent: "#FF9A00",
    bgAccent: "#FF9A0015",
    iconName: "Sparkles",
    experience: "FAMILIAR",
    subSkills: [
      { name: "Vector Illustration", level: "Familiar", description: "Creating resolution-independent digital drawings and artwork.", badge: "VECTOR" },
      { name: "Iconography", level: "Skilled", description: "Designing custom UI icon sets aligned with brand guidelines.", badge: "UI" },
      { name: "Logo Design", level: "Familiar", description: "Formulating scalable brand logomarks and visual assets.", badge: "BRANDING" }
    ]
  },
  {
    id: "adobe-indesign",
    title: "Adobe InDesign",
    subtitle: "Multi-page layout design, brochures, print-ready marketing materials, and digital portfolios.",
    category: "Print & Layout",
    accent: "#FF1493",
    bgAccent: "#FF149315",
    iconName: "BookOpen",
    experience: "FAMILIAR",
    subSkills: [
      { name: "Layout Design", level: "Familiar", description: "Creating grids and master page layouts for booklets and guides.", badge: "PRINT" },
      { name: "Brochures & Flyers", level: "Familiar", description: "Designing professional multi-page brochures and single-page flyers.", badge: "COLLATERAL" },
      { name: "Typography & Print PDF", level: "Familiar", description: "Setting precise paragraph styles and preparing print-ready exports.", badge: "LAYOUT" }
    ]
  },
  {
    id: "branding-collab",
    title: "Brand Strategy & Collab",
    subtitle: "Evolving brand guidelines and collaborating with marketing and product development teams.",
    category: "Workflow & Strategy",
    accent: "#00FF7F",
    bgAccent: "#00FF7F15",
    iconName: "Users",
    experience: "SKILLED",
    subSkills: [
      { name: "Brand Guidelines", level: "Skilled", description: "Defining and maintaining color palettes, typography systems, and visual consistency.", badge: "BRAND" },
      { name: "Dev Collaboration", level: "Skilled", description: "Ensuring smooth handoff of assets and CSS/layout specs to engineering.", badge: "COLLAB" },
      { name: "Marketing Support", level: "Skilled", description: "Designing high-conversion email templates and marketing campaign assets.", badge: "MARKETING" }
    ]
  }
];

export const SKILLS_DATA: Skill[] = [
  {
    name: "Figma",
    category: "Product & UI/UX",
    level: "Expert",
    accent: "#F24E1E",
    iconName: "Figma",
    description: "Figma-to-Code pixel perfection, design systems, auto-layout, interactive prototypes, and component libraries."
  },
  {
    name: "Adobe Photoshop",
    category: "Graphic Design",
    level: "Advanced",
    accent: "#31A8FF",
    iconName: "Palette",
    description: "Image manipulation, photo editing, visual compositing, and creative marketing banner design."
  },
  {
    name: "Adobe Illustrator",
    category: "Vector & Assets",
    level: "Intermediate",
    accent: "#FF9A00",
    iconName: "Sparkles",
    description: "Scalable vector graphics, custom icon design, logo creation, and brand elements."
  },
  {
    name: "Adobe InDesign",
    category: "Print & Layout",
    level: "Intermediate",
    accent: "#FF1493",
    iconName: "BookOpen",
    description: "Multi-page brochure layouts, print-ready document setups, grid-based typography, and flyers."
  },
  {
    name: "UI/UX Design",
    category: "Product & UI/UX",
    level: "Advanced",
    accent: "#FF6F61",
    iconName: "Layout",
    description: "Dashboard wireframing, interactive data visualization tables, and user flow optimization."
  },
  {
    name: "Brand Guidelines",
    category: "Workflow & Strategy",
    level: "Advanced",
    accent: "#00FF7F",
    iconName: "CheckCircle",
    description: "Maintaining visual consistency, defining style tiles, color systems, and corporate identity."
  },
  {
    name: "Marketing Materials",
    category: "Graphic Design",
    level: "Advanced",
    accent: "#92003B",
    iconName: "Maximize2",
    description: "Designing digital brochures, newsletter graphics, email templates, and high-impact social media assets."
  },
  {
    name: "Responsive Layouts",
    category: "Product & UI/UX",
    level: "Advanced",
    accent: "#06B6D4",
    iconName: "Monitor",
    description: "Creating fluid grid systems and adaptive UI designs that transition seamlessly from mobile to desktop."
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "Upstackers Technologies",
    role: "Python Developer Intern",
    period: "Internship",
    location: "Ahmedabad, India",
    accent: "#3776AB",
    highlights: [
      "Developed and maintained Python modules for backend functionality.",
      "Assisted in building and testing REST APIs.",
      "Worked with SQL databases to perform CRUD operations.",
      "Debugged and resolved application issues under senior developer guidance."
    ],
    technologies: ["Python", "REST APIs", "SQL"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "ai-interview-coach",
    title: "AI Interview Coach",
    subtitle: "AI-Powered Mock Interview Platform",
    role: "Full-Stack Developer",
    category: "React",
    year: "2025",
    techStack: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "Gemini API", "PostgreSQL", "JWT"],
    challenge: "Students and job seekers needed a realistic interview preparation experience that could generate role-specific questions, evaluate answers, and provide actionable feedback without human coaching.",
    solution: "Built a full-stack AI interview platform where users can configure interview settings, generate personalized questions with Gemini, answer in live sessions, and receive detailed evaluation across technical, communication, and problem-solving areas.",
    result: "Created a polished interview preparation app with personalized AI feedback, analytics, and a structured workflow for mock practice and performance tracking.",
    metrics: [
      { label: "Interview Modes", value: "5+", badge: "Types" },
      { label: "Evaluation", value: "AI", badge: "Feedback" },
      { label: "Workflow", value: "Full-Stack", badge: "MVP" }
    ],
    accentColor: "#61DAFB",
    imageBg: "bg-gradient-to-br from-[#61DAFB] via-[#FFD700] to-[#FF6F61]",
    featuredImg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    caseStudyDetails: {
      overview: "AI Interview Coach is a full-stack web application that simulates real interview experiences using Google Gemini AI. Users can customize interview settings, answer AI-generated questions, receive detailed feedback, and track their improvement over time.",
      highlights: [
        "Built a full-stack mock interview platform with personalized AI-powered question generation.",
        "Supported technical, HR, behavioral, coding, and case-study interview flows.",
        "Integrated Gemini-based answer evaluation with multiple scoring dimensions such as clarity, communication, and problem solving.",
        "Added interview history, analytics dashboard, and report generation for skill improvement tracking."
      ],
      architecture: "React + TypeScript + Tailwind CSS + FastAPI + Python + SQLAlchemy + PostgreSQL + Google Gemini API",
      clientInfo: {
        industry: "Career Preparation & EdTech",
        scope: "Full-stack web application",
        timeline: "Product MVP",
        location: "Remote"
      },
      problemDetails: [
        "Candidates needed realistic mock interviews that adapt to role, skill level, and resume context.",
        "Manual interview prep lacked structured feedback and consistent scoring.",
        "Users wanted a system that could guide them through practice and help track performance over time."
      ],
      solutionDetails: [
        "Implemented an interview setup flow with role, experience, difficulty, duration, resume upload, and job description context.",
        "Integrated AI-generated question sets and live interview session tracking with timers and hints.",
        "Added evaluation logic to generate scores, strengths, missing topics, ideal answers, and follow-up questions."
      ],
      codeSnippet: {
        filename: "backend/app/services/gemini_service.py",
        language: "python",
        code: "# Gemini-powered interview evaluation\nresponse = model.generate_content(prompt)\nscore = parse_json_response(response)"
      },
      comparisonMetrics: [
        { metric: "Interview Modes", before: "Manual prep", after: "5+ structured flows", improvement: "Expanded" },
        { metric: "Feedback", before: "No structured scoring", after: "Detailed AI evaluation", improvement: "Actionable" },
        { metric: "Tracking", before: "No analytics", after: "History + dashboard", improvement: "Visible" }
      ],
      takeaways: [
        "AI can transform mock interviewing into a scalable, personalized learning experience.",
        "Combining role-based prompts, evaluation scoring, and analytics creates a strong product loop for skill improvement.",
        "A modern full-stack architecture makes interview preparation accessible, repeatable, and measurable."
      ],
      testimonial: {
        quote: "AI Interview Coach makes interview preparation practical, smart, and measurable for every stage of the hiring journey.",
        author: "Project Concept",
        title: "Interview Preparation Experience"
      }
    }
  },
  {
    id: "billbuddy-ai",
    title: "BillBuddy AI",
    subtitle: "AI-Powered Expense Management Platform",
    role: "Full-Stack Developer",
    category: "React",
    year: "2025",
    techStack: ["React 19", "TypeScript", "TanStack Router", "TanStack Query", "TailwindCSS", "FastAPI", "SQLite", "Python"],
    challenge: "Group trips, flatmates, and team outings created messy expense tracking, repetitive settlement calculations, and manual receipt entry that slowed down reconciliation.",
    solution: "Built a premium, full-stack expense management app that automates receipt scanning, supports equal, percentage, and custom split logic, and optimizes debt settlement using a minimum cash-flow algorithm to resolve balances with fewer transactions.",
    result: "Delivered a polished trip finance platform that simplifies shared expenses, reduces manual overhead, and makes debt settlement faster, clearer, and more accurate.",
    metrics: [
      { label: "Expense Types", value: "3", badge: "Split Modes" },
      { label: "Debt Flow", value: "Optimized", badge: "Min Cash" },
      { label: "Platform", value: "Full-Stack", badge: "React + Python" }
    ],
    accentColor: "#3776AB",
    imageBg: "bg-gradient-to-br from-[#3776AB] via-[#00BFFF] to-[#FFD700]",
    featuredImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    caseStudyDetails: {
      overview: "BillBuddy AI is a premium, full-stack, AI-powered expense management web application designed for group trips, flatmates, and teams. It automates expense tracking by scanning receipts, calculating splits, and optimizing settlements to resolve debts in the minimum number of transactions possible.",
      highlights: [
        "Built a premium AI-powered expense management platform for group trips and shared budgets.",
        "Created an intelligent split system supporting equal, percentage, and custom allocations.",
        "Implemented a debt optimization engine that minimizes cash flow transfers and reduces settlement complexity.",
        "Developed receipt-scanning workflows that simulate OCR extraction for faster expense logging.",
        "Designed a responsive dashboard with analytics, trip insights, and team balance tracking."
      ],
      architecture: "React + TypeScript + TanStack Router + TanStack Query + TailwindCSS + FastAPI + SQLite + Uvicorn",
      clientInfo: {
        industry: "Travel & Expense Management",
        scope: "Full-stack web MVP",
        timeline: "3-week sprint",
        location: "Remote"
      },
      problemDetails: [
        "Users struggled to track who paid for what during group trips and shared household expenses.",
        "Manual split calculations often led to confusion and repeated back-and-forth settlement requests.",
        "Receipt-based expense entry was time-consuming and prone to error without automation."
      ],
      solutionDetails: [
        "Built a dashboard for trip summaries, balances, and category-wise analytics.",
        "Integrated split modes for equal, percentage, and custom allocations across participants.",
        "Optimized debt settlement using a minimum cash-flow model to collapse unnecessary transactions."
      ],
      codeSnippet: {
        filename: "backend/app.py",
        language: "python",
        code: "# Minimum cash-flow optimization\nnet_balances = {user: total_paid - total_owed for user in users}\n# Match creditors and debtors to minimize transfers"
      },
      comparisonMetrics: [
        { metric: "Settlement Transactions", before: "9 transfers", after: "3 transfers", improvement: "67% fewer" },
        { metric: "Expense Logging", before: "Manual entry", after: "Smart receipt capture", improvement: "Faster" },
        { metric: "Balance Clarity", before: "Confusing pairwise debts", after: "Optimized net balances", improvement: "Clear" }
      ],
      takeaways: [
        "Algorithmic debt resolution drastically reduces friction in shared spending.",
        "AI-assisted expense intake saves time and improves accuracy for repetitive entries.",
        "A clean frontend and real-time analytics improve trust and adoption for trip-based financial workflows."
      ],
      testimonial: {
        quote: "BillBuddy AI makes group expenses feel effortless. It turns chaos into a clean, optimized settlement workflow.",
        author: "Project Concept",
        title: "Trip Finance Experience"
      }
    }
  }
];

export const PROFILE_IMAGES = [
  {
    url: portraitGreen,
    alt: "Dhruv Patel — UI/UX Designer",
    rotation: "-2deg"
  },
  {
    url: oceanWave,
    alt: "Dhruv Patel — Art & UI/UX portfolio portrait",
    rotation: "2deg"
  },
  {
    url: signaturePortrait,
    alt: "Dhruv Patel — Signature portrait",
    rotation: "-3deg"
  }
];
