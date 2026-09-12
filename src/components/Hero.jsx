import React, { useState } from 'react';
import { ArrowRight, Sparkles, Shield, Database, CheckCircle2, Calculator } from 'lucide-react';
import Hero3DScene, { MARKET_HUBS } from './canvas/Hero3DScene';
import { soundManager } from '../utils/audio';

export default function Hero({ onOpenModal }) {
  const [activeHub, setActiveHub] = useState(MARKET_HUBS[0]);

  const tickerItems = [
    { label: 'GLOBAL VERIFIED PANEL', val: '40,000,000+', up: true },
    { label: 'INTERNATIONAL REACH', val: '70+ COUNTRIES', up: true },
    { label: 'VERITRUST™ FRAUD BLOCK', val: '99.4% ACCURACY', up: true },
    { label: 'PROFILING ATTRIBUTES', val: '400+ PER MEMBER', up: true },
    { label: 'HEALTHCARE HCP ACCESS', val: '500K+ SPECIALISTS', up: true },
    { label: 'B2B DECISION MAKERS', val: 'C-SUITE & MANAGERS', up: true },
    { label: 'STANDARDS ALIGNMENT', val: 'ESOMAR CODE / GDPR', up: true },
    { label: 'SUPPORT SLA', val: '24/7 UNINTERRUPTED', up: true }
  ];

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 z-10 space-y-6 text-center lg:text-left">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase shadow-lg shadow-cyan-500/10 animate-float">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Vincent Research</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-white/90">Success Through Research</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Turn Data Into{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 glow-text-cyan">
                Decisions.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              A next-generation data intelligence firm bridging the gap between global brands and high-quality consumer insights — powered by AI-backed verification and human expertise.
            </p>

            {/* Active Hub Telemetry Card */}
            <div className="glass-panel p-4 rounded-2xl border border-cyan-500/20 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                  REGION FOCUS: <strong className="text-white">{activeHub.name}</strong>
                </span>
                <span className="text-emerald-400 font-semibold">{activeHub.status}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono pt-2 border-t border-white/5">
                <div>
                  <div className="text-[10px] text-slate-400">VERIFIED RESPONDENTS</div>
                  <div className="text-cyan-300 font-bold text-sm">{activeHub.respondents}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">DATA ACCURACY</div>
                  <div className="text-purple-300 font-bold text-sm">{activeHub.accuracy}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">DELIVERY SPEED</div>
                  <div className="text-emerald-300 font-bold text-sm">{activeHub.speed}</div>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => {
                  soundManager.playClick();
                  onOpenModal();
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm font-mono tracking-wider uppercase transition-all shadow-xl shadow-cyan-400/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Request Project RFP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#calculator"
                onClick={() => soundManager.playHover()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-cyan-300 hover:border-cyan-400/40 font-mono text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span>Panel Feasibility</span>
              </a>
            </div>

            {/* Trust Metrics Bar (Real Vincent Research numbers) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">40M+</div>
                <div className="text-xs text-slate-400 font-mono uppercase">Verified Respondents</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 tracking-tight">70+</div>
                <div className="text-xs text-slate-400 font-mono uppercase">Countries Covered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-400 tracking-tight">99%</div>
                <div className="text-xs text-slate-400 font-mono uppercase">Data Accuracy Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Holographic Globe */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <Hero3DScene
              onSelectHub={(hub) => setActiveHub(hub)}
              selectedHubId={activeHub.id}
            />
          </div>
        </div>
      </div>

      {/* Real-time Streaming Ticker */}
      <div className="mt-16 w-full bg-slate-950/80 border-y border-cyan-500/20 py-2.5 overflow-hidden backdrop-blur-md">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-2 mx-6 text-xs font-mono">
              <span className="text-slate-400">{item.label}:</span>
              <span className="font-bold text-emerald-400 flex items-center gap-0.5">
                {item.val} ▲
              </span>
              <span className="text-slate-700 ml-4">///</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
