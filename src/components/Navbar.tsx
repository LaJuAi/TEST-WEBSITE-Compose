import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 md:pt-4 md:px-6 pointer-events-none">
      <nav 
        className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-2xl md:rounded-full px-4 py-2.5 md:px-6 md:py-3 flex items-center justify-between backdrop-blur-xl ${
          scrolled 
            ? 'bg-[#0a0a0a]/90 shadow-[0_12px_40px_rgba(0,0,0,0.8)] border border-white/10' 
            : 'bg-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10'
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-blue-500 p-[1px] shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <div className="w-full h-full bg-[#050505] rounded-[7px] flex items-center justify-center">
              <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white text-base">C</span>
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-base text-white group-hover:text-white/80 transition-colors flex items-center gap-1.5">
              COMPOSIO
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-white/5 border border-white/10 text-white/60 hidden sm:inline-block font-normal">
                v3.4
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
          {/* Products Dropdown Trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveMenu('products')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button 
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-sans text-xs tracking-wide transition-all ${
                activeMenu === 'products' ? 'text-white bg-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              Products
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'products' ? 'rotate-180 text-white' : 'text-white/40'}`} />
            </button>

            {/* Products Mega Menu */}
            <AnimatePresence>
              {activeMenu === 'products' && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-2 w-[540px] rounded-3xl backdrop-blur-xl bg-[#09090b]/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/10 grid grid-cols-2 gap-3"
                >
                  <div className="flex flex-col gap-1.5">
                    <div className="text-[10px] uppercase tracking-widest font-semibold text-white/40 px-2.5 py-1">
                      Builders & Developers
                    </div>
                    <a href="#workflows" className="p-2.5 rounded-2xl hover:bg-white/[0.06] transition-colors group flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-105 transition-transform">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                          Composio For You
                          <span className="text-[9px] px-1 py-0.2 rounded bg-purple-500/20 text-purple-300 border border-purple-400/30">NEW</span>
                        </div>
                        <p className="text-[11px] text-white/50 leading-snug mt-0.5 font-sans">
                          Give Claude, Cursor, Codex access to 1000+ tools directly.
                        </p>
                      </div>
                    </a>
                    <a href="#workflows" className="p-2.5 rounded-2xl hover:bg-white/[0.06] transition-colors group flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-105 transition-transform">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">
                          Developer Platform
                        </div>
                        <p className="text-[11px] text-white/50 leading-snug mt-0.5 font-sans">
                          Python & TypeScript SDKs, sandboxed execution, managed auth.
                        </p>
                      </div>
                    </a>
                    <a href="#features" className="p-2.5 rounded-2xl hover:bg-white/[0.06] transition-colors group flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">
                          Dynamic MicroVM Sandbox
                        </div>
                        <p className="text-[11px] text-white/50 leading-snug mt-0.5 font-sans">
                          Remote Python 3.11 runtimes with file system persistence.
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="flex flex-col gap-1.5 border-l border-white/10 pl-3">
                    <div className="text-[10px] uppercase tracking-widest font-semibold text-white/40 px-2.5 py-1">
                      Teams & Architecture
                    </div>
                    <a href="#security" className="p-2.5 rounded-2xl hover:bg-white/[0.06] transition-colors group flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-105 transition-transform">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">
                          Enterprise Auth & RBAC
                        </div>
                        <p className="text-[11px] text-white/50 leading-snug mt-0.5 font-sans">
                          SOC-2 Type II, SSO, audit logging, and zero data leakage.
                        </p>
                      </div>
                    </a>
                    <a href="#tool-explorer" className="p-2.5 rounded-2xl hover:bg-white/[0.06] transition-colors group flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">
                          MCP Universal Gateway
                        </div>
                        <p className="text-[11px] text-white/50 leading-snug mt-0.5 font-sans">
                          One unified endpoint serving all Model Context Protocol tools.
                        </p>
                      </div>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Solutions Dropdown Trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveMenu('solutions')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button 
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-sans text-xs tracking-wide transition-all ${
                activeMenu === 'solutions' ? 'text-white bg-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              Solutions
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'solutions' ? 'rotate-180 text-white' : 'text-white/40'}`} />
            </button>

            {/* Solutions Mega Menu */}
            <AnimatePresence>
              {activeMenu === 'solutions' && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-2 w-[580px] rounded-3xl backdrop-blur-xl bg-[#09090b]/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/10 grid grid-cols-2 gap-4"
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-semibold text-white/40 px-2 py-1 mb-1">
                      For AI Agent Harnesses
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {[
                        { name: 'Claude 3.7 & Anthropic', desc: 'Pre-configured tool execution harness', icon: Bot },
                        { name: 'OpenAI Codex & GPT-4o', desc: 'Function calling with managed OAuth', icon: Sparkles },
                        { name: 'Cursor & OpenClaw', desc: 'One command integration for coding agents', icon: Terminal },
                        { name: 'LangChain & CrewAI', desc: 'Native BaseTool wrappers and agents', icon: Layers }
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <a key={idx} href="#workflows" className="p-2 rounded-xl hover:bg-white/[0.06] transition-colors flex items-center gap-2.5">
                            <Icon className="w-4 h-4 text-purple-400 shrink-0" />
                            <div>
                              <div className="text-xs text-white font-medium">{item.name}</div>
                              <div className="text-[10px] text-white/50 truncate font-sans">{item.desc}</div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  <div className="border-l border-white/10 pl-3">
                    <div className="text-[10px] uppercase tracking-widest font-semibold text-white/40 px-2 py-1 mb-1">
                      Role & Industry Toolkits
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {[
                        { title: 'Engineering & DevOps', role: 'GitHub, Sentry, Linear, Datadog', icon: Code2 },
                        { title: 'Customer Support', role: 'Zendesk, Intercom, Slack, Notion', icon: MessageSquare },
                        { title: 'Sales & Revenue Ops', role: 'HubSpot, Salesforce, Stripe, Gmail', icon: TrendingUp },
                        { title: 'Executive & Office', role: 'Calendar, Sheets, Docs, Email', icon: Briefcase }
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <a key={idx} href="#workflows" className="p-2 rounded-xl hover:bg-white/[0.06] transition-colors flex items-center gap-2.5">
                            <Icon className="w-4 h-4 text-blue-400 shrink-0" />
                            <div>
                              <div className="text-xs text-white font-medium">{item.title}</div>
                              <div className="text-[10px] text-white/50 truncate font-sans">{item.role}</div>
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

          <a href="#tool-explorer" className="px-3.5 py-1.5 rounded-full text-xs text-white/60 hover:text-white hover:bg-white/5 transition-all">
            Toolkits
          </a>
          <a href="#features" className="px-3.5 py-1.5 rounded-full text-xs text-white/60 hover:text-white hover:bg-white/5 transition-all">
            Philosophy
          </a>
          <a href="#security" className="px-3.5 py-1.5 rounded-full text-xs text-white/60 hover:text-white hover:bg-white/5 transition-all">
            Security
          </a>
        </div>

        {/* Right Action CTA Buttons */}
        <div className="flex items-center gap-2.5">
          <button 
            onClick={onOpenDemo}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs text-white/70 border border-white/10 hover:bg-white/10 hover:text-white transition-all shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Sandbox</span>
          </button>

          <button 
            onClick={onOpenDemo}
            className="px-5 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-white/90 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          >
            <span>START NOW</span>
            <ArrowRight className="w-3.5 h-3.5 text-black" />
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pointer-events-auto fixed inset-x-3 top-16 rounded-3xl backdrop-blur-xl bg-[#09090b]/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/10 flex flex-col gap-4 lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2 border-b border-white/10 pb-4">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-emerald-400">Navigation</span>
              <a 
                href="#hero" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm py-2 px-3 rounded-lg text-white/80 hover:bg-white/5 hover:text-white"
              >
                Overview
              </a>
              <a 
                href="#features" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm py-2 px-3 rounded-lg text-white/80 hover:bg-white/5 hover:text-white"
              >
                Why Composio
              </a>
              <a 
                href="#workflows" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm py-2 px-3 rounded-lg text-white/80 hover:bg-white/5 hover:text-white"
              >
                Agent Workflows
              </a>
              <a 
                href="#tool-explorer" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm py-2 px-3 rounded-lg text-white/80 hover:bg-white/5 hover:text-white"
              >
                Toolkits (1,000+ Tools)
              </a>
              <a 
                href="#security" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm py-2 px-3 rounded-lg text-white/80 hover:bg-white/5 hover:text-white"
              >
                Safety & Security
              </a>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo?.();
                }}
                className="w-full py-2.5 bg-white text-black font-bold text-xs rounded-full hover:bg-white/90 transition-all flex items-center justify-center gap-2"
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
