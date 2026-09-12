import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, ArrowRight, ChevronRight, Sparkles, Database, 
  CheckCircle2, Users, ShieldCheck, FileText 
} from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudiesData';

export default function CaseStudiesPage({ onOpenContact }) {
  const [filter, setFilter] = useState('All');

  const categories = [
    'All', 
    'Quantitative Telemetry', 
    'Longitudinal Tracking', 
    'Discrete Choice Conjoint', 
    'Specialty Healthcare', 
    'Biometrics & Sensory',
    'CATI Intercept'
  ];

  const filteredStories = filter === 'All' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(s => {
        if (filter === 'Quantitative Telemetry') return s.category.includes('Quant');
        if (filter === 'Longitudinal Tracking') return s.category.includes('Longitudinal');
        if (filter === 'Discrete Choice Conjoint') return s.category.includes('Conjoint');
        if (filter === 'Specialty Healthcare') return s.category.includes('Healthcare');
        if (filter === 'Biometrics & Sensory') return s.category.includes('MaxDiff');
        if (filter === 'CATI Intercept') return s.category.includes('CATI');
        return true;
      });

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-black selection:text-white">
      
      {/* 1. BREADCRUMB */}
      <div className="bg-neutral-50 border-b border-neutral-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-xs font-mono uppercase tracking-wider text-neutral-500">
            <Link to="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-neutral-400" />
            <span className="text-neutral-900 font-bold">Research Case Studies</span>
          </nav>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="pt-16 pb-16 md:pt-20 md:pb-20 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              PROVEN ENTERPRISE IMPACT &bull; EMPIRICAL RESEARCH MONOGRAPHS
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-neutral-900">
              Client Stories &amp; Strategic Benchmarks
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed">
              Explore how global enterprise boards, management consulting firms, and market leaders commission Vincent Research to answer critical commercial inquiries with empirical certainty. Click any case study to read the full research monograph.
            </p>
          </div>

          {/* FILTER TABS */}
          <div className="mt-10 flex flex-wrap items-center gap-2.5">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  filter === cat
                    ? 'bg-black text-white font-bold shadow-md'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CASE STUDIES GRID */}
      <section className="py-16 md:py-24 bg-[#fafafa] border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <Link
                key={story.id}
                to={`/case-studies/${story.id}`}
                className="group flex flex-col justify-between rounded-3xl bg-white border border-neutral-200 overflow-hidden hover:border-black hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  {/* MEDIA HEADER */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                    <img 
                      src={story.heroImage} 
                      alt={story.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold bg-black/80 text-white border border-white/20 backdrop-blur-md">
                        {story.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500 text-black shadow-sm">
                        {story.metricHighlight}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7 space-y-4">
                    <div className="text-xs font-mono text-emerald-700 font-bold uppercase tracking-wider">
                      {story.client}
                    </div>

                    <h3 className="text-xl font-display font-semibold text-neutral-900 group-hover:text-black leading-snug">
                      {story.title}
                    </h3>

                    <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/60 text-xs text-neutral-700 leading-relaxed font-mono">
                      <div className="font-bold text-emerald-950 mb-1">Empirical Benchmark:</div>
                      <div>{story.keyMetric}</div>
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span className="font-bold text-neutral-900 group-hover:text-black">
                    Read Full Case Study Monograph
                  </span>
                  <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-display font-medium">
            Have a custom research mandate for your brand?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            Discuss your specific sample requirements, target demographics, and reporting formats directly with Vincent Research.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact('')}
              className="px-8 py-4 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-xl"
            >
              Submit Research RFP
            </button>
            <Link
              to="/feasibility"
              className="px-8 py-4 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-xl"
            >
              Check Sample Feasibility
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
