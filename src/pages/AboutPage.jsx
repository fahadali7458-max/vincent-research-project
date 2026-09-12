import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Globe2, Users, Award, MapPin, Phone, Mail, 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles, Database, Building2, Lock 
} from 'lucide-react';

export default function AboutPage({ onOpenContact }) {
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
            <span className="text-neutral-900 font-bold">About Vincent Research</span>
          </nav>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              INSTITUTIONAL DOSSIER &bull; FOUNDED &amp; HEADQUARTERED IN LUCKNOW, INDIA
            </span>
          </div>

          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium tracking-tight leading-[1.08] text-neutral-900">
              Empirical market intelligence for boardrooms that cannot afford to guess.
            </h1>

            <p className="text-xl sm:text-2xl text-neutral-600 font-display font-normal leading-relaxed">
              Vincent Research is an institutional global market research firm. We bridge the gap between high-volume quantitative panel velocity and qualitative anthropological depth.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenContact('')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-lg group"
              >
                <span>Commission Study RFP</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#leadership"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-neutral-100 text-neutral-900 text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all"
              >
                <span>Meet Leadership &amp; Operations</span>
              </a>
            </div>
          </div>

          {/* CREDENTIALS GRID */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-xl">
            <div className="space-y-1">
              <div className="text-[11px] font-mono uppercase text-neutral-400">Proprietary Panel</div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">40M+</div>
              <div className="text-xs text-emerald-400 font-mono">Double Opt-In Respondents</div>
            </div>

            <div className="space-y-1">
              <div className="text-[11px] font-mono uppercase text-neutral-400">Global Coverage</div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-emerald-400">124</div>
              <div className="text-xs text-neutral-400 font-mono">Countries &amp; Territories</div>
            </div>

            <div className="space-y-1">
              <div className="text-[11px] font-mono uppercase text-neutral-400">VeriTrust™ Score</div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-cyan-400">99.84%</div>
              <div className="text-xs text-neutral-400 font-mono">Audited Data Accuracy</div>
            </div>

            <div className="space-y-1">
              <div className="text-[11px] font-mono uppercase text-neutral-400">Feasibility SLA</div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-purple-400">&lt;24h</div>
              <div className="text-xs text-neutral-400 font-mono">Guaranteed Quote Turnaround</div>
            </div>
          </div>

        </div>
      </section>

      {/* LEADERSHIP PROFILE SECTION */}
      <section id="leadership" className="py-20 md:py-28 bg-[#fafafa] border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold">
                EXECUTIVE GOVERNANCE
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-neutral-900 tracking-tight">
                Leadership &amp; Directorate
              </h2>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                Every study commissioned through Vincent Research operates under the direct oversight of Founder &amp; Managing Director <span className="text-neutral-900 font-bold">Fahad Ali</span> and our senior fieldwork directors in Lucknow.
              </p>

              <div className="p-6 rounded-2xl bg-white border border-neutral-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-display font-bold text-lg">
                    FA
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg text-neutral-900">Fahad Ali</div>
                    <div className="text-xs font-mono text-emerald-700">Founder &amp; Managing Director</div>
                  </div>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  "Market research is not about delivering thousands of unverified survey rows. It is about empirical certainty. We built Vincent Research to eliminate synthetic bot data and give enterprise leaders unvarnished, authentic human truth."
                </p>

                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>Executive Line: +91 7458098299</span>
                  <span>Lucknow HQ</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm space-y-6">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                  Centralized Operations Hub &bull; Lucknow, India
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900">
                  Global Fieldwork Command Directorate
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Headquartered in Cyber Heights, Vibhuti Khand, Gomti Nagar, Lucknow, our centralized operations hub manages a 120-seat computer-assisted telephone interviewing (CATI) bureau, native-language translation desks, and real-time algorithmic telemetry monitoring 40M+ panel nodes worldwide.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs text-neutral-700">
                      <span className="font-bold text-neutral-900">120-Seat CATI Center:</span> 18+ regional dialects and international dialing.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs text-neutral-700">
                      <span className="font-bold text-neutral-900">24/7 Operations Desk:</span> Real-time quota monitoring across US, EU &amp; APAC.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs text-neutral-700">
                      <span className="font-bold text-neutral-900">Statistical Bureau:</span> Dedicated IBM SPSS and R analytics programmers.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs text-neutral-700">
                      <span className="font-bold text-neutral-900">Secure Data Clean Rooms:</span> ISO/IEC 27001 &amp; GDPR compliant infrastructure.
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CORE VALUES & CODE OF CONDUCT */}
      <section className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold mb-3">
              INSTITUTIONAL GOVERNANCE
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-neutral-900 tracking-tight">
              Ethical Principles &amp; Industry Accreditation
            </h2>
            <p className="mt-4 text-neutral-600 text-base sm:text-lg">
              We uphold the highest global standards of respondent privacy, intellectual property security, and statistical rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-neutral-900">
                ESOMAR &amp; MRS Compliance
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Full adherence to the ICC/ESOMAR International Code on Market, Opinion and Social Research and Data Analytics, guaranteeing ethical participant recruitment and transparent reporting.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-neutral-900">
                Data Privacy &amp; GDPR / CCPA
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                All respondent personal identifiable information (PII) is securely tokenized, anonymized, and processed in accordance with the European General Data Protection Regulation and California Consumer Privacy Act.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-neutral-900">
                VeriTrust™ Anti-Fraud Shield
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Our algorithmic anti-fraud architecture continuously cleans our panel network of automated AI bots, speeders, and click farms, guaranteeing 99.84% verified human data integrity.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-display font-medium">
            Partner with Vincent Research on your next strategic inquiry.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            Contact Founder &amp; Managing Director Fahad Ali directly or submit your study specifications for an immediate 24-hour feasibility quote.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact('')}
              className="px-8 py-4 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-xl"
            >
              Submit Research RFP
            </button>
            <a
              href="https://wa.me/917458098299?text=Hello%20Fahad%20Ali,%20I%20would%20like%20to%20discuss%20a%20research%20partnership%20with%20Vincent%20Research."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-xl"
            >
              WhatsApp Fahad Ali (+91 7458098299)
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
