import React, { useState } from 'react';
import { Globe, Volume2, VolumeX, Menu, X, ArrowUpRight, Shield, Phone } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function Navbar({ onOpenModal }) {
  const [isMuted, setIsMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleAudio = () => {
    const state = soundManager.toggle();
    setIsMuted(!state);
    if (state) {
      soundManager.playClick();
    }
  };

  const handleNavClick = () => {
    soundManager.playHover();
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-[#030712]/80 border-b border-cyan-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={handleNavClick}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/30 to-purple-600/30 border border-cyan-400/40 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-all">
            <Globe className="w-5 h-5 text-cyan-300 group-hover:rotate-45 transition-transform duration-500" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-lg font-extrabold tracking-wider text-white">
                VINCENT<span className="text-cyan-400">RESEARCH</span>
              </span>
            </div>
            <p className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">
              Success Through Research
            </p>
          </div>
        </a>

        {/* Global Hub Badge (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/70 border border-cyan-500/25 text-xs font-mono text-slate-300">
          <Shield className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>VERITRUST™:</span>
          <span className="text-cyan-400 font-semibold">40M+ PANEL</span>
          <span className="text-slate-500">|</span>
          <span className="text-emerald-400">70+ COUNTRIES</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider">
          <a
            href="#services"
            onClick={handleNavClick}
            className="text-slate-300 hover:text-cyan-300 transition-colors"
          >
            // 01. SERVICES
          </a>
          <a
            href="#veritrust"
            onClick={handleNavClick}
            className="text-slate-300 hover:text-cyan-300 transition-colors"
          >
            // 02. VERITRUST™
          </a>
          <a
            href="#industries"
            onClick={handleNavClick}
            className="text-slate-300 hover:text-cyan-300 transition-colors"
          >
            // 03. INDUSTRIES
          </a>
          <a
            href="#calculator"
            onClick={handleNavClick}
            className="text-slate-300 hover:text-cyan-300 transition-colors"
          >
            // 04. PANEL CALCULATOR
          </a>
          <a
            href="#testimonials"
            onClick={handleNavClick}
            className="text-slate-300 hover:text-cyan-300 transition-colors"
          >
            // 05. TESTIMONIALS
          </a>
        </nav>

        {/* Right CTA & Sound Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Direct WhatsApp Call */}
          <a
            href="https://wa.me/917458098299"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playHover()}
            className="p-2.5 rounded-xl border border-white/10 hover:border-emerald-400/40 bg-slate-900/60 text-slate-300 hover:text-emerald-300 transition-all text-xs flex items-center gap-1.5 font-mono"
            title="Chat on WhatsApp (+91 7458098299)"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden xl:inline">+91 7458098299</span>
          </a>

          {/* Audio FX Toggle */}
          <button
            onClick={toggleAudio}
            className="p-2.5 rounded-xl border border-white/10 hover:border-cyan-400/40 bg-slate-900/60 text-slate-300 hover:text-cyan-300 transition-all text-xs flex items-center justify-center"
            title={isMuted ? 'Unmute 3D Sound' : 'Mute 3D Sound'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
          </button>

          {/* RFP Action Button */}
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenModal();
            }}
            className="relative group px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-semibold text-xs font-mono tracking-wider uppercase transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
          >
            <span>Request RFP</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleAudio}
            className="p-2 rounded-lg bg-slate-900/60 border border-white/10 text-slate-300"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900/60 border border-cyan-500/30 text-cyan-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-cyan-500/20 px-6 py-6 flex flex-col gap-4 font-mono text-sm bg-slate-950/95 backdrop-blur-2xl">
          <a
            href="#services"
            onClick={handleNavClick}
            className="py-2 text-slate-200 hover:text-cyan-400 border-b border-white/5"
          >
            // 01. SERVICES
          </a>
          <a
            href="#veritrust"
            onClick={handleNavClick}
            className="py-2 text-slate-200 hover:text-cyan-400 border-b border-white/5"
          >
            // 02. VERITRUST™ QUALITY
          </a>
          <a
            href="#industries"
            onClick={handleNavClick}
            className="py-2 text-slate-200 hover:text-cyan-400 border-b border-white/5"
          >
            // 03. INDUSTRIES SERVED
          </a>
          <a
            href="#calculator"
            onClick={handleNavClick}
            className="py-2 text-slate-200 hover:text-cyan-400 border-b border-white/5"
          >
            // 04. PANEL CALCULATOR
          </a>
          <a
            href="#testimonials"
            onClick={handleNavClick}
            className="py-2 text-slate-200 hover:text-cyan-400 border-b border-white/5"
          >
            // 05. TESTIMONIALS
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://wa.me/917458098299"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 text-center rounded-xl bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs font-mono"
            >
              WhatsApp: +91 7458098299
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold uppercase tracking-wider text-xs"
            >
              Request Custom RFP
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
