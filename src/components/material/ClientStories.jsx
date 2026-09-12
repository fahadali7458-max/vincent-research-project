import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, BarChart3, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../../data/caseStudiesData';

// Maintain legacy export for backwards compatibility
export const STORIES_DATA = CASE_STUDIES;

export default function ClientStories({ onSelectStory }) {
  return (
    <section id="client-stories" className="py-24 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-600 font-bold mb-3">
              INSTITUTIONAL RESEARCH CASE STUDIES
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-neutral-900 tracking-tight">
              Client Stories
            </h2>
          </div>
          <p className="text-base text-neutral-600 max-w-md">
            Examining how quantitative panel rigor and qualitative depth deliver statistical certainty to global market leaders. Click any case study to read the full empirical report.
          </p>
        </div>

        {/* 6-CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((story) => (
            <Link
              key={story.id}
              to={`/case-studies/${story.id}`}
              className="group flex flex-col justify-between rounded-3xl overflow-hidden bg-[#fafafa] border border-neutral-200/80 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* MEDIA PREVIEW */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                <img
                  src={story.heroImage}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="backdrop-blur-md bg-black/75 text-white text-[10px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                    {story.client}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500 text-black shadow-sm">
                    {story.metricHighlight}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-semibold mb-2">
                    {story.category}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-neutral-900 leading-snug group-hover:text-black transition-colors mb-4">
                    {story.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs font-semibold text-neutral-700 group-hover:text-black">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-mono text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate max-w-[200px]">{story.keyMetric}</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-neutral-200 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTTOM CTA BUTTON */}
        <div className="mt-16 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl group"
          >
            <span>EXPLORE ALL RESEARCH MONOGRAPHS</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
