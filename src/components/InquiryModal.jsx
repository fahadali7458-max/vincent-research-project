import React, { useState } from 'react';
import { X, Send, ShieldCheck, CheckCircle2, Lock, MessageSquare, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/audio';

export default function InquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Market Research',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    soundManager.playClick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      soundManager.playSuccess();

      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#00f0ff', '#3b82f6', '#8b5cf6', '#10b981']
        });
      } catch (e) {}

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 4000);
    }, 1200);
  };

  const whatsappUrl = `https://wa.me/917458098299?text=${encodeURIComponent(
    `Hello Fahad, I would like to inquire about Vincent Research services for: ${formData.service}. My Name: ${formData.name || 'Client'}, Company: ${formData.company || 'Enterprise'}.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-400/40 shadow-2xl shadow-cyan-500/20 bg-slate-950/95 overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/60 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/20">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-white">RFP Inquiry Received</h3>
            <p className="text-sm font-mono text-slate-300 max-w-md mx-auto">
              Your research specifications have been routed to <strong>Fahad Ali</strong> and the Vincent Research senior project management team. You will receive a response within 4 hours.
            </p>
            <div className="pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-emerald-600/30"
              >
                <Phone className="w-4 h-4" />
                <span>Instant Connect on WhatsApp (+91 7458098299)</span>
              </a>
            </div>
            <div className="text-xs font-mono text-cyan-400 pt-2">
              CONFIDENTIALITY // BOUND BY ESOMAR & GDPR PROTOCOL
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
                <Lock className="w-3.5 h-3.5" />
                Vincent Research • Direct RFP Channel
              </div>
              <h2 className="text-2xl font-bold text-white mt-1">
                Start Your Research Project
              </h2>
              <p className="text-xs text-slate-400 font-light mt-1">
                Access 40M+ verified global respondents across 70+ countries with VeriTrust™ quality guarantee.
              </p>
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">
                Select Service Focus
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                {[
                  'Market Research',
                  'Healthcare HCPs',
                  'B2B Panels',
                  'Consumer Insights',
                  'Panel Data',
                  'Strategy Consulting'
                ].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      setFormData({ ...formData, service: s });
                    }}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      formData.service === s
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold'
                        : 'bg-slate-900/60 border-white/5 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="space-y-1">
                <label className="text-slate-400 uppercase">Your Name</label>
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-400 uppercase">Business Email</label>
                <input
                  required
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1 font-mono text-xs">
              <label className="text-slate-400 uppercase">Company Name</label>
              <input
                required
                type="text"
                placeholder="Your Organization"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div className="space-y-1 font-mono text-xs">
              <label className="text-slate-400 uppercase">Project Notes / Target Sample (Optional)</label>
              <textarea
                rows={2}
                placeholder="E.g., N=500 HCPs in UK and US; 15-minute quantitative survey fielding next week."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-3.5 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              />
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              Direct access to Fahad Ali (Founder & MD) · Confidentiality NDA guaranteed.
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 font-mono text-xs">
              <button
                type="submit"
                disabled={isSubmitting}
                className="py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl shadow-cyan-400/25 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting RFP...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit RFP Proposal</span>
                  </>
                )}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playHover()}
                className="py-3.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/40 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-center"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
