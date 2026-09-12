import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, ArrowRight, ChevronRight, Sparkles, BookOpen, 
  Download, ShieldCheck, Clock, Check 
} from 'lucide-react';
import { LATEST_ARTICLES } from '../components/material/TheLatest';

export default function WhitepapersPage({ onOpenContact, onSelectArticle }) {
  const [downloadSuccess, setDownloadSuccess] = useState('');

  const handleDownload = (e, title) => {
    e.stopPropagation();
    setDownloadSuccess(title);
    setTimeout(() => setDownloadSuccess(''), 3000);
  };

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
            <span className="text-neutral-900 font-bold">Research Whitepapers &amp; Perspectives</span>
          </nav>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="pt-16 pb-16 md:pt-20 md:pb-20 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              THOUGHT LEADERSHIP &bull; STATISTICAL BENCHMARKS &bull; PEER-REVIEWED PAPERS
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-neutral-900">
              Perspectives &amp; Empirical Research Library
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed">
              Explore proprietary market research frameworks, data integrity benchmarks, and methodological analyses published by Vincent Research economists and data scientists.
            </p>
          </div>

        </div>
      </section>

      {/* WHITEPAPERS LIST */}
      <section className="py-16 md:py-24 bg-[#fafafa] border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-8">
            {LATEST_ARTICLES.map((article) => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer p-8 rounded-3xl bg-white border border-neutral-200 hover:border-black hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                
                {/* IMAGE THUMB */}
                <div className="lg:col-span-4 aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-950">
                  <img 
                    src={article.bgImage} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-bold bg-neutral-100 text-neutral-800">
                      {article.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {article.readTime} &bull; Research Monograph
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 group-hover:text-black leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                    {article.excerpt}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-100">
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Empirically Validated Dataset</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => handleDownload(e, article.title)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-neutral-300 text-xs font-mono uppercase tracking-wider text-neutral-700 hover:bg-neutral-100 transition-colors"
                      >
                        {downloadSuccess === article.title ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700 font-bold">Downloaded</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-3.5 h-3.5" />
                            <span>Download PDF Monograph</span>
                          </>
                        )}
                      </button>

                      <div className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-display font-medium">
            Commission custom quantitative or qualitative whitepapers.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            We author branded, citable industry reports and proprietary benchmarks for enterprise marketing and leadership teams.
          </p>
          <div className="pt-4 flex items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact('')}
              className="px-8 py-4 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-xl"
            >
              Commission a Custom Research Paper
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
