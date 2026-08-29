import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Layers, 
  Key, 
  Lock,
  Zap,
  Play,
  RotateCcw
} from 'lucide-react';
import { FEATURE_PILLARS } from '../data/composioData';

interface WhyComposioSectionProps {
  onOpenDemo?: () => void;
}

export const WhyComposioSection: React.FC<WhyComposioSectionProps> = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [interactiveTestState, setInteractiveTestState] = useState<string>('idle');

  const currentPillar = FEATURE_PILLARS[activeTab];

  const handleTestPillar = () => {
    setInteractiveTestState('running');
    setTimeout(() => {
      setInteractiveTestState('completed');
    }, 1200);
  };

  return (
    <section id="features" className="relative py-20 md:py-28 overflow-hidden z-10">
      
      {/* Dynamic Background Fluid Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono uppercase tracking-widest text-xs">WHY COMPOSIO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-[1.15]">
            Your agents are smart. <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">Their tools should be too.</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl font-sans leading-relaxed">
            Eliminate static prompt clutter and fragile API bindings. Give your agents dynamic tool discovery and sandboxed execution.
          </p>
        </div>

        {/* Tab Selector Buttons Grid — Skill P1: role=tablist, aria-selected */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8" role="tablist" aria-label="Feature pillars">
          {FEATURE_PILLARS.map((pillar, idx) => (
            <button
              key={pillar.id}
              role="tab"
              aria-selected={activeTab === idx}
              aria-controls={`pillar-panel-${pillar.id}`}
              id={`pillar-tab-${pillar.id}`}
              onClick={() => {
                setActiveTab(idx);
                setInteractiveTestState('idle');
              }}
              className={`p-4 rounded-2xl text-left transition-all border relative overflow-hidden flex flex-col justify-between min-h-[110px] backdrop-blur-xl focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none ${
                activeTab === idx
                  ? 'bg-white/[0.08] border-purple-400/40 shadow-[0_10px_30px_rgba(168,85,247,0.15)]'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20 text-white/60'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md ${
                  activeTab === idx
                    ? 'bg-white text-black shadow-sm'
                    : 'bg-white/10 text-white/70'
                }`}>
                  {pillar.num}
                </span>
                <span className="text-xs font-mono text-white/40 uppercase" aria-hidden="true">{pillar.badge}</span>
              </div>

              <div>
                <div className={`font-mono text-sm font-bold mt-2 ${
                  activeTab === idx ? 'text-white' : 'text-white/80'
                }`}>
                  {pillar.subtitle}
                </div>
                <div className="text-xs text-white/50 truncate mt-0.5">{pillar.title}</div>
              </div>

              {activeTab === idx && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400"
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </div>

        {/* Active Pillar Showcase Window */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPillar.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="backdrop-blur-xl bg-white/[0.04] rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Content Column (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center font-mono text-sm font-bold text-purple-300">
                    {currentPillar.num}
                  </div>
                  <div>
                    <span className="font-mono text-xs text-purple-400 uppercase tracking-widest block">
                      {currentPillar.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                      {currentPillar.title}
                    </h3>
                  </div>
                </div>

                <p className="text-white/70 text-sm sm:text-base leading-relaxed font-sans mb-6">
                  {currentPillar.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-3 mb-8">
                  {currentPillar.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs sm:text-sm text-white/80 font-sans leading-snug">
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={handleTestPillar}
                  disabled={interactiveTestState === 'running'}
                  className="px-5 py-2.5 bg-white text-black font-bold text-xs rounded-full hover:bg-white/90 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                >
                  <Play className="w-3.5 h-3.5 fill-black" />
                  <span>
                    {interactiveTestState === 'running' 
                      ? 'Simulating...' 
                      : interactiveTestState === 'completed'
                      ? 'Test Completed ✓'
                      : 'Test This Pillar'}
                  </span>
                </button>

                <button
                  onClick={onOpenDemo}
                  className="bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-full font-mono text-xs text-white/70 hover:text-white border border-white/10 transition-all flex items-center gap-1.5"
                >
                  <span>Learn in Documentation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Visual/Interactive Code Runner Column (6 cols) */}
            <div className="lg:col-span-6">
              <div className="backdrop-blur-xl bg-black/70 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                
                {/* Code Window Header */}
                <div className="px-4 py-3 bg-white/[0.04] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="font-mono text-xs text-white/60 ml-2">
                      {activeTab === 0 ? 'composio_search.ts' : activeTab === 1 ? 'auto_healing.ts' : activeTab === 2 ? 'managed_auth.ts' : 'sandbox_runner.py'}
                    </span>
                  </div>

                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    Live Execution Demo
                  </span>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-white/90">
                  <pre className="text-purple-300/90 whitespace-pre-wrap">
                    {currentPillar.codeSample}
                  </pre>
                </div>

                {/* Interactive Simulation Output Box */}
                <div className="p-4 bg-black/90 border-t border-white/10 flex flex-col gap-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-white/40 uppercase tracking-wider flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      Runtime Response:
                    </span>
                    <span className="text-emerald-400 font-bold">
                      {interactiveTestState === 'completed' ? '200 OK · Executed in 38ms' : 'Status: Ready'}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 font-mono text-xs text-white/80">
                    {interactiveTestState === 'running' ? (
                      <span className="text-purple-300 animate-pulse">Resolving parameters and optimizing schema...</span>
                    ) : interactiveTestState === 'completed' ? (
                      <span className="text-emerald-300">
                        {activeTab === 0 && '✓ Intent matched: Returned 2 scoped tools with 84% token savings.'}
                        {activeTab === 1 && '✓ Auto-healed: Upstream Slack API schema resolved with normalized payload.'}
                        {activeTab === 2 && '✓ Managed Auth: OAuth 2.0 token validated with KMS encryption.'}
                        {activeTab === 3 && '✓ MicroVM: Executed in 41ms with isolated filesystem mount.'}
                      </span>
                    ) : (
                      <span className="text-white/40">Click &apos;Test This Pillar&apos; above to simulate live execution.</span>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
