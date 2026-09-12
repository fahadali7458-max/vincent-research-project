import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Database, Sparkles, ShieldCheck } from 'lucide-react';
import FeasibilityCalculator from '../components/material/FeasibilityCalculator';

export default function FeasibilityPage({ onOpenContact }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-black selection:text-white">
      
      {/* BREADCRUMB */}
      <div className="bg-neutral-50 border-b border-neutral-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-xs font-mono uppercase tracking-wider text-neutral-500">
            <Link to="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-neutral-400" />
            <span className="text-neutral-900 font-bold">Interactive Sample Feasibility Calculator</span>
          </nav>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="pt-16 pb-12 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              REAL-TIME PANEL TELEMETRY &bull; 40M+ NETWORK NODES
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-neutral-900">
              Instant Sample Feasibility &amp; Pricing Calculator
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed">
              Model your research scope across 124 territories, customize nested quotas, benchmark expected incidence rates (IR), and generate an instant cost &amp; timeline estimate.
            </p>
          </div>

        </div>
      </section>

      {/* EMBEDDED CALCULATOR */}
      <div className="py-8 bg-[#fafafa]">
        <FeasibilityCalculator onOpenContact={onOpenContact} />
      </div>

    </div>
  );
}
