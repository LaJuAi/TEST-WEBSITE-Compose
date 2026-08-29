import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Terminal, CheckCircle2 } from 'lucide-react';

interface CtaSectionProps {
  onOpenDemo?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenDemo }) => {
  const [testPrompt, setTestPrompt] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleTestPrompt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testPrompt.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      onOpenDemo?.();
      setSubmitted(false);
    }, 1000);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden z-10">
      
      {/* Fluid Morphing Glowing Backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="w-[700px] h-[500px] rounded-full blur-[140px] opacity-40 animate-morph-2"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(59, 130, 246, 0.3) 40%, rgba(16, 185, 129, 0.2) 80%, transparent 100%)'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="backdrop-blur-2xl bg-white/[0.04] rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 text-center shadow-[0_30px_70px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-mono uppercase tracking-widest text-xs">START EXECUTING ACTIONS TODAY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.1] mb-6 max-w-2xl mx-auto">
            Your agents are ready. <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">Are you?</span>
          </h2>

          <p className="text-white/60 text-sm sm:text-lg max-w-xl mx-auto font-sans leading-relaxed mb-8">
            Deploy your first tool execution session in under 3 minutes. 
            Connect 1,000+ tools with zero boilerplate auth code.
          </p>

          {/* Quick Agent Prompt Simulator — Skill P8: explicit label */}
          <form onSubmit={handleTestPrompt} className="max-w-lg mx-auto mb-8" aria-label="Test an agent prompt">
            <div className="backdrop-blur-xl bg-black/60 rounded-2xl p-1.5 border border-white/10 flex items-center gap-2 shadow-inner">
              <label htmlFor="cta-prompt-input" className="sr-only">What action should your agent execute?</label>
              <Terminal className="w-4 h-4 text-purple-400 ml-3 shrink-0" aria-hidden="true" />
              <input
                id="cta-prompt-input"
                type="text"
                placeholder="What action should your agent execute?..."
                value={testPrompt}
                onChange={(e) => setTestPrompt(e.target.value)}
                autoComplete="off"
                className="w-full bg-transparent border-none text-xs font-mono text-white placeholder-white/40 focus:outline-none px-2 py-2"
              />
              <button
                type="submit"
                aria-label={submitted ? 'Initializing sandbox' : 'Test run this agent prompt'}
                className="px-4 py-2.5 min-h-[44px] bg-white text-black font-bold text-xs rounded-xl hover:bg-white/90 transition-all font-mono shrink-0 flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,255,255,0.2)] focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
              >
                <span>{submitted ? 'Initializing...' : 'Test Run'}</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </form>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-3.5 min-h-[44px] bg-white text-black font-bold text-sm rounded-full hover:bg-white/90 transition-all font-mono flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
            >
              <span>TRY COMPOSIO TODAY</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-7 py-3.5 min-h-[44px] bg-white/5 hover:bg-white/10 text-white font-mono text-sm font-semibold rounded-full border border-white/10 transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
            >
              <span>GET A DEMO</span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/50">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              100k Free Calls/Mo
            </span>
            <span className="flex items-center gap-1.5 text-purple-300">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Python & TypeScript SDKs
            </span>
            <span className="flex items-center gap-1.5 text-blue-300">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Instant OAuth Popups
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
