import { useCallback, useEffect, useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Circle,
  Clock,
  Code2,
  MinusCircle,
  RotateCcw,
  Search,
} from 'lucide-react';
import { RoadmapNode } from './components/RoadmapNode';
import { TopicPanel } from './components/TopicPanel';
import { curriculum } from './data/curriculum';
import { roadmapSections, type NodeStatus, type RoadmapSection } from './data/roadmap';

const STORAGE_KEY = 'webstorm-roadmap-status';

type StatusMap = Record<string, NodeStatus>;
type View = 'roadmap' | 'guides' | 'resources';

interface ActiveTopic {
  topicId: string;
  label: string;
  sectionTitle: string;
  accentColor: string;
  isOptional?: boolean;
}

interface SectionCardProps {
  section: RoadmapSection;
  index: number;
  statusMap: StatusMap;
  isExpanded: boolean;
  onToggle: () => void;
  onTopicClick: (topicId: string, label: string, sectionTitle: string, accentColor: string, isOptional?: boolean) => void;
  search: string;
}

function loadStatus(): StatusMap {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function RoadmapConnector() {
  return (
    <div className="flex h-12 items-center justify-center" aria-hidden="true">
      <div className="h-full border-l-2 border-dashed border-slate-400" />
    </div>
  );
}

function SectionCard({ section, index, statusMap, isExpanded, onToggle, onTopicClick, search }: SectionCardProps) {
  const topics = search
    ? section.topics.filter(topic => topic.label.toLowerCase().includes(search.toLowerCase()))
    : section.topics;

  const done = section.topics.filter(topic => statusMap[topic.id] === 'done').length;
  const inProgress = section.topics.filter(topic => statusMap[topic.id] === 'in-progress').length;
  const total = section.topics.length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  const side = index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto';

  if (search && topics.length === 0) return null;

  return (
    <section className={`relative w-full md:w-[82%] ${side}`}>
      <button
        onClick={onToggle}
        className="group flex w-full items-stretch overflow-hidden rounded-md border-2 border-slate-900 bg-white text-left shadow-[4px_4px_0_#0f172a] transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-yellow-200"
      >
        <span className="flex w-16 shrink-0 items-center justify-center border-r-2 border-slate-900 bg-yellow-300 text-sm font-black tabular-nums text-slate-950">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="min-w-0 flex-1 px-4 py-3">
          <span className="block text-base font-extrabold tracking-tight text-slate-950">{section.title}</span>
          <span className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-600">
            <span>{done}/{total} done</span>
            {inProgress > 0 && <span>{inProgress} in progress</span>}
            <span>{pct}% complete</span>
          </span>
        </span>
        <span className="flex w-12 shrink-0 items-center justify-center border-l-2 border-slate-900 bg-slate-50 text-slate-800">
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>

      {(isExpanded || search) && (
        <div className="mt-3 rounded-md border-2 border-slate-900 bg-[#fffdf5] p-3 shadow-[4px_4px_0_#0f172a]">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      )}
    </section>
  );
}

export default function App() {
  const [statusMap, setStatusMap] = useState<StatusMap>(loadStatus);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ 'getting-started': true });
  const [search, setSearch] = useState('');
  const [view, setView] = useState<View>('roadmap');
  const [activeTopic, setActiveTopic] = useState<ActiveTopic | null>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(statusMap));
  }, [statusMap]);

  const handleTopicClick = useCallback((
    topicId: string,
    label: string,
    sectionTitle: string,
    accentColor: string,
    isOptional?: boolean,
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
    roadmapSections.forEach(section => { all[section.id] = true; });
    setExpanded(all);
  };

  const allTopics = roadmapSections.flatMap(section => section.topics);
  const totalCount = allTopics.length;
  const doneCount = allTopics.filter(topic => statusMap[topic.id] === 'done').length;
  const inProgressCount = allTopics.filter(topic => statusMap[topic.id] === 'in-progress').length;
  const skippedCount = allTopics.filter(topic => statusMap[topic.id] === 'skipped').length;
  const remainingCount = totalCount - doneCount - inProgressCount - skippedCount;
  const overallPct = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;
  const allResources = roadmapSections.flatMap(section => (
    section.topics.flatMap(topic => (
      (curriculum[topic.id]?.resources ?? []).map(resource => ({
        ...resource,
        topicId: topic.id,
        topicLabel: topic.label,
        sectionTitle: section.title,
        accentColor: section.accent,
        isOptional: topic.isOptional,
      }))
    ))
  ));

  const navButtonClass = (target: View) => (
    view === target
      ? 'text-slate-950'
      : 'text-slate-600 hover:text-slate-950'
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f3e8] text-slate-950">
      <header className="sticky top-0 z-30 border-b-2 border-slate-900 bg-[#fffdf5]/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md border-2 border-slate-900 bg-yellow-300 shadow-[2px_2px_0_#0f172a]">
              <Code2 size={16} className="text-slate-950" />
            </div>
            <span className="text-sm font-black tracking-tight">WebStorm Roadmap</span>
          </div>

          <nav className="hidden items-center gap-5 text-sm font-bold md:flex" aria-label="Primary views">
            <button onClick={() => setView('roadmap')} className={navButtonClass('roadmap')}>
              Roadmap
            </button>
            <button onClick={() => setView('guides')} className={navButtonClass('guides')}>
              Guides
            </button>
            <button onClick={() => setView('resources')} className={navButtonClass('resources')}>
              Resources
            </button>
          </nav>

          <button
            onClick={() => { if (confirm('Reset all progress? This cannot be undone.')) setStatusMap({}); }}
            className="flex items-center gap-1.5 rounded-md border-2 border-slate-900 bg-white px-3 py-1.5 text-xs font-bold shadow-[2px_2px_0_#0f172a] transition hover:-translate-y-0.5"
          >
            <RotateCcw size={13} />
            Reset
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 pb-6 pt-10 text-center sm:px-6 sm:pt-14">
        <p className="mx-auto mb-4 w-fit rounded-full border-2 border-slate-900 bg-yellow-300 px-3 py-1 text-xs font-black uppercase tracking-wide shadow-[3px_3px_0_#0f172a]">
          Step by step guide
        </p>
        <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
          WebStorm Developer
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-700">
          Master the IDE through a visual roadmap of editing, navigation, refactoring, testing, debugging, customization, and advanced workflows.
        </p>

      </section>

      {view === 'roadmap' && (
        <section id="progress" className="mx-auto max-w-5xl px-4 pb-6 sm:px-6">
        <div className="grid gap-3 rounded-md border-2 border-slate-900 bg-white p-3 shadow-[4px_4px_0_#0f172a] md:grid-cols-[1fr_auto]">
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
            <span className="rounded-md bg-yellow-300 px-3 py-2 text-slate-950">{overallPct}% complete</span>
            <span className="flex items-center gap-1.5 text-emerald-700"><CheckCircle2 size={15} />{doneCount} done</span>
            <span className="flex items-center gap-1.5 text-amber-700"><Clock size={15} />{inProgressCount} in progress</span>
            <span className="flex items-center gap-1.5 text-slate-500"><MinusCircle size={15} />{skippedCount} skipped</span>
            <span className="flex items-center gap-1.5 text-slate-500"><Circle size={15} />{remainingCount} left</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative min-w-56 flex-1 md:w-72 md:flex-none">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                id="topic-search"
                type="text"
                placeholder="Search topics..."
                value={search}
                onChange={event => setSearch(event.target.value)}
                className="w-full rounded-md border-2 border-slate-900 bg-[#fffdf5] py-2 pl-9 pr-3 text-sm font-medium outline-none focus:ring-4 focus:ring-yellow-200"
              />
            </div>
            <button onClick={expandAll} className="rounded-md border-2 border-slate-900 bg-white px-3 py-2 text-xs font-bold shadow-[2px_2px_0_#0f172a] transition hover:-translate-y-0.5">
              Expand all
            </button>
            <button onClick={() => setExpanded({})} className="rounded-md border-2 border-slate-900 bg-white px-3 py-2 text-xs font-bold shadow-[2px_2px_0_#0f172a] transition hover:-translate-y-0.5">
              Collapse all
            </button>
          </div>
        </div>
        </section>
      )}

      {view === 'roadmap' && (
        <main id="roadmap" className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
          <div className="roadmap-grid rounded-lg border-2 border-slate-900 bg-[#fffdf5] px-4 py-8 shadow-[6px_6px_0_#0f172a] sm:px-8">
            {!search && (
              <>
                <div className="mx-auto w-fit rounded-md border-2 border-slate-900 bg-slate-950 px-5 py-2 text-sm font-black uppercase tracking-wide text-white shadow-[3px_3px_0_#facc15]">
                  Start Here
                </div>
                <RoadmapConnector />
              </>
            )}

            <div id="topics" className="space-y-0">
              {roadmapSections.map((section, index) => (
                <div key={section.id}>
                  <SectionCard
                    section={section}
                    index={index}
                    statusMap={statusMap}
                    isExpanded={!!expanded[section.id]}
                    onToggle={() => toggleSection(section.id)}
                    onTopicClick={handleTopicClick}
                    search={search}
                  />
                  {index < roadmapSections.length - 1 && !search && <RoadmapConnector />}
                </div>
              ))}
            </div>

            {!search && (
              <>
                <RoadmapConnector />
                <div className="mx-auto w-fit rounded-md border-2 border-slate-900 bg-emerald-300 px-5 py-2 text-sm font-black uppercase tracking-wide text-slate-950 shadow-[3px_3px_0_#0f172a]">
                  WebStorm Pro
                </div>
              </>
            )}
          </div>
        </main>
      )}

      {view === 'guides' && (
        <main className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
          <div className="roadmap-grid rounded-lg border-2 border-slate-900 bg-[#fffdf5] p-5 shadow-[6px_6px_0_#0f172a] sm:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-black tracking-tight text-slate-950">Guides</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
                Browse the roadmap as a set of focused learning guides. Select any topic to open its curriculum.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {roadmapSections.map(section => (
                <section key={section.id} className="rounded-md border-2 border-slate-900 bg-white p-4 shadow-[4px_4px_0_#0f172a]">
                  <h3 className="mb-3 flex items-center gap-2 text-base font-black text-slate-950">
                    <span className="h-3 w-3 rounded-full border border-slate-900" style={{ background: section.accent }} />
                    {section.title}
                  </h3>
                  <div className="grid gap-2">
                    {section.topics.map(topic => (
                      <button
                        key={topic.id}
                        onClick={() => handleTopicClick(topic.id, topic.label, section.title, section.accent, topic.isOptional)}
                        className="rounded-md border-2 border-slate-900 bg-[#fffdf5] px-3 py-2 text-left text-sm font-bold shadow-[2px_2px_0_#0f172a] transition hover:-translate-y-0.5"
                      >
                        {topic.label}
                      </button>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </main>
      )}

      {view === 'resources' && (
        <main className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
          <div className="roadmap-grid rounded-lg border-2 border-slate-900 bg-[#fffdf5] p-5 shadow-[6px_6px_0_#0f172a] sm:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-black tracking-tight text-slate-950">Resources</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
                Official docs, articles, and videos collected from the roadmap curriculum.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {allResources.map(resource => (
                <a
                  key={`${resource.topicId}-${resource.url}`}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border-2 border-slate-900 bg-white p-4 shadow-[4px_4px_0_#0f172a] transition hover:-translate-y-0.5"
                >
                  <span className="mb-2 inline-flex rounded border-2 border-slate-900 bg-yellow-300 px-2 py-0.5 text-[11px] font-black uppercase text-slate-950">
                    {resource.type}
                  </span>
                  <h3 className="text-sm font-black text-slate-950">{resource.title}</h3>
                  <p className="mt-2 text-xs font-semibold text-slate-600">
                    {resource.sectionTitle} / {resource.topicLabel}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </main>
      )}

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
