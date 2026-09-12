import React from 'react';
import { X, ShieldCheck, Award, Users, Globe2, Building2, PhoneCall, Database, Microscope } from 'lucide-react';

export default function AboutModal({ isOpen, onClose, onOpenContact }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-neutral-200">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 sm:p-12 space-y-8">
          
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold mb-2 block flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5" />
              <span>MARKET RESEARCH FIRM DOSSIER &bull; LEADERSHIP</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900">
              About Vincent Research
            </h2>
            <p className="text-base text-neutral-600 mt-2 leading-relaxed">
              Empowering global enterprise brands, consulting practices, and pharmaceutical leaders with empirical respondent truth and boardroom-ready market intelligence.
            </p>
          </div>

          {/* FOUNDER SPOTLIGHT */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                  FOUNDER &amp; MANAGING DIRECTOR
                </span>
                <h3 className="text-2xl font-display font-bold text-neutral-950">
                  Fahad Ali
                </h3>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-mono">
                Lucknow Global Operations HQ
              </div>
            </div>

            <p className="text-sm text-neutral-700 leading-relaxed">
              Under the strategic leadership of Fahad Ali, Vincent Research has expanded into an internationally acclaimed market research powerhouse. Headquartered in Lucknow with active fieldwork execution across 124 countries, the firm pioneers high-integrity quantitative online sampling (CAWI), telephone interviewing (CATI), and multi-market qualitative ethnography.
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Fahad Ali engineered the proprietary <span className="font-semibold text-neutral-900">VeriTrust™ Anti-Fraud Engine</span> to combat the proliferation of synthetic bots and click-farms in the insights industry, establishing a benchmark 99.84% verified respondent accuracy standard.
            </p>
          </div>

          {/* 4 CORE CAPABILITIES PILLARS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-neutral-200 bg-white">
              <Users className="w-5 h-5 text-emerald-600 mb-2" />
              <h4 className="font-display font-bold text-neutral-900 text-base">40M+ Verified Respondents</h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Census-balanced, hyper-profiled panels spanning B2C general population, B2B executives, IT decision-makers, and HCP physicians.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-neutral-200 bg-white">
              <ShieldCheck className="w-5 h-5 text-cyan-600 mb-2" />
              <h4 className="font-display font-bold text-neutral-900 text-base">VeriTrust™ Fraud Shield</h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Algorithmic device fingerprinting, honeypot traps, speeder/straight-liner detection, and double-blind identity cross-verification.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-neutral-200 bg-white">
              <Globe2 className="w-5 h-5 text-purple-600 mb-2" />
              <h4 className="font-display font-bold text-neutral-900 text-base">124 Global Markets</h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Rapid, localized fieldwork capabilities across India &amp; APAC, North America, Western &amp; Eastern Europe, LATAM, and the Middle East.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-neutral-200 bg-white">
              <Microscope className="w-5 h-5 text-amber-600 mb-2" />
              <h4 className="font-display font-bold text-neutral-900 text-base">Quantitative &amp; Qualitative Rigor</h4>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                From discrete choice conjoint and MaxDiff pricing elasticity to moderated focus groups and in-home usage tests (IHUT).
              </p>
            </div>
          </div>

          {/* FOOTER ACTION */}
          <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
            <div className="text-xs font-mono text-neutral-500">
              Executive Direct: <span className="font-bold text-neutral-900">+91 7458098299</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Connect With Fahad Ali</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
