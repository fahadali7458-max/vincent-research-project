import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Play, Pause, ShieldCheck, Users, Globe2, Sparkles, Database, Activity, ChevronRight, ChevronLeft } from 'lucide-react';

const CLIPS = [
  {
    id: 'b2b',
    category: 'B2B C-Suite Intelligence',
    badge: '8K UHD HDR • B2B EXECUTIVE REEL',
    title: 'C-Suite Boardroom Consensus & Strategic Quantitative Analytics',
    src: '/videos/reel_b2b_boardroom.mp4',
    poster: '/images/reels/preview_reel_b2b_boardroom.png',
    specs: '7680×4320 8K UHD • Fortune 500 Boardrooms & Fieldwork Tabulation',
    tabLabel: '01 • B2B Enterprise',
    subtext: 'Executive Consensus & Cross-Tabs',
    icon: Users,
    color: 'text-emerald-400',
    activeBg: 'bg-emerald-500'
  },
  {
    id: 'healthcare',
    category: 'Healthcare & Life Sciences',
    badge: '8K UHD HDR • HEALTHCARE HCP REEL',
    title: 'Physicians, Key Opinion Leaders (KOLs) & Clinical Trial Intercepts',
    src: '/videos/reel_healthcare_1.mp4',
    poster: '/images/reels/preview_reel_healthcare_1.png',
    specs: '7680×4320 8K UHD • Oncology Specialists, Double-Blind Audits & HCP Panels',
    tabLabel: '02 • Healthcare HCP',
    subtext: 'Verified Physicians & KOL Audits',
    icon: ShieldCheck,
    color: 'text-cyan-400',
    activeBg: 'bg-cyan-400'
  },
  {
    id: 'b2c',
    category: 'B2C Consumer & Retail Pulse',
    badge: '8K UHD HDR • B2C CONSUMER REEL',
    title: 'Shopper Decision Journeys, Packaging Feasibility & In-Home Testing (IHUT)',
    src: '/videos/reel_b2c_retail.mp4',
    poster: '/images/reels/preview_reel_b2c_retail.png',
    specs: '7680×4320 8K UHD • Discrete Choice Conjoint, Shelf Heatmaps & FMCG',
    tabLabel: '03 • B2C Consumer Pulse',
    subtext: 'Retail Shoppers & Choice Conjoint',
    icon: Activity,
    color: 'text-purple-400',
    activeBg: 'bg-purple-500'
  },
  {
    id: 'telemetry',
    category: 'Global Quantitative Telemetry',
    badge: '8K UHD HDR • 40M+ GLOBAL PANEL',
    title: '40M+ Respondent Telemetry Grid Across 124 Countries & Anti-Fraud Shield',
    src: '/videos/hero_global_network_4k.mp4',
    poster: '/images/reels/preview_hero_global_network_4k.png',
    specs: '7680×4320 8K UHD • Lucknow Global HQ Command Center & Telemetry',
    tabLabel: '04 • Global Telemetry',
    subtext: '124 Countries & Honeypot Shield',
    icon: Globe2,
    color: 'text-amber-400',
    activeBg: 'bg-amber-400'
  }
];

export default function ScrollExpandHero({ onOpenContact, onOpenAbout }) {
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const trackRef = useRef(null);
  const videoRef = useRef(null);
  const inlineVideoRef = useRef(null);

  const activeClip = CLIPS[activeClipIndex];

  // Continuous Velvet-Smooth Lerp Scroll Engine
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafIdRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const spreadDistance = 650;
      const progress = Math.min(Math.max(scrollY / spreadDistance, 0), 1);
      targetProgressRef.current = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 60FPS / 120FPS Velvet-smooth damping loop
    const lerpLoop = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0002) {
        currentProgressRef.current += diff * 0.12; // Effortless fluid damping
        setScrollProgress(currentProgressRef.current);
      } else if (currentProgressRef.current !== targetProgressRef.current) {
        currentProgressRef.current = targetProgressRef.current;
        setScrollProgress(currentProgressRef.current);
      }
      rafIdRef.current = requestAnimationFrame(lerpLoop);
    };

    rafIdRef.current = requestAnimationFrame(lerpLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // Sequential auto-advancing reel (plays each clip one after another)
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setActiveClipIndex((prev) => (prev + 1) % CLIPS.length);
    }, 8500); // 8.5 seconds per clip

    return () => clearTimeout(timer);
  }, [activeClipIndex, isPlaying]);

  // When active clip changes, reload video cleanly
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
    if (inlineVideoRef.current) {
      inlineVideoRef.current.load();
      inlineVideoRef.current.play().catch(() => {});
    }
  }, [activeClipIndex]);

  const handleNextClip = () => {
    setActiveClipIndex((prev) => (prev + 1) % CLIPS.length);
  };

  const handlePrevClip = () => {
    setActiveClipIndex((prev) => (prev - 1 + CLIPS.length) % CLIPS.length);
  };

  const scrollToFeasibility = () => {
    const element = document.getElementById('feasibility-tool');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Interpolated spreading values for continuous motion (Lerp smoothed)
  const currentWidthVw = 75 + (scrollProgress * 25); // 75vw -> 100vw
  const currentRadius = Math.max(Math.round(28 * (1 - scrollProgress * 1.15)), 0); // 28px -> 0px
  const currentScale = 0.93 + (scrollProgress * 0.07); // 0.93 -> 1.0
  const currentBorderOpacity = Math.max(0.22 * (1 - scrollProgress * 1.25), 0); // fades as it touches screen edges
  const currentHeight = Math.round(520 + scrollProgress * 230); // 520px -> 750px

  return (
    <section className="relative pt-12 md:pt-16 pb-16 md:pb-24 overflow-hidden bg-black text-white">
      {/* 1. TOP HEADER & HEADLINE CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP TAG */}
        <div className="flex items-center flex-wrap gap-2.5 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-[#00B4D8]/10 text-[#00B4D8] border border-[#00B4D8]/40 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse"></span>
            SUCCESS THROUGH RESEARCH
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-neutral-900/80 text-neutral-300 border border-white/10">
            GLOBAL MARKET RESEARCH &bull; 40M+ PANEL INTELLIGENCE
          </span>
        </div>

        {/* HEADLINE WITH INLINE VIDEO BADGE */}
        <div className="mb-12 max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-display font-medium tracking-tight leading-[1.08] text-white">
            <span>Precision market research for</span>
            <br />
            <span className="inline-flex items-center flex-wrap gap-x-3 gap-y-2">
              <span>ambitious</span>
              
              {/* Inline 8K video badge - click to switch clips */}
              <span 
                onClick={handleNextClip}
                title="Click to advance Market Research Reel (B2B, Healthcare, B2C, Telemetry)"
                className="inline-flex items-center relative overflow-hidden rounded-full w-24 sm:w-32 md:w-40 h-10 sm:h-14 md:h-16 border-2 border-white/90 align-middle shadow-[0_0_20px_rgba(255,255,255,0.2)] group cursor-pointer hover:scale-105 transition-transform"
              >
                <video 
                  ref={inlineVideoRef}
                  key={activeClip.src + '_inline'}
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  preload="metadata"
                  poster={activeClip.poster}
                  className="w-full h-full object-cover"
                >
                  <source src={activeClip.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/15 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <Play className="w-4 h-4 text-white fill-white opacity-85 group-hover:opacity-100" />
                </div>
              </span>

              <span>global leaders.</span>
            </span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-3xl font-normal leading-relaxed">
            Vincent Research is an institutional global market research firm. Powered by our proprietary 
            <span className="text-white font-semibold"> 40M+ respondent network</span> across 124 countries 
            and the <span className="text-white font-semibold">VeriTrust™ anti-fraud shield</span>, we execute 
            CAWI online surveys, CATI telephone intercepts, in-depth focus groups, and discrete choice conjoint modeling with 99.84% data accuracy.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-all shadow-lg group"
            >
              <span>Submit Research RFP</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={scrollToFeasibility}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-950/40 text-emerald-300 border border-emerald-500/40 text-sm font-semibold hover:bg-emerald-900/50 transition-all shadow-sm"
            >
              <Database className="w-4 h-4 text-emerald-400" />
              <span>Instant Sample Feasibility Check</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. CONTINUOUS SPREADING 8K INSTITUTIONAL VIDEO SHOWCASE */}
      <div 
        ref={trackRef} 
        className="w-full overflow-hidden flex flex-col items-center justify-center pt-2"
      >
        
        {/* INTERACTIVE REEL SELECTOR TABS (B2B, HEALTHCARE, B2C, GLOBAL TELEMETRY) */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
            {CLIPS.map((clip, idx) => {
              const Icon = clip.icon;
              const isActive = idx === activeClipIndex;
              return (
                <button
                  key={clip.id}
                  onClick={() => setActiveClipIndex(idx)}
                  className={`group relative text-left p-3 sm:p-3.5 rounded-xl transition-all duration-300 border overflow-hidden ${
                    isActive
                      ? 'bg-neutral-900/90 border-white/40 shadow-lg'
                      : 'bg-black/60 border-white/10 hover:border-white/20 hover:bg-neutral-950/80'
                  }`}
                >
                  {/* Top Animated Progress Indicator Bar for Active Clip */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
                    {isActive && isPlaying && (
                      <div 
                        className={`h-full ${clip.activeBg} animate-pulse`}
                        style={{ width: '100%' }}
                      />
                    )}
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                      isActive ? 'bg-white/20' : 'bg-white/5 group-hover:bg-white/10'
                    }`}>
                      <Icon className={`w-3.5 h-3.5 ${clip.color}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className={`text-xs font-bold font-mono uppercase tracking-wider truncate ${
                        isActive ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'
                      }`}>
                        {clip.tabLabel}
                      </div>
                      <div className="text-[11px] text-neutral-500 truncate hidden sm:block">
                        {clip.subtext}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* SPREADING VIDEO CONTAINER (Hardware-Accelerated Lerp Expansion) */}
        <div 
          style={{
            width: `${currentWidthVw}vw`,
            borderRadius: `${currentRadius}px`,
            transform: `scale(${currentScale}) translate3d(0, 0, 0)`,
            height: `${currentHeight}px`,
            maxHeight: 'calc(100vh - 100px)',
            borderColor: `rgba(255, 255, 255, ${currentBorderOpacity})`,
            willChange: 'width, border-radius, transform, height, border-color',
          }}
          className="relative overflow-hidden bg-neutral-950 shadow-2xl border"
        >
          
          <video 
            ref={videoRef}
            key={activeClip.src}
            className="w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="metadata"
            poster={activeClip.poster}
          >
            <source src={activeClip.src} type="video/mp4" />
          </video>

          {/* Subtle Vignette & Contrast enhancement for 8K HDR feel */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/85 via-transparent to-black/40" />

          {/* Top Bar: Live Status, Active Clip Category & Play/Pause Controls */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-10 flex flex-wrap items-center justify-between gap-3">
            {/* Left Live Badge */}
            <div className="backdrop-blur-md bg-black/80 text-white border border-white/20 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-2.5 shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-bold text-emerald-400 tracking-wide">LIVE 8K UHD</span>
              <span className="text-white/30 hidden md:inline">|</span>
              <span className="hidden md:inline text-neutral-200 font-sans font-medium">{activeClip.title}</span>
            </div>

            {/* Right Reel Navigation Controls */}
            <div className="backdrop-blur-md bg-black/80 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/20 flex items-center gap-2 shadow-lg">
              <span className="text-[11px] font-mono text-neutral-400 uppercase hidden sm:inline">
                REEL {activeClipIndex + 1}/{CLIPS.length}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrevClip}
                  title="Previous Research Clip"
                  className="p-1 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  title={isPlaying ? "Pause auto-advancing reel" : "Play auto-advancing reel"}
                  className="p-1 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={handleNextClip}
                  title="Next Research Clip"
                  className="p-1 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Floating Telemetry Credentials */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-10 flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl backdrop-blur-md bg-black/80 border border-white/20 text-white text-xs shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <Users className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="font-bold text-sm text-white">40M+ Verified Human Respondents</div>
                <div className="text-[11px] text-neutral-400 font-mono">B2B Executives, Healthcare HCPs, Retail Consumers</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <div className="font-bold text-sm text-white">VeriTrust™ 99.84% Data Accuracy</div>
                <div className="text-[11px] text-neutral-400 font-mono">Honeypot Shield &bull; Zero AI-Bot Infiltration</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                <Globe2 className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <div className="font-bold text-sm text-white">124 Global Territories Covered</div>
                <div className="text-[11px] text-neutral-400 font-mono">Lucknow Global HQ &bull; Fieldwork Telemetry</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-white/15 text-[11px] text-neutral-400 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{activeClip.specs}</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
