import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "wild-oasis",
    title: "Wild Oasis",
    description:
      "A luxury cabin booking platform with full authentication, real-time availability, and a polished booking experience.",
    longDescription:
      "Wild Oasis is a full-stack luxury cabin booking application built with Next.js App Router and Supabase. It features server-side rendering, real-time data synchronization, authentication via NextAuth, and a beautiful Tailwind CSS UI.",
    image: "/wild-oasis.webp",
    tags: ["Next.js", "React", "NextAuth", "Supabase", "Tailwind CSS"],
    features: [
      "Server-side rendering with Next.js App Router",
      "Authentication with NextAuth (Google OAuth)",
      "Real-time cabin availability with Supabase",
      "Full booking management and reservation system",
      "Responsive, polished UI with Tailwind CSS",
    ],
    challenges:
      "Implementing server and client component boundaries in Next.js App Router while maintaining smooth UX and real-time data synchronization with Supabase.",
    github: "https://github.com/mmahmoud95/wild-oasis",
    demo: "https://wild-oasis-mz.vercel.app",
    featured: true,
  },
  {
    id: "jobify",
    title: "Jobify",
    description:
      "A full-stack job management dashboard with authentication, CRUD operations, analytics, and a clean admin interface.",
    longDescription:
      "Jobify is a full-stack job tracking dashboard allowing users to manage job applications, track statuses, and view analytics. Built with React, Context API, Express, and MongoDB with JWT authentication.",
    image: "/jobify.webp",
    tags: ["React", "Context API", "Express", "MongoDB", "JWT"],
    features: [
      "JWT-based authentication with protected routes",
      "Full CRUD for job application management",
      "Dashboard analytics with application statistics",
      "Job status tracking (Applied / Interview / Declined)",
      "Responsive admin-style dashboard layout",
    ],
    challenges:
      "Designing a scalable state management architecture with Context API for complex filter and pagination states without performance degradation.",
    github: "https://github.com/mmahmoud95/Jobify",
    demo: "https://jobifymz.up.railway.app",
    featured: true,
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone",
    description:
      "A feature-rich e-commerce platform with product listings, cart management, user reviews, filtering, and a secure checkout flow.",
    longDescription:
      "A comprehensive Amazon-inspired e-commerce application built with React and Redux Toolkit on the frontend, and Express/MongoDB on the backend. Features include product management, user reviews, cart operations, and advanced filtering.",
    image: "/amazon-clone.webp",
    tags: ["React", "Redux Toolkit", "Express", "MongoDB", "JWT"],
    features: [
      "Product listings with search, filter, and sort",
      "Cart management with Redux Toolkit",
      "User authentication and profile management",
      "Product reviews and star-rating system",
      "Responsive e-commerce UI",
    ],
    challenges:
      "Building performant filtering and search with debounced queries while keeping Redux state synchronized with server state across cart and user operations.",
    github: "https://github.com/mmahmoud95/amazon-clone",
    demo: "https://amazonnew.netlify.app",
    featured: true,
  },
  {
    id: "fast-pizza",
    title: "Fast Pizza",
    description:
      "A sleek pizza ordering app with real-time cart, order tracking, GPS-based address detection, and Redux-powered state management.",
    longDescription:
      "Fast Pizza is a pizza ordering application with a clean, intuitive interface. Users can browse the menu, add to cart, track their order priority, and use GPS to auto-detect their delivery address.",
    image: "/fast-pizza.webp",
    tags: ["React", "Redux Toolkit", "Tailwind CSS", "React Router", "Axios"],
    features: [
      "Menu browsing with dynamic cart management",
      "GPS-based address auto-detection",
      "Order priority system with dynamic pricing",
      "Real-time order status tracking",
      "Responsive, mobile-first design",
    ],
    challenges:
      "Implementing a performant Redux store for a multi-step order flow with GPS integration while keeping the UI reactive to cart state changes in real-time.",
    github: "https://github.com/mmahmoud95/fast-pizza",
    demo: "https://fast-pizza-mz.netlify.app",
    featured: true,
  },
];
