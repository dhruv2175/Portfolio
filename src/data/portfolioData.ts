import { Project, Skill, ExperienceItem, SkillPillar } from '../types';
import portraitGreen from '../img/IMG_8831.PNG';
import oceanWave from '../img/IMG_8832.PNG';
import signaturePortrait from '../img/WhatsApp Image 2026-07-17 at 12.45.42 (1).jpeg';

export const PERSONAL_INFO = {
  name: "Dhruv Patel",
  title: "Full Stack Developer",
  location: "Ahmedabad, Gujarat, India",
  experience: "B.Tech Computer Engineering (2023–2027)",
  email: "dspatel2175@gmail.com",
  phone: "+91 99097 52175",
  bio: "Aspiring React Developer with hands-on experience in building responsive and user-friendly web applications using React.js, JavaScript, HTML, and CSS. Skilled in integrating REST APIs, managing application state, and developing reusable UI components. Familiar with FastAPI, MySQL, and Git, enabling effective collaboration in full-stack development.",
  quote: "Passionate about creating clean, scalable, and high-performance web applications.",
  specializations: ["React.js & Responsive Web Applications", "REST API Integration & State Management", "FastAPI & Full-Stack Development", "MySQL & MongoDB"],
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
    id: "react-frontend",
    title: "React & Frontend",
    subtitle: "Responsive web applications with React.js, JavaScript, HTML, and CSS.",
    category: "Frontend & UI",
    accent: "#61DAFB",
    bgAccent: "#61DAFB15",
    iconName: "Globe",
    experience: "HANDS-ON",
    subSkills: [
      { name: "React.js", level: "Hands-on", description: "Building responsive and user-friendly web applications with reusable UI components.", badge: "CORE" },
      { name: "JavaScript (ES6+)", level: "Skilled", description: "Modern JavaScript for client-side interactivity and application logic.", badge: "CORE" },
      { name: "HTML5 & CSS3", level: "Skilled", description: "Semantic markup and styling for responsive web layouts.", badge: "CORE" },
      { name: "Responsive Web Design", level: "Skilled", description: "Layouts optimized for desktop and mobile devices.", badge: "UI" },
      { name: "State Management", level: "Skilled", description: "Managing application state in React-based frontends.", badge: "CORE" }
    ]
  },
  {
    id: "python-backend",
    title: "Python & Backend",
    subtitle: "Backend functionality with Python, FastAPI, and RESTful APIs.",
    category: "Backend & DB",
    accent: "#3776AB",
    bgAccent: "#3776AB15",
    iconName: "Code2",
    experience: "FAMILIAR",
    subSkills: [
      { name: "Python", level: "Hands-on", description: "Developed and maintained Python modules for backend functionality.", badge: "CORE" },
      { name: "FastAPI", level: "Familiar", description: "Backend API development for full-stack web applications.", badge: "API" },
      { name: "RESTful APIs", level: "Skilled", description: "Building, testing, and integrating REST APIs across the stack.", badge: "API" },
      { name: "Java", level: "Skilled", description: "Object-oriented programming with Java.", badge: "LANG" }
    ]
  },
  {
    id: "databases",
    title: "Databases & SQL",
    subtitle: "Relational and document database work with SQL, MySQL, and MongoDB.",
    category: "Backend & DB",
    accent: "#00758F",
    bgAccent: "#00758F15",
    iconName: "Cpu",
    experience: "FAMILIAR",
    subSkills: [
      { name: "MySQL", level: "Familiar", description: "Working with SQL databases for application data storage.", badge: "SQL" },
      { name: "MongoDB", level: "Familiar", description: "Document database usage in full-stack projects.", badge: "NOSQL" },
      { name: "SQL", level: "Skilled", description: "Performing CRUD operations and database queries.", badge: "CORE" }
    ]
  },
  {
    id: "ui-frameworks",
    title: "UI Frameworks & Design",
    subtitle: "Tailwind CSS, Bootstrap styling, and design tools including Figma and Canva.",
    category: "Frontend & UI",
    accent: "#06B6D4",
    bgAccent: "#06B6D415",
    iconName: "Figma",
    experience: "SKILLED",
    subSkills: [
      { name: "Tailwind CSS", level: "Skilled", description: "Utility-first CSS styling for responsive React applications.", badge: "CSS" },
      { name: "Bootstrap", level: "Skilled", description: "Responsive layout and component styling with Bootstrap.", badge: "CSS" },
      { name: "Figma", level: "Skilled", description: "UI/UX design and layout work with Figma.", badge: "DESIGN" },
      { name: "Canva", level: "Skilled", description: "Visual design and asset creation with Canva.", badge: "DESIGN" }
    ]
  },
  {
    id: "dev-tools",
    title: "Development Tools",
    subtitle: "Version control, API testing, and development workflow tooling.",
    category: "AI & Tools",
    accent: "#FFD700",
    bgAccent: "#FFD70020",
    iconName: "Sparkles",
    experience: "SKILLED",
    subSkills: [
      { name: "Git & GitHub", level: "Skilled", description: "Version control and collaborative development with Git and GitHub.", badge: "TOOLS" },
      { name: "Postman", level: "Skilled", description: "Testing and debugging REST APIs during development.", badge: "TOOLS" },
      { name: "VS Code", level: "Skilled", description: "Primary development environment for frontend and backend work.", badge: "TOOLS" }
    ]
  }
];

export const SKILLS_DATA: Skill[] = [
  {
    name: "WordPress",
    category: "CMS & E-Commerce",
    level: "Expert",
    accent: "#FF6F61",
    iconName: "Globe",
    description: "Custom core development, multi-site architecture, Gutenberg block extension, database scaling."
  },
  {
    name: "Shopify",
    category: "CMS & E-Commerce",
    level: "Expert",
    accent: "#96BF48",
    iconName: "ShoppingBag",
    description: "Liquid theme engineering, custom app integrations, checkout extensions, Dawn customization."
  },
  {
    name: "PHP",
    category: "Backend & DB",
    level: "Advanced",
    accent: "#777BB4",
    iconName: "Code2",
    description: "Object-oriented PHP 8.x, PSR compliance, custom ORM bindings, REST & GraphQL endpoints."
  },
  {
    name: "React",
    category: "Frontend",
    level: "Advanced",
    accent: "#61DAFB",
    iconName: "Globe",
    description: "Component-driven UIs, reusable frontend architecture, responsive interfaces, and modern React patterns."
  },
  {
    name: "MySQL",
    category: "Backend & DB",
    level: "Advanced",
    accent: "#00758F",
    iconName: "Database",
    description: "Schema design, query indexing, ACID transaction management, relational mapping."
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    level: "Advanced",
    accent: "#7952B3",
    iconName: "Layout",
    description: "Grid architectures, custom Sass overrides, responsive layout utility development."
  },
  {
    name: "Tailwind",
    category: "Frontend",
    level: "Expert",
    accent: "#06B6D4",
    iconName: "Wind",
    description: "Utility-first CSS styling, JIT compiler configuration, custom design system tokens."
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Expert",
    accent: "#F7DF1E",
    iconName: "Terminal",
    description: "ES6+ modern syntax, asynchronous API handling, DOM manipulation, custom web components."
  },
  {
    name: "jQuery",
    category: "Frontend",
    level: "Advanced",
    accent: "#0769AD",
    iconName: "Zap",
    description: "Legacy code refactoring, DOM traversal, event delegation, Ajax asynchronous pipelines."
  },
  {
    name: "ACF",
    category: "CMS & E-Commerce",
    level: "Expert",
    accent: "#00FF7F",
    iconName: "Edit3",
    description: "Advanced Custom Fields Pro, custom flexible layouts, Gutenberg block creation, option pages."
  },
  {
    name: "Elementor",
    category: "CMS & E-Commerce",
    level: "Expert",
    accent: "#92003B",
    iconName: "Box",
    description: "Custom Elementor widget development, dynamic tag integrations, design kit creation."
  },
  {
    name: "Divi",
    category: "CMS & E-Commerce",
    level: "Advanced",
    accent: "#8A2BE2",
    iconName: "Palette",
    description: "Custom module building, layout builder customization, child theme architecture."
  },
  {
    name: "Oxygen",
    category: "CMS & E-Commerce",
    level: "Advanced",
    accent: "#00BFFF",
    iconName: "Maximize2",
    description: "Visual builder customization, custom code blocks, dynamic query loops."
  },
  {
    name: "Sage",
    category: "CMS & E-Commerce",
    level: "Expert",
    accent: "#FFD700",
    iconName: "Cpu",
    description: "Roots Sage 10 theme framework, Blade templating, Acorn framework, modern asset bundling."
  },
  {
    name: "Plugin Development",
    category: "CMS & E-Commerce",
    level: "Expert",
    accent: "#FF4081",
    iconName: "Puzzle",
    description: "Bespoke WordPress plugin development, hooks & filters API, custom database tables, cron jobs."
  },
  {
    name: "Theme Development",
    category: "CMS & E-Commerce",
    level: "Expert",
    accent: "#FF6F61",
    iconName: "Sparkles",
    description: "Pixel-perfect custom theme creation, lightweight asset loaders, zero bloat, Accessibility ready."
  },
  {
    name: "API Integration",
    category: "Backend & DB",
    level: "Expert",
    accent: "#00FF7F",
    iconName: "Share2",
    description: "RESTful APIs, GraphQL, Stripe, PayPal, HubSpot, Salesforce, Webhooks & OAuth 2.0."
  },
  {
    name: "Figma",
    category: "Development Tools",
    level: "Advanced",
    accent: "#F24E1E",
    iconName: "Figma",
    description: "Figma-to-Code pixel perfection, component design systems, auto-layout inspection."
  },
  {
    name: "Webflow",
    category: "Development Tools",
    level: "Advanced",
    accent: "#4353FF",
    iconName: "Monitor",
    description: "CMS collections, custom JavaScript embeds, interaction design & animations."
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
        scope: "Full-stack SaaS application",
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
        scope: "Full-stack SaaS MVP",
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
    alt: "Dhruv Patel — Green portrait hero image",
    rotation: "-2deg"
  },
  {
    url: oceanWave,
    alt: "Dhruv Patel — Ocean wave artistic portrait",
    rotation: "2deg"
  },
  {
    url: signaturePortrait,
    alt: "Dhruv Patel — Signature portrait",
    rotation: "-3deg"
  }
];
