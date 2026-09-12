import React from 'react';
import { Award, Star, Building2, Quote, ShieldCheck } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function CaseStudies() {
  const testimonials = [
    {
      company: 'NY Global Research',
      sector: 'Healthcare & Pharma Recruitment',
      author: 'Managing Partner',
      location: 'New York, USA',
      headline: 'Specialized HCP Recruitment in Emerging Markets',
      quote: 'Finding verified Healthcare Professionals in emerging markets was a challenge until we partnered with Vincent Research. Their turnaround time and transparency in reporting are top-tier.',
      metric: '99.4% Verified HCPs'
    },
    {
      company: 'Digital Data Solutions',
      sector: 'Strategic Marketing Insights',
      author: 'Marketing Director',
      location: 'Berlin, Germany',
      headline: 'Research as an Investment, Not a Cost',
      quote: 'A strategic team that understands both creativity and performance. We finally see marketing research as an investment, not a cost.',
      metric: '+42% Lead Quality'
    },
    {
      company: 'Insights UK',
      sector: 'B2B Pan-EMEA Recruitment',
      author: 'Senior Director',
      location: 'London, United Kingdom',
      headline: 'Go-to Partner for Niche B2B Panels',
      quote: 'Their data-driven approach helped us reduce acquisition costs while significantly increasing qualified leads. Vincent Research has been our go-to partner for niche B2B recruitment in the EMEA region.',
      metric: '35% Lower Acquisition Cost'
    },
    {
      company: 'EU Enterprise Data Platform',
      sector: 'Multi-Country Tracker',
      author: 'Head of Operations',
      location: 'Amsterdam, Netherlands',
      headline: 'In-House Experience & Business Acumen',
      quote: 'Working with Vincent Research feels like having an experienced in-house research department that truly understands our business goals.',
      metric: '70+ Countries Synchronized'
    },
    {
      company: 'Tier-1 Insights Group',
      sector: 'Continuous Quantitative Tracking',
      author: 'VP of Marketing Research',
      location: 'New York, USA',
      headline: 'Seamless API & High-Quality Completes',
      quote: 'Seamless API integration and high-quality completes. Highly recommended for large-scale quantitative trackers with zero fraud tolerance.',
      metric: 'Zero Fraud Incidents'
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-950/50 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Proven Enterprise Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Global Research Leaders Say
          </h2>
          <p className="text-slate-400 text-base font-light">
            Our data powers critical decision-making for research agencies, consulting firms, and Fortune 500 enterprises globally.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              onMouseEnter={() => soundManager.playHover()}
              className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Header with 5 stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/20">
                    {t.sector}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {t.headline}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mt-1">
                    <Building2 className="w-3.5 h-3.5 text-slate-500" />
                    {t.company} • {t.location}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic font-light relative pl-3.5 border-l-2 border-cyan-500/40">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{t.author}</span>
                <span className="text-emerald-400 font-bold bg-slate-900/80 px-2 py-1 rounded border border-emerald-500/20">
                  {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
