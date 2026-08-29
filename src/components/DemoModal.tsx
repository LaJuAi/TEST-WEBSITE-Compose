import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  Terminal, 
  Key, 
  Copy, 
  Check, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Zap,
  Bot
} from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'instant-sandbox' | 'book-demo'>('instant-sandbox');
  const [copiedKey, setCopiedKey] = useState(false);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submittedDemo, setSubmittedDemo] = useState(false);

  const mockApiKey = 'comp_live_9f82ab81c00941829e710b';

  const handleCopyKey = () => {
    navigator.clipboard.writeText(mockApiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmittedDemo(true);
    setTimeout(() => {
      setSubmittedDemo(false);
      onClose();
    }, 2200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="backdrop-blur-2xl bg-[#08080c]/95 max-w-xl w-full rounded-3xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.9)] p-6 sm:p-8 relative overflow-hidden"
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-400" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-300">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Get Started with Composio
            </h3>
            <p className="font-mono text-xs text-white/50">
              Instant MicroVM sandbox & developer access
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-xl bg-black/40 p-1 mb-6 border border-white/10">
          <button
            onClick={() => setActiveTab('instant-sandbox')}
            className={`flex-1 py-2 rounded-lg font-mono text-xs transition-all ${
              activeTab === 'instant-sandbox'
                ? 'bg-white text-black font-bold shadow-sm'
                : 'text-white/50 hover:text-white'
            }`}
          >
            Instant Sandbox
          </button>
          <button
            onClick={() => setActiveTab('book-demo')}
            className={`flex-1 py-2 rounded-lg font-mono text-xs transition-all ${
              activeTab === 'book-demo'
                ? 'bg-white text-black font-bold shadow-sm'
                : 'text-white/50 hover:text-white'
            }`}
          >
            Book Architecture Walkthrough
          </button>
        </div>

        {activeTab === 'instant-sandbox' ? (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs">
              <div className="flex items-center justify-between text-white/50 mb-2">
                <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
                  <Key className="w-3.5 h-3.5" />
                  Your Sandbox API Key:
                </span>
                <span className="text-[10px] text-emerald-400">100k Free Calls/Mo</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 p-2.5 rounded-xl border border-white/10">
                <code className="text-purple-200 select-all">{mockApiKey}</code>
                <button
                  onClick={handleCopyKey}
                  className="flex items-center gap-1 text-[11px] text-white/70 hover:text-white bg-white/10 border border-white/10 px-2.5 py-1 rounded-lg transition-colors ml-2"
                >
                  {copiedKey ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-2">
              <span className="text-white/50 uppercase tracking-wider text-[10px] block">
                Quick Install Command
              </span>
              <pre className="text-emerald-300 text-[11px] leading-relaxed">
                pip install composio-core
              </pre>
              <pre className="text-white/40 text-[10px]">
                composio login --key {mockApiKey}
              </pre>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="font-mono text-xs text-white/50 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                No credit card required
              </span>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full font-mono text-xs font-bold bg-white text-black hover:bg-white/90 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                Launch Sandbox
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleDemoSubmit} className="space-y-4">
            <div>
              <label className="block font-mono text-xs text-white/70 mb-1.5">
                Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-purple-400/50"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-white/70 mb-1.5">
                Company / Organization
              </label>
              <input
                type="text"
                placeholder="Acme Inc. / Agent Lab"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-purple-400/50"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="font-mono text-[11px] text-white/50">
                Direct engineer-led session
              </span>
              <button
                type="submit"
                disabled={submittedDemo}
                className="px-6 py-2.5 rounded-full font-mono text-xs font-bold bg-white text-black hover:bg-white/90 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center gap-2"
              >
                {submittedDemo ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Requested! We will reach out shortly</span>
                  </>
                ) : (
                  <>
                    <span>Schedule Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};
