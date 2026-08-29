/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FluidBackground } from './components/FluidBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntegrationsMarquee } from './components/IntegrationsMarquee';
import { WhyComposioSection } from './components/WhyComposioSection';
import { WorkflowsSection } from './components/WorkflowsSection';
import { InteractiveToolExplorer } from './components/InteractiveToolExplorer';
import { SecuritySection } from './components/SecuritySection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { ToolItem } from './types';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setDemoModalOpen(true);
  };

  const handleSelectTool = (tool: ToolItem) => {
    // Smooth scroll down to workbench if clicked
    const element = document.getElementById('tool-explorer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-white bg-[#050505] selection:bg-purple-500/30 selection:text-white font-sans">
      {/* Dynamic Ambient Fluid Morphing Shapes & Backdrop Glows */}
      <FluidBackground />

      {/* Glossy Floating Navigation Bar */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Page Layout Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section with Live Multi-Column Tool Execution Canvas */}
        <HeroSection onOpenDemo={handleOpenDemo} />

        {/* 2. Seamless Marquee & 1,000+ App Connectors */}
        <IntegrationsMarquee onSelectTool={handleSelectTool} />

        {/* 3. Why Composio — 4 Core Pillars with Interactive Live Simulators */}
        <WhyComposioSection onOpenDemo={handleOpenDemo} />

        {/* 4. One Product, Every Workflow (Composio For You + Developer Platform + 6 Agent Presets) */}
        <WorkflowsSection onOpenDemo={handleOpenDemo} />

        {/* 5. Interactive Tool Workbench & Parameterized Execution Runner */}
        <InteractiveToolExplorer onOpenDemo={handleOpenDemo} />

        {/* 6. First-in-Class Security & Holographic Geometric Shield */}
        <SecuritySection onOpenDemo={handleOpenDemo} />

        {/* 7. Call To Action — "Your agents are ready. Are you?" */}
        <CtaSection onOpenDemo={handleOpenDemo} />
      </main>

      {/* Comprehensive Modern Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Interactive Sandbox & Demo Walkthrough Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
}
