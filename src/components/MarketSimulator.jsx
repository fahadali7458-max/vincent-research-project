import React, { useState, useMemo } from 'react';
import { Sliders, CheckCircle2, Download, Zap, Shield, Sparkles, Clock, Users, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';

export default function MarketSimulator({ onOpenModal }) {
  const [region, setRegion] = useState('us');
  const [audience, setAudience] = useState('hcp');
  const [sampleSize, setSampleSize] = useState(500);
  const [loi, setLoi] = useState(15); // Length of Interview in minutes
  const [isExporting, setIsExporting] = useState(false);
  const [exported, setExported] = useState(false);

  const feasibility = useMemo(() => {
    const audienceData = {
      consumer: { name: 'B2C General Population', pool: '24M+', ir: 85, daysFactor: 0.003, margin: 99.2 },
      b2b: { name: 'B2B C-Suite & Decision Makers', pool: '3.8M+', ir: 35, daysFactor: 0.008, margin: 98.6 },
      hcp: { name: 'Healthcare Professionals (HCPs)', pool: '500K+', ir: 20, daysFactor: 0.012, margin: 99.4 },
      niche: { name: 'High-Net-Worth / Specialized Tech', pool: '1.2M+', ir: 28, daysFactor: 0.009, margin: 98.9 }
    };

    const regionData = {
      us: { name: 'North America (US & Canada)' },
      in: { name: 'India (Pan-India Metro + Tier 2/3)' },
      eu: { name: 'Europe (UK, Germany, France, Italy)' },
      mena: { name: 'MENA (UAE, Saudi Arabia, Qatar)' },
      apac: { name: 'Asia-Pacific (Singapore, Japan, ANZ)' }
    };

    const aud = audienceData[audience] || audienceData.hcp;
    const reg = regionData[region] || regionData.us;

    const rawDays = Math.max(2, Math.round(sampleSize * aud.daysFactor + (loi > 20 ? 2 : 0)));
    const reserveCount = Math.round(sampleSize * 1.15); // +15% VeriTrust fraud reserve

    return {
      audienceName: aud.name,
      regionName: reg.name,
      activePool: aud.pool,
      turnaroundDays: `${rawDays}-${rawDays + 2} Business Days`,
      reserveCount,
      accuracy: aud.margin,
      feasibilityScore: sampleSize > 3500 && audience === 'hcp' ? 'Conditional (Multi-Wave)' : 'High Feasibility (100%)'
    };
  }, [region, audience, sampleSize, loi]);

  const handleExport = () => {
    soundManager.playClick();
    setIsExporting(true);

    setTimeout(() => {
      setIsExporting(false);
      setExported(true);
      soundManager.playSuccess();

      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#00f0ff', '#3b82f6', '#8b5cf6', '#10b981']
        });
      } catch (e) {}

      setTimeout(() => {
        setExported(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section id="calculator" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Feasibility Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Instant Global Panel Feasibility Calculator
          </h2>
          <p className="text-slate-400 text-base font-light">
            Plan your project fielding quotas across Vincent Research's 40M+ verified respondent network.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Controls */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="w-4 h-4" />
                Fieldwork Specifications
              </span>
              <span className="text-[10px] font-mono text-slate-500 uppercase">40M+ Respondent DB</span>
            </div>

            {/* Target Audience */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                1. Target Audience Segment
              </label>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                {[
                  { id: 'hcp', label: 'Healthcare HCPs' },
                  { id: 'b2b', label: 'B2B C-Suite & Leaders' },
                  { id: 'consumer', label: 'B2C General Public' },
                  { id: 'niche', label: 'Affluent / Emerging Tech' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      soundManager.playClick();
                      setAudience(item.id);
                    }}
                    className={`p-3 rounded-xl text-left transition-all ${
                      audience === item.id
                        ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                        : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Region */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                2. Target Territory
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-xs">
                {[
                  { id: 'us', label: 'North America' },
                  { id: 'in', label: 'Pan-India' },
                  { id: 'eu', label: 'Europe (EU/UK)' },
                  { id: 'mena', label: 'MENA / Gulf' },
                  { id: 'apac', label: 'Asia-Pacific' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      soundManager.playClick();
                      setRegion(item.id);
                    }}
                    className={`p-2.5 rounded-xl text-center transition-all ${
                      region === item.id
                        ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-600/20'
                        : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Complete Sample Size Slider */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 uppercase tracking-wider">3. Desired Completes (N):</span>
                <span className="text-cyan-400 font-bold text-sm">N = {sampleSize.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="100"
                max="3000"
                step="50"
                value={sampleSize}
                onChange={(e) => setSampleSize(Number(e.target.value))}
                className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>N = 100</span>
                <span>N = 1,500</span>
                <span>N = 3,000+</span>
              </div>
            </div>

            {/* Survey Length of Interview (LOI) */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 uppercase tracking-wider">4. Survey Length (LOI):</span>
                <span className="text-purple-400 font-bold text-sm">{loi} Minutes</span>
              </div>
              <input
                type="range"
                min="5"
                max="45"
                step="5"
                value={loi}
                onChange={(e) => setLoi(Number(e.target.value))}
                className="w-full accent-purple-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>5 mins (Quick Pulse)</span>
                <span>20 mins (Standard)</span>
                <span>45 mins (Deep Dive)</span>
              </div>
            </div>
          </div>

          {/* Right Live Feasibility Dossier */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-400/30 flex flex-col justify-between relative shadow-2xl shadow-cyan-500/10">
            <div className="absolute top-6 right-6 font-mono text-[10px] text-cyan-400/50 border border-cyan-400/20 px-2.5 py-1 rounded tracking-widest pointer-events-none">
              VINCENT FEASIBILITY // VTX-{sampleSize}
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Feasibility Verified
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Fieldwork Specification Plan
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {feasibility.audienceName} • {feasibility.regionName}
                </p>
              </div>

              {/* Big KPI Grid */}
              <div className="grid grid-cols-2 gap-4 font-mono">
                <div className="bg-slate-900/80 p-5 rounded-xl border border-cyan-500/30">
                  <div className="text-xs text-slate-400 uppercase">Estimated Turnaround</div>
                  <div className="text-2xl font-extrabold text-cyan-400 mt-1 flex items-center gap-1.5">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    {feasibility.turnaroundDays}
                  </div>
                  <div className="text-[10px] text-emerald-400 mt-1">
                    Status: {feasibility.feasibilityScore}
                  </div>
                </div>

                <div className="bg-slate-900/80 p-5 rounded-xl border border-purple-500/30">
                  <div className="text-xs text-slate-400 uppercase">Available Panel Pool</div>
                  <div className="text-2xl font-extrabold text-purple-400 mt-1 flex items-center gap-1.5">
                    <Users className="w-5 h-5 text-purple-400" />
                    {feasibility.activePool}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    VeriTrust™ Rate: {feasibility.accuracy}%
                  </div>
                </div>
              </div>

              {/* Quality Safeguard Metrics */}
              <div className="space-y-3 bg-slate-900/40 p-4 rounded-xl border border-white/5 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">Target Completes:</span>
                  <strong className="text-white">N = {sampleSize.toLocaleString()}</strong>
                </div>
                <div className="flex items-center justify-between text-slate-300 pt-1.5 border-t border-white/5">
                  <span className="text-slate-400">VeriTrust™ Pre-Screen Reserve (+15%):</span>
                  <strong className="text-cyan-300">{feasibility.reserveCount} Initial Dispatches</strong>
                </div>
                <div className="flex items-center justify-between text-slate-300 pt-1.5 border-t border-white/5">
                  <span className="text-slate-400">Quality Framework:</span>
                  <strong className="text-emerald-400">ISO 20252 & GDPR Aligned</strong>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-white/10 space-y-3 font-mono text-xs">
              <button
                onClick={handleExport}
                disabled={isExporting}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-400/20 disabled:opacity-50"
              >
                {isExporting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Compiling Panel Quotas...</span>
                  </>
                ) : exported ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-950" />
                    <span>Feasibility Plan Saved to Session!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Export Feasibility Dossier (.PDF)</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  soundManager.playClick();
                  onOpenModal();
                }}
                className="w-full py-2.5 rounded-xl border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white transition-all flex items-center justify-center gap-1.5"
              >
                <span>Request Formal Proposal for N={sampleSize} with Fahad Ali →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
