import React from 'react';
import { ArrowRight, MessageSquare, PhoneCall, Calculator } from 'lucide-react';

export default function CampaignCTA({ onOpenContact }) {
  const scrollToFeasibility = () => {
    const element = document.getElementById('feasibility-tool');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-28 bg-[#f8f9fa] border-b border-neutral-200/80 text-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-800 text-xs font-mono uppercase tracking-wider mb-8 shadow-sm">
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span>COMMISSION YOUR NEXT RESEARCH STUDY WITH CERTAINTY</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-neutral-900 tracking-tight leading-tight">
          Commission with confidence.
          <br />
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-3 text-black underline underline-offset-8 decoration-neutral-300 hover:decoration-black hover:text-neutral-800 transition-all cursor-pointer group font-semibold"
          >
            <span>Request an RFP &amp; Proposal</span>
            <ArrowRight className="w-8 sm:w-12 h-8 sm:h-12 inline-block group-hover:translate-x-3 transition-transform" />
          </button>
        </h2>

        <p className="mt-8 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Whether you need a 10,000-sample quantitative CAWI study across Europe, in-depth B2B C-Suite stakeholder interviews, 
          or discrete choice pricing conjoint analysis, Vincent Research delivers boardroom-ready certainty.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white text-sm font-semibold hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Submit Detailed RFP Brief</span>
          </button>
          
          <button
            onClick={scrollToFeasibility}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-neutral-300 text-neutral-900 text-sm font-semibold hover:bg-neutral-100 transition-all shadow-md"
          >
            <Calculator className="w-4 h-4 text-emerald-600" />
            <span>Instant Feasibility Query</span>
          </button>

          <a
            href="https://wa.me/917458098299?text=Hello%20Fahad%20Ali,%20I%20would%20like%20to%20inquire%20about%20commissioning%20a%20market%20research%20study."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-all shadow-lg"
          >
            <span>WhatsApp (+91 7458098299)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
