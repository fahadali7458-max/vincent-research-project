import React, { useState, useEffect } from 'react';
import { Globe, Shield, Phone, Mail, MapPin, ArrowUp, Send, Check } from 'lucide-react';
import { soundManager } from '../utils/audio';

export default function Footer({ onOpenModal }) {
  const [clocks, setClocks] = useState({
    del: '--:--:--',
    nyc: '--:--:--',
    lon: '--:--:--',
    ber: '--:--:--'
  });
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatTZ = (tz) =>
        new Intl.DateTimeFormat('en-US', {
          timeZone: tz,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(now);

      setClocks({
        del: formatTZ('Asia/Kolkata'),
        nyc: formatTZ('America/New_York'),
        lon: formatTZ('Europe/London'),
        ber: formatTZ('Europe/Berlin')
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    soundManager.playClick();
    setSubscribed(true);
    soundManager.playSuccess();
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    soundManager.playHover();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Top: Live Global Clocks */}
        <div className="glass-panel p-4 rounded-2xl border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
          <div className="flex items-center justify-between px-3 py-1 bg-slate-900/50 rounded-lg border border-white/5">
            <span className="text-slate-400">INDIA HQ (IST)</span>
            <span className="text-cyan-400 font-bold">{clocks.del}</span>
          </div>
          <div className="flex items-center justify-between px-3 py-1 bg-slate-900/50 rounded-lg border border-white/5">
            <span className="text-slate-400">NEW YORK (EST)</span>
            <span className="text-purple-400 font-bold">{clocks.nyc}</span>
          </div>
          <div className="flex items-center justify-between px-3 py-1 bg-slate-900/50 rounded-lg border border-white/5">
            <span className="text-slate-400">LONDON (GMT)</span>
            <span className="text-emerald-400 font-bold">{clocks.lon}</span>
          </div>
          <div className="flex items-center justify-between px-3 py-1 bg-slate-900/50 rounded-lg border border-white/5">
            <span className="text-slate-400">BERLIN (CET)</span>
            <span className="text-amber-400 font-bold">{clocks.ber}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Mission */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/30 to-purple-600/30 border border-cyan-400/40 flex items-center justify-center">
                <Globe className="w-5 h-5 text-cyan-300" />
              </div>
              <span className="font-mono text-xl font-bold tracking-wider text-white">
                VINCENT<span className="text-cyan-400">RESEARCH</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Vincent Research is a premier global data intelligence firm bridging brands with 40M+ verified respondents across 70+ countries through the proprietary VeriTrust™ quality framework.
            </p>
            <div className="space-y-1.5 text-xs font-mono text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:fahad.ali@vincentresearch.com" className="hover:text-cyan-300 transition-colors">
                  fahad.ali@vincentresearch.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="https://wa.me/917458098299" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">
                  +91 7458098299 (Call & WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Lucknow, Uttar Pradesh, India 226001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3 font-mono text-xs">
            <div className="text-cyan-400 font-bold uppercase tracking-wider">// SERVICES</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Multi-Dimensional</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Panel Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Healthcare HCPs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Advanced Analytics</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Strategic Consulting</a></li>
            </ul>
          </div>

          {/* Quality Standards */}
          <div className="md:col-span-2 space-y-3 font-mono text-xs">
            <div className="text-purple-400 font-bold uppercase tracking-wider">// COMPLIANCE</div>
            <ul className="space-y-2 text-slate-400">
              <li>ESOMAR Code Aligned</li>
              <li>ISO 20252 Standard</li>
              <li>GDPR / UK GDPR</li>
              <li>Triple Opt-In Panel</li>
              <li>WCAG 2.1 Accessible</li>
            </ul>
          </div>

          {/* Leadership & Newsletter */}
          <div className="md:col-span-4 space-y-4">
            <div className="glass-panel p-4 rounded-xl border border-white/10 space-y-1 font-mono text-xs">
              <span className="text-[10px] text-cyan-400 uppercase tracking-wider">Executive Leadership</span>
              <div className="text-white font-bold text-sm">Fahad Ali</div>
              <div className="text-slate-400 text-[11px]">Founder & Managing Director</div>
              <div className="pt-2 flex items-center gap-2">
                <a
                  href="https://wa.me/917458098299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] hover:bg-emerald-500/30 transition-colors"
                >
                  WhatsApp Directly
                </a>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-2 font-mono text-xs">
              <div className="text-slate-300 uppercase text-[11px]">Research Newsletter</div>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="analyst@firm.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 flex-1 text-xs"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all flex items-center gap-1"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <span className="text-[10px] text-emerald-400 block">
                  ✓ Confirmed! We'll send quarterly market briefings.
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Legal & Disclaimers */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 VINCENT RESEARCH. ALL RIGHTS RESERVED. (vincentresearch.com)
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Protocol</span>
            <span className="hover:text-slate-300 cursor-pointer">ESOMAR Ethics</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-white/10 transition-all flex items-center gap-1"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
