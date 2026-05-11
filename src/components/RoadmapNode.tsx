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

const statusBase = 'group flex items-center gap-2 px-3 py-2.5 rounded-xl text-left text-sm font-medium transition-all duration-150 cursor-pointer w-full';

const statusStyles: Record<NodeStatus, { background: string; border: string; color: string; shadow: string }> = {
  default: {
    background: 'rgba(255,255,255,0.45)',
    border: '1px solid rgba(255,255,255,0.75)',
    color: '#334155',
    shadow: '0 1px 4px rgba(0,0,0,0.06)',
  },
  done: {
    background: 'rgba(209,250,229,0.5)',
    border: '1px solid rgba(110,231,183,0.6)',
    color: '#065f46',
    shadow: '0 1px 4px rgba(16,185,129,0.1)',
  },
  'in-progress': {
    background: 'rgba(254,243,199,0.5)',
    border: '1px solid rgba(252,211,77,0.6)',
    color: '#92400e',
    shadow: '0 1px 4px rgba(245,158,11,0.1)',
  },
  skipped: {
    background: 'rgba(241,245,249,0.35)',
    border: '1px solid rgba(226,232,240,0.5)',
    color: '#94a3b8',
    shadow: 'none',
  },
};

export function RoadmapNode({ id, label, status, isOptional, onClick }: RoadmapNodeProps) {
  const s = statusStyles[status];

  return (
    <button
      onClick={() => onClick(id)}
      className={`${statusBase} ${status === 'skipped' ? 'line-through' : ''}`}
      style={{
        background: s.background,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: s.border,
        color: s.color,
        boxShadow: s.shadow,
      }}
      onMouseEnter={e => {
        if (status === 'default') {
          (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.7)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
        }
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.background = s.background;
        (e.currentTarget as HTMLElement).style.boxShadow = s.shadow;
      }}
    >
      <StatusIcon status={status} />
      <span className="leading-snug flex-1 min-w-0">{label}</span>
      {isOptional && (
        <span
          className="shrink-0 text-[10px] font-normal px-1.5 py-0.5 rounded-md"
          style={{ background: 'rgba(0,0,0,0.06)', color: '#94a3b8' }}
        >
          opt
        </span>
      )}
    </button>
  );
}
