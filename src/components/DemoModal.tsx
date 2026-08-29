import React, { useState, useEffect, useRef } from 'react';
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
  const [emailError, setEmailError] = useState('');
  const [company, setCompany] = useState('');
  const [submittedDemo, setSubmittedDemo] = useState(false);

  // Skill P1: focus trap — refs for first/last focusable elements
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const mockApiKey = 'comp_live_9f82ab81c00941829e710b';

  // Skill P1: On open — save trigger, move focus to close button
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      // Restore focus to the element that opened the modal
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  // Skill P1 + P9: Escape key closes modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      // Focus trap — keep Tab within the modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleCopyKey = () => {
    navigator.clipboard.writeText(mockApiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Work email is required');
      return;
    }
    setEmailError('');
    setSubmittedDemo(true);
    setTimeout(() => {
      setSubmittedDemo(false);
      onClose();
    }, 2200);
  };

  if (!isOpen) return null;

  return (
    // Skill P1: aria-modal, role="dialog", aria-labelledby
    // Clicking backdrop closes modal
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
      role="presentation"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="backdrop-blur-2xl bg-[#08080c]/95 max-w-xl w-full rounded-3xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.9)] p-6 sm:p-8 relative overflow-hidden"
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-400" aria-hidden="true" />

        {/* Skill P1: Close Button — aria-label, keyboard accessible */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-300" aria-hidden="true">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            {/* Skill P1: aria-labelledby targets this id */}
            <h2 id="modal-title" className="font-display text-xl sm:text-2xl font-bold text-white">
              Get Started with Composio
            </h2>
            <p className="font-mono text-xs text-white/50">
              Instant MicroVM sandbox &amp; developer access
            </p>
          </div>
        </div>

        {/* Tab Switcher — Skill P1: role="tablist", aria-selected */}
        <div role="tablist" aria-label="Get started options" className="flex rounded-xl bg-black/40 p-1 mb-6 border border-white/10">
          <button
            role="tab"
            aria-selected={activeTab === 'instant-sandbox'}
            aria-controls="panel-sandbox"
            id="tab-sandbox"
            onClick={() => setActiveTab('instant-sandbox')}
            className={`flex-1 py-2.5 min-h-[44px] rounded-lg font-mono text-xs transition-all focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none ${
              activeTab === 'instant-sandbox'
                ? 'bg-white text-black font-bold shadow-sm'
                : 'text-white/50 hover:text-white'
            }`}
          >
            Instant Sandbox
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'book-demo'}
            aria-controls="panel-demo"
            id="tab-demo"
            onClick={() => setActiveTab('book-demo')}
            className={`flex-1 py-2.5 min-h-[44px] rounded-lg font-mono text-xs transition-all focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none ${
              activeTab === 'book-demo'
                ? 'bg-white text-black font-bold shadow-sm'
                : 'text-white/50 hover:text-white'
            }`}
          >
            Book Architecture Walkthrough
          </button>
        </div>

        {activeTab === 'instant-sandbox' ? (
          <div role="tabpanel" id="panel-sandbox" aria-labelledby="tab-sandbox" className="space-y-4">
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs">
              <div className="flex items-center justify-between text-white/50 mb-2">
                <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
                  <Key className="w-3.5 h-3.5" aria-hidden="true" />
                  Your Sandbox API Key:
                </span>
                <span className="text-xs text-emerald-400">100k Free Calls/Mo</span>
              </div>
              <div className="flex items-center justify-between bg-white/5 p-2.5 rounded-xl border border-white/10">
                <code className="text-purple-200 select-all text-xs" aria-label="API key">{mockApiKey}</code>
                <button
                  onClick={handleCopyKey}
                  aria-label={copiedKey ? 'API key copied' : 'Copy API key'}
                  className="flex items-center gap-1 text-xs text-white/70 hover:text-white bg-white/10 border border-white/10 px-2.5 py-1.5 min-h-[36px] rounded-lg transition-colors ml-2 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
                >
                  {copiedKey
                    ? <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    : <Copy className="w-3.5 h-3.5" aria-hidden="true" />}
                  <span>{copiedKey ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-2">
              <span className="text-white/50 uppercase tracking-wider text-xs block">
                Quick Install Command
              </span>
              <pre className="text-emerald-300 text-xs leading-relaxed overflow-x-auto">
                pip install composio-core
              </pre>
              <pre className="text-white/40 text-xs overflow-x-auto">
                composio login --key {mockApiKey}
              </pre>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="font-mono text-xs text-white/50 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                No credit card required
              </span>
              <button
                onClick={onClose}
                className="px-6 py-2.5 min-h-[44px] rounded-full font-mono text-xs font-bold bg-white text-black hover:bg-white/90 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
              >
                Launch Sandbox
              </button>
            </div>
          </div>
        ) : (
          // Skill P8: explicit <label> elements, autocomplete, inline validation
          <form onSubmit={handleDemoSubmit} role="tabpanel" id="panel-demo" aria-labelledby="tab-demo" className="space-y-4" noValidate>
            <div>
              <label htmlFor="modal-email" className="block font-mono text-xs text-white/70 mb-1.5">
                Work Email <span aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </label>
              <input
                id="modal-email"
                type="email"
                required
                autoComplete="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(''); }}
                aria-required="true"
                aria-invalid={!!emailError}
                aria-describedby={emailError ? 'email-error' : undefined}
                className={`w-full bg-black/60 border rounded-xl px-3.5 py-2.5 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50 transition-colors ${emailError ? 'border-red-500/60' : 'border-white/10 focus:border-purple-400/50'}`}
              />
              {emailError && (
                <p id="email-error" role="alert" className="mt-1 text-xs text-red-400 font-mono">
                  {emailError}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="modal-company" className="block font-mono text-xs text-white/70 mb-1.5">
                Company / Organization
              </label>
              <input
                id="modal-company"
                type="text"
                autoComplete="organization"
                placeholder="Acme Inc. / Agent Lab"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-black/60 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50 focus:border-purple-400/50 transition-colors"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="font-mono text-xs text-white/50">
                Direct engineer-led session
              </span>
              <button
                type="submit"
                disabled={submittedDemo}
                aria-disabled={submittedDemo}
                className="px-6 py-2.5 min-h-[44px] rounded-full font-mono text-xs font-bold bg-white text-black hover:bg-white/90 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center gap-2 disabled:opacity-70 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
              >
                {submittedDemo ? (
                  <>
                    <Check className="w-4 h-4" aria-hidden="true" />
                    <span>Requested! We will reach out shortly</span>
                  </>
                ) : (
                  <>
                    <span>Schedule Demo</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
