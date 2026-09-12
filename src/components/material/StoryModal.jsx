import React from 'react';
import { X, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function StoryModal({ story, onClose, onOpenContact }) {
  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-neutral-200">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* MEDIA PREVIEW HEADER */}
        <div className="relative aspect-video w-full bg-black overflow-hidden">
          {story.type === 'video' ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={story.mediaSrc} type="video/mp4" />
            </video>
          ) : (
            <img
              src={story.mediaSrc}
              alt={story.title}
              className="w-full h-full object-cover"
            />
          )}

          <div className="absolute top-6 left-6">
            <span className="backdrop-blur-md bg-black/80 text-white font-mono text-xs font-semibold px-4 py-1.5 rounded-full border border-white/20 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>VINCENT RESEARCH</span>
              <span className="text-neutral-400">&bull;</span>
              <span className="text-emerald-300">{story.brand || story.category}</span>
            </span>
          </div>
        </div>

        {/* BODY CONTENT */}
        <div className="p-8 sm:p-12 space-y-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold mb-3">
              {story.category}
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 leading-tight">
              {story.title}
            </h2>
          </div>

          {/* KEY RESULT HIGHLIGHT */}
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                KEY STRATEGIC IMPACT
              </div>
              <div className="text-xl sm:text-2xl font-display font-bold text-emerald-600">
                {story.results}
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>

          {/* FULL EXECUTIVE SUMMARY */}
          <div className="space-y-4 text-base text-neutral-700 leading-relaxed">
            <h4 className="text-sm font-mono uppercase tracking-wider text-neutral-900 font-bold">
              CASE ARCHITECTURE & RESEARCH SCOPE
            </h4>
            <p>{story.fullSummary}</p>
            <p>
              Vincent Research orchestrated end-to-end telemetry across our 40M+ global panel, leveraging VeriTrust™ fraud filtering to ensure 99.8% respondent data integrity before generating actionable predictive models.
            </p>
          </div>

          {/* BOTTOM ACTIONS */}
          <div className="pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>VeriTrust™ 40M+ Panel Validated</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-neutral-300 text-neutral-700 text-xs font-semibold hover:bg-neutral-100 transition-colors"
              >
                Close Story
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all flex items-center gap-2"
              >
                <span>Request Custom Briefing</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
