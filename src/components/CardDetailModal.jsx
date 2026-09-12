import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, CheckCircle2, Phone, Play, Pause, Volume2, Globe, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function CardDetailModal({ card, onClose, onOpenContact }) {
  const [isPlaying, setIsPlaying] = useState(true);

  if (!card) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn select-none">
      <div className="relative w-full max-w-3xl glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-400/40 shadow-2xl shadow-cyan-500/20 bg-slate-950/95 overflow-hidden font-mono max-h-[90vh] overflow-y-auto">
        {/* Glow */}
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-25"
          style={{ background: card.accent }}
        />

        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400 transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest" style={{ color: card.accent }}>
              <span>{card.tag}</span>
              <span>•</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-bold">{card.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-sans">
              {card.title}
            </h2>
            <p className="text-xs text-slate-400 mt-1 font-sans">
              {card.subtitle}
            </p>
          </div>

          {/* Cinematic Animated Video Player Mockup */}
          <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-white/15 bg-slate-950 flex flex-col justify-between p-4 shadow-inner">
            {/* Background Cyber Grid */}
            <div className="absolute inset-0 opacity-20 cyber-grid" />

            {/* Top Video HUD Bar */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                4K UHD FEED // {card.videoLabel}
              </span>
              <span className="text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-white/10">
                LIVE TELEMETRY
              </span>
            </div>

            {/* Center Animated Visual Display */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-2">
              <button
                onClick={() => {
                  soundManager.playClick();
                  setIsPlaying(!isPlaying);
                }}
                className="w-14 h-14 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400 text-cyan-300 flex items-center justify-center transition-all shadow-lg shadow-cyan-500/30 hover:scale-105"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 translate-x-0.5" />}
              </button>
              <div className="text-xs text-slate-300 font-sans tracking-wide">
                Vincent Research Strategic Dossier • Case Analysis Reel
              </div>
            </div>

            {/* Bottom Timeline Bar */}
            <div className="relative z-10 space-y-1.5">
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"
                  style={{ width: '68%' }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>01:48 / 02:30</span>
                <span className="text-cyan-400">VERIFIED RESEARCH STREAM</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
            {card.description}
          </p>

          {/* Metrics 4-grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {card.metrics.map((m, i) => (
              <div key={i} className="bg-slate-900/80 p-3 rounded-xl border border-white/10 text-center">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">{m.label}</div>
                <div className="text-lg font-extrabold mt-0.5" style={{ color: card.accent }}>
                  {m.val}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Points */}
          <div className="space-y-2.5 bg-slate-900/40 p-4 rounded-xl border border-white/5 font-sans text-xs">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              Strategic Specifications & Compliance
            </div>
            {card.details.map((d, i) => (
              <div key={i} className="flex items-start gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{d}</span>
              </div>
            ))}
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <button
              onClick={() => {
                soundManager.playClick();
                onClose();
                onOpenContact();
              }}
              className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-lg shadow-cyan-500/20"
            >
              <span>Submit Project RFP</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/917458098299"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playHover()}
              className="py-3.5 px-4 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/40 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-center"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: +91 7458098299</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
