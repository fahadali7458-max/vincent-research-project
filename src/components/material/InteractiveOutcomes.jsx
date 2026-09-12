import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const OUTCOMES = [
  {
    id: 'concept-testing',
    title: 'Concept & Packaging Feasibility',
    description: 'De-risk innovation before capital deployment. We run discrete choice conjoint analysis, sensory testing, and packaging heatmaps across targeted respondent cohorts to forecast real-world adoption.',
    videoSrc: '/videos/outcome_brand_relevance.mp4',
    metrics: '+88% Product Launch Success Prediction vs Historical Control',
    methodology: 'MaxDiff, Conjoint Analysis, Monadic Concept Testing'
  },
  {
    id: 'brand-tracking',
    title: 'Global Consumer & Brand Tracking',
    description: 'Track brand velocity in real time. We execute continuous longitudinal brand tracking, Net Promoter Score (NPS) audits, and attitude & usage (A&U) studies across 124 international markets.',
    videoSrc: '/videos/outcome_new_markets.mp4',
    metrics: '99.84% Verified Data Integrity Across 124 Countries',
    methodology: 'Continuous CAWI / Mobile Intercept Longitudinal Panels'
  },
  {
    id: 'b2b-healthcare',
    title: 'Verified B2B & Healthcare Panels',
    description: 'Reach high-value, protected demographics. Our verified panels connect directly with C-Suite executives, IT decision-makers, oncologists, and healthcare professionals (HCPs) with zero bot contamination.',
    videoSrc: '/videos/outcome_acquire_customers.mp4',
    metrics: '100% Medical License & Corporate Email Verification',
    methodology: 'Double-Blind IDIs, Advisory Boards & Specialized B2B Samples'
  },
  {
    id: 'pricing-elasticity',
    title: 'Price Elasticity & Willingness-To-Pay',
    description: 'Identify revenue-maximizing price thresholds. Using the Van Westendorp Price Sensitivity Meter and Gabor-Granger models, we pinpoint optimal price points and consumer willingness-to-pay elasticity.',
    videoSrc: '/videos/outcome_differentiate_experience.mp4',
    metrics: '+24% Average Revenue-Per-User (ARPU) Optimization',
    methodology: 'Van Westendorp (PSM), Gabor-Granger, Conjoint Simulations'
  },
  {
    id: 'market-entry',
    title: 'Cross-Border TAM & Market Sizing',
    description: 'Enter new territories with statistical conviction. We calculate Total Addressable Market (TAM), analyze consumer cultural nuances, and evaluate regulatory barriers for seamless regional expansion.',
    videoSrc: '/videos/outcome_increase_value.mp4',
    metrics: 'Rapid 14-Day Fieldwork Across 6 Global Geographies',
    methodology: 'Mixed-Method CATI/CAWI + Localized Focus Groups'
  }
];

export default function InteractiveOutcomes() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeOutcome = OUTCOMES[activeIndex];

  return (
    <section id="what-we-do" className="py-24 bg-[#f8f9fa] border-t border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-600 font-bold mb-3">
            MARKET RESEARCH DELIVERABLES &bull; BOARDROOM VALUE
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-neutral-900 tracking-tight">
            What We Do
          </h2>
        </div>

        {/* 2-COLUMN INTERACTIVE OUTCOMES LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: OUTCOMES TAB LIST */}
          <div className="lg:col-span-6 space-y-2">
            {OUTCOMES.map((outcome, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={outcome.id}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive 
                      ? 'bg-white shadow-lg border-neutral-300 scale-[1.01]' 
                      : 'bg-transparent hover:bg-white/60 border-transparent hover:border-neutral-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs font-semibold ${
                        isActive ? 'text-emerald-600 font-bold' : 'text-neutral-400 group-hover:text-neutral-600'
                      }`}>
                        0{idx + 1}
                      </span>
                      <h3 className={`text-xl sm:text-2xl font-display font-semibold transition-colors ${
                        isActive ? 'text-neutral-950 font-bold' : 'text-neutral-500 group-hover:text-neutral-800'
                      }`}>
                        {outcome.title}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isActive 
                        ? 'bg-black text-white rotate-0' 
                        : 'text-neutral-400 group-hover:text-neutral-700 -rotate-45 opacity-40 group-hover:opacity-100'
                    }`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Mobile expanded view */}
                  {isActive && (
                    <div className="lg:hidden mt-4 pt-4 border-t border-neutral-100 animate-fadeIn">
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {outcome.description}
                      </p>
                      <div className="mt-4 rounded-xl overflow-hidden shadow-md">
                        <video 
                          key={outcome.videoSrc}
                          autoPlay 
                          loop 
                          muted 
                          playsInline 
                          className="w-full h-auto aspect-video object-cover"
                        >
                          <source src={outcome.videoSrc} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT: LIVE MEDIA & RESEARCH METHODOLOGY PANEL (DESKTOP) */}
          <div className="hidden lg:block lg:col-span-6 sticky top-28">
            <div className="bg-white border border-neutral-200/90 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              
              {/* VIDEO CONTAINER */}
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-neutral-900 shadow-inner mb-8">
                <video
                  key={activeOutcome.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover transition-opacity duration-500"
                >
                  <source src={activeOutcome.videoSrc} type="video/mp4" />
                </video>

                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-emerald-400 uppercase border border-white/20">
                  VERITRUST™ VERIFIED AUDIT
                </div>
              </div>

              {/* DESCRIPTION & SPECIFIC METHODOLOGY */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500">
                  <span>OUTCOME 0{activeIndex + 1} OF 05</span>
                  <span>&bull;</span>
                  <span className="text-neutral-900 font-semibold">{activeOutcome.title}</span>
                </div>

                <p className="text-lg text-neutral-700 font-normal leading-relaxed">
                  {activeOutcome.description}
                </p>

                <div className="pt-4 border-t border-neutral-100 flex flex-col gap-2 text-xs font-semibold text-neutral-900">
                  <div className="flex items-center gap-2.5 text-emerald-600">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{activeOutcome.metrics}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-neutral-500 font-mono text-[11px]">
                    <ShieldCheck className="w-4 h-4 text-neutral-400 shrink-0" />
                    <span>Methodology: {activeOutcome.methodology}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
