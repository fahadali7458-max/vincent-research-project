import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowRight, Sparkles, X, Phone, Globe, Shield, Play, Pause } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { CARDS_DATA } from '../data/cardsData';

export default function InteractiveHUD({
  currentIndex,
  onNavigate,
  onOpenCard,
  onOpenContact
}) {
  const [isMuted, setIsMuted] = useState(false);
  const [askQuery, setAskQuery] = useState('');
  const [aiResponse, setAiResponse] = useState(null);
  const [isThinking, setIsThinking] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);

  // Autoplay carousel loop with relaxed interval
  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      onNavigate((currentIndex + 1) % CARDS_DATA.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isAutoplay, currentIndex, onNavigate]);

  const toggleSound = () => {
    const s = soundManager.toggle();
    setIsMuted(!s);
    if (s) {
      soundManager.playClick();
      soundManager.startAmbient();
    } else {
      soundManager.stopAmbient();
    }
  };

  const navMenuItems = [
    { label: 'HEALTHCARE & HCPS', targetIdx: 1 },
    { label: 'VERITRUST™ FRAUD SHIELD', targetIdx: 2 },
    { label: 'CONSUMER & FMCG DRIFT', targetIdx: 3 },
    { label: 'B2B DECISION MAKERS', targetIdx: 4 },
    { label: '70+ GLOBAL REACH', targetIdx: 5 },
    { label: 'CONTACT FAHAD ALI', targetIdx: 7 }
  ];

  const quickPills = [
    '500K+ HCPs',
    'VeriTrust™ Quality',
    'Fahad Ali Contact',
    '70+ Countries'
  ];

  const runQuery = (rawQuery) => {
    if (!rawQuery.trim()) return;
    soundManager.playClick();
    setIsThinking(true);

    const q = rawQuery.toLowerCase();
    setTimeout(() => {
      setIsThinking(false);
      soundManager.playSuccess();

      if (q.includes('hcp') || q.includes('doctor') || q.includes('medical') || q.includes('health')) {
        setAiResponse({
          title: 'Healthcare HCP Reach',
          answer: 'Vincent Research maintains a pre-profiled network of 500,000+ verified Healthcare Professionals (HCPs) across 65+ medical specialties, including Oncologists, Cardiologists, Surgeons, and Hospital Procurement leaders with double-blind compliance.'
        });
      } else if (q.includes('fraud') || q.includes('veritrust') || q.includes('quality') || q.includes('bot')) {
        setAiResponse({
          title: 'VeriTrust™ Quality Logic',
          answer: 'Our proprietary 3-layer architecture features: 1) AI Anomaly Detection eliminating bots/proxies; 2) The Mirror Gateway™ cross-panel digital fingerprinting; 3) Linguistic NLP scrubbing. Clean response rate is 99.4%.'
        });
      } else if (q.includes('contact') || q.includes('fahad') || q.includes('phone') || q.includes('whatsapp') || q.includes('email')) {
        setAiResponse({
          title: 'Direct Contact Details',
          answer: 'Founder & MD: Fahad Ali | Email: fahad.ali@vincentresearch.com | WhatsApp / Phone: +91 7458098299 | Registered HQ: Lucknow, Uttar Pradesh, India 226001.'
        });
      } else if (q.includes('country') || q.includes('reach') || q.includes('global') || q.includes('india') || q.includes('us')) {
        setAiResponse({
          title: 'Global Fielding Footprint',
          answer: 'Vincent Research covers 70+ countries with 40M+ verified respondents across North America, Pan-India (Metro & Tier 2/3), Europe (UK, Germany, France), MENA (UAE, Saudi), and APAC.'
        });
      } else {
        setAiResponse({
          title: 'Vincent Research Intelligence',
          answer: `Vincent Research delivers end-to-end quantitative (CAWI/CATI) and qualitative insights across 32+ sectors, backed by 40M+ verified respondents. Let us know your target sample size N to generate an instant feasibility plan.`
        });
      }
    }, 500);
  };

  const handleAskSubmit = (e) => {
    e.preventDefault();
    runQuery(askQuery);
  };

  const pad = (n) => String(n + 1).padStart(2, '0');

  return (
    <div className="fixed inset-0 pointer-events-none z-30 font-mono select-none">
      {/* 1. TOP LEFT BRANDING (Clean, floating, minimal) */}
      <div className="absolute top-8 left-8 pointer-events-auto flex items-start gap-3.5">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-lg shadow-cyan-500/10">
          <Globe className="w-5 h-5 text-cyan-300 animate-pulse" />
        </div>
        <div>
          <div className="text-white font-extrabold text-base tracking-widest flex items-center gap-2">
            VINCENT<span className="text-cyan-400">RESEARCH</span>
          </div>
          <div className="text-[11px] text-slate-400 tracking-wider">vincentresearch.com</div>
          <div className="text-[10px] text-cyan-300/80 tracking-widest uppercase mt-0.5 font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>● 3D INTELLIGENCE ENGINE // LIVE</span>
          </div>
        </div>
      </div>

      {/* 2. TOP RIGHT PILL NAVIGATION */}
      <div className="absolute top-8 right-8 pointer-events-auto flex items-center gap-3">
        <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/18 backdrop-blur-xl shadow-2xl text-[11px] tracking-wider text-slate-200">
          <button
            onClick={() => {
              soundManager.playClick();
              onNavigate(0);
            }}
            className="hover:text-cyan-300 transition-colors px-2 py-1"
          >
            HOME
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={() => {
              soundManager.playClick();
              onNavigate(1);
            }}
            className="hover:text-cyan-300 transition-colors px-2 py-1"
          >
            SERVICES
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={() => {
              soundManager.playClick();
              onNavigate(2);
            }}
            className="hover:text-cyan-300 transition-colors px-2 py-1"
          >
            VERITRUST™
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={() => {
              soundManager.playClick();
              onOpenContact();
            }}
            className="px-4 py-1.5 rounded-full bg-white text-black font-bold hover:bg-cyan-300 transition-all text-[11px] shadow-md shadow-white/20"
          >
            CONTACT
          </button>
        </div>

        {/* Audio FX & Ambient Toggle */}
        <button
          onClick={toggleSound}
          className="p-3 rounded-full bg-white/[0.04] border border-white/18 backdrop-blur-xl text-slate-300 hover:text-cyan-300 transition-all flex items-center gap-1.5"
          title={isMuted ? 'Unmute Audio & Cosmic Hum' : 'Mute Audio'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-slate-500" />
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-cyan-400" />
              <div className="flex items-end gap-0.5 h-3">
                <span className="w-0.5 h-2.5 bg-cyan-400 animate-pulse" />
                <span className="w-0.5 h-1.5 bg-cyan-300 animate-bounce" />
                <span className="w-0.5 h-3 bg-cyan-400 animate-pulse" />
              </div>
            </>
          )}
        </button>
      </div>

      {/* 3. BOTTOM LEFT MENU: "WHAT ARE YOU LOOKING FOR?" + "ASK ME ANYTHING..." */}
      <div className="absolute bottom-8 left-8 pointer-events-auto max-w-sm space-y-3.5">
        <div className="space-y-2.5">
          <div className="text-xs font-bold tracking-widest text-white uppercase flex items-center gap-2 drop-shadow-md">
            <span className="text-cyan-400">❖</span>
            WHAT ARE YOU LOOKING FOR?
          </div>

          <div className="space-y-1.5 text-xs">
            {navMenuItems.map((item, idx) => {
              const isActive = currentIndex === item.targetIdx;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    soundManager.playHover();
                    onNavigate(item.targetIdx);
                  }}
                  className={`group relative block text-left transition-all py-1 ${
                    isActive ? 'text-cyan-300 translate-x-2 font-bold' : 'text-slate-300 hover:text-white hover:translate-x-2'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`${isActive ? 'text-cyan-300' : 'text-cyan-400/60 group-hover:text-cyan-300'}`}>
                      →
                    </span>
                    <span className="tracking-wider">{item.label}</span>
                  </div>
                  <div className={`h-[1px] bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-300 mt-0.5 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Quick Query Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {quickPills.map((pill, pIdx) => (
              <button
                key={pIdx}
                onClick={() => runQuery(pill)}
                className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-cyan-300 transition-all"
              >
                {pill}
              </button>
            ))}
          </div>

          {/* "ASK ME ANYTHING..." Translucent Pill Input */}
          <form onSubmit={handleAskSubmit} className="relative pt-1">
            <input
              type="text"
              placeholder="ASK ME ANYTHING..."
              value={askQuery}
              onChange={(e) => setAskQuery(e.target.value)}
              className="w-full bg-white/[0.05] border border-white/20 rounded-full px-5 py-3 text-xs text-white placeholder-slate-400 backdrop-blur-xl focus:outline-none focus:border-cyan-400 focus:bg-white/[0.08] transition-all pr-12 shadow-lg shadow-black/40"
            />
            <button
              type="submit"
              className="absolute right-2 top-[13px] w-7 h-7 rounded-full bg-cyan-400 text-black flex items-center justify-center hover:bg-cyan-300 transition-all text-xs font-bold shadow-md shadow-cyan-400/30"
            >
              {isThinking ? (
                <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
            </button>
          </form>
        </div>
      </div>

      {/* AI Query Response Bubble */}
      {aiResponse && (
        <div className="absolute bottom-44 left-8 sm:left-96 pointer-events-auto max-w-md p-6 rounded-3xl border border-cyan-400/40 shadow-2xl bg-slate-950/95 backdrop-blur-2xl z-40 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
            <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              {aiResponse.title}
            </span>
            <button
              onClick={() => setAiResponse(null)}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs font-sans text-slate-200 leading-relaxed font-light">
            {aiResponse.answer}
          </p>
          <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
            <span>Verified Vincent Research DB</span>
            <button
              onClick={() => {
                setAiResponse(null);
                onOpenContact();
              }}
              className="text-cyan-300 font-bold hover:underline"
            >
              Consult Fahad Ali →
            </button>
          </div>
        </div>
      )}

      {/* 4. BOTTOM RIGHT PAGER & MOTION CONTROLS */}
      <div className="absolute bottom-8 right-8 pointer-events-auto flex flex-col items-end gap-3.5">
        <div className="text-[10px] text-slate-400 uppercase tracking-widest hidden sm:block bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10">
          DRAG ANYWHERE • SCROLL UP/DOWN TO SWOOP IN 3D
        </div>

        <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/18 backdrop-blur-xl shadow-xl">
          {/* Autoplay Toggle */}
          <button
            onClick={() => {
              soundManager.playClick();
              setIsAutoplay(!isAutoplay);
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider transition-all ${
              isAutoplay ? 'bg-cyan-400 text-black shadow-md shadow-cyan-400/30' : 'text-slate-400 hover:text-white'
            }`}
            title="Toggle Automatic 3D Showcase Fly-Through"
          >
            {isAutoplay ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            <span>{isAutoplay ? 'AUTO ON' : 'AUTO FLY'}</span>
          </button>

          <span className="text-white/20">|</span>

          <button
            onClick={() => {
              soundManager.playClick();
              const prev = (currentIndex - 1 + CARDS_DATA.length) % CARDS_DATA.length;
              onNavigate(prev);
            }}
            className="px-2 py-1 text-xs hover:text-cyan-300 transition-colors"
          >
            ← PREV
          </button>

          <span className="text-cyan-400 font-bold text-xs tracking-widest">
            [ {pad(currentIndex)} / {pad(CARDS_DATA.length - 1)} ]
          </span>

          <button
            onClick={() => {
              soundManager.playClick();
              const next = (currentIndex + 1) % CARDS_DATA.length;
              onNavigate(next);
            }}
            className="px-2 py-1 text-xs hover:text-cyan-300 transition-colors"
          >
            NEXT →
          </button>
        </div>

        {/* Quick View Details Button */}
        <button
          onClick={() => {
            soundManager.playClick();
            onOpenCard(CARDS_DATA[currentIndex]);
          }}
          className="px-5 py-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/50 text-xs font-bold transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 backdrop-blur-md"
        >
          <span>INSPECT {CARDS_DATA[currentIndex].badge}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
