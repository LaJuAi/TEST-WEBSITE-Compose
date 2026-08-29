export interface ToolItem {
  id: string;
  name: string;
  category: 'Developers' | 'Communication' | 'Productivity' | 'Finance' | 'DevOps' | 'AI & Search';
  description: string;
  actionName: string;
  iconUrl?: string;
  iconName: string;
  badge?: string;
  popularity?: number;
  sampleInput: Record<string, any>;
  sampleOutput: Record<string, any>;
}

export interface AgentPreset {
  id: string;
  name: string;
  role: string;
  description: string;
  tools: string[];
  activeTask: string;
  status: 'active' | 'executing' | 'standby';
  recentEvent: string;
}

export interface FeaturePillar {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  codeSample?: string;
  badge: string;
}

export interface ExecutionLog {
  id: string;
  timestamp: string;
  agent: string;
  tool: string;
  status: '200 OK' | '401 AUTH_REQUIRED' | 'PENDING' | 'SANDBOX_EXEC';
  durationMs: number;
  payload: string;
}
