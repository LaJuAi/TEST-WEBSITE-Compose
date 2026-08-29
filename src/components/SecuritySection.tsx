import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  Server, 
  CheckCircle2, 
  ExternalLink,
  ChevronDown,
  ShieldAlert,
  Zap
} from 'lucide-react';

interface SecuritySectionProps {
  onOpenDemo?: () => void;
}

export const SecuritySection: React.FC<SecuritySectionProps> = ({ onOpenDemo }) => {
  const [openAccordion, setOpenAccordion] = useState<number>(0);

  const securityItems = [
    {
      title: "Team controls & Scoped Permissions",
      subtitle: "Fine-grained data access controls and user token isolation",
      details: "Set strict organizational boundaries. Define per-agent access policies, rate limits, and restricted action whitelists to ensure no agent executes unapproved actions."
    },
    {
      title: "SOC 2 Type II & ISO 27001:2022",
      subtitle: "Enterprise-grade certified compliance and immutable audit logs",
      details: "Continuous automated security monitoring, third-party pen testing, end-to-end token encryption in transit and at rest with AES-256 GCM."
    },
    {
      title: "Bring Your Own Cloud (BYOC) & KMS",
      subtitle: "Customer-managed encryption keys and private VPC peering",
      details: "Deploy Composio execution runners in your private AWS VPC or Google Cloud Project. Keys never leave your perimeter, satisfying strict healthcare and fintech data sovereignty laws."
    }
  ];

  return (
    <section id="security" className="relative py-20 md:py-28 overflow-hidden z-10">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono uppercase tracking-widest text-[11px]">SAFETY & SECURITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight max-w-2xl">
            Protected from every angle with <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">first-in-class security</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl font-sans">
            Every tool call, delegated token, and sandbox container is fortified with zero-trust architecture.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Holographic Iridescent Geometric SVG Security Prism (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="backdrop-blur-xl bg-white/[0.04] w-full max-w-md h-[400px] rounded-3xl border border-white/10 p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] group">
              
              {/* Animated Holographic Gradients & SVG Morph */}
              <div 
                className="absolute inset-0 opacity-40 animate-morph-1 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.4) 0%, rgba(59, 130, 246, 0.3) 40%, rgba(16, 185, 129, 0.3) 80%, transparent 100%)',
                  filter: 'blur(40px)'
                }}
              />

              {/* Geometric Polygon Shield Visual */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-36 h-36 flex items-center justify-center mb-6">
                  {/* Rotating Outer Hexagon */}
                  <div className="absolute inset-0 border border-purple-400/40 rounded-3xl rotate-45 animate-spin duration-[25000ms]" />
                  <div className="absolute inset-2 border border-blue-400/30 rounded-3xl -rotate-12 animate-pulse" />
                  
                  {/* Glowing Shield Icon */}
                  <div className="relative w-20 h-20 rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                    <ShieldCheck className="w-10 h-10 text-purple-300" />
                  </div>
                </div>

                <div className="text-center font-mono space-y-1">
                  <span className="text-sm font-bold text-white tracking-wider block">
                    ZERO-TRUST ARCHITECTURE
                  </span>
                  <span className="text-xs text-purple-300">
                    AES-256 GCM · SOC-2 Type II · KMS Peering
                  </span>
                </div>
              </div>

              {/* Bottom live security telemetry */}
              <div className="absolute bottom-4 inset-x-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  100% Sandbox Isolation
                </span>
                <span className="text-white/50">SOC-2 Certified</span>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Accordion Controls (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between backdrop-blur-xl bg-white/[0.03] rounded-3xl p-6 sm:p-8 border border-white/10">
            <div className="space-y-4 mb-6">
              {securityItems.map((item, idx) => {
                const isOpen = openAccordion === idx;
                return (
                  <div 
                    key={idx}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                      isOpen
                        ? 'bg-white/[0.06] border-purple-400/40 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                        : 'bg-white/[0.02] border-white/5 hover:border-white/15'
                    }`}
                    onClick={() => setOpenAccordion(isOpen ? -1 : idx)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-purple-300/90 font-mono">
                          {item.subtitle}
                        </p>
                      </div>

                      <span className={`text-xl font-mono transition-transform duration-200 ${isOpen ? 'text-purple-300 rotate-180' : 'text-white/40'}`}>
                        <ChevronDown className="w-5 h-5" />
                      </span>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mt-3 pt-3 border-t border-white/10">
                            {item.details}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={onOpenDemo}
                className="bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full font-mono text-xs text-white border border-white/10 transition-all flex items-center gap-2"
              >
                <span>LEARN MORE ABOUT OUR SECURITY</span>
                <ExternalLink className="w-3.5 h-3.5 text-purple-300" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
