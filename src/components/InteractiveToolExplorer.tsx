import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Play, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Code2, 
  RotateCcw,
  Zap,
  ArrowRight,
  Filter,
  Check
} from 'lucide-react';
import { TOOLS_DATA } from '../data/composioData';
import { ToolItem } from '../types';

interface InteractiveToolExplorerProps {
  onOpenDemo?: () => void;
}

export const InteractiveToolExplorer: React.FC<InteractiveToolExplorerProps> = ({ onOpenDemo }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTool, setSelectedTool] = useState<ToolItem>(TOOLS_DATA[0]);
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [executionResult, setExecutionResult] = useState<any | null>(null);

  const categories = ['All', 'Developers', 'Communication', 'Productivity', 'Finance', 'DevOps', 'AI & Search'];

  const filteredTools = TOOLS_DATA.filter(tool => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.actionName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleExecuteTool = () => {
    setIsExecuting(true);
    setExecutionResult(null);

    setTimeout(() => {
      setIsExecuting(false);
      setExecutionResult({
        status: 200,
        statusText: 'OK',
        executionTimeMs: Math.floor(Math.random() * 40) + 25,
        timestamp: new Date().toISOString(),
        action: selectedTool.actionName,
        data: selectedTool.sampleOutput
      });
    }, 700);
  };

  return (
    <section id="tool-explorer" className="relative py-20 md:py-28 overflow-hidden z-10">
      
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono uppercase tracking-widest text-[11px]">INTERACTIVE TOOL WORKBENCH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            Explore & Test <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">Tool Execution</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-3 font-sans max-w-xl">
            Inspect real schemas, test parameterized inputs, and observe normalized execution responses in real-time.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="backdrop-blur-xl bg-white/[0.03] rounded-2xl p-4 mb-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 1,000+ tools (e.g. GitHub, Slack)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-white/40 focus:outline-none focus:border-purple-400/50"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg font-mono text-xs transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-bold shadow-sm'
                    : 'bg-white/5 text-white/60 hover:text-white border border-white/5 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Workbench Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Tool Catalog List (5 cols) */}
          <div className="lg:col-span-5 backdrop-blur-xl bg-white/[0.03] rounded-2xl border border-white/10 p-4 max-h-[560px] overflow-y-auto space-y-2">
            <div className="font-mono text-xs text-white/50 uppercase tracking-wider mb-2 px-1 flex items-center justify-between">
              <span>Matching Actions ({filteredTools.length})</span>
              <span className="text-[10px] text-purple-300">Select to test</span>
            </div>

            {filteredTools.map((tool) => {
              const isSelected = selectedTool.id === tool.id;
              return (
                <button
                  key={tool.id}
                  onClick={() => {
                    setSelectedTool(tool);
                    setExecutionResult(null);
                  }}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-purple-500/20 border-purple-400/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/20 text-white/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-purple-500/20 text-purple-300' : 'bg-white/5 text-white/50'}`}>
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                        {tool.name}
                        <span className="text-[9px] font-mono text-white/50 px-1 py-0.2 rounded bg-white/5">{tool.category}</span>
                      </div>
                      <div className="text-[11px] font-mono text-purple-300/90 truncate max-w-[220px]">
                        {tool.actionName}
                      </div>
                    </div>
                  </div>

                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-purple-400 translate-x-0.5' : 'text-white/30'}`} />
                </button>
              );
            })}

            {filteredTools.length === 0 && (
              <div className="p-8 text-center font-mono text-xs text-white/40">
                No tools matched &quot;{searchQuery}&quot;. Try &apos;Slack&apos; or &apos;GitHub&apos;.
              </div>
            )}
          </div>

          {/* Right Column: Interactive Runner & Schema Inspector (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="backdrop-blur-xl bg-white/[0.04] rounded-2xl border border-white/10 p-6 shadow-2xl">
              
              {/* Header */}
              <div className="flex items-start justify-between pb-4 mb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display text-xl font-bold text-white">
                      {selectedTool.name}
                    </h3>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                      {selectedTool.category}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-purple-300">{selectedTool.actionName}</span>
                  <p className="text-xs text-white/70 mt-2 font-sans leading-relaxed">
                    {selectedTool.description}
                  </p>
                </div>

                <button
                  onClick={handleExecuteTool}
                  disabled={isExecuting}
                  className="px-5 py-2.5 bg-white text-black font-bold text-xs rounded-full hover:bg-white/90 transition-all font-mono shrink-0 flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                  <Play className={`w-3.5 h-3.5 fill-black ${isExecuting ? 'animate-spin' : ''}`} />
                  <span>{isExecuting ? 'Executing...' : 'Run Tool Test'}</span>
                </button>
              </div>

              {/* Parameter Input Schema */}
              <div className="space-y-4 mb-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[11px] text-white/50 uppercase tracking-wider">
                      Parameterized Payload (Input)
                    </span>
                    <span className="text-[10px] font-mono text-white/40">Auto-validated schema</span>
                  </div>
                  <pre className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-purple-300 font-mono text-xs leading-relaxed overflow-x-auto">
                    {JSON.stringify(selectedTool.sampleInput, null, 2)}
                  </pre>
                </div>

                {/* Execution Output Panel */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[11px] text-white/50 uppercase tracking-wider flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      Execution Result (Output)
                    </span>
                    {executionResult && (
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">
                        {executionResult.status} {executionResult.statusText} · {executionResult.executionTimeMs}ms
                      </span>
                    )}
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/80 border border-white/10 font-mono text-xs overflow-x-auto min-h-[120px] flex items-center justify-center">
                    {isExecuting ? (
                      <div className="flex flex-col items-center gap-2 text-purple-300">
                        <Zap className="w-5 h-5 animate-bounce text-purple-400" />
                        <span className="text-xs font-mono">Executing in isolated microVM sandbox...</span>
                      </div>
                    ) : executionResult ? (
                      <pre className="w-full text-emerald-300 text-left text-xs leading-relaxed">
                        {JSON.stringify(executionResult, null, 2)}
                      </pre>
                    ) : (
                      <div className="text-white/40 text-center font-sans text-xs">
                        Click &apos;Run Tool Test&apos; above to trigger a simulated 200 OK tool execution.
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Footer Info */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Auto-handled OAuth & Rate Limits
                </span>
                <span className="text-white/40">Composio Universal Gateway</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
