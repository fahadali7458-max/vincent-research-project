import React from 'react';
import { X, CheckCircle2, ShieldCheck, Clock, Users, Database, ArrowRight, FileText, BarChart3, Globe, Sparkles } from 'lucide-react';

export const SERVICE_DETAILS = {
  'Online CAWI Panel Surveys (Global Reach)': {
    category: 'Quantitative Methodologies & Panel Sampling',
    practiceArea: '01',
    headline: 'Census-Balanced Computer-Assisted Web Interviewing Across 40M+ Double Opt-In Panelists',
    summary: 'Our CAWI online survey infrastructure scales empirical statistical certainty across 124 countries. From consumer brand perception to multinational market sizing, we deploy responsive multi-device questionnaires backed by algorithmic screening quotas.',
    sampleReach: '40M+ active verified panelists across 124 countries',
    incidenceRate: 'General Population (75–95%), Targeted Consumer Niches (20–45%)',
    turnaround: '3–5 business days for n=1,000 completes',
    qualityControls: 'VeriTrust™ honeypot traps, digital device fingerprinting, speeder trimming (LOI < 40% median removed), straight-lining audit.',
    methodologyBreakdown: [
      { step: '01', title: 'Survey Scripting & Quota Matrix', desc: 'Complex nested quotas configured for age, gender, SEC/income, and geographic divisions with mobile-first logic.' },
      { step: '02', title: 'VeriTrust™ Pre-Screening', desc: 'Every panelist is authenticated through IPQS fraud scoring and biometric browser fingerprinting before questionnaire entry.' },
      { step: '03', title: 'Fieldwork Ingestion & Live Monitoring', desc: 'Real-time telemetry tracking incidence rates, drop-off points, and statistical distribution curves.' },
      { step: '04', title: 'Statistical Cleansing & Tabulation', desc: 'Raw data cleaning, open-end coding, weight adjustments, and cross-tabulation generation in SPSS and Excel.' }
    ],
    deliverables: [
      'Raw Data Files in IBM SPSS (.sav), CSV, and Triple-S formats',
      'Banner Cross-Tabulations (C-Tabs) with z-test & t-test significance at 95% CI',
      'Executive Summary Presentation Deck (PPTX/PDF) with chart visualizations',
      'VeriTrust™ Fieldwork Integrity & Quota Fulfillment Certificate'
    ],
    caseStudySnippet: 'Executed a 12-country consumer electronic perception study (n=8,500) completed in 4.5 days with 99.88% data accuracy.'
  },
  'Computer-Assisted Telephone Interviews (CATI)': {
    category: 'Quantitative Methodologies & Panel Sampling',
    practiceArea: '01',
    headline: 'Native-Language Centralized Telephone Fieldwork for Difficult Demographics & Non-Digital Cohorts',
    summary: 'Our centralized CATI operations hub in Lucknow conducts structured telephonic intercepts across tier-1, tier-2, and rural territories. Ideal for high-net-worth individuals, elderly populations, and enterprise stakeholders unreachable via digital panels.',
    sampleReach: 'Proprietary B2B & consumer call registries across India, Middle East, Europe & APAC',
    incidenceRate: 'Rural Consumer (40–70%), Senior Demographics (25–40%), Enterprise Procurement (8–15%)',
    turnaround: '7–10 business days for n=500 completed telephonic interviews',
    qualityControls: '100% audio recording, 20% real-time supervisor listening, call duration verification, dual-entry data capture.',
    methodologyBreakdown: [
      { step: '01', title: 'Script Localization & Native Dialects', desc: 'Questionnaire translated into 18+ regional languages with pilot testing for cultural resonance.' },
      { step: '02', title: 'Dialer Quota Management', desc: 'Predictive and manual dialer algorithms managing callback schedules, time-zone balancing, and call logs.' },
      { step: '03', title: 'Dual-Monitor Quality Auditing', desc: 'Field supervisors live-monitor calls to verify interviewer impartiality and adherence to question wording.' },
      { step: '04', title: 'Audio Archival & Dispositions', desc: 'All interviews indexed with verifiable disposition codes and audio backups for client audit.' }
    ],
    deliverables: [
      'Full Call Dispositions & Response Rate Metrics',
      'Verified SPSS (.sav) & Excel Tabulations',
      'Client-accessible audio excerpts of key consumer sentiment verbatim',
      'Statistical Significance Report at 95% Confidence Interval'
    ],
    caseStudySnippet: 'Conducted a 4-state rural agrarian consumer sentiment study (n=3,200) across 6 dialect variants in 11 fieldwork days.'
  },
  'Choice-Based Conjoint (CBC) & MaxDiff Modeling': {
    category: 'Quantitative Methodologies & Panel Sampling',
    practiceArea: '01',
    headline: 'Econometric Discrete-Choice Conjoint & Maximum Difference Scaling for Pricing & Feature Optimization',
    summary: 'Determine willingness-to-pay (WTP), brand price elasticity, and optimal product feature bundles through advanced discrete choice modeling and Hierarchical Bayes (HB) estimation, avoiding subjective rating scale bias.',
    sampleReach: 'Targeted sample cohorts (n=400 to n=2,500) balanced by category buying authority',
    incidenceRate: 'Category Buyers (30–60%), Enterprise Software Buyers (10–20%)',
    turnaround: '8–12 business days including simulator build',
    qualityControls: 'Randomized task rotation, none-option tracking, task engagement timer, attribute orthogonality checks.',
    methodologyBreakdown: [
      { step: '01', title: 'Experimental Design Matrix', desc: 'Orthogonal or balanced fractional factorial design generating realistic attribute trade-off choice tasks.' },
      { step: '02', title: 'Fieldwork Deployment', desc: 'Respondents evaluate 12–16 choice scenarios with dynamic competitive pricing and packaging variants.' },
      { step: '03', title: 'Hierarchical Bayes (HB) Estimation', desc: 'Computing individual-level part-worth utilities using Markov Chain Monte Carlo (MCMC) iterations.' },
      { step: '04', title: 'Interactive Market Simulator', desc: 'Custom Excel or cloud simulator allowing client to test what-if market share and pricing scenarios.' }
    ],
    deliverables: [
      'Interactive Excel Market Simulator with custom competitor scenario toggles',
      'Individual & Aggregate Part-Worth Utility Scorecards',
      'Price Elasticity Demand Curves & Revenue-Maximizing Price Points',
      'Strategic Executive Presentation on cannibalization and bundle architecture'
    ],
    caseStudySnippet: 'Simulated 18 packaging & pricing configurations for a leading athletic apparel brand, pinpointing optimal subscription price at $129/yr with zero cannibalization.'
  },
  'Continuous Brand Health & Longitudinal NPS Trackers': {
    category: 'Quantitative Methodologies & Panel Sampling',
    practiceArea: '01',
    headline: 'Real-Time Longitudinal Brand Equity, Consideration Funnel & NPS Tracking Across Rolling Waves',
    summary: 'Monitor aided and unaided brand awareness, consideration, purchase intent, and Net Promoter Score across rolling monthly or quarterly sample waves with normalized baseline controls and competitor benchmark overlays.',
    sampleReach: 'Ongoing monthly quota of n=500 to n=2,000 completes per geography',
    incidenceRate: 'Target Category Active Consumers (40–80%)',
    turnaround: 'Continuous 24/7 telemetry with 48-hour wave synthesis',
    qualityControls: 'Rolling sample de-duplication (180-day exclusion window), seasonal weighting normalization.',
    methodologyBreakdown: [
      { step: '01', title: 'Funnel Architecture & KPIs', desc: 'Establishing standardized benchmarks for unaided recall, consideration, trial, and repeat advocacy.' },
      { step: '02', title: 'Rolling Quota Wave Sampling', desc: 'Continuous fielding with 4-week moving averages to eliminate single-day campaign distortions.' },
      { step: '03', title: 'Competitor Perception Mapping', desc: 'Benchmarking brand metrics against 5 key direct competitors across key attribute dimensions.' },
      { step: '04', title: 'Automated Alert Triggers', desc: 'Instant executive alerts when NPS or sentiment scores deviate beyond statistical tolerance thresholds.' }
    ],
    deliverables: [
      'Interactive Cloud BI Executive Dashboard (PowerBI / Tableau / Web)',
      'Quarterly Boardroom Briefing Presentation with moving-average trendlines',
      'Driver Analysis: Multiple regression modeling explaining what factors shift NPS',
      'Raw SPSS & Clean Cross-Tab Data Archives per wave'
    ],
    caseStudySnippet: 'Tracked brand sentiment and NPS for a global enterprise software brand across 14 quarters, isolating a 12-point NPS jump following feature refactoring.'
  },
  'Moderated Focus Group Discussions (FGDs)': {
    category: 'Qualitative Research & Human Ethnography',
    practiceArea: '02',
    headline: 'High-Touch Qualitative Immersion with Accredited Psychologists & Two-Way Mirror Viewing Facilities',
    summary: 'Uncover the deep emotional drivers, hidden frictions, and non-conscious heuristics influencing consumer behavior. Conducted in state-of-the-art focus group facilities in Lucknow and partner tier-1 metros, or via encrypted HD virtual discussion suites.',
    sampleReach: '6–8 rigorously screened participants per group; 2 to 12 groups per study',
    incidenceRate: 'Target Audience Profile (15–35%)',
    turnaround: '10–14 business days from screener sign-off to executive debrief',
    qualityControls: 'Dual-stage phone validation of all recruits, articulate screener scoring, zero professional respondents (12-month quarantine).',
    methodologyBreakdown: [
      { step: '01', title: 'Discussion Guide & Projective Techniques', desc: 'Crafting non-leading projective prompts, collage exercises, and concept provocation exercises.' },
      { step: '02', title: 'Rigorous Recruiter Validation', desc: 'Screening participants for category involvement, openness, and authenticity with audio pre-checks.' },
      { step: '03', title: 'Moderation & Client Viewing', desc: 'Conducted by senior qualitative researchers with private client observation room and real-time moderator backchannel.' },
      { step: '04', title: 'Thematic Coding & Insight Synthesis', desc: 'Verbatim transcription, emotional nuance mapping, and high-impact video highlight reels.' }
    ],
    deliverables: [
      'Executive Qualitative Strategic Brief with strategic frameworks and journey maps',
      'Edited 3–5 Minute Video Highlight Reel with key verbatim insights and client quotes',
      'Complete Time-Stamped Transcripts with thematic coding categorization',
      'Full HD Audio/Video Recordings of all focus group sessions'
    ],
    caseStudySnippet: 'Moderated 8 focus groups for an electric vehicle manufacturer, discovering range anxiety was actually rooted in charger interface confusion rather than battery size.'
  },
  'C-Suite & Executive In-Depth Interviews (IDIs)': {
    category: 'Qualitative Research & Human Ethnography',
    practiceArea: '02',
    headline: 'Confidential 1-on-1 Strategic Immersion with Fortune 2000 C-Suite & Industry Key Opinion Leaders',
    summary: 'Access difficult-to-reach enterprise leadership (CIOs, CFOs, CMOs, Chief Procurement Officers) for deep 45–60 minute strategic consultations. Conducted with white-glove executive coordination and peer-level interviewers.',
    sampleReach: 'Over 150,000 verified enterprise executive profiles across global markets',
    incidenceRate: 'C-Suite / VP-Level Enterprise Decision Makers (3–10%)',
    turnaround: '12–16 business days for n=15 to n=30 executive completes',
    qualityControls: 'Corporate domain email verification, LinkedIn profile audit, executive honorarium escrow.',
    methodologyBreakdown: [
      { step: '01', title: 'Executive Profiling & Target List', desc: 'Curating target organization lists (Fortune 2000, Unicorn startups, government bodies) and role titles.' },
      { step: '02', title: 'White-Glove Executive Concierge', desc: 'Senior recruiters handle calendar coordination, NDA execution, and executive honoraria distribution.' },
      { step: '03', title: 'Senior Strategist Moderation', desc: 'Conducted by former management consultants and PhD researchers fluent in enterprise terminology.' },
      { step: '04', title: 'Blind Comparative Synthesis', desc: 'Synthesizing conflicting stakeholder perspectives into clear corporate adoption matrices.' }
    ],
    deliverables: [
      'Strategic Executive Dossier with decision-making matrix and vendor selection criteria',
      'Anonymized Executive Quote Cards with direct strategic recommendations',
      'Full Certified Transcripts with non-disclosure sanitization',
      'Audio / Video Excerpts highlighting key enterprise roadblocks'
    ],
    caseStudySnippet: 'Conducted 24 double-blind IDIs with Fortune 500 CIOs evaluating generative AI enterprise infrastructure readiness and cloud budget allocations.'
  },
  'In-Home Usage Testing (IHUT) & Sensory Labs': {
    category: 'Qualitative Research & Human Ethnography',
    practiceArea: '02',
    headline: 'Real-World Product Placement, Unboxing Ethnography & Longitudinal In-Home Consumer Usage Trials',
    summary: 'Put physical prototypes, consumer packaged goods, or devices directly into the hands of real target consumers in their natural living environments. Track initial impressions, unboxing friction, ergonomics, and sensory feedback across 7 to 30-day trials.',
    sampleReach: 'n=100 to n=500 pre-qualified household test panels',
    incidenceRate: 'Category Regular Users & Early Adopters (25–50%)',
    turnaround: '3–5 weeks including fulfillment logistics and trial window',
    qualityControls: 'Barcode-scanned secure courier dispatch, photo/video product verification, compliance check-ins.',
    methodologyBreakdown: [
      { step: '01', title: 'Logistics & Product Preparation', desc: 'Blind packaging, batch coding, and secure courier dispatch to pre-qualified households.' },
      { step: '02', title: 'Unboxing Video Diary', desc: 'Consumers capture raw first-impression reactions, packaging accessibility, and initial setup.' },
      { step: '03', title: 'Longitudinal Daily Usage Logs', desc: 'Automated push-notification mobile surveys tracking daily experience and performance ratings.' },
      { step: '04', title: 'Post-Usage Comprehensive Evaluation', desc: 'Detailed quantitative survey and follow-up in-depth interview to measure repurchase intent.' }
    ],
    deliverables: [
      'Sensory & Performance Diagnostic Matrix (Taste, Texture, Scent, Ergonomics)',
      'Unboxing Friction Analysis & Packaging Improvement Recommendations',
      'Pre-Trial vs. Post-Trial Repurchase Intent & Net Product Score',
      'Compiled Consumer Video Footage and Photographic Evidence Portfolio'
    ],
    caseStudySnippet: 'Fielded a 21-day skincare formulation trial across 300 target consumers, leading to a packaging nozzle redesign that boosted consumer satisfaction from 68% to 94%.'
  },
  'Mobile Video Diaries & Digital Consumer Ethnography': {
    category: 'Qualitative Research & Human Ethnography',
    practiceArea: '02',
    headline: 'Asynchronous Mobile Video Journaling Capturing In-The-Moment Shopper & Lifestyle Behavior',
    summary: 'Capture spontaneous, unmediated consumer decisions as they happen in retail aisles, kitchens, gyms, and commutes. Smartphone video diaries eliminate recall bias and provide authentic observational evidence of unmet customer needs.',
    sampleReach: 'n=30 to n=150 active consumer diarists across target geographies',
    incidenceRate: 'Active Smartphone Demographics (50–90%)',
    turnaround: '2–3 weeks from app launch to synthesis',
    qualityControls: 'Micro-incentive milestone unlock, daily video resolution validation, proactive moderator nudging.',
    methodologyBreakdown: [
      { step: '01', title: 'Prompt & Mission Architecture', desc: 'Designing structured daily video missions, shopping scavenger hunts, and pain-point captures.' },
      { step: '02', title: 'App Onboarding & Orientation', desc: 'Participants download secure mobile app with encrypted cloud video upload capabilities.' },
      { step: '03', title: 'Real-Time Moderator Interaction', desc: 'Researchers review uploads within 4 hours to probe deeper with follow-up video questions.' },
      { step: '04', title: 'Behavioral Coding & Journey Mapping', desc: 'Tagging video clips with emotional sentiment, contextual triggers, and workarounds.' }
    ],
    deliverables: [
      'Interactive Customer Journey Map with embedded in-situ video clips',
      'Thematic Video Storyboard highlighting behavioral workarounds and unspoken needs',
      'Friction Taxonomy: Ranked list of consumer pain points during actual usage',
      'Full searchable video archive with automated transcripts'
    ],
    caseStudySnippet: 'Tracked 80 grocery shoppers via mobile video diaries across 2 weeks, uncovering how product shelf height directly drove impulse purchase abandonment.'
  },
  'VeriTrust™ Bot & Fraud Elimination Protocol': {
    category: 'Specialty Panels, VeriTrust™ & Advanced Analytics',
    practiceArea: '03',
    headline: 'Institutional Anti-Fraud Defense Shield Eliminating AI Synthetic Bots, Click Farms & Speeder Accounts',
    summary: 'Digital market research is plagued by synthetic AI responses and professional click-farms. The VeriTrust™ protocol deploys multi-tier honeypots, machine learning fraud scoring, and biometric browser telemetry to guarantee 99.84% authentic human respondents.',
    sampleReach: 'Guaranteed across all 40M+ Vincent Research panel records and client sample integrations',
    incidenceRate: 'Filters out 100% of malicious non-human traffic with zero false-positives on genuine panelists',
    turnaround: 'Real-time sub-millisecond automated filtering at study ingress',
    qualityControls: 'IPQS machine learning scoring, canvas device fingerprinting, honeypot questions, open-end LLM coherence checks.',
    methodologyBreakdown: [
      { step: '01', title: 'Ingress Telemetry & Proxy Check', desc: 'Instant inspection of VPNs, Tor exit nodes, datacenter IPs, and virtual machine emulators.' },
      { step: '02', title: 'Invisible Honeypot & Speeder Traps', desc: 'Hidden DOM fields and millisecond response timers that catch bot scrapers and automated clickers.' },
      { step: '03', title: 'Open-End Semantic AI Verification', desc: 'Natural language processing algorithms detecting ChatGPT/LLM generated survey answers and copy-paste strings.' },
      { step: '04', title: 'Free Sample Replacement SLA', desc: 'Any response failing post-survey client audit is replaced at zero additional cost within 24 hours.' }
    ],
    deliverables: [
      'VeriTrust™ Certified Sample Quality Audit Log for boardroom verification',
      'Rejection Analytics Breakdown: Detailed reporting of caught VPNs, bots, and speeders',
      'Zero-Bot Guarantee SLA Documentation complying with ESOMAR guidelines',
      'Cleaned, 100% human-verified final data file ready for statistical modeling'
    ],
    caseStudySnippet: 'Saved a global financial client from 32% synthetic bot contamination on an open panel by filtering out 4,100 automated entries in real-time.'
  },
  'B2B Enterprise & IT Decision-Maker Panels': {
    category: 'Specialty Panels, VeriTrust™ & Advanced Analytics',
    practiceArea: '03',
    headline: 'Pre-Vetted B2B Cohorts of CIOs, Cloud Architects, Operations Directors & Procurement Heads',
    summary: 'Reach verified enterprise decision-makers with quantified purchasing authority. Our B2B panel undergoes LinkedIn employment verification and corporate domain authentication to ensure your studies reflect actual enterprise buying intentions.',
    sampleReach: '2.4M+ verified enterprise professionals across 85 industry verticals',
    incidenceRate: 'Enterprise ITDM ($50M+ revenue) IR 8–18%; SME Business Owners IR 30–50%',
    turnaround: '5–8 business days for n=300 to n=1,000 completes',
    qualityControls: 'Mandatory corporate email verification, LinkedIn profile audit, job title & budget authority double-check.',
    methodologyBreakdown: [
      { step: '01', title: 'Firmographic Quota Allocation', desc: 'Nested quotas based on company size (headcount), annual revenue, industry vertical, and geography.' },
      { step: '02', title: 'Title & Spend Verification', desc: 'Confirming direct budgetary authority (e.g. >$100k IT spend, software procurement responsibility).' },
      { step: '03', title: 'High-Touch B2B Survey Experience', desc: 'Clean, professional UI optimized for busy executives with flexible save-and-return capability.' },
      { step: '04', title: 'Anonymized Senior Synthesis', desc: 'Synthesizing enterprise vendor evaluations into clear quadrant benchmarks.' }
    ],
    deliverables: [
      'Firmographically Segmented SPSS (.sav) & Excel Tabulation datasets',
      'Enterprise Technology Adoption Curve & Vendor Consideration Benchmark',
      'Budget Allocation Projections: Where IT and operational capital is flowing over 24 months',
      'Executive Slide Deck formatted for board presentations and investor relations'
    ],
    caseStudySnippet: 'Polled 650 enterprise Chief Security Officers (CISOs) across North America and Europe on cloud data migration security priorities.'
  },
  'Healthcare Professionals & KOL Panels (HCP)': {
    category: 'Specialty Panels, VeriTrust™ & Advanced Analytics',
    practiceArea: '03',
    headline: 'Board-Certified Oncologists, Cardiologists, Pharmacists & Hospital Procurement Executives',
    summary: 'Conduct high-stakes medical and pharmaceutical market research with double-blind verified medical doctors. Every healthcare respondent is verified against national medical council registries, NPI numbers, and hospital affiliations.',
    sampleReach: '850,000+ verified healthcare practitioners across 42 specialty areas worldwide',
    incidenceRate: 'Medical Specialists (Oncology, Neurology) IR 3–7%; Primary Care Physicians IR 15–30%',
    turnaround: '7–12 business days for n=150 to n=400 physician completes',
    qualityControls: 'NPI number verification, medical license registry check, strict EphMRA & ESOMAR healthcare compliance.',
    methodologyBreakdown: [
      { step: '01', title: 'Medical Specialty Verification', desc: 'Checking active clinical practice, patient volume per month, and therapeutic area specialization.' },
      { step: '02', title: 'Double-Blind Protocol Administration', desc: 'Full compliance preventing physician from knowing pharmaceutical sponsor and vice versa.' },
      { step: '03', title: 'Adverse Event Reporting System', desc: 'Certified protocols to log and report any adverse events mentioned during fieldwork within 24 hours.' },
      { step: '04', title: 'Clinical Treatment Pathway Mapping', desc: 'Tabulating first-line, second-line, and maintenance therapy prescribing triggers.' }
    ],
    deliverables: [
      'Patient Treatment Algorithm Flowcharts & Drug Prescribing Share',
      'Therapeutic Unmet Need Scorecards & Competitor Efficacy Perceptions',
      'Anonymized & Certified Medical SPSS (.sav) datasets',
      'Comprehensive Healthcare Regulatory & Compliance Fulfillment Log'
    ],
    caseStudySnippet: 'Surveyed 220 board-certified medical oncologists across US and EU5 on first-line immunotherapy adoption thresholds in metastatic NSCLC.'
  },
  'SPSS / R Cross-Tabulation & Executive Dashboards': {
    category: 'Specialty Panels, VeriTrust™ & Advanced Analytics',
    practiceArea: '03',
    headline: 'Boardroom-Ready Statistical Synthesis, Significance Testing & Cloud Interactive PowerBI Dashboards',
    summary: 'Turn complex raw survey datasets into crystal-clear strategic clarity. Our statistical analytics team delivers weighted cross-tabulations with z-test and t-test significance testing, factor analysis, segmentation clustering, and custom cloud dashboards.',
    sampleReach: 'Scalable to datasets ranging from n=200 to n=100,000+ respondents',
    incidenceRate: 'Applicable to all quantitative and hybrid study datasets',
    turnaround: '24–48 hours from fieldwork completion',
    qualityControls: 'Dual-statistician independent code validation, syntax reproducibility check, automated outlier trimming.',
    methodologyBreakdown: [
      { step: '01', title: 'Data Cleaning & Variable Labeling', desc: 'Standardizing variable naming, value labels, missing-data handling, and demographic merging.' },
      { step: '02', title: 'Post-Stratification Weighting (RIM/Raking)', desc: 'Applying iterative proportional fitting to match census target population distributions.' },
      { step: '03', title: 'Cross-Tabulation & Statistical Tests', desc: 'Generating detailed banner tables with automated significance flags at 95% and 99% confidence.' },
      { step: '04', title: 'Cloud Dashboard Engineering', desc: 'Building interactive web portals with dynamic filtering by demographic, region, and cohort.' }
    ],
    deliverables: [
      'Cleaned, Fully-Labeled IBM SPSS (.sav), Stata (.dta), and RData files',
      'Comprehensive Excel Banner Cross-Tabs (C-Tabs) with automated significance testing',
      'Custom Interactive Cloud BI Dashboard (Tableau, PowerBI, or Web Portal)',
      'Executive Insights Slide Deck with heatmaps, charts, and actionable takeaways'
    ],
    caseStudySnippet: 'Delivered an interactive multi-country dashboard synthesizing 28,000 survey responses across 14 markets with sub-second cross-filtering for an executive board.'
  }
};

export default function ServiceDetailModal({ serviceName, onClose, onConfigureRFP }) {
  if (!serviceName) return null;
  const detail = SERVICE_DETAILS[serviceName] || SERVICE_DETAILS['Online CAWI Panel Surveys (Global Reach)'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-neutral-200">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* MODAL HERO HEADER */}
        <div className="p-6 sm:p-10 border-b border-neutral-200/80 bg-neutral-50/50">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              PRACTICE AREA {detail.practiceArea} &bull; {detail.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-neutral-900 tracking-tight">
            {serviceName}
          </h2>
          <p className="mt-2 text-base sm:text-lg font-medium text-emerald-800 leading-snug">
            {detail.headline}
          </p>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
            {detail.summary}
          </p>
        </div>

        {/* 4 KEY TELEMETRY SPECS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 border-b border-neutral-200 bg-white">
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">
              <Users className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sample Reach</span>
            </div>
            <div className="text-sm font-bold text-neutral-900">{detail.sampleReach}</div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">
              <Database className="w-3.5 h-3.5 text-cyan-600" />
              <span>Incidence Rate (IR)</span>
            </div>
            <div className="text-sm font-bold text-neutral-900">{detail.incidenceRate}</div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">
              <Clock className="w-3.5 h-3.5 text-purple-600" />
              <span>Turnaround SLA</span>
            </div>
            <div className="text-sm font-bold text-neutral-900">{detail.turnaround}</div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>Security Shield</span>
            </div>
            <div className="text-sm font-bold text-neutral-900">VeriTrust™ 99.84% Guard</div>
          </div>
        </div>

        {/* BODY CONTENT: PROCESS & DELIVERABLES */}
        <div className="p-6 sm:p-10 space-y-10">
          
          {/* METHODOLOGY PROCESS WORKFLOW */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <h3 className="text-xs font-mono uppercase tracking-widest font-bold text-neutral-900">
                Rigorous 4-Stage Execution Methodology
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {detail.methodologyBreakdown.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 hover:border-neutral-400 transition-colors">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-6 h-6 rounded-full bg-black text-white text-[11px] font-mono font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                    <h4 className="font-bold text-sm text-neutral-900">{item.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pl-8.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DELIVERABLES & CASE STUDY */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* DELIVERABLES BOX */}
            <div className="p-6 rounded-2xl bg-neutral-900 text-white border border-neutral-800 space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <h4 className="text-xs font-mono uppercase tracking-widest font-bold text-emerald-400">
                  Standard Study Deliverables
                </h4>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
                {detail.deliverables.map((d, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CASE STUDY & ANTI-FRAUD BOX */}
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-emerald-800" />
                <h4 className="text-xs font-mono uppercase tracking-widest font-bold text-emerald-900">
                  Proven Enterprise Impact
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                "{detail.caseStudySnippet}"
              </p>

              <div className="pt-2 border-t border-emerald-200/60 text-xs text-neutral-600 space-y-1 font-mono">
                <div className="font-semibold text-emerald-950">Quality &amp; Anti-Fraud Controls:</div>
                <div className="text-[11px] leading-relaxed">{detail.qualityControls}</div>
              </div>
            </div>

          </div>

          {/* FOOTER ACTIONS */}
          <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-neutral-500 font-mono">
              Lead Researcher: <span className="font-bold text-neutral-900">Fahad Ali</span> &bull; Lucknow HQ Operations
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-neutral-300 text-neutral-700 text-xs font-semibold hover:bg-neutral-100 transition-colors"
              >
                Close Details
              </button>
              <button
                onClick={() => {
                  onClose();
                  onConfigureRFP(serviceName);
                }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-lg group"
              >
                <span>Configure Study RFP for this Service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
