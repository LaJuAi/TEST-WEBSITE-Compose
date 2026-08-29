import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GitPullRequest, 
  MessageSquare, 
  FileText, 
  CheckSquare, 
  AlertTriangle, 
  CreditCard, 
  Mail, 
  Database, 
  Calendar, 
  Compass, 
  Zap, 
  Activity,
  ArrowUpRight,
  Search,
  Sparkles,
  Shield,
  Layers
} from 'lucide-react';
import { TOOLS_DATA } from '../data/composioData';
import { ToolItem } from '../types';

interface IntegrationsMarqueeProps {
  onSelectTool?: (tool: ToolItem) => void;
}

export const IntegrationsMarquee: React.FC<IntegrationsMarqueeProps> = ({ onSelectTool }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalTool, setActiveModalTool] = useState<ToolItem | null>(null);

  const categories = ['All', 'Developers', 'Communication', 'Productivity', 'Finance', 'DevOps', 'AI & Search'];

  const filteredTools = selectedCategory === 'All' 
    ? TOOLS_DATA 
    : TOOLS_DATA.filter(t => t.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GitPullRequest': return <GitPullRequest className="w-5 h-5 text-blue-400" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-emerald-400" />;
      case 'FileText': return <FileText className="w-5 h-5 text-purple-400" />;
      case 'CheckSquare': return <CheckSquare className="w-5 h-5 text-indigo-400" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5 text-rose-400" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5 text-amber-400" />;
      case 'Mail': return <Mail className="w-5 h-5 text-red-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-cyan-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-orange-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-cyan-300" />;
      case 'Activity': return <Activity className="w-5 h-5 text-violet-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const partnerLogos = [
    { name: 'agent.ai', tier: 'Partner' },
    { name: 'Zoom', tier: 'Ecosystem' },
    { name: 'Letta', tier: 'Harness' },
    { name: 'Glean', tier: 'Enterprise' },
    { name: 'HubSpot', tier: 'CRM' },
    { name: 'Anthropic Claude', tier: 'Harness' },
    { name: 'Cursor IDE', tier: 'Harness' },
    { name: 'OpenClaw', tier: 'Agent' },
    { name: 'Wabi', tier: 'Partner' },
    { name: 'Perplexity', tier: 'Search' }
  ];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden border-y border-white/10 bg-[#050505]/90">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-emerald-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 mb-3 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono uppercase tracking-widest text-[11px]">INTEGRATED ECOSYSTEM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white tracking-tight">
            Seamless Execution Across <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">1,000+ Tools</span>
          </h2>
          <p className="text-white/60 text-sm max-w-xl mt-2 font-sans">
            Ready-to-use schemas with automatic token refreshes, rate limiters, and payload transformers.
          </p>
        </div>

        {/* Partner Ticker Loop */}
        <div className="w-full overflow-hidden py-3 mb-10">
          <div className="flex gap-4 animate-fluid-float">
            <div className="flex shrink-0 items-center justify-around gap-6 min-w-full">
              {partnerLogos.map((p, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/[0.03] backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/10 flex items-center gap-2.5 hover:border-white/20 transition-all cursor-default"
                >
                  <span className="w-2 h-2 rounded-full bg-purple-400/80" />
                  <span className="font-mono text-xs font-semibold text-white/90">{p.name}</span>
                  <span className="text-[10px] font-mono text-white/40 px-1.5 py-0.2 rounded bg-white/5">{p.tier}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Selector Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Grid of Tool Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTools.map((tool) => (
            <motion.div
              key={tool.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                setActiveModalTool(tool);
                onSelectTool?.(tool);
              }}
              className="backdrop-blur-xl bg-white/[0.04] p-4 rounded-2xl border border-white/10 hover:border-purple-400/40 transition-all cursor-pointer group flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-colors">
                    {getIcon(tool.iconName)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {tool.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-white/70 border border-white/10">
                        {tool.badge}
                      </span>
                    )}
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-purple-300 transition-colors" />
                  </div>
                </div>

                <h3 className="font-mono text-sm font-bold text-white group-hover:text-purple-300 transition-colors mb-1">
                  {tool.name}
                </h3>
                <p className="text-xs text-white/60 line-clamp-2 leading-relaxed font-sans mb-3">
                  {tool.description}
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                <span className="text-purple-300/90 truncate font-semibold">
                  {tool.actionName}
                </span>
                <span className="text-white/40 text-[10px]">99.8% SLA</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Tool Schema Inspector Modal */}
      <AnimatePresence>
        {activeModalTool && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-[#09090b]/95 backdrop-blur-xl max-w-xl w-full rounded-3xl p-6 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalTool(null)}
                className="absolute top-5 right-5 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/10"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-400/20">
                  {getIcon(activeModalTool.iconName)}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                    {activeModalTool.name}
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                      {activeModalTool.category}
                    </span>
                  </h3>
                  <p className="font-mono text-xs text-white/50 mt-0.5">{activeModalTool.actionName}</p>
                </div>
              </div>

              <p className="text-xs text-white/70 leading-relaxed font-sans mb-4">
                {activeModalTool.description}
              </p>

              {/* Sample Input & Output JSON tabs */}
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-white/40 uppercase tracking-wider block mb-1">
                    Sample JSON Parameters
                  </span>
                  <pre className="p-3 rounded-xl bg-black/60 border border-white/10 text-purple-300 overflow-x-auto text-[11px] leading-relaxed">
                    {JSON.stringify(activeModalTool.sampleInput, null, 2)}
                  </pre>
                </div>

                <div>
                  <span className="text-[10px] text-white/40 uppercase tracking-wider block mb-1">
                    Normalized Execution Output (200 OK)
                  </span>
                  <pre className="p-3 rounded-xl bg-black/60 border border-white/10 text-emerald-300 overflow-x-auto text-[11px] leading-relaxed">
                    {JSON.stringify(activeModalTool.sampleOutput, null, 2)}
                  </pre>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-white/60 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  Auto-managed OAuth & token refresh
                </span>
                <button
                  onClick={() => setActiveModalTool(null)}
                  className="px-5 py-2 rounded-full font-mono text-xs font-bold bg-white text-black hover:bg-white/90 transition-all"
                >
                  Close Inspector
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
