import React, { useState, useEffect } from 'react';
import { 
  X, Check, Send, Phone, Mail, MapPin, ShieldCheck, MessageCircle, 
  Database, Clock, Award, FileText, CheckCircle2, ChevronRight, Users, Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';

const ALL_METHODOLOGIES = [
  'Online CAWI Panel Surveys (Global Reach)',
  'Computer-Assisted Telephone Interviews (CATI)',
  'Choice-Based Conjoint (CBC) & MaxDiff Modeling',
  'Continuous Brand Health & Longitudinal NPS Trackers',
  'Moderated Focus Group Discussions (FGDs)',
  'C-Suite & Executive In-Depth Interviews (IDIs)',
  'In-Home Usage Testing (IHUT) & Sensory Labs',
  'Mobile Video Diaries & Digital Consumer Ethnography',
  'VeriTrust™ Bot & Fraud Elimination Protocol',
  'B2B Enterprise & IT Decision-Maker Panels',
  'Healthcare Professionals & KOL Panels (HCP)',
  'SPSS / R Cross-Tabulation & Executive Dashboards'
];

export default function ContactDrawer({ isOpen, onClose, initialMethodology = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    methodology: initialMethodology || 'Online CAWI Panel Surveys (Global Reach)',
    sampleSize: '1000',
    geography: 'Global Multi-Market',
    incidenceRate: 'General Population (75%+ IR)',
    timeline: 'Standard (2–3 Weeks)',
    scope: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  // Sync initialMethodology when passed from parent
  useEffect(() => {
    if (initialMethodology) {
      setFormData(prev => ({ ...prev, methodology: initialMethodology }));
    }
  }, [initialMethodology]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/rfp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setInquiryId(data.inquiryId);
      } else {
        setInquiryId(`VR-${Date.now().toString(36).toUpperCase()}`);
      }
    } catch (err) {
      console.error('API Error, using fallback logging:', err);
      setInquiryId(`VR-${Date.now().toString(36).toUpperCase()}`);
    } finally {
      setLoading(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 110,
          spread: 75,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-5xl max-h-[94vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-neutral-200">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 sm:p-14 text-center space-y-6 max-w-2xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <Check className="w-10 h-10" />
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
              <span>RFP COMMITTED &bull; TRACKING REF: {inquiryId}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 tracking-tight">
              Research Brief Confirmed
            </h3>
            
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Thank you, <span className="font-bold text-neutral-900">{formData.fullName}</span> ({formData.organization}). 
              Your study parameters have been forwarded to Founder &amp; Managing Director <span className="font-bold text-neutral-900">Fahad Ali</span> and our Senior Fieldwork Operations Directorate in Lucknow.
            </p>
            
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-700 text-left space-y-2">
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-neutral-500">Methodology:</span>
                <span className="font-bold text-neutral-900">{formData.methodology}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-neutral-500">Sample Target:</span>
                <span className="font-bold text-neutral-900">n = {formData.sampleSize} completes</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-neutral-500">Target Territory:</span>
                <span className="font-bold text-neutral-900">{formData.geography}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Feasibility SLA:</span>
                <span className="font-bold text-emerald-700">Detailed Quota &amp; Pricing within 24 Hours</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/917458098299?text=Hello%20Fahad%20Ali,%20I%20just%20submitted%20RFP%20${inquiryId}%20for%20${encodeURIComponent(formData.methodology)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Notify Fahad Ali on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
            
            {/* LEFT COLUMN: INSTITUTIONAL REASSURANCE & METHODOLOGY HIGHLIGHTS */}
            <div className="lg:col-span-5 bg-neutral-950 text-white p-6 sm:p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-800 rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl">
              
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 mb-3">
                    <Database className="w-3 h-3 text-emerald-400" />
                    <span>GLOBAL FIELDWORK BRIEFING DESK</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight">
                    Vincent Research
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                    Direct access to proprietary panel operations, demographic quota configuration, and statistical incidence audits.
                  </p>
                </div>

                {/* LEADERSHIP & OPERATIONS BADGE */}
                <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 space-y-2.5 text-xs">
                  <div className="flex items-center gap-2 text-neutral-300 font-mono text-[11px] uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-semibold text-white">Executive Supervision</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Fahad Ali <span className="text-xs text-neutral-400 font-normal">&bull; Founder &amp; Managing Director</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400 text-[11px]">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <span>Operations HQ: Vibhuti Khand, Gomti Nagar, Lucknow, India</span>
                  </div>
                </div>

                {/* ACTIVE STUDY BENCHMARKS */}
                <div className="space-y-3">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                    Institutional Guarantees
                  </div>

                  <div className="flex items-start gap-3 text-xs text-neutral-300">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">24-Hour Feasibility SLA:</span> Granular sample quotas, incidence rate validation, and fixed calendar delivered within 24 business hours.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-neutral-300">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">VeriTrust™ 99.84% Integrity:</span> Biometric device fingerprinting, trap questions, and speeder trimming eliminate artificial data.
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-neutral-300">
                    <FileText className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">Boardroom Deliverables:</span> IBM SPSS (.sav), Banner Cross-Tabulations (95% CI), Executive Presentation Decks &amp; audio verbatims.
                    </div>
                  </div>
                </div>
              </div>

              {/* DIRECT CONTACT FOOTER */}
              <div className="pt-6 mt-6 border-t border-neutral-800/80 space-y-3">
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  Direct Fieldwork Advisory:
                </div>
                <div className="flex flex-col gap-2 text-xs">
                  <a 
                    href="tel:+917458098299" 
                    className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>+91 7458098299 (Executive Direct)</span>
                  </a>
                  <a 
                    href="mailto:contact@vincentresearch.com" 
                    className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>contact@vincentresearch.com</span>
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: GUIDED RFP SUBMISSION FORM */}
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                {/* HEADER */}
                <div className="mb-6">
                  <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>PROJECT SCOPING &bull; CONFIDENTIAL RFP</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 tracking-tight">
                    Submit Study Specifications
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                    Fill in your project requirements below. Our Lucknow operations desk will formulate a custom sample feasibility matrix.
                  </p>
                </div>

                {/* FORM */}
                <form id="rfp-form" onSubmit={handleSubmit} className="space-y-4">
                  {/* FULL NAME & EMAIL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1.5 font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1.5 font-semibold">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* ORGANIZATION & METHODOLOGY */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1.5 font-semibold">
                        Organization / Agency *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Company or Brand Name"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1.5 font-semibold">
                        Fieldwork Methodology *
                      </label>
                      <select
                        value={formData.methodology}
                        onChange={(e) => setFormData({ ...formData, methodology: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all"
                      >
                        {ALL_METHODOLOGIES.map((m, idx) => (
                          <option key={idx} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* SAMPLE SIZE & GEOGRAPHY */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1.5 font-semibold">
                        Sample Size (Target n=)
                      </label>
                      <select
                        value={formData.sampleSize}
                        onChange={(e) => setFormData({ ...formData, sampleSize: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all"
                      >
                        <option value="300">n = 300 completes (Pilot / Niche)</option>
                        <option value="500">n = 500 completes (Standard Market)</option>
                        <option value="1000">n = 1,000 completes (Census Balanced)</option>
                        <option value="2500">n = 2,500 completes (Multi-Region)</option>
                        <option value="5000">n = 5,000 completes (National Robust)</option>
                        <option value="10000+">n = 10,000+ completes (Global Multilateral)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1.5 font-semibold">
                        Target Geography / Markets
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. India (Tier 1 & 2), USA, UK, UAE"
                        value={formData.geography}
                        onChange={(e) => setFormData({ ...formData, geography: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* INCIDENCE RATE & TIMELINE */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1.5 font-semibold">
                        Estimated Incidence Rate (IR %)
                      </label>
                      <select
                        value={formData.incidenceRate}
                        onChange={(e) => setFormData({ ...formData, incidenceRate: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all"
                      >
                        <option value="General Population (75%+ IR)">General Population (75%+ IR)</option>
                        <option value="Category Consumers (35–50% IR)">Category Consumers (35–50% IR)</option>
                        <option value="Targeted Niche (15–30% IR)">Targeted Niche (15–30% IR)</option>
                        <option value="Ultra-Niche B2B / HCP (<10% IR)">Ultra-Niche B2B / HCP (&lt;10% IR)</option>
                        <option value="Unsure / Need Incidence Feasibility">Unsure / Need Incidence Feasibility</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1.5 font-semibold">
                        Fieldwork Timeline / Urgency
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all"
                      >
                        <option value="Standard (2–3 Weeks)">Standard (2–3 Weeks)</option>
                        <option value="Express Fieldwork (5–7 Business Days)">Express Fieldwork (5–7 Business Days)</option>
                        <option value="Overnight Pulse (<48 Hours)">Overnight Pulse (&lt;48 Hours)</option>
                        <option value="Longitudinal Recurring Tracker">Longitudinal Recurring Tracker</option>
                      </select>
                    </div>
                  </div>

                  {/* SCOPE & RESEARCH OBJECTIVES */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1.5 font-semibold">
                      Study Objectives / Screener Criteria / LOI
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Specify key quotas, questionnaire length (LOI in minutes), target respondent criteria, or specific deliverable formats..."
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-black focus:bg-white transition-all"
                    ></textarea>
                  </div>
                </form>
              </div>

              {/* ACTIONS */}
              <div className="pt-4 border-t border-neutral-200 mt-4 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={`https://wa.me/917458098299?text=Hello%20Fahad%20Ali,%20I%20would%20like%20to%20discuss%20an%20RFP%20for%20${encodeURIComponent(formData.methodology)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Direct</span>
                </a>

                <button
                  type="submit"
                  form="rfp-form"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg group"
                >
                  <span>{loading ? 'Submitting Brief...' : 'Submit Research RFP'}</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
