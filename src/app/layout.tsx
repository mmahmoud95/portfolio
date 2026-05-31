import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mustafa Mahmoud | Frontend Developer",
  description:
    "Frontend Developer specializing in React, Next.js, and TypeScript. Building scalable, modern web applications with clean architecture and exceptional user experiences.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Mustafa Mahmoud",
    "Web Developer",
    "Full Stack Developer",
    "JavaScript",
  ],
  authors: [{ name: "Mustafa Mahmoud" }],
  creator: "Mustafa Mahmoud",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mustafa Mahmoud | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and TypeScript. Building scalable web applications.",
    siteName: "Mustafa Mahmoud Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustafa Mahmoud | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mustafa Mahmoud",
  jobTitle: "Frontend Developer",
  description:
    "Frontend Developer specializing in React, Next.js, and TypeScript.",
  sameAs: [
    "https://github.com/mmahmoud95",
    "https://www.linkedin.com/in/mustafa-mahmoud-za",
  ],
  email: "mustafa.mahmoud.za@gmail.com",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-[var(--color-text)] font-sans antialiased overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
