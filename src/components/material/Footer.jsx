import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Linkedin, Instagram, ShieldCheck, Mail, MapPin, Phone, Database, Play } from 'lucide-react';

export default function Footer({ onOpenContact, onOpenAbout, onReplayIntro }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [panelStats, setPanelStats] = useState({
    activePanelists: 40291480,
    activeCountries: 124,
    veritrustAccuracyScore: 99.84
  });

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setPanelStats(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      try {
        await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
      } catch (err) {}
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 2500);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 overflow-hidden border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION: MISSION & NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-neutral-800">
          
          {/* MISSION TEXT & LIVE STATS */}
          <div className="lg:col-span-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00B4D8] mb-4 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse"></span>
              <span>SUCCESS THROUGH RESEARCH &bull; GLOBAL MARKET RESEARCH</span>
            </div>
            <p className="text-2xl sm:text-3xl font-display font-normal text-neutral-200 leading-snug">
              We connect empirical quantitative panel telemetry with qualitative human ethnography to give global enterprises undeniable strategic certainty.
            </p>
            
            {/* LIVE TELEMETRY BAR */}
            <div className="mt-8 p-4 rounded-2xl bg-neutral-900 border border-neutral-800 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-mono font-bold text-emerald-400">
                  {panelStats.activePanelists.toLocaleString()}+
                </div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase">Verified Panelists</div>
              </div>
              <div>
                <div className="text-xl font-mono font-bold text-cyan-400">
                  {panelStats.activeCountries}
                </div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase">Global Markets</div>
              </div>
              <div>
                <div className="text-xl font-mono font-bold text-purple-400">
                  {panelStats.veritrustAccuracyScore}%
                </div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase">VeriTrust™ Score</div>
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="mt-6 space-y-2 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>Global Headquarters: Lucknow, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                <span>Executive Telemetry Line: +91 7458098299</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                <span>Founder &amp; Managing Director: Fahad Ali</span>
              </div>
            </div>
          </div>

          {/* NEWSLETTER & DIRECTORY */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            
            {/* NEWSLETTER BOX */}
            <div className="mb-12">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                SUBSCRIBE TO EXECUTIVE RESEARCH BRIEFS &amp; INDICES
              </h4>
              <form onSubmit={handleSubscribe} className="relative max-w-md">
                <input
                  type="email"
                  placeholder="Enter corporate email for research briefs"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-full px-5 py-3.5 pr-14 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-colors"
                >
                  {subscribed ? <Check className="w-4 h-4 text-emerald-600" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
              {subscribed ? (
                <p className="text-xs text-emerald-400 mt-2 font-mono">
                  ✓ Registered with Vincent Research Directorate. Executive whitepapers will arrive directly.
                </p>
              ) : (
                <p className="text-[11px] text-neutral-500 mt-2">
                  Receive quarterly incidence benchmarks, macro consumer sentiment updates, and VeriTrust™ fraud bulletins.
                </p>
              )}
            </div>

            {/* DIRECTORY LINKS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
              <div>
                <h5 className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-4">RESEARCH METHODOLOGIES</h5>
                <ul className="space-y-2.5 text-neutral-300">
                  <li><Link to="/services/online-panel-surveys" className="hover:text-white transition-colors">Quantitative CAWI</Link></li>
                  <li><Link to="/services/focus-group-discussions" className="hover:text-white transition-colors">Qualitative FGDs</Link></li>
                  <li><Link to="/feasibility" className="hover:text-emerald-400 transition-colors flex items-center gap-1"><span>Feasibility Calculator</span></Link></li>
                  <li><Link to="/case-studies" className="hover:text-white transition-colors">Client Case Studies</Link></li>
                  <li><Link to="/whitepapers" className="hover:text-white transition-colors">Research Whitepapers</Link></li>
                </ul>
              </div>

              <div>
                <h5 className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-4">LEADERSHIP</h5>
                <ul className="space-y-2.5 text-neutral-300">
                  <li><Link to="/about" className="hover:text-white transition-colors">Fahad Ali (Founder &amp; MD)</Link></li>
                  <li><Link to="/about" className="hover:text-white transition-colors">Lucknow HQ Operations</Link></li>
                  <li><a href="https://wa.me/917458098299" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp Direct</a></li>
                  <li><button onClick={() => onOpenContact('')} className="hover:text-white transition-colors">Submit Study RFP</button></li>
                </ul>
              </div>

              <div>
                <h5 className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-4">ETHICS &amp; DATA SHIELD</h5>
                <ul className="space-y-2.5 text-neutral-400 text-xs">
                  <li><Link to="/services/veritrust-anti-fraud" className="hover:text-white transition-colors">VeriTrust™ Anti-Fraud</Link></li>
                  <li><Link to="/about" className="hover:text-white transition-colors">ESOMAR Code of Conduct</Link></li>
                  <li><Link to="/about" className="hover:text-white transition-colors">GDPR &amp; CCPA Data Shield</Link></li>
                  <li><Link to="/services/spss-r-advanced-tabulation" className="hover:text-white transition-colors">SPSS &amp; R Statistical Bureau</Link></li>
                </ul>
              </div>
            </div>

          </div>

        </div>

        {/* GIANT WATERMARK BRAND LOGO */}
        <div className="py-16 text-center select-none overflow-hidden">
          <div className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[clamp(4.5rem,8.7vw,122px)] tracking-tight text-neutral-800/80 hover:text-neutral-700 transition-colors cursor-default whitespace-nowrap">
            <span>VINCENT </span>
            <span className="text-[#00B4D8]/80">RESEARCH<sup className="text-3xl sm:text-5xl font-bold ml-1">®</sup></span>
          </div>
          <div className="text-xs sm:text-sm md:text-base font-bold tracking-[0.3em] uppercase text-[#00B4D8]/70 mt-3 font-mono">
            SUCCESS THROUGH RESEARCH
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <p>
            &copy; 2026 Vincent Research LLC. Global Market Research Directorate. Founded &amp; Directed by Fahad Ali.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <span>Lucknow, India HQ</span>
            <span>&bull;</span>
            <span>VeriTrust™ 40M+ Panel Shield</span>
            <span>&bull;</span>
            <a href="tel:+917458098299" className="text-emerald-400 hover:underline">+91 7458098299</a>
            {onReplayIntro && (
              <>
                <span>&bull;</span>
                <button
                  onClick={onReplayIntro}
                  className="inline-flex items-center gap-1.5 text-[#00F0FF] hover:text-white transition-colors cursor-pointer font-semibold"
                  title="Replay Cinematic Opening Animation"
                >
                  <Play className="w-3 h-3 fill-[#00F0FF]" />
                  <span>Replay Opening Intro</span>
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
}
