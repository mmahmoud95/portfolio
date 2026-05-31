import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <AnimatedSection className="flex flex-col items-center gap-6 text-center max-w-md">
        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.2)]">
          <CheckCircle size={36} className="text-green-400" />
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold font-display bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Message Sent!
          </h1>
          <p className="text-slate-400 leading-relaxed">
            Thank you for reaching out. I&apos;ll get back to you as soon as
            possible — usually within 24 hours.
          </p>
        </div>

        <p className="text-slate-600 text-sm">
          Need an urgent reply?{" "}
          <a
            href="https://wa.me/201152910495"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-4"
          >
            Message me on WhatsApp
          </a>
        </p>

        <Link
          href="/"
          className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </AnimatedSection>
    </div>
  );
}
