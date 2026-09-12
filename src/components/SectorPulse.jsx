import React, { useState } from 'react';
import { HeartPulse, Cpu, ShoppingCart, Landmark, Car, Radio, Zap, GraduationCap, BarChart3, AlertTriangle } from 'lucide-react';
import SectorWave3D from './canvas/SectorWave3D';
import { soundManager } from '../utils/audio';

const INDUSTRIES = {
  health: {
    id: 'health',
    waveKey: 'ai',
    name: 'Healthcare, Pharma & Medical Devices',
    shortName: 'Healthcare & HCPs',
    icon: HeartPulse,
    growth: '+142.6%',
    panel: '500,000+ Verified HCPs',
    coverage: 'KOLs, Surgeons, Patients, Hospital Admins',
    turnaround: 'Rapid 48h Recruitment',
    signals: [
      { name: 'Physician Treatment Protocol Shift', val: 94, change: '+48%' },
      { name: 'Medical Device Procurement Cycle', val: 86, change: '+31%' },
      { name: 'Patient Adherence & Digital Therapeutics', val: 78, change: '+62%' }
    ],
    summary: 'Direct access to pre-profiled Healthcare Professionals (HCPs) across North America, Europe, India, and APAC. Double-blind verification ensures high compliance with pharma regulations.'
  },
  tech: {
    id: 'tech',
    waveKey: 'ai',
    name: 'Technology, Enterprise Cloud & SaaS',
    shortName: 'Tech & SaaS',
    icon: Cpu,
    growth: '+88.4%',
    panel: '1.2M+ IT Decision Makers',
    coverage: 'CIOs, CTOs, Cloud Architects, Developers',
    turnaround: '< 24h Deployment',
    signals: [
      { name: 'Enterprise AI Stack Spend Allocation', val: 91, change: '+55%' },
      { name: 'Legacy Software Migration Resistance', val: 68, change: '-14%' },
      { name: 'Cybersecurity Architecture Priority', val: 89, change: '+42%' }
    ],
    summary: 'C-suite and senior technology leaders surveyed on procurement budgets, software churn, developer mindshare, and vendor consolidation.'
  },
  retail: {
    id: 'retail',
    waveKey: 'consumer',
    name: 'Consumer Goods, FMCG & Retail',
    shortName: 'Consumer & Retail',
    icon: ShoppingCart,
    growth: '+42.1%',
    panel: '24M+ Consumer Profiles',
    coverage: 'Shoppers, Gen-Z, Loyalty Members, D2C Buyers',
    turnaround: 'High-Volume Fieldwork',
    signals: [
      { name: 'Micro-Trend Ephemeral Shelf-Life', val: 95, change: '+70%' },
      { name: 'Price Sensitivity & Inflation Resilience', val: 82, change: '+24%' },
      { name: 'Omnichannel Digital Checkout Preference', val: 88, change: '+38%' }
    ],
    summary: 'Continuous tracking across 400+ consumer attributes including brand loyalty drift, packaging perceptions, pantry checks, and social commerce conversion triggers.'
  },
  finance: {
    id: 'finance',
    waveKey: 'fintech',
    name: 'Finance, Banking & Fintech',
    shortName: 'Finance & Banking',
    icon: Landmark,
    growth: '+65.8%',
    panel: '3.4M+ Financial Consumers',
    coverage: 'HNWIs, Retail Investors, CFOs, Treasury Heads',
    turnaround: 'Encrypted Routing',
    signals: [
      { name: 'Cross-Border Instant Settlement Adoption', val: 87, change: '+46%' },
      { name: 'Retail Wealth Management Migration', val: 80, change: '+33%' },
      { name: 'Credit Risk Model Digital Acceptance', val: 93, change: '+51%' }
    ],
    summary: 'Deep quantitative segmentation into affluent investors, commercial banking executives, and cross-border payment frictions.'
  },
  auto: {
    id: 'auto',
    waveKey: 'energy',
    name: 'Automotive, EVs & Future Mobility',
    shortName: 'Automotive & EVs',
    icon: Car,
    growth: '+79.3%',
    panel: '2.1M+ Vehicle Owners',
    coverage: 'EV Buyers, Fleet Managers, Dealership Owners',
    turnaround: 'Regional Quotas',
    signals: [
      { name: 'EV Charging Infrastructure Perception', val: 92, change: '+58%' },
      { name: 'Autonomous Driving Trust Index', val: 64, change: '+19%' },
      { name: 'Connected Car Subscription Willingness', val: 75, change: '+35%' }
    ],
    summary: 'In-depth clinics, car-purchaser journeys, and battery range anxiety sentiment tracking across top global automotive markets.'
  }
};

export default function SectorPulse() {
  const [activeSector, setActiveSector] = useState('health');
  const sector = INDUSTRIES[activeSector];

  const handleSectorChange = (key) => {
    soundManager.playClick();
    setActiveSector(key);
  };

  return (
    <section id="industries" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <span>Built for Complex Markets</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Sectors We Serve
          </h2>
          <p className="text-slate-400 text-base font-light">
            Specialized recruitment, pre-profiled panels, and domain-expert methodologies across 32+ global industry verticals.
          </p>
        </div>

        {/* Industry Switcher Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {Object.values(INDUSTRIES).map((s) => {
            const Icon = s.icon;
            const isSelected = activeSector === s.id;
            return (
              <button
                key={s.id}
                onClick={() => handleSectorChange(s.id)}
                className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left group ${
                  isSelected
                    ? 'bg-slate-900/90 border-cyan-400 shadow-lg shadow-cyan-500/15'
                    : 'bg-slate-950/40 border-white/5 hover:border-white/20 hover:bg-slate-900/50'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                    isSelected ? 'bg-cyan-500 text-black' : 'bg-slate-800/80 text-slate-300 group-hover:text-cyan-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Sector</div>
                  <div className={`text-xs font-semibold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {s.shortName}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* 3D Wave & Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 3D Dynamic Frequency Mesh */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[420px]">
            <SectorWave3D sectorKey={sector.waveKey} />
          </div>

          {/* Right Detailed Panel */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">Domain Intelligence</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{sector.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Fielding Velocity</span>
                  <div className="text-xl font-mono font-bold text-emerald-400">{sector.growth}</div>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {sector.summary}
              </p>

              {/* Verified Audience Breadth */}
              <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  <div className="text-[9px] text-slate-400 uppercase">Verified Panel Reach</div>
                  <div className="text-sm font-bold text-cyan-300 mt-0.5">{sector.panel}</div>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5">
                  <div className="text-[9px] text-slate-400 uppercase">Turnaround SLA</div>
                  <div className="text-sm font-bold text-purple-300 mt-0.5">{sector.turnaround}</div>
                </div>
              </div>

              {/* Key Tracking Signals */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                  Key Research Metrics Tracked
                </div>
                {sector.signals.map((sig, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300 text-[11px]">{sig.name}</span>
                      <span className="text-cyan-400 font-bold">{sig.change}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-700"
                        style={{ width: `${sig.val}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Coverage: <strong className="text-slate-200">{sector.coverage}</strong></span>
              <a href="#calculator" className="text-cyan-400 font-semibold hover:underline flex items-center gap-1">
                Check Feasibility →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
