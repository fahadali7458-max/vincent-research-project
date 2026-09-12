import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Database, Microscope, ShieldCheck, FileSearch } from 'lucide-react';
import ServiceDetailModal from './ServiceDetailModal';

const SERVICES_DATA = [
  {
    category: 'Quantitative Methodologies & Panel Sampling',
    number: '01',
    icon: Database,
    description: 'Scale empirical statistical certainty through census-balanced online panels, CATI telephone intercepts, and advanced discrete choice modeling.',
    links: [
      'Online CAWI Panel Surveys (Global Reach)',
      'Computer-Assisted Telephone Interviews (CATI)',
      'Choice-Based Conjoint (CBC) & MaxDiff Modeling',
      'Continuous Brand Health & Longitudinal NPS Trackers'
    ]
  },
  {
    category: 'Qualitative Research & Human Ethnography',
    number: '02',
    icon: Microscope,
    description: 'Uncover emotional rationale, unmet needs, and behavioral friction through structured focus groups, executive IDIs, and real-world in-home immersion.',
    links: [
      'Moderated Focus Group Discussions (FGDs)',
      'C-Suite & Executive In-Depth Interviews (IDIs)',
      'In-Home Usage Testing (IHUT) & Sensory Labs',
      'Mobile Video Diaries & Digital Consumer Ethnography'
    ]
  },
  {
    category: 'Specialty Panels, VeriTrust™ & Advanced Analytics',
    number: '03',
    icon: ShieldCheck,
    description: 'Deploy multi-layer anti-fraud honeypots, access verified medical and B2B cohorts, and receive boardroom-ready predictive tabulations.',
    links: [
      'VeriTrust™ Bot & Fraud Elimination Protocol',
      'B2B Enterprise & IT Decision-Maker Panels',
      'Healthcare Professionals & KOL Panels (HCP)',
      'SPSS / R Cross-Tabulation & Executive Dashboards'
    ]
  }
];

const SERVICE_LINK_SLUGS = {
  'Online CAWI Panel Surveys (Global Reach)': 'online-panel-surveys',
  'Computer-Assisted Telephone Interviews (CATI)': 'cati-telephone-intercepts',
  'Choice-Based Conjoint (CBC) & MaxDiff Modeling': 'conjoint-maxdiff-modeling',
  'Continuous Brand Health & Longitudinal NPS Trackers': 'longitudinal-brand-tracking',
  'Moderated Focus Group Discussions (FGDs)': 'focus-group-discussions',
  'C-Suite & Executive In-Depth Interviews (IDIs)': 'in-depth-interviews',
  'In-Home Usage Testing (IHUT) & Sensory Labs': 'in-home-usage-testing',
  'Mobile Video Diaries & Digital Consumer Ethnography': 'digital-ethnography-video-diaries',
  'VeriTrust™ Bot & Fraud Elimination Protocol': 'veritrust-anti-fraud',
  'B2B Enterprise & IT Decision-Maker Panels': 'b2b-executive-panels',
  'Healthcare Professionals & KOL Panels (HCP)': 'healthcare-hcp-panels',
  'SPSS / R Cross-Tabulation & Executive Dashboards': 'spss-r-advanced-tabulation'
};

export default function ServicesTable({ onOpenContact }) {
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState(null);

  return (
    <section id="services" className="py-24 bg-[#fafafa] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION TITLE */}
        <div className="mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-600 font-bold mb-3">
            COMPREHENSIVE RESEARCH CAPABILITIES &bull; DEDICATED METHODOLOGY PAGES
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-neutral-900 tracking-tight">
            Our Services
          </h2>
        </div>

        {/* 3 TWO-COLUMN ROWS */}
        <div className="divide-y divide-neutral-200/80">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                
                {/* LEFT: CATEGORY TITLE */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-emerald-600" />
                    <span className="font-mono text-xs font-semibold text-neutral-600">
                      PRACTICE AREA {service.number}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-display font-semibold text-neutral-900 tracking-tight">
                    {service.category}
                  </h3>
                </div>

                {/* RIGHT: DESCRIPTION & LINK GRID */}
                <div className="lg:col-span-8 space-y-8">
                  <p className="text-xl text-neutral-700 font-normal leading-relaxed max-w-2xl">
                    {service.description}
                  </p>

                  {/* LINKS 2-COLUMN GRID */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {service.links.map((link, lIdx) => {
                      const slug = SERVICE_LINK_SLUGS[link] || 'online-panel-surveys';
                      return (
                        <div
                          key={lIdx}
                          className="group flex flex-col justify-between p-5 rounded-2xl bg-white border border-neutral-200 hover:border-black hover:shadow-lg transition-all"
                        >
                          <div className="flex items-start justify-between gap-3 mb-4">
                            <div className="flex items-start gap-2.5">
                              <Plus className="w-4 h-4 text-neutral-400 group-hover:text-emerald-600 group-hover:rotate-90 transition-all duration-300 mt-0.5" />
                              <span className="text-sm font-semibold text-neutral-900 group-hover:text-black">
                                {link}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-3 border-t border-neutral-100 text-xs font-mono">
                            <button
                              onClick={() => setSelectedServiceForDetail(link)}
                              className="text-neutral-500 hover:text-black transition-colors"
                            >
                              Quick Specs
                            </button>
                            <Link
                              to={`/services/${slug}`}
                              className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-950 transition-colors"
                            >
                              <span>Explore Full Page</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* SERVICE DEEP-DIVE MODAL */}
      <ServiceDetailModal
        serviceName={selectedServiceForDetail}
        onClose={() => setSelectedServiceForDetail(null)}
        onConfigureRFP={(svcName) => {
          setSelectedServiceForDetail(null);
          if (onOpenContact) {
            onOpenContact(svcName);
          }
        }}
      />
    </section>
  );
}
