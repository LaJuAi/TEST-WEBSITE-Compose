import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Code2, 
  Check, 
  Copy, 
  Play, 
  ArrowRight, 
  Bot, 
  Sparkles, 
  GitPullRequest, 
  MessageSquare, 
  FileText, 
  CreditCard, 
  Activity, 
  Zap, 
  ExternalLink,
  Layers
} from 'lucide-react';
import { CODE_SNIPPETS, AGENT_PRESETS } from '../data/composioData';

interface WorkflowsSectionProps {
  onOpenDemo?: () => void;
}

export const WorkflowsSection: React.FC<WorkflowsSectionProps> = ({ onOpenDemo }) => {
  const [selectedLang, setSelectedLang] = useState<'python' | 'typescript' | 'langchain' | 'crewai'>('python');
  const [copied, setCopied] = useState(false);
  const [activeBubble, setActiveBubble] = useState<number>(0);
  const [activeAgentFilter, setActiveAgentFilter] = useState<string>('all');

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[selectedLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const actionBubbles = [
    { title: "Create PR and notify Slack #eng", apps: ['github', 'slack'], label: "Coding Agent" },
    { title: "File high-priority bug for Sentry trace", apps: ['sentry', 'linear'], label: "DevOps" },
    { title: "Draft replies to VIP inbox emails", apps: ['gmail', 'googlecalendar'], label: "Executive" },
    { title: "Pull Stripe MRR and generate summary", apps: ['stripe', 'notion'], label: "Finance" },
    { title: "Deploy canary release to staging", apps: ['vercel', 'slack'], label: "Deployment" },
    { title: "Scrape competitor docs and update DB", apps: ['firecrawl', 'notion'], label: "Research" }
  ];

  return (
    <section id="workflows" className="relative py-20 md:py-28 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-start gap-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono uppercase tracking-widest text-[11px]">ZERO CODE TO FULL CONTROL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            One product, <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">every workflow</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl font-sans">
            Whether you are supercharging your daily desktop coding agent or orchestrating enterprise agent clusters in the cloud.
          </p>
        </div>

        {/* Big Card 1: Composio FOR YOU */}
        <div className="backdrop-blur-xl bg-white/[0.04] rounded-3xl p-6 sm:p-10 border border-white/10 mb-10 overflow-hidden relative shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    Composio
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40 font-semibold">
                    FOR YOU
                  </span>
                </div>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-sans mb-4">
                  Turn Claude Code, Cursor, OpenClaw, or any MCP client into an autonomous agent that executes across all your SaaS apps. Go from asking questions to shipping completed work.
                </p>

                <p className="text-white/50 text-xs sm:text-sm leading-relaxed font-sans mb-6">
                  Every tool comes production-ready: authenticated, schema-optimized, and continuously tested against upstream API changes. No manual boilerplate required.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  onClick={onOpenDemo}
                  className="px-6 py-3 bg-white text-black font-bold text-xs rounded-full hover:bg-white/90 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.15)] font-mono"
                >
                  <span>CONNECT YOUR CODING AGENT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Terminal & Action Bubbles Matrix */}
            <div className="lg:col-span-7 relative">
              
              {/* Terminal Frame */}
              <div className="backdrop-blur-xl bg-black/70 rounded-2xl border border-white/10 overflow-hidden shadow-2xl p-4">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    <span className="font-mono text-xs text-white/60 ml-2">
                      dev — ✻ Claude Code CLI — claude-3-7-sonnet
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                    MCP Active
                  </span>
                </div>

                {/* Interactive Action Prompt Bubbles */}
                <div className="space-y-2 mb-4">
                  <div className="font-mono text-[11px] text-white/50 mb-2">
                    Click any action to simulate multi-tool prompt:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {actionBubbles.map((bubble, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveBubble(i)}
                        className={`p-2.5 rounded-xl text-left font-mono text-xs transition-all border flex items-center justify-between backdrop-blur-md ${
                          activeBubble === i
                            ? 'bg-purple-500/20 border-purple-400/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                            : 'bg-white/[0.03] border-white/10 text-white/80 hover:border-white/20'
                        }`}
                      >
                        <span className="truncate pr-2 font-sans font-medium text-xs">{bubble.title}</span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-purple-300 shrink-0">
                          {bubble.label}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Prompt Execution Output Simulation */}
                <div className="p-3.5 rounded-xl bg-black/80 border border-white/10 font-mono text-xs text-white/90">
                  <div className="flex items-center gap-2 text-purple-400 mb-2">
                    <span>❯</span>
                    <span className="text-white font-semibold">
                      {actionBubbles[activeBubble].title}
                    </span>
                    <span className="w-1.5 h-3 bg-purple-400 animate-pulse ml-auto" />
                  </div>
                  <div className="text-[11px] text-emerald-300 space-y-1">
                    <div>✓ Intent resolved: Identified 2 scoped tool actions.</div>
                    <div>✓ Executed delegated auth & microVM runner in 34ms.</div>
                    <div className="text-white/40">Response payload synced with harness environment.</div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Big Card 2: Composio PLATFORM (Developer SDKs & 6 Agent Presets) */}
        <div className="backdrop-blur-xl bg-white/[0.04] rounded-3xl p-6 sm:p-10 border border-white/10 overflow-hidden relative shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
            
            {/* Left SDK Description & Language Switcher */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    Composio
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 font-semibold">
                    PLATFORM
                  </span>
                </div>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-sans mb-4">
                  Your agent has the intelligence. Now give it execution power. Go from a simple chatbot to a general-purpose action engine in 5 lines of code.
                </p>

                {/* Language Switcher Tabs */}
                <div className="flex flex-wrap gap-1.5 mb-4 p-1 rounded-xl bg-black/50 border border-white/10 w-fit backdrop-blur-md">
                  {(['python', 'typescript', 'langchain', 'crewai'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLang(lang)}
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all ${
                        selectedLang === lang
                          ? 'bg-white text-black font-bold shadow-sm'
                          : 'text-white/50 hover:text-white'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenDemo}
                  className="px-6 py-2.5 bg-white text-black font-bold text-xs rounded-full hover:bg-white/90 transition-all flex items-center gap-2 font-mono"
                >
                  <span>EXPLORE DEVELOPER DOCS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Multi-Language Code Snippet Window */}
            <div className="lg:col-span-7">
              <div className="backdrop-blur-xl bg-black/80 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                
                {/* Code Window Header */}
                <div className="px-4 py-3 bg-white/[0.04] border-b border-white/10 flex items-center justify-between">
                  <span className="font-mono text-xs text-white/60 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-purple-400" />
                    main.{selectedLang === 'python' || selectedLang === 'langchain' || selectedLang === 'crewai' ? 'py' : 'ts'}
                  </span>

                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 font-mono text-xs text-white/60 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/10 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code Preformatted Block */}
                <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed overflow-x-auto text-purple-300/90 max-h-[300px] overflow-y-auto">
                  <pre className="whitespace-pre">
                    {CODE_SNIPPETS[selectedLang]}
                  </pre>
                </div>

              </div>
            </div>

          </div>

          {/* 6 Pre-configured Agent Cards Grid */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs text-white/50 uppercase tracking-wider flex items-center gap-2">
                <Bot className="w-4 h-4 text-purple-400" />
                Active Agent Templates (Ready to Deploy)
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                6 MicroVM Instances Healthy
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {AGENT_PRESETS.map((agent) => (
                <div
                  key={agent.id}
                  className="p-4 rounded-2xl border border-white/10 hover:border-purple-400/40 transition-all flex flex-col justify-between group bg-white/[0.03] backdrop-blur-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-mono text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                        {agent.name}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    </div>

                    <p className="text-xs text-white/60 font-sans line-clamp-2 mb-3">
                      {agent.description}
                    </p>

                    {/* Tools badges */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {agent.tools.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-white/70 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-purple-300 truncate max-w-[200px]">
                      {agent.activeTask}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-purple-300 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
