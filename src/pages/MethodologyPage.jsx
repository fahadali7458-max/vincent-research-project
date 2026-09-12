import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Database, 
  Clock, BarChart3, Users, FileText, Sparkles, HelpCircle, 
  Layers, Globe, Check, MessageCircle, Phone, ArrowUpRight, ChevronDown
} from 'lucide-react';
import { METHODOLOGIES } from '../data/methodologiesData';

export default function MethodologyPage({ onOpenContact }) {
  const { slug } = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Fallback to online-panel-surveys if slug not found
  const methodology = METHODOLOGIES[slug] || METHODOLOGIES['online-panel-surveys'];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-black selection:text-white">
      
      {/* 1. BREADCRUMB NAVIGATION */}
      <div className="bg-neutral-50 border-b border-neutral-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-xs font-mono uppercase tracking-wider text-neutral-500">
            <Link to="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-neutral-400" />
            <span className="text-neutral-400">Research Methodologies</span>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-neutral-400" />
            <span className="text-neutral-900 font-bold">{methodology.title}</span>
          </nav>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-24 overflow-hidden border-b border-neutral-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* CATEGORY & PRACTICE AREA TAG */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              PRACTICE AREA {methodology.categoryNumber} &bull; {methodology.category}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-neutral-100 text-neutral-700 border border-neutral-200">
              {methodology.badge}
            </span>
          </div>

          {/* MAIN HEADLINE */}
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium tracking-tight leading-[1.08] text-neutral-900">
              {methodology.title}
            </h1>
            
            <p className="text-xl sm:text-2xl text-neutral-700 font-display font-normal leading-relaxed text-emerald-900/90">
              {methodology.subtitle}
            </p>

            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-3xl">
              {methodology.heroDescription}
            </p>

            {/* ACTION BUTTONS */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenContact(methodology.title)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white text-sm font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-lg group"
              >
                <span>Commission Study RFP</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <Link
                to="/feasibility"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-300 text-sm font-semibold hover:bg-emerald-100 transition-all shadow-sm"
              >
                <Database className="w-4 h-4 text-emerald-700" />
                <span>Calculate Sample Feasibility</span>
              </Link>
            </div>
          </div>

          {/* 3. FLOATING TELEMETRY METRICS GRID */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 p-6 sm:p-8 rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-2xl">
            <div className="space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">Sample Reach</div>
              <div className="text-lg sm:text-xl font-bold font-display text-white">{methodology.metrics.reach}</div>
              <div className="text-[10px] text-emerald-400 font-mono">124 Countries Active</div>
            </div>

            <div className="space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">Turnaround SLA</div>
              <div className="text-lg sm:text-xl font-bold font-display text-emerald-400">{methodology.metrics.turnaround}</div>
              <div className="text-[10px] text-neutral-400 font-mono">Express Options Ready</div>
            </div>

            <div className="space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">Incidence Benchmark</div>
              <div className="text-lg sm:text-xl font-bold font-display text-white">{methodology.metrics.incidenceBenchmark}</div>
              <div className="text-[10px] text-neutral-400 font-mono">Screened &amp; Balanced</div>
            </div>

            <div className="space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">Data Integrity</div>
              <div className="text-lg sm:text-xl font-bold font-display text-cyan-400">{methodology.metrics.accuracy}</div>
              <div className="text-[10px] text-neutral-400 font-mono">Zero Bot Contamination</div>
            </div>

            <div className="col-span-2 md:col-span-1 space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">Confidence Level</div>
              <div className="text-lg sm:text-xl font-bold font-display text-purple-400">{methodology.metrics.confidenceLevel}</div>
              <div className="text-[10px] text-neutral-400 font-mono">Boardroom Statistical Power</div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. STRATEGIC BOARDROOM RATIONALE */}
      <section className="py-20 md:py-28 bg-[#fafafa] border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold mb-3">
              STRATEGIC EXECUTIVE RATIONALE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-neutral-900 tracking-tight">
              Why Global Brands Commission This Methodology
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600">
              In high-stakes markets, relying on assumptions or synthetic proxies risks catastrophic misallocation of capital. Here is how Vincent Research delivers empirical certainty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodology.strategicPillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm hover:border-black hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 group-hover:bg-black group-hover:text-white flex items-center justify-center font-mono font-bold text-sm text-neutral-800 transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-display font-bold text-neutral-900">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-mono text-emerald-700 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Operational Protocol</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. 4-STAGE TECHNICAL WORKFLOW LIFECYCLE */}
      <section className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold mb-3">
              END-TO-END FIELDWORK ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-neutral-900 tracking-tight">
              Rigorous 4-Stage Execution Methodology
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600">
              Supervised directly by our Lucknow Fieldwork Operations Directorate and Founder Fahad Ali, ensuring absolute data integrity from sample design to final tabulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.processStages.map((stage, sIdx) => (
              <div 
                key={sIdx} 
                className="relative p-7 rounded-2xl bg-neutral-50 border border-neutral-200/90 hover:bg-white hover:border-black hover:shadow-lg transition-all"
              >
                <div className="text-4xl font-display font-black text-neutral-300 mb-4">
                  {stage.stage}
                </div>
                <h3 className="text-lg font-display font-bold text-neutral-900 mb-2">
                  {stage.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {stage.summary}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CAPABILITIES & SUB-METHODOLOGIES */}
      <section className="py-20 md:py-28 bg-[#fafafa] border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold">
                TECHNICAL SPECIFICATIONS
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-neutral-900 tracking-tight">
                Specialized Capabilities &amp; Features
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Our technology stack combines proprietary panel algorithms, dynamic multi-language logic, and automated statistical weighting routines.
              </p>

              <div className="p-6 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                  Quality Guarantee
                </div>
                <div className="text-sm font-semibold text-neutral-900">
                  ESOMAR &amp; MRS Code of Conduct Compliant
                </div>
                <div className="text-xs text-neutral-600 leading-relaxed">
                  Every participant is compensated fairly with zero bot or click-farm tolerance. 100% replacement guarantee for low-quality responses.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {methodology.capabilities.map((cap, cIdx) => (
                <div 
                  key={cIdx} 
                  className="p-5 rounded-2xl bg-white border border-neutral-200 flex items-start gap-3 shadow-sm hover:border-black transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-neutral-800 leading-snug">
                    {cap}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 7. CROSS-INDUSTRY APPLICATIONS */}
      <section className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold mb-3">
              ENTERPRISE VERTICALS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-neutral-900 tracking-tight">
              Cross-Industry Empirical Applications
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600">
              How Fortune 500 brands, consulting advisories, and growth firms apply this methodology to solve commercial puzzles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.industryApplications.map((item, idx) => (
              <div 
                key={idx} 
                className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-black hover:bg-white hover:shadow-md transition-all space-y-3"
              >
                <div className="text-xs font-mono uppercase tracking-wider font-bold text-emerald-700">
                  {item.industry}
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {item.application}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FEATURED CASE STUDY SPOTLIGHT */}
      <section className="py-20 md:py-28 bg-neutral-950 text-white border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-8">
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                <span>REAL-WORLD ENTERPRISE CASE STUDY</span>
              </div>
              <div className="text-xs font-mono text-neutral-400">
                Client: <span className="text-white font-bold">{methodology.caseStudy.client}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              <div className="lg:col-span-6 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                  The Commercial Challenge
                </div>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {methodology.caseStudy.challenge}
                </p>

                <div className="pt-4 text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                  Methodology Deployed
                </div>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {methodology.caseStudy.methodology}
                </p>
              </div>

              <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Measurable Strategic Outcome</span>
                </div>
                <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
                  "{methodology.caseStudy.results}"
                </p>
                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span>Data Verified by VeriTrust™</span>
                  <span className="text-emerald-400">Fahad Ali Oversight</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 9. STANDARD BOARDROOM DELIVERABLES */}
      <section className="py-20 md:py-28 bg-[#fafafa] border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold mb-3">
              BOARDROOM DATA PACKAGES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-neutral-900 tracking-tight">
              Standard Study Deliverables
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600">
              Every research engagement includes institutional-grade statistical data files, executive decks, and comprehensive cross-tabulations ready for leadership presentations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.deliverables.map((del, dIdx) => (
              <div 
                key={dIdx} 
                className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:border-black transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-neutral-900 leading-snug">
                  {del}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. COMPREHENSIVE FAQ ACCORDION */}
      <section className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold mb-3">
              TECHNICAL FAQ &amp; METHODOLOGY GOVERNANCE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-neutral-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600">
              Detailed technical answers regarding sample quotas, turnaround SLAs, and statistical confidence.
            </p>
          </div>

          <div className="space-y-4">
            {methodology.faqs.map((faq, fIdx) => (
              <div 
                key={fIdx} 
                className="border border-neutral-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(fIdx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 bg-neutral-50 hover:bg-neutral-100/80 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-neutral-900">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform duration-200 ${
                    openFaqIndex === fIdx ? 'rotate-180 text-black' : ''
                  }`} />
                </button>
                {openFaqIndex === fIdx && (
                  <div className="p-6 bg-white border-t border-neutral-200 text-sm text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. BOTTOM HIGH-CONVERSION RFP CALLOUT */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>OPERATIONAL READINESS &bull; 24-HOUR FEASIBILITY SLA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight max-w-3xl mx-auto">
            Ready to commission your study using {methodology.title}?
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Connect directly with Founder &amp; Managing Director <span className="text-white font-bold">Fahad Ali</span> and our Senior Fieldwork Directorate in Lucknow to receive a custom sample feasibility matrix and fixed timeline within 24 hours.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact(methodology.title)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-xl group"
            >
              <span>Submit Research RFP</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`https://wa.me/917458098299?text=Hello%20Fahad%20Ali,%20I%20would%20like%20to%20commission%20a%20study%20for%20${encodeURIComponent(methodology.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct (+91 7458098299)</span>
            </a>
          </div>

          <div className="pt-8 text-xs font-mono text-neutral-500">
            Global Operations Hub: Cyber Heights, Vibhuti Khand, Gomti Nagar, Lucknow, UP, India
          </div>

        </div>
      </section>

    </div>
  );
}
