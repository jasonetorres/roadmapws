import { useEffect, useRef, useState } from 'react';
import {
  X, CheckCircle2, Clock, MinusCircle, Circle,
  ChevronDown, BookOpen, Keyboard, ExternalLink, ChevronRight, BrainCircuit,
} from 'lucide-react';
import type { NodeStatus } from '../data/roadmap';
import { curriculum } from '../data/curriculum';

interface TopicPanelProps {
  topicId: string;
  label: string;
  sectionTitle: string;
  accentColor: string;
  isOptional?: boolean;
  status: NodeStatus;
  onStatusChange: (status: NodeStatus) => void;
  onClose: () => void;
}

const statusOptions: { value: NodeStatus; label: string; icon: React.ReactNode; color: string }[] = [
  { value: 'default',      label: 'Pending',     icon: <Circle size={12} />,       color: 'text-slate-500' },
  { value: 'done',         label: 'Done',        icon: <CheckCircle2 size={12} />, color: 'text-emerald-600' },
  { value: 'in-progress',  label: 'In Progress', icon: <Clock size={12} />,        color: 'text-amber-600' },
  { value: 'skipped',      label: 'Skipped',     icon: <MinusCircle size={12} />,  color: 'text-slate-400' },
];

type Tab = 'learn' | 'resources';

export function TopicPanel({
  topicId, label, sectionTitle, accentColor, isOptional,
  status, onStatusChange, onClose,
}: TopicPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const data = curriculum[topicId];
  const [tab, setTab] = useState<Tab>('learn');
  const [statusOpen, setStatusOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    panelRef.current?.focus();
    setTab('learn');
    setStatusOpen(false);
  }, [topicId]);

  const current = statusOptions.find(s => s.value === status) ?? statusOptions[0];

  const resources = data?.resources ?? [];
  const hasResources = resources.length > 0;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        tabIndex={-1}
        className="fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-[540px] flex-col overflow-hidden border-l border-slate-200 bg-white shadow-2xl outline-none"
      >
        {/* Top bar */}
        <div className="flex shrink-0 items-center gap-2 border-b border-slate-200 px-5 py-3">
          {/* Tabs */}
          <div className="flex items-center gap-1 flex-1">
            <button
              onClick={() => setTab('learn')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                tab === 'learn'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
              }`}
            >
              <BookOpen size={13} />
              Learn
            </button>
            <button
              onClick={() => setTab('resources')}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                tab === 'resources'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
              }`}
            >
              <BrainCircuit size={13} />
              Resources
            </button>
          </div>

          {/* Status dropdown */}
          <div className="relative">
            <button
              onClick={() => setStatusOpen(p => !p)}
              className={`flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white py-1.5 pl-2.5 pr-2 text-xs font-medium transition-colors hover:bg-slate-50 ${current.color}`}
            >
              {current.icon}
              {current.label}
              <ChevronDown size={11} className="text-slate-400" />
            </button>
            {statusOpen && (
              <div className="absolute right-0 top-full z-10 mt-1 w-40 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl">
                {statusOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => { onStatusChange(opt.value); setStatusOpen(false); }}
                    className={`w-full flex items-center gap-2 px-3 py-2.5 text-sm transition-colors hover:bg-slate-50 ${
                      status === opt.value ? 'bg-slate-50 font-medium' : ''
                    } ${opt.color}`}
                  >
                    {opt.icon}
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={16} />
          </button>
        </div>

        {/* Title */}
        <div className="shrink-0 border-b border-slate-200 bg-slate-50 px-6 pb-4 pt-5">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span
              className="rounded-full px-2.5 py-1 text-xs font-semibold"
              style={{ color: accentColor, background: `${accentColor}15` }}
            >
              {sectionTitle}
            </span>
            {isOptional && (
              <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-500">
                optional
              </span>
            )}
          </div>
          <h2 className="text-2xl font-bold leading-tight text-slate-950">{label}</h2>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {tab === 'learn' && data && (
            <div className="px-6 py-5 space-y-6">
              {/* Overview */}
              <p className="text-sm leading-7 text-slate-600">{data.overview}</p>

              {/* Sections */}
              {data.sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <ChevronRight size={14} style={{ color: accentColor }} />
                    {section.heading}
                  </h3>
                  <p className="whitespace-pre-line pl-5 text-sm leading-7 text-slate-600">{section.body}</p>
                </div>
              ))}

              {/* Shortcuts */}
              {data.shortcuts && data.shortcuts.length > 0 && (
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-3">
                    <Keyboard size={14} style={{ color: accentColor }} />
                    Keyboard Shortcuts
                  </h3>
                  <div className="space-y-2.5 pl-5">
                    {data.shortcuts.map((sc) => (
                      <div key={sc.keys} className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center gap-1 shrink-0">
                          {sc.keys.split(' / ').map((k) => (
                            <span key={k} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-xs font-semibold text-slate-700 shadow-sm">
                              {k}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs text-slate-600">{sc.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {tab === 'learn' && !data && (
            <div className="px-6 py-10 text-center text-sm text-slate-400">
              No curriculum content available for this topic yet.
            </div>
          )}

          {tab === 'resources' && (
            <div className="px-6 py-5">
              {hasResources ? (
                <>
                  {/* Free Resources section */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="whitespace-nowrap rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                        Free Resources
                      </span>
                      <div className="flex-1 h-px bg-emerald-100" />
                    </div>
                    <div className="space-y-3">
                      {resources.map((res) => (
                        <a
                          key={res.url}
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 rounded-lg border border-transparent px-2 py-2 transition hover:border-slate-200 hover:bg-slate-50"
                        >
                          <span
                            className="shrink-0 rounded px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide"
                            style={{
                              background: res.type === 'docs' ? '#dbeafe' : res.type === 'video' ? '#fce7f3' : '#fef9c3',
                              color: res.type === 'docs' ? '#1d4ed8' : res.type === 'video' ? '#9d174d' : '#92400e',
                            }}
                          >
                            {res.type}
                          </span>
                          <span className="flex items-center gap-1.5 text-sm text-slate-700 underline-offset-2 group-hover:text-blue-600 group-hover:underline">
                            {res.title}
                            <ExternalLink size={11} className="opacity-0 group-hover:opacity-60 shrink-0" />
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="py-10 text-center text-sm text-slate-400">
                  No resources listed for this topic.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
