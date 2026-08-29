import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Search, 
  CheckCircle2, 
  Play, 
  RotateCcw, 
  Zap, 
  Shield, 
  ExternalLink, 
  ArrowRight,
  GitPullRequest,
  MessageSquare,
  AlertCircle,
  Code2,
  FileCode2,
  Cpu,
  Layers
} from 'lucide-react';

interface HeroSectionProps {
  onOpenDemo?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo }) => {
  const [activeScenario, setActiveScenario] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simStep, setSimStep] = useState<number>(3); // 0: search, 1: auth, 2: execute, 3: sandbox

  const scenarios = [
    {
      title: "Sentry Triage & Linear Issue",
      prompt: "Check Sentry for unresolved P0 errors and file Linear tickets for the frontend team.",
      tool1: "SENTRY_GET_LATEST_ISSUES",
      tool2: "LINEAR_CREATE_ISSUE",
      payloadResult: "201 CREATED · Issue ENG-4912 created",
      codeSnippet: `issues = run_composio_tool('SENTRY_LIST_ISSUES', project='api-prod')
for issue in issues:
  if 'P0' in issue['tags']:
    run_composio_tool('LINEAR_CREATE_ISSUE', title=issue['title'], team_id='ENG')`
    },
    {
      title: "GitHub PR & Slack Notification",
      prompt: "Review PR #842, merge branch, and announce the release in #engineering Slack channel.",
      tool1: "GITHUB_MERGE_PULL_REQUEST",
      tool2: "SLACK_POST_MESSAGE",
      payloadResult: "200 OK · Merged #842 & posted to #eng",
      codeSnippet: `pr = run_composio_tool('GITHUB_GET_PR', pr_id=842)
if pr['checks_passed']:
  run_composio_tool('GITHUB_MERGE_PR', pr_id=842)
  run_composio_tool('SLACK_POST_MESSAGE', channel='#eng', text='PR #842 deployed!')`
    },
    {
      title: "Stripe Revenue Report to Notion",
      prompt: "Calculate August MRR from Stripe and append executive summary to Notion roadmap.",
      tool1: "STRIPE_GET_CUSTOMER_BALANCE",
      tool2: "NOTION_CREATE_PAGE",
      payloadResult: "200 OK · Notion executive summary synced",
      codeSnippet: `mrr_data = run_composio_tool('STRIPE_GET_MRR', month='2026-08')
run_composio_tool('NOTION_CREATE_PAGE', title='August MRR Summary', data=mrr_data)`
    }
  ];

  const handleRunSimulation = (idx: number) => {
    setActiveScenario(idx);
    setIsSimulating(true);
    setSimStep(0);

    setTimeout(() => setSimStep(1), 600);
    setTimeout(() => setSimStep(2), 1400);
    setTimeout(() => {
      setSimStep(3);
      setIsSimulating(false);
    }, 2200);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Pill */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 hover:border-white/20 transition-colors cursor-pointer group backdrop-blur-md"
            onClick={onOpenDemo}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/80 font-medium">Just-In-Time Tool Execution for AI Agents</span>
            <span className="text-purple-400 font-bold group-hover:translate-x-0.5 transition-transform">→</span>
          </motion.div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display leading-[1.08] mb-6 text-white"
          >
            Everything your agents <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              need to take action
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-sans"
          >
            1,000+ integrations with just-in-time tool calls, secure delegated auth, 
            sandboxed microVMs, and parallel execution across Claude, Cursor, and any LLM harness.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4"
        >
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-7 py-3 bg-white text-black text-xs font-bold rounded-full hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            <span>GET STARTED FOR FREE</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>

          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 rounded-full transition-all flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <Play className="w-3.5 h-3.5 text-purple-400 fill-purple-400" />
            <span>INTERACTIVE DEMO</span>
          </button>
        </motion.div>

        <p className="text-center text-xs text-white/40 mb-14 font-mono">
          100k free tool calls/mo · Zero credit card required · Connect in 5 minutes
        </p>

        {/* Live Interactive Agent Simulation Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Scenario Picker Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/50 uppercase tracking-widest font-semibold flex items-center gap-1.5 font-mono">
                <Zap className="w-3.5 h-3.5 text-purple-400" />
                Live Agent Harness:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {scenarios.map((sc, i) => (
                  <button
                    key={i}
                    onClick={() => handleRunSimulation(i)}
                    className={`text-xs px-3.5 py-1 rounded-full transition-all flex items-center gap-1.5 font-mono ${
                      activeScenario === i 
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-400/40 shadow-[0_0_12px_rgba(168,85,247,0.3)] font-semibold'
                        : 'bg-white/5 text-white/60 hover:text-white border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span>{sc.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleRunSimulation(activeScenario)}
              disabled={isSimulating}
              className="text-xs text-white/70 hover:text-white flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors font-mono"
            >
              <RotateCcw className={`w-3 h-3 ${isSimulating ? 'animate-spin' : ''}`} />
              <span>{isSimulating ? 'Executing Tool Chain...' : 'Replay Simulation'}</span>
            </button>
          </div>

          {/* Glass Canvas Frame */}
          <div className="backdrop-blur-xl bg-white/[0.04] rounded-3xl p-4 sm:p-6 lg:p-7 border border-white/10 relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
            
            {/* Ambient Background Aura inside Canvas */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Top Toolbar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                </div>
                <span className="font-mono text-xs text-white/80 flex items-center gap-2">
                  <span className="text-white/40">session_id:</span>
                  <span className="text-purple-300 font-semibold">sess_live_9x2kLm7</span>
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-white/60">
                <span className="hidden sm:inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  1,000+ Tools Loaded
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80">
                  Latency: 38ms
                </span>
              </div>
            </div>

            {/* 3-Column Visual Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
              
              {/* Left Column: composio_search_tools (3 cols) */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="glass-panel rounded-2xl p-4 border border-white/10 relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5" />
                      composio_search_tools
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">JIT Intent</span>
                  </div>

                  {/* Search Query Input Display */}
                  <div className="glass-panel bg-black/40 rounded-xl p-2.5 mb-3 flex items-center gap-2 border border-white/10">
                    <Search className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="font-mono text-xs text-slate-300 truncate">
                      {scenarios[activeScenario].prompt}
                    </span>
                  </div>

                  {/* Discovered Tools List */}
                  <div className="space-y-2">
                    <div className={`p-2.5 rounded-xl border transition-all ${
                      simStep >= 0 
                        ? 'bg-cyan-500/10 border-cyan-400/30 text-white' 
                        : 'bg-white/5 border-white/5 text-slate-400'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-cyan-300">
                          {scenarios[activeScenario].tool1}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <p className="text-[10px] font-mono text-slate-400 mt-1">
                        Schema matched with 99.4% intent confidence
                      </p>
                    </div>

                    <div className={`p-2.5 rounded-xl border transition-all ${
                      simStep >= 1 
                        ? 'bg-indigo-500/10 border-indigo-400/30 text-white' 
                        : 'bg-white/5 border-white/5 text-slate-400'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-indigo-300">
                          {scenarios[activeScenario].tool2}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                      </div>
                      <p className="text-[10px] font-mono text-slate-400 mt-1">
                        Parameters pruned (reduced tokens by 84%)
                      </p>
                    </div>
                  </div>

                  {/* Execution Plan Step */}
                  <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-[10px] font-mono">
                    <div className="bg-white/5 p-2 rounded-lg">
                      <span className="text-slate-500 uppercase block">Plan:</span>
                      <span className="text-slate-300">1. Authenticate user</span>
                      <span className="text-slate-300 block">2. Execute parallel</span>
                    </div>
                    <div className="bg-white/5 p-2 rounded-lg">
                      <span className="text-slate-500 uppercase block">Guardrails:</span>
                      <span className="text-emerald-400">✓ Token refresh ok</span>
                      <span className="text-emerald-400 block">✓ Scope restricted</span>
                    </div>
                  </div>
                </div>

                {/* Left Bottom: Connection Manager */}
                <div className="glass-panel rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] text-purple-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      composio_manage_auth
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">CONNECTED</span>
                  </div>

                  <div className="space-y-2 font-mono text-xs">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-black/30 border border-white/5">
                      <span className="text-slate-300">OAuth 2.0 Provider</span>
                      <span className="text-cyan-300 font-bold">Auto Managed</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-black/30 border border-white/5">
                      <span className="text-slate-300">KMS Encryption</span>
                      <span className="text-emerald-400 font-bold">AES-256 GCM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column: Agent Chat Window (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="glass-panel rounded-2xl p-4 border border-white/15 bg-black/50 flex flex-col h-[480px]">
                  
                  {/* Chat Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                        C
                      </div>
                      <div>
                        <div className="font-mono text-xs font-semibold text-white flex items-center gap-1.5">
                          Claude 3.7 Sonnet
                          <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-white/10 text-slate-300">Cowork</span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">Agent Harness v2.4</div>
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  {/* Chat Messages Log */}
                  <div className="flex-1 overflow-y-auto space-y-3 font-sans text-xs pr-1">
                    {/* User Prompt */}
                    <div className="flex gap-2.5 items-start">
                      <div className="w-5 h-5 rounded-md bg-white/10 font-mono text-[10px] flex items-center justify-center text-slate-300 shrink-0">
                        U
                      </div>
                      <div className="glass-panel p-3 rounded-2xl rounded-tl-sm text-slate-200 border-white/10 bg-white/[0.04] max-w-[90%]">
                        {scenarios[activeScenario].prompt}
                      </div>
                    </div>

                    {/* Agent Thinking & Tool Call Invocation */}
                    <div className="flex gap-2.5 items-start">
                      <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-amber-600 to-orange-500 font-mono text-[10px] flex items-center justify-center text-white shrink-0">
                        A
                      </div>
                      <div className="space-y-2 max-w-[95%]">
                        <div className="text-slate-300 leading-relaxed">
                          I will invoke the required Composio tools to retrieve context and complete the workflow.
                        </div>

                        {/* Tool Call Chips */}
                        <div className="font-mono text-[11px] space-y-1.5">
                          <div className="p-2 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-200 flex items-center justify-between">
                            <span className="flex items-center gap-1.5">
                              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                              call {scenarios[activeScenario].tool1}()
                            </span>
                            <span className="text-[10px] text-emerald-400 font-bold">200 OK</span>
                          </div>

                          <div className="p-2 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200 flex items-center justify-between">
                            <span className="flex items-center gap-1.5">
                              <GitPullRequest className="w-3.5 h-3.5 text-indigo-400" />
                              call {scenarios[activeScenario].tool2}()
                            </span>
                            <span className="text-[10px] text-emerald-400 font-bold">200 OK</span>
                          </div>
                        </div>

                        {/* Agent Final Output */}
                        <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-xs">
                          ✓ Workflow complete: {scenarios[activeScenario].payloadResult}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Input Bar */}
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
                    <input 
                      type="text" 
                      readOnly 
                      value="Interactive agent harness connected. Ready for action." 
                      className="flex-1 bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-slate-400 focus:outline-none"
                    />
                    <button 
                      onClick={() => handleRunSimulation(activeScenario)}
                      className="p-2 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors"
                      title="Run prompt"
                    >
                      <Play className="w-3.5 h-3.5 fill-slate-950" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Execution Output & Sandbox MicroVM (3 cols) */}
              <div className="lg:col-span-3 flex flex-col gap-4">
                
                {/* Execute Tool Result */}
                <div className="glass-panel rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      composio_execute_tool
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">200 OK</span>
                  </div>

                  <div className="bg-black/60 rounded-xl p-3 border border-white/10 font-mono text-[11px] space-y-1.5 text-slate-300">
                    <div className="flex justify-between text-slate-400">
                      <span>status:</span>
                      <span className="text-emerald-400">success</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>duration:</span>
                      <span className="text-cyan-300">42ms</span>
                    </div>
                    <div className="pt-2 border-t border-white/10 text-[10px] text-slate-400 truncate">
                      {scenarios[activeScenario].payloadResult}
                    </div>
                  </div>
                </div>

                {/* Dynamic Sandbox Python Runner */}
                <div className="glass-panel rounded-2xl p-4 border border-white/10 flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] text-amber-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      composio_sandbox
                    </span>
                    <span className="text-[9px] font-mono text-slate-400">Python 3.11</span>
                  </div>

                  {/* MicroVM Grid Activity Indicator */}
                  <div className="flex items-center gap-1.5 py-1.5 mb-2">
                    <div className="grid grid-cols-8 gap-1">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-[2px] transition-colors duration-300 ${
                            i < (simStep + 1) * 4 ? 'bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.6)]' : 'bg-white/10'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 ml-auto">microVM · hot</span>
                  </div>

                  {/* Sandbox Code Block */}
                  <div className="bg-black/80 rounded-xl p-2.5 border border-white/10 overflow-hidden font-mono text-[10px] text-slate-300 leading-relaxed">
                    <pre className="text-cyan-300/90 overflow-x-auto">
                      {scenarios[activeScenario].codeSnippet}
                    </pre>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
