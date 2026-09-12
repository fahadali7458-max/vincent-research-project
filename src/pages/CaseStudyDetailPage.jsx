import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Database, 
  Clock, BarChart3, Users, FileText, Sparkles, Quote, MessageCircle, ArrowLeft 
} from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudiesData';

export default function CaseStudyDetailPage({ onOpenContact }) {
  const { id } = useParams();

  // Find case study by id or slug, fallback to first
  const study = CASE_STUDIES.find(s => s.id === id || s.slug === id) || CASE_STUDIES[0];

  const relatedStudies = CASE_STUDIES.filter(s => s.id !== study.id).slice(0, 3);

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
            <Link to="/case-studies" className="hover:text-black transition-colors">
              Research Case Studies
            </Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-neutral-400" />
            <span className="text-neutral-900 font-bold truncate max-w-xs sm:max-w-md">
              {study.client}
            </span>
          </nav>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {study.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-neutral-100 text-neutral-700 border border-neutral-200">
              {study.badge}
            </span>
          </div>

          <div className="max-w-4xl space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              {study.clientType} &bull; {study.client}
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight leading-[1.12] text-neutral-900">
              {study.title}
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed">
              {study.overview}
            </p>

            {/* ACTION BUTTONS */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenContact(study.title)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-lg group"
              >
                <span>Commission a Similar Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-neutral-300 text-neutral-700 text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Case Studies</span>
              </Link>
            </div>
          </div>

          {/* 3. HERO IMAGE & TELEMETRY BANNER */}
          <div className="mt-12 rounded-3xl overflow-hidden border border-neutral-200 bg-neutral-950 shadow-2xl relative">
            <div className="aspect-[16/8] sm:aspect-[21/9] w-full overflow-hidden relative">
              <img 
                src={study.heroImage} 
                alt={study.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                    Primary Empirical Benchmark
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold">
                    {study.keyMetric}
                  </div>
                </div>

                <div className="flex items-center gap-6 text-right">
                  <div className="p-3.5 rounded-2xl backdrop-blur-md bg-black/60 border border-white/20">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                      {study.metricHighlight}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-300 uppercase">
                      {study.metricLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE COMMERCIAL CHALLENGE & RESEARCH CONTEXT */}
      <section className="py-16 md:py-24 bg-[#fafafa] border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold">
                COMMERCIAL INQUIRY
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-neutral-900 tracking-tight">
                The Business Challenge &amp; Strategic Risk
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Why standard sample brokerages, superficial polls, and synthetic data proxies were inadequate for high-stakes enterprise decision-making.
              </p>

              <div className="p-6 rounded-2xl bg-white border border-neutral-200 space-y-3 mt-6">
                <div className="text-xs font-mono uppercase text-neutral-400 font-bold">
                  Client Profile
                </div>
                <div className="text-base font-bold text-neutral-900">
                  {study.client}
                </div>
                <div className="text-xs text-neutral-600 font-mono">
                  Industry: <span className="font-semibold text-neutral-800">{study.category}</span>
                </div>
                <div className="text-xs text-emerald-700 font-mono font-semibold flex items-center gap-1.5 pt-2 border-t border-neutral-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified Double-Blind Engagement</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200 shadow-sm space-y-6">
              <h3 className="text-xl font-display font-bold text-neutral-900">
                Strategic Friction &amp; Information Void
              </h3>
              <p className="text-neutral-700 leading-relaxed text-base">
                {study.theChallenge}
              </p>

              <div className="pt-4 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-neutral-600">
                <div>
                  <span className="font-bold text-neutral-900 block mb-1">Methodology Architecture:</span>
                  <span>{study.researchMethodology.method}</span>
                </div>
                <div>
                  <span className="font-bold text-neutral-900 block mb-1">Turnaround SLA:</span>
                  <span>{study.researchMethodology.fieldworkDuration}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SAMPLING DESIGN & FIELDWORK ARCHITECTURE */}
      <section className="py-16 md:py-24 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold mb-2">
              METHODOLOGY BLUEPRINT
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-neutral-900 tracking-tight">
              Sampling Design &amp; Quality Safeguards
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base">
              Supervised directly by Vincent Research Senior Fieldwork Directorate and Founder Fahad Ali in Lucknow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                Sample Quota
              </div>
              <div className="text-lg font-bold text-neutral-900">
                {study.researchMethodology.sampleSize}
              </div>
              <p className="text-xs text-neutral-600">
                Census &amp; firmographically balanced multi-market distribution.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                Target Cohort
              </div>
              <div className="text-sm font-bold text-neutral-900 leading-snug">
                {study.researchMethodology.targetProfile}
              </div>
              <p className="text-xs text-neutral-600">
                Pre-screened against strict purchasing and clinical criteria.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                Fieldwork Duration
              </div>
              <div className="text-sm font-bold text-emerald-800">
                {study.researchMethodology.fieldworkDuration}
              </div>
              <p className="text-xs text-neutral-600">
                Real-time incident rate telemetry and automated soft-launch verification.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                Quality Protocol
              </div>
              <div className="text-xs font-mono text-neutral-700 leading-relaxed">
                {study.researchMethodology.qualityProtocols}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. KEY EMPIRICAL FINDINGS */}
      <section className="py-16 md:py-24 bg-neutral-950 text-white border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 mb-3">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
              <span>EMPIRICAL RESEARCH FINDINGS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
              Quantifiable Findings &amp; Discoveries
            </h2>
            <p className="mt-4 text-neutral-400 text-sm sm:text-base">
              Key statistical discoveries that dismantled internal assumptions and revealed hidden commercial opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {study.keyFindings.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-4 hover:border-emerald-500/50 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-mono font-bold text-emerald-400">
                  {item.stat}
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. BUSINESS IMPACT & CLIENT ENDORSEMENT */}
      <section className="py-16 md:py-24 bg-[#fafafa] border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold">
                COMMERCIAL VALUE CREATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-neutral-900 tracking-tight">
                Measurable Business Outcome &amp; ROI
              </h2>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                {study.businessImpact}
              </p>

              <div className="p-6 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <div className="text-xs font-mono uppercase text-neutral-500 font-bold">
                  Deliverables Package Provided
                </div>
                <ul className="space-y-2 text-xs text-neutral-700">
                  {study.deliverables.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200 shadow-xl space-y-6 relative">
              <Quote className="w-10 h-10 text-neutral-300" />
              <blockquote className="text-lg sm:text-xl text-neutral-800 font-display leading-relaxed italic">
                "{study.clientQuote.quote}"
              </blockquote>
              <div className="pt-4 border-t border-neutral-100">
                <div className="font-display font-bold text-neutral-900">
                  {study.clientQuote.author}
                </div>
                <div className="text-xs font-mono text-neutral-500">
                  {study.clientQuote.company}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. RELATED CASE STUDIES */}
      <section className="py-16 md:py-24 bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold mb-2">
                CONTINUE EXPLORING
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900">
                Related Research Case Studies
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-bold text-emerald-700 hover:text-emerald-900"
            >
              <span>View All 6 Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedStudies.map((r) => (
              <Link
                key={r.id}
                to={`/case-studies/${r.id}`}
                className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-200 hover:border-black hover:shadow-xl transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img 
                    src={r.heroImage} 
                    alt={r.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <div className="text-[11px] font-mono text-emerald-700 uppercase font-bold">
                    {r.client}
                  </div>
                  <h3 className="text-base font-display font-semibold text-neutral-900 group-hover:text-black line-clamp-2">
                    {r.title}
                  </h3>
                </div>
                <div className="p-6 pt-0 flex items-center justify-between text-xs font-mono text-neutral-500 border-t border-neutral-100 mt-2">
                  <span>Inspect Case</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 9. BOTTOM CONVERSION CTA */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>OPERATIONAL READINESS &bull; 24-HOUR FEASIBILITY SLA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-medium">
            Ready to commission a study for your brand?
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto">
            Connect directly with Founder &amp; Managing Director Fahad Ali and our Senior Fieldwork Operations Directorate in Lucknow for an immediate feasibility brief.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact(study.title)}
              className="px-8 py-4 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-xl"
            >
              Submit Research RFP
            </button>
            <a
              href={`https://wa.me/917458098299?text=Hello%20Fahad%20Ali,%20I%20reviewed%20the%20${encodeURIComponent(study.title)}%20case%20study%20and%20would%20like%20to%20discuss%20a%20similar%20mandate.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-xl flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Fahad Ali (+91 7458098299)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
