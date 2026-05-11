import { CheckCircle2, Circle, Clock, MinusCircle } from 'lucide-react';
import type { NodeStatus } from '../data/roadmap';

interface RoadmapNodeProps {
  id: string;
  label: string;
  status: NodeStatus;
  isOptional?: boolean;
  onClick: (id: string) => void;
  accentColor: string;
}

const StatusIcon = ({ status }: { status: NodeStatus }) => {
  if (status === 'done') return <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />;
  if (status === 'in-progress') return <Clock size={12} className="text-amber-500 shrink-0" />;
  if (status === 'skipped') return <MinusCircle size={12} className="text-slate-400 shrink-0" />;
  return <Circle size={12} className="text-slate-300 shrink-0" />;
};

const statusBase = 'group flex min-h-10 w-full cursor-pointer items-center gap-2 rounded-md border-2 px-3 py-2 text-left text-sm font-bold transition-all duration-150 focus:outline-none focus:ring-4';

const statusStyles: Record<NodeStatus, { background: string; border: string; color: string; ring: string }> = {
  default: {
    background: '#ffffff',
    border: '#0f172a',
    color: '#0f172a',
    ring: 'focus:ring-yellow-200',
  },
  done: {
    background: '#d1fae5',
    border: '#0f172a',
    color: '#064e3b',
    ring: 'focus:ring-emerald-100',
  },
  'in-progress': {
    background: '#fde68a',
    border: '#0f172a',
    color: '#78350f',
    ring: 'focus:ring-amber-100',
  },
  skipped: {
    background: '#e2e8f0',
    border: '#334155',
    color: '#475569',
    ring: 'focus:ring-slate-100',
  },
};

export function RoadmapNode({ id, label, status, isOptional, onClick }: RoadmapNodeProps) {
  const s = statusStyles[status];

  return (
    <button
      onClick={() => onClick(id)}
      className={`${statusBase} ${s.ring} ${status === 'skipped' ? 'line-through' : ''} shadow-[2px_2px_0_#0f172a] hover:-translate-y-0.5`}
      style={{
        background: s.background,
        borderColor: s.border,
        color: s.color,
      }}
    >
      <StatusIcon status={status} />
      <span className="min-w-0 flex-1 leading-snug">{label}</span>
      {isOptional && (
        <span className="shrink-0 rounded border border-slate-900 bg-slate-100 px-1.5 py-0.5 text-[10px] font-black uppercase text-slate-600">
          opt
        </span>
      )}
    </button>
  );
}
