import React, { useState } from 'react';
import { ShieldCheck, Cpu, Fingerprint, SearchCheck, CheckCircle2, Lock, FileCheck, Award } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function VeriTrustSection() {
  const [activeLayer, setActiveLayer] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'AI Anomaly Detection',
      tag: 'Real-Time Perimeter Defense',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-500',
      textColor: 'text-cyan-400',
      description: 'Bot behavior, automated script attacks, and synthetic IP proxies are eliminated in real time. Every incoming connection is vetted against global bogus-server registries and device telemetry clusters.',
      metrics: [
        { label: 'Bot Rejection', val: '99.8%' },
        { label: 'VPN / Proxy Trap', val: 'Zero Leakage' }
      ]
    },
    {
      step: '02',
      title: 'The Mirror Gateway™',
      tag: 'Cross-Panel De-Duplication',
      icon: Fingerprint,
      color: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-400',
      description: 'Digital machine fingerprinting ensures uniqueness across our 40M+ respondent network. Prevents the same individual from answering duplicate surveys, even across third-party exchanges or re-fielding waves.',
      metrics: [
        { label: 'Duplicate Block', val: '100% Unique' },
        { label: 'Fingerprint Vectors', val: '64 Telemetry Points' }
      ]
    },
    {
      step: '03',
      title: 'Linguistic & Speed Monitor',
      tag: 'Human Nuance & Semantic Scrubbing',
      icon: SearchCheck,
      color: 'from-emerald-500 to-teal-500',
      textColor: 'text-emerald-400',
      description: 'Open-ended responses are parsed through semantic natural language models to detect gibberish, copy-paste LLM responses, and straight-lining. Real-time speed gates eliminate click-farmers.',
      metrics: [
        { label: 'Speedgate Trap', val: 'Median LOI Enforced' },
        { label: 'Semantic Cleanse', val: '32+ Languages' }
      ]
    }
  ];

  const standards = [
    { name: 'GDPR / UK GDPR Compliant', desc: 'Sovereign EU & UK data sovereignty protocols' },
    { name: 'ISO 20252 Aligned', desc: 'Global market & opinion research benchmark' },
    { name: 'ESOMAR International Code', desc: 'Voluntary gold standard for ethical research' },
    { name: 'India DPDP Act Ready', desc: 'Strict data principal rights & consent handling' },
    { name: 'Triple Opt-In Verification', desc: 'Email, SMS & device authentication' },
    { name: 'WCAG 2.1 Accessible', desc: '90%+ inclusive survey design compliance' }
  ];

  return (
    <section id="veritrust" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VeriTrust™ Quality Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The 3-Step Zero-Fraud Standard
          </h2>
          <p className="text-slate-400 text-base font-light">
            Every response delivered by Vincent Research passes through our proprietary three-layer quality architecture — eliminating bots, duplicates, and synthetic responses before reporting.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                onMouseEnter={() => {
                  soundManager.playHover();
                  setActiveLayer(i);
                }}
                className={`glass-panel p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 ${
                  activeLayer === i
                    ? 'border-cyan-400 shadow-xl shadow-cyan-500/15 bg-slate-900/80'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 uppercase">
                      LAYER // {s.step}
                    </span>
                  </div>

                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-widest ${s.textColor}`}>
                      {s.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {s.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {s.metrics.map((m, idx) => (
                      <div key={idx} className="bg-slate-950/60 p-2.5 rounded-lg border border-white/5 font-mono">
                        <div className="text-[9px] text-slate-400 uppercase">{m.label}</div>
                        <div className="text-xs font-bold text-emerald-400 mt-0.5">{m.val}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verified Clean Signal Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Compliance Badges Grid */}
        <div className="mt-16 glass-panel p-8 rounded-2xl border border-cyan-500/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                Global Regulatory Framework
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Ethics, Compliance & Data Sovereignty
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400">
              ESOMAR International Code Aligned
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
            {standards.map((st, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
                <FileCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">{st.name}</div>
                  <div className="text-slate-400 text-[11px] mt-0.5 font-sans font-light">{st.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
