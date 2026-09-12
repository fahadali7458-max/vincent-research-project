import React from 'react';
import { ArrowRight, BookOpen, FileText } from 'lucide-react';

export const LATEST_ARTICLES = [
  {
    id: 'global-pulse',
    category: 'GLOBAL BENCHMARK STUDY',
    title: 'The 2026 Global Consumer Pulse: Inflation Fatigue, Value Perception & Category Shifts Across 124 Markets',
    readTime: '8 min read',
    bgImage: '/images/articles/art_consumer_pulse.jpg',
    excerpt: 'Comprehensive longitudinal survey across 62,000 households evaluating discretionary spending cutbacks and loyalty elasticity.'
  },
  {
    id: 'veritrust-whitepaper',
    category: 'METHODOLOGY WHITEPAPER',
    title: 'VeriTrust™ Protocol: Eliminating AI Synthetic Bots and Click-Farms in Digital Research Panels',
    readTime: '12 min technical read',
    bgImage: '/images/articles/art_veritrust_ai.jpg',
    excerpt: 'Deep dive into machine-learning biometric verification, honeypot telemetry, and IP reputation engines preserving research integrity.'
  },
  {
    id: 'healthcare-monograph',
    category: 'HEALTHCARE MONOGRAPH',
    title: 'Specialty Therapeutics & Oncology: First-Line Prescribing Drivers from 2,500 Global Physicians',
    readTime: '10 min read',
    bgImage: '/images/articles/art_oncology_physicians.jpg',
    excerpt: 'Double-blind physician panel study identifying clinical efficacy thresholds and patient access constraints across 9 therapeutic areas.'
  },
  {
    id: 'market-entry-index',
    category: 'TAM SIZING RESEARCH',
    title: 'Cross-Border Market Entry Index: Risk Scoring & Consumer Adoption Thresholds in APAC & EMEA',
    readTime: '7 min read',
    bgImage: '/images/articles/art_market_entry.jpg',
    excerpt: 'Statistical framework benchmarking regulatory barriers, consumer willingness-to-pay, and localized competitive density.'
  }
];

export default function TheLatest({ onSelectArticle }) {
  return (
    <section id="the-latest" className="py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-600 font-bold mb-3">
              INSTITUTIONAL RESEARCH PAPERS &amp; BENCHMARKS
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-neutral-900 tracking-tight">
              The Latest
            </h2>
          </div>
          <p className="text-base text-neutral-600 max-w-md">
            Peer-reviewed methodology papers, macro consumer indexes, and syndicated market datasets published by Vincent Research.
          </p>
        </div>

        {/* 4 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LATEST_ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle && onSelectArticle(article)}
              className="group relative rounded-3xl overflow-hidden min-h-[460px] flex flex-col justify-between p-8 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.94) 0%, rgba(0, 0, 0, 0.50) 60%, rgba(0, 0, 0, 0.30) 100%), url(${article.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* TOP: CATEGORY BADGE */}
              <div className="flex items-center justify-between z-10">
                <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold border border-white/20">
                  {article.category}
                </span>
                <span className="text-[10px] font-mono text-emerald-400">
                  {article.readTime}
                </span>
              </div>

              {/* BOTTOM: TITLE & REVEAL */}
              <div className="z-10 space-y-4">
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-white leading-snug group-hover:text-neutral-100 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-xs text-neutral-300 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {article.excerpt}
                </p>

                <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-semibold text-white">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Read Executive Abstract</span>
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
