import React, { useState } from 'react';
import { Layers, Users, Globe2, BarChart2, Compass, Activity, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { soundManager } from '../utils/audio';

function TiltCard({ service, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.22
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  const Icon = service.icon;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => soundManager.playHover()}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out'
      }}
      className="relative rounded-2xl glass-panel p-7 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group overflow-hidden flex flex-col justify-between"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(0,240,255,${glare.opacity}) 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all">
            <Icon className="w-6 h-6" />
          </div>
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
            SERVICE // 0{index + 1}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {service.title}
          </h3>
          <p className="text-xs font-mono text-cyan-400/80 mt-0.5">
            {service.subtitle}
          </p>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed font-light">
          {service.description}
        </p>

        <div className="grid grid-cols-2 gap-2 pt-2">
          {service.stats.map((st, i) => (
            <div key={i} className="bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
              <div className="text-[9px] font-mono text-slate-400 uppercase">{st.label}</div>
              <div className="text-sm font-mono font-bold text-white mt-0.5">{st.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyan-300 transition-colors">
        <span>Explore Methodology</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      icon: Layers,
      title: 'Multi-Dimensional Research',
      subtitle: 'Quantitative & Qualitative Fusion',
      description: 'End-to-end quant modeling paired with in-depth qualitative exploration to deliver a 360° view of market dynamics, brand health, and pricing elasticity.',
      stats: [
        { label: 'Methodologies', value: 'CAWI / CATI / IDIs' },
        { label: 'Sample Precision', value: '99% Clean Rate' }
      ]
    },
    {
      icon: Users,
      title: 'Strategic Panel Management',
      subtitle: 'Pre-Vetted B2B, B2C & Healthcare',
      description: 'Proprietary panel network of 40M+ deeply profiled members across 400+ attributes, including C-suite leaders and verified Healthcare Professionals (HCPs).',
      stats: [
        { label: 'Profiling Depth', value: '400+ Attributes' },
        { label: 'Global Panel Size', value: '40M+ Respondents' }
      ]
    },
    {
      icon: Globe2,
      title: 'Global Data Collection',
      subtitle: '70+ Countries Synchronized',
      description: 'Multi-channel fielding with local cultural nuance and 24/7 round-the-clock research monitoring to ensure aggressive turnaround targets without quality loss.',
      stats: [
        { label: 'Territories', value: '70+ Countries' },
        { label: 'Fielding Support', value: '24/7 Monitoring' }
      ]
    },
    {
      icon: BarChart2,
      title: 'Advanced Analytics & Forecasting',
      subtitle: 'Predictive Statistical Modeling',
      description: 'Converting raw multi-source responses into decision-ready strategic forecasts, cluster segmentations, and driver analyses for enterprise leadership.',
      stats: [
        { label: 'Analytics Modules', value: 'Conjoint / MaxDiff' },
        { label: 'Standard', value: 'ISO 20252 Aligned' }
      ]
    },
    {
      icon: Compass,
      title: 'Strategic Consulting',
      subtitle: 'Actionable Market Roadmaps',
      description: 'Bespoke strategic consulting aligning research findings to product launches, geographic expansions, and go-to-market execution.',
      stats: [
        { label: 'Advisory Deliverable', value: 'Executive Dossier' },
        { label: 'Focus', value: 'TAM / Feasibility' }
      ]
    },
    {
      icon: Activity,
      title: 'CX & Trend Forensics',
      subtitle: 'Real-Time Sentiment Monitoring',
      description: 'Deep customer experience analytics tracking brand sentiment, Net Promoter Scores (NPS), and algorithmic consumer preference shifts.',
      stats: [
        { label: 'Tracking Frequency', value: 'Continuous Pulse' },
        { label: 'Data Cleaning', value: 'Triple Opt-In' }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Sophisticated Expertise, Sharpened by Experience
          </h2>
          <p className="text-slate-400 text-base font-light">
            We provide full-lifecycle market intelligence spanning qualitative immersion, global quantitative panels, and AI-accelerated synthesis.
          </p>
        </div>

        {/* 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <TiltCard key={idx} service={s} index={idx} />
          ))}
        </div>

        {/* Our 3-Step Process */}
        <div className="mt-16 glass-panel p-8 rounded-2xl border border-white/10">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Our Battle-Tested Execution</span>
            <h3 className="text-2xl font-bold text-white mt-1">The 3-Step Research Process</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="bg-slate-900/60 p-5 rounded-xl border border-white/5 space-y-2">
              <div className="text-cyan-400 font-bold text-sm">// 01. DEFINE & DESIGN</div>
              <p className="text-slate-300 font-sans text-sm font-light">
                Bespoke research frameworks aligned with your strategic objectives, audience quotas, and cross-border specifications.
              </p>
            </div>
            <div className="bg-slate-900/60 p-5 rounded-xl border border-white/5 space-y-2">
              <div className="text-purple-400 font-bold text-sm">// 02. EXECUTE & COLLECT</div>
              <p className="text-slate-300 font-sans text-sm font-light">
                Verified global panels deploy with live VeriTrust™ fraud prevention, real-time quota telemetry, and bot screening.
              </p>
            </div>
            <div className="bg-slate-900/60 p-5 rounded-xl border border-white/5 space-y-2">
              <div className="text-emerald-400 font-bold text-sm">// 03. ANALYZE & DELIVER</div>
              <p className="text-slate-300 font-sans text-sm font-light">
                Raw responses scrubbed and translated into executive dashboards, strategic roadmaps, and decision-ready intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
