import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  Terminal,
  Bot,
  Cpu,
  ShieldCheck,
  ArrowRight,
  Code2,
  Sparkles,
  Briefcase,
  Layers,
  TrendingUp,
  MessageSquare,
  Menu,
  X,
  ExternalLink,
  Zap
} from 'lucide-react';

interface NavbarProps {
  onOpenDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'products' | 'solutions' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Skill P9: mobile drawer focus trap refs
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Skill P9: Escape key closes dropdowns and mobile menu
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeMenu) setActiveMenu(null);
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
          mobileToggleRef.current?.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [activeMenu, mobileMenuOpen]);

  // Skill P9: Mobile drawer focus trap
  useEffect(() => {
    if (!mobileMenuOpen || !mobileMenuRef.current) return;
    const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [href], input, [tabindex]:not([tabindex="-1"])'
    );
    focusable[0]?.focus();
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first?.focus();
      }
    };
    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [mobileMenuOpen]);

  const handleDropdownKeyDown = (
    e: React.KeyboardEvent,
    menu: 'products' | 'solutions'
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveMenu(prev => (prev === menu ? null : menu));
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 md:pt-4 md:px-6 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-2xl md:rounded-full px-4 py-2.5 md:px-6 md:py-3 flex items-center justify-between backdrop-blur-xl ${
          scrolled
            ? 'bg-[#0a0a0a]/90 shadow-[0_12px_40px_rgba(0,0,0,0.8)] border border-white/10'
            : 'bg-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10'
        }`}
        aria-label="Main navigation"
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group" aria-label="Composio — go to home">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-blue-500 p-[1px] shadow-[0_0_15px_rgba(168,85,247,0.3)]" aria-hidden="true">
            <div className="w-full h-full bg-[#050505] rounded-[7px] flex items-center justify-center">
              <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white text-base">C</span>
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-base text-white group-hover:text-white/80 transition-colors flex items-center gap-1.5">
              COMPOSIO
              <span className="text-xs font-mono px-1.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60 hidden sm:inline-block font-normal" aria-label="version 3.4">
                v3.4
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium" role="menubar">

          {/* Products Dropdown — Skill P9: keyboard accessible */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu('products')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button
              role="menuitem"
              aria-haspopup="menu"
              aria-expanded={activeMenu === 'products'}
              onKeyDown={(e) => handleDropdownKeyDown(e, 'products')}
              className={`flex items-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-full font-sans text-xs tracking-wide transition-all focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none ${
                activeMenu === 'products' ? 'text-white bg-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              Products
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'products' ? 'rotate-180 text-white' : 'text-white/40'}`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {activeMenu === 'products' && (
                <motion.div
                  role="menu"
                  aria-label="Products menu"
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-2 w-[540px] rounded-3xl backdrop-blur-xl bg-[#09090b]/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/10 grid grid-cols-2 gap-3"
                >
                  <div className="flex flex-col gap-1.5">
                    <div className="text-xs uppercase tracking-widest font-semibold text-white/40 px-2.5 py-1" role="presentation">
                      Builders &amp; Developers
                    </div>
                    {[
                      { href: '#workflows', icon: Terminal, label: 'Composio For You', badge: 'NEW', badgeClass: 'bg-purple-500/20 text-purple-300 border-purple-400/30', iconClass: 'bg-purple-500/10 border-purple-500/20 text-purple-400', desc: 'Give Claude, Cursor, Codex access to 1000+ tools directly.' },
                      { href: '#workflows', icon: Code2, label: 'Developer Platform', badge: null, iconClass: 'bg-blue-500/10 border-blue-500/20 text-blue-400', desc: 'Python & TypeScript SDKs, sandboxed execution, managed auth.' },
                      { href: '#features', icon: Cpu, label: 'Dynamic MicroVM Sandbox', badge: null, iconClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400', desc: 'Remote Python 3.11 runtimes with file system persistence.' },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <a key={item.label} href={item.href} role="menuitem" className="p-2.5 rounded-2xl hover:bg-white/[0.06] transition-colors group flex items-start gap-3 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none">
                          <div className={`p-2 rounded-xl border ${item.iconClass} group-hover:scale-105 transition-transform`} aria-hidden="true">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                              {item.label}
                              {item.badge && <span className={`text-xs px-1 py-0.5 rounded border ${item.badgeClass}`}>{item.badge}</span>}
                            </div>
                            <p className="text-xs text-white/50 leading-snug mt-0.5 font-sans">{item.desc}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-1.5 border-l border-white/10 pl-3">
                    <div className="text-xs uppercase tracking-widest font-semibold text-white/40 px-2.5 py-1" role="presentation">
                      Teams &amp; Architecture
                    </div>
                    {[
                      { href: '#security', icon: ShieldCheck, label: 'Enterprise Auth & RBAC', iconClass: 'bg-purple-500/10 border-purple-500/20 text-purple-400', desc: 'SOC-2 Type II, SSO, audit logging, and zero data leakage.' },
                      { href: '#tool-explorer', icon: Layers, label: 'MCP Universal Gateway', iconClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400', desc: 'One unified endpoint serving all Model Context Protocol tools.' },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <a key={item.label} href={item.href} role="menuitem" className="p-2.5 rounded-2xl hover:bg-white/[0.06] transition-colors group flex items-start gap-3 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none">
                          <div className={`p-2 rounded-xl border ${item.iconClass} group-hover:scale-105 transition-transform`} aria-hidden="true">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">{item.label}</div>
                            <p className="text-xs text-white/50 leading-snug mt-0.5 font-sans">{item.desc}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu('solutions')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button
              role="menuitem"
              aria-haspopup="menu"
              aria-expanded={activeMenu === 'solutions'}
              onKeyDown={(e) => handleDropdownKeyDown(e, 'solutions')}
              className={`flex items-center gap-1.5 px-3.5 py-2.5 min-h-[44px] rounded-full font-sans text-xs tracking-wide transition-all focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none ${
                activeMenu === 'solutions' ? 'text-white bg-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              Solutions
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'solutions' ? 'rotate-180 text-white' : 'text-white/40'}`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {activeMenu === 'solutions' && (
                <motion.div
                  role="menu"
                  aria-label="Solutions menu"
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-2 w-[580px] rounded-3xl backdrop-blur-xl bg-[#09090b]/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/10 grid grid-cols-2 gap-4"
                >
                  <div>
                    <div className="text-xs uppercase tracking-widest font-semibold text-white/40 px-2 py-1 mb-1" role="presentation">
                      For AI Agent Harnesses
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {[
                        { name: 'Claude 3.7 & Anthropic', desc: 'Pre-configured tool execution harness', icon: Bot },
                        { name: 'OpenAI Codex & GPT-4o', desc: 'Function calling with managed OAuth', icon: Sparkles },
                        { name: 'Cursor & OpenClaw', desc: 'One command integration for coding agents', icon: Terminal },
                        { name: 'LangChain & CrewAI', desc: 'Native BaseTool wrappers and agents', icon: Layers }
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <a key={item.name} href="#workflows" role="menuitem" className="p-2 rounded-xl hover:bg-white/[0.06] transition-colors flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none">
                            <Icon className="w-4 h-4 text-purple-400 shrink-0" aria-hidden="true" />
                            <div>
                              <div className="text-xs text-white font-medium">{item.name}</div>
                              <div className="text-xs text-white/50 font-sans">{item.desc}</div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  <div className="border-l border-white/10 pl-3">
                    <div className="text-xs uppercase tracking-widest font-semibold text-white/40 px-2 py-1 mb-1" role="presentation">
                      Role &amp; Industry Toolkits
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {[
                        { title: 'Engineering & DevOps', role: 'GitHub, Sentry, Linear, Datadog', icon: Code2 },
                        { title: 'Customer Support', role: 'Zendesk, Intercom, Slack, Notion', icon: MessageSquare },
                        { title: 'Sales & Revenue Ops', role: 'HubSpot, Salesforce, Stripe, Gmail', icon: TrendingUp },
                        { title: 'Executive & Office', role: 'Calendar, Sheets, Docs, Email', icon: Briefcase }
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <a key={item.title} href="#workflows" role="menuitem" className="p-2 rounded-xl hover:bg-white/[0.06] transition-colors flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none">
                            <Icon className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                            <div>
                              <div className="text-xs text-white font-medium">{item.title}</div>
                              <div className="text-xs text-white/50 font-sans">{item.role}</div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#tool-explorer" role="menuitem" className="px-3.5 py-2.5 min-h-[44px] flex items-center rounded-full text-xs text-white/60 hover:text-white hover:bg-white/5 transition-all focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none">
            Toolkits
          </a>
          <a href="#features" role="menuitem" className="px-3.5 py-2.5 min-h-[44px] flex items-center rounded-full text-xs text-white/60 hover:text-white hover:bg-white/5 transition-all focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none">
            Philosophy
          </a>
          <a href="#security" role="menuitem" className="px-3.5 py-2.5 min-h-[44px] flex items-center rounded-full text-xs text-white/60 hover:text-white hover:bg-white/5 transition-all focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none">
            Security
          </a>
        </div>

        {/* Right Action CTAs */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenDemo}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-full text-xs text-white/70 border border-white/10 hover:bg-white/10 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
            aria-label="Open sandbox environment"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            <span>Sandbox</span>
          </button>

          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 min-h-[44px] bg-white text-black text-xs font-bold rounded-full hover:bg-white/90 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,255,255,0.15)] focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
          >
            <span>START NOW</span>
            <ArrowRight className="w-3.5 h-3.5 text-black" aria-hidden="true" />
          </button>

          {/* Mobile Menu Toggle — Skill P2: min 44px */}
          <button
            ref={mobileToggleRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
          >
            {mobileMenuOpen
              ? <X className="w-5 h-5" aria-hidden="true" />
              : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer — Skill P9: role="dialog", focus trap */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-nav-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto fixed inset-x-3 top-16 rounded-3xl backdrop-blur-xl bg-[#09090b]/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/10 flex flex-col gap-4 lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2 border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-emerald-400">Navigation</span>
              {[
                { href: '#hero', label: 'Overview' },
                { href: '#features', label: 'Why Composio' },
                { href: '#workflows', label: 'Agent Workflows' },
                { href: '#tool-explorer', label: 'Toolkits (1,000+ Tools)' },
                { href: '#security', label: 'Safety & Security' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm py-3 px-3 min-h-[44px] flex items-center rounded-lg text-white/80 hover:bg-white/5 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenDemo?.(); }}
                className="w-full py-3 min-h-[44px] bg-white text-black font-bold text-xs rounded-full hover:bg-white/90 transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
              >
                <span>LAUNCH INTERACTIVE SANDBOX</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
