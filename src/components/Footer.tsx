import React from 'react';
import { 
  Terminal, 
  Bot, 
  Code2, 
  ShieldCheck, 
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
  MessageSquare,
  Youtube,
  Radio
} from 'lucide-react';

interface FooterProps {
  onOpenDemo?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo }) => {
  return (
    <footer className="relative bg-[#040405] border-t border-white/10 pt-16 pb-12 overflow-hidden z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-14">
          
          {/* Col 0: Brand Logo & Status */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-500 to-blue-500 p-[1px] flex items-center justify-center">
                  <div className="w-full h-full bg-[#08080c] rounded-[11px] flex items-center justify-center font-mono font-bold text-white text-sm">
                    C
                  </div>
                </div>
                <span className="font-display font-bold text-white text-base tracking-wider">
                  COMPOSIO
                </span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed font-sans">
                The modern tool execution platform built for autonomous agents and creative developer workflows.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 font-mono text-[11px] text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Col 1: Products */}
          <div className="flex flex-col gap-3 font-mono text-xs">
            <span className="text-white/40 uppercase tracking-wider font-semibold">PRODUCTS</span>
            <a href="#workflows" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
              <span>FOR YOU</span>
              <span className="text-[9px] px-1 py-0.2 rounded bg-purple-500/20 text-purple-300">NEW</span>
            </a>
            <a href="#workflows" className="text-white/70 hover:text-white transition-colors">DEVELOPER PLATFORM</a>
            <a href="#security" className="text-white/70 hover:text-white transition-colors">ENTERPRISE</a>
            <a href="#features" className="text-white/70 hover:text-white transition-colors">MCP GATEWAY</a>
            <a href="#workflows" className="text-white/70 hover:text-white transition-colors">CLI RUNNER</a>
            <button onClick={onOpenDemo} className="text-left text-white/70 hover:text-white transition-colors">PRICING</button>
          </div>

          {/* Col 2: Solutions */}
          <div className="flex flex-col gap-3 font-mono text-xs">
            <span className="text-white/40 uppercase tracking-wider font-semibold">SOLUTIONS</span>
            <a href="#workflows" className="text-white/70 hover:text-white transition-colors">OFFICE WORK</a>
            <a href="#workflows" className="text-white/70 hover:text-white transition-colors">SALES & CRM</a>
            <a href="#workflows" className="text-white/70 hover:text-white transition-colors">MARKETING & GROWTH</a>
            <a href="#workflows" className="text-white/70 hover:text-white transition-colors">PRODUCT & DESIGN</a>
            <a href="#workflows" className="text-white/70 hover:text-white transition-colors">CUSTOMER SUPPORT</a>
            <a href="#workflows" className="text-white/70 hover:text-white transition-colors">ENGINEERING & SRE</a>
          </div>

          {/* Col 3: For Agents */}
          <div className="flex flex-col gap-3 font-mono text-xs">
            <span className="text-white/40 uppercase tracking-wider font-semibold">FOR AGENTS</span>
            <a href="#hero" className="text-white/70 hover:text-white transition-colors">CLAUDE 3.7</a>
            <a href="#hero" className="text-white/70 hover:text-white transition-colors">OPENAI CODEX</a>
            <a href="#hero" className="text-white/70 hover:text-white transition-colors">OPENCLAW</a>
            <a href="#hero" className="text-white/70 hover:text-white transition-colors">CURSOR IDE</a>
            <a href="#hero" className="text-white/70 hover:text-white transition-colors">HERMES AGENT</a>
          </div>

          {/* Col 4: Resources */}
          <div className="flex flex-col gap-3 font-mono text-xs">
            <span className="text-white/40 uppercase tracking-wider font-semibold">RESOURCES</span>
            <a href="#features" className="text-white/70 hover:text-white transition-colors">DOCS & API</a>
            <a href="#tool-explorer" className="text-white/70 hover:text-white transition-colors">TOOLKITS (1,000+)</a>
            <a href="#features" className="text-white/70 hover:text-white transition-colors">AUTH GUIDES</a>
            <a href="#security" className="text-white/70 hover:text-white transition-colors">SECURITY REPO</a>
            <a href="#features" className="text-white/70 hover:text-white transition-colors">SDK RELEASES</a>
          </div>

          {/* Col 5: Company & Legal */}
          <div className="flex flex-col gap-3 font-mono text-xs">
            <span className="text-white/40 uppercase tracking-wider font-semibold">COMPANY</span>
            <a href="#security" className="text-white/70 hover:text-white transition-colors">TRUST CENTER</a>
            <button onClick={onOpenDemo} className="text-left text-white/70 hover:text-white transition-colors">CONTACT SALES</button>
            <button onClick={onOpenDemo} className="text-left text-white/70 hover:text-white transition-colors">CAREERS</button>
            <button onClick={onOpenDemo} className="text-left text-white/70 hover:text-white transition-colors">TERMS OF SERVICE</button>
            <button onClick={onOpenDemo} className="text-left text-white/70 hover:text-white transition-colors">PRIVACY POLICY</button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-white/50">
            © 2026 Composio Inc. Built with fluid motion & organic transparency.
          </span>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-white/50">
            <a href="https://github.com/composiohq/composio" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://x.com/composio" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/company/composiohq" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://discord.gg/composio" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Discord">
              <MessageSquare className="w-4 h-4" />
            </a>
            <a href="https://youtube.com/@Composio" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
