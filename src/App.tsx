import { useState, useEffect, useCallback } from 'react';
import {
  CheckCircle2, Circle, Clock, MinusCircle,
  ChevronDown, ChevronUp, RotateCcw, Code2, Search,
} from 'lucide-react';
import { roadmapSections, type NodeStatus, type RoadmapSection } from './data/roadmap';
import { RoadmapNode } from './components/RoadmapNode';
import { TopicPanel } from './components/TopicPanel';

const STORAGE_KEY = 'webstorm-roadmap-status';
type StatusMap = Record<string, NodeStatus>;

function loadStatus(): StatusMap {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
  catch { return {}; }
}

interface ActiveTopic {
  topicId: string;
  label: string;
  sectionTitle: string;
  accentColor: string;
  isOptional?: boolean;
}

// ── Roadmap connector: SVG arrow between section cards ─────────────────────
function RoadmapConnector() {
  return (
    <div className="flex justify-center items-center" style={{ height: 56 }}>
      <svg width="40" height="56" viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Vertical dashed line */}
        <line
          x1="20" y1="0" x2="20" y2="42"
          stroke="#94a3b8" strokeWidth="1.5"
          strokeDasharray="5 4"
          strokeLinecap="round"
        />
        {/* Arrowhead */}
        <path
          d="M12 36 L20 52 L28 36"
          stroke="#94a3b8" strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// ── Section node header (the "process box" of the flowchart) ───────────────
interface SectionCardProps {
  section: RoadmapSection;
  index: number;
  statusMap: StatusMap;
  isExpanded: boolean;
  onToggle: () => void;
  onTopicClick: (topicId: string, label: string, sectionTitle: string, accentColor: string, isOptional?: boolean) => void;
  search: string;
}

function SectionCard({ section, index, statusMap, isExpanded, onToggle, onTopicClick, search }: SectionCardProps) {
  const topics = search
    ? section.topics.filter(t => t.label.toLowerCase().includes(search.toLowerCase()))
    : section.topics;

  const done = section.topics.filter(t => statusMap[t.id] === 'done').length;
  const inProgress = section.topics.filter(t => statusMap[t.id] === 'in-progress').length;
  const total = section.topics.length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  if (search && topics.length === 0) return null;

  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.22)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        border: '1px solid rgba(255,255,255,0.55)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.07), 0 1px 0 rgba(255,255,255,0.8) inset',
      }}
    >
      {/* Section header node */}
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-5 py-4 text-left transition-colors duration-150"
        style={{ background: 'rgba(255,255,255,0.18)' }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.32)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')}
      >
        <div className="flex items-center gap-3 min-w-0">
          {/* Section number badge */}
          <span
            className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-sm"
            style={{ background: section.accent, boxShadow: `0 2px 8px ${section.accent}60` }}
          >
            {num}
          </span>
          <span className="font-semibold text-slate-800 text-[15px] tracking-tight">{section.title}</span>
          {inProgress > 0 && (
            <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-amber-50/80 text-amber-600 border border-amber-200/60 backdrop-blur-sm">
              {inProgress} in progress
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {/* Mini progress bar */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-20 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.08)' }}>
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${pct}%`, background: section.accent }}
              />
            </div>
            <span className="text-xs text-slate-400 tabular-nums w-10 text-right">{done}/{total}</span>
          </div>
          {isExpanded
            ? <ChevronUp size={15} className="text-slate-400" />
            : <ChevronDown size={15} className="text-slate-400" />
          }
        </div>
      </button>

      {/* Divider */}
      {(isExpanded || search) && (
        <div style={{ height: 1, background: 'rgba(255,255,255,0.5)' }} />
      )}

      {/* Topics grid */}
      {(isExpanded || search) && (
        <div className="px-5 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {topics.map(topic => (
            <RoadmapNode
              key={topic.id}
              id={topic.id}
              label={topic.label}
              status={statusMap[topic.id] ?? 'default'}
              isOptional={topic.isOptional}
              onClick={(id) => onTopicClick(id, topic.label, section.title, section.accent, topic.isOptional)}
              accentColor={section.accent}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  const [statusMap, setStatusMap] = useState<StatusMap>(loadStatus);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ 'getting-started': true });
  const [search, setSearch] = useState('');
  const [activeTopic, setActiveTopic] = useState<ActiveTopic | null>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(statusMap));
  }, [statusMap]);

  const handleTopicClick = useCallback((
    topicId: string, label: string, sectionTitle: string, accentColor: string, isOptional?: boolean,
  ) => {
    setActiveTopic({ topicId, label, sectionTitle, accentColor, isOptional });
  }, []);

  const handlePanelStatusChange = useCallback((status: NodeStatus) => {
    if (!activeTopic) return;
    setStatusMap(prev => ({ ...prev, [activeTopic.topicId]: status }));
  }, [activeTopic]);

  const toggleSection = useCallback((id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    roadmapSections.forEach(s => { all[s.id] = true; });
    setExpanded(all);
  };

  const allTopics = roadmapSections.flatMap(s => s.topics);
  const totalCount = allTopics.length;
  const doneCount = allTopics.filter(t => statusMap[t.id] === 'done').length;
  const inProgressCount = allTopics.filter(t => statusMap[t.id] === 'in-progress').length;
  const skippedCount = allTopics.filter(t => statusMap[t.id] === 'skipped').length;
  const overallPct = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* ── Glass background: gradient + blurred blobs ── */}
      <div
        className="fixed inset-0 -z-20"
        style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #e0f2fe 30%, #ecfdf5 65%, #f0fdf4 100%)' }}
      />
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-50" style={{ background: 'radial-gradient(circle, #bfdbfe 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute top-1/3 -right-40 w-[480px] h-[480px] rounded-full opacity-40" style={{ background: 'radial-gradient(circle, #a7f3d0 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full opacity-35" style={{ background: 'radial-gradient(circle, #bae6fd 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div className="absolute -bottom-40 -right-20 w-[440px] h-[440px] rounded-full opacity-40" style={{ background: 'radial-gradient(circle, #d1fae5 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      {/* ── Header ── */}
      <header
        className="sticky top-0 z-30 border-b"
        style={{
          background: 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderColor: 'rgba(255,255,255,0.7)',
          boxShadow: '0 1px 0 rgba(255,255,255,0.8), 0 2px 16px rgba(0,0,0,0.06)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-600 shadow-md shadow-blue-200">
              <Code2 size={15} className="text-white" />
            </div>
            <span className="font-bold text-slate-800 text-sm tracking-tight">WebStorm Roadmap</span>
            <span className="hidden sm:block w-px h-4 bg-slate-200" />
            <span className="hidden sm:block text-xs text-slate-400">2026 Edition</span>
          </div>
          <div className="flex items-center gap-1">
            <button onClick={expandAll} className="text-xs px-2.5 py-1.5 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-white/60 transition-colors">
              Expand all
            </button>
            <button onClick={() => setExpanded({})} className="text-xs px-2.5 py-1.5 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-white/60 transition-colors">
              Collapse all
            </button>
            <button
              onClick={() => { if (confirm('Reset all progress? This cannot be undone.')) setStatusMap({}); }}
              className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg text-slate-500 hover:text-red-500 hover:bg-red-50/60 transition-colors"
            >
              <RotateCcw size={11} />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <div className="border-b" style={{ borderColor: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100 text-blue-600 text-xs font-semibold mb-5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Community Roadmap
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-3">
              WebStorm Developer Roadmap
            </h1>
            <p className="text-slate-500 text-base leading-relaxed">
              A step-by-step guide to mastering WebStorm in 2026. Click any topic to open its curriculum.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2.5">
              <div className="w-28 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.1)' }}>
                <div className="h-full rounded-full bg-blue-500 transition-all duration-700" style={{ width: `${overallPct}%` }} />
              </div>
              <span className="text-sm font-bold text-slate-700 tabular-nums">{overallPct}%</span>
              <span className="text-xs text-slate-400">complete</span>
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-4 text-sm flex-wrap">
              <span className="flex items-center gap-1.5 text-emerald-600"><CheckCircle2 size={13} />{doneCount} done</span>
              <span className="flex items-center gap-1.5 text-amber-600"><Clock size={13} />{inProgressCount} in progress</span>
              <span className="flex items-center gap-1.5 text-slate-400"><MinusCircle size={13} />{skippedCount} skipped</span>
              <span className="flex items-center gap-1.5 text-slate-400"><Circle size={13} />{totalCount - doneCount - inProgressCount - skippedCount} remaining</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Search + Legend ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="relative w-full sm:w-64">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search topics..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full rounded-xl pl-9 pr-3 py-2 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
            style={{
              background: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.8)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}
          />
        </div>
        <div className="flex items-center gap-4 text-xs text-slate-400 flex-wrap">
          <span className="flex items-center gap-1.5"><Circle size={11} />Not started</span>
          <span className="flex items-center gap-1.5 text-emerald-600"><CheckCircle2 size={11} />Done</span>
          <span className="flex items-center gap-1.5 text-amber-600"><Clock size={11} />In Progress</span>
          <span className="flex items-center gap-1.5"><MinusCircle size={11} />Skipped</span>
        </div>
      </div>

      {/* ── Roadmap ── */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pb-24">
        {/* START node */}
        <div className="flex justify-center mb-0">
          <div
            className="px-5 py-2 rounded-full text-xs font-bold text-white tracking-widest uppercase shadow-md"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #0ea5e9)', boxShadow: '0 4px 16px rgba(59,130,246,0.35)' }}
          >
            Start Here
          </div>
        </div>
        <RoadmapConnector />

        <div className="flex flex-col gap-0">
          {roadmapSections.map((section, idx) => (
            <div key={section.id}>
              <SectionCard
                section={section}
                index={idx}
                statusMap={statusMap}
                isExpanded={!!expanded[section.id]}
                onToggle={() => toggleSection(section.id)}
                onTopicClick={handleTopicClick}
                search={search}
              />
              {idx < roadmapSections.length - 1 && !search && <RoadmapConnector />}
            </div>
          ))}
        </div>

        {/* END node */}
        {!search && (
          <>
            <RoadmapConnector />
            <div className="flex justify-center">
              <div
                className="px-5 py-2 rounded-full text-xs font-bold text-white tracking-widest uppercase shadow-md"
                style={{ background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 4px 16px rgba(16,185,129,0.35)' }}
              >
                WebStorm Pro
              </div>
            </div>
          </>
        )}

        <div className="mt-14 pt-8 border-t text-center text-xs text-slate-400" style={{ borderColor: 'rgba(148,163,184,0.2)' }}>
          <p>Community-maintained WebStorm learning roadmap. Progress is saved in your browser.</p>
          <p className="mt-1">Inspired by <span className="text-blue-500">roadmap.sh</span></p>
        </div>
      </main>

      {/* ── Topic Panel ── */}
      {activeTopic && (
        <TopicPanel
          topicId={activeTopic.topicId}
          label={activeTopic.label}
          sectionTitle={activeTopic.sectionTitle}
          accentColor={activeTopic.accentColor}
          isOptional={activeTopic.isOptional}
          status={statusMap[activeTopic.topicId] ?? 'default'}
          onStatusChange={handlePanelStatusChange}
          onClose={() => setActiveTopic(null)}
        />
      )}
    </div>
  );
}
