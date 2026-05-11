# WebStorm Roadmap

A community-maintained WebStorm learning roadmap with topic-by-topic curriculum content and local progress tracking.

The app is built as a lightweight React + Vite single-page application. It helps learners move through WebStorm fundamentals, editor workflows, navigation, refactoring, debugging, testing, integrations, customization, and advanced IDE topics.

## Features

- Interactive WebStorm skill roadmap organized by section and topic
- Expandable roadmap sections with per-section progress
- Topic details panel with learning notes, shortcuts, and resources
- Status tracking for pending, in progress, done, and skipped topics
- Search across roadmap topics
- Browser-local progress persistence through `localStorage`
- Responsive layout for desktop and mobile review

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually:

```bash
http://localhost:5173/
```

## Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build in `dist/`.

```bash
npm run preview
```

Serves the production build locally for review.

```bash
npm run lint
```

Runs ESLint across the project.

```bash
npm run typecheck
```

Runs TypeScript checks without emitting compiled files.

## Project Structure

```text
.
├── index.html
├── package.json
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── RoadmapNode.tsx
│   │   └── TopicPanel.tsx
│   ├── data
│   │   ├── curriculum.ts
│   │   └── roadmap.ts
│   ├── index.css
│   └── main.tsx
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Roadmap Data

The roadmap structure lives in:

```text
src/data/roadmap.ts
```

Each roadmap section defines:

- `id`: stable section identifier
- `title`: section heading shown in the UI
- `accent`: section accent color
- `topics`: list of roadmap topics

Topic curriculum content lives in:

```text
src/data/curriculum.ts
```

When adding a new topic to `roadmap.ts`, add matching curriculum content using the same topic `id` when available.

## Progress Storage

Progress is stored in the browser using `localStorage` under:

```text
webstorm-roadmap-status
```

This keeps the app simple and private by default. Progress is specific to the browser and device being used.

## Development Notes

- Keep roadmap topic IDs stable so existing local progress does not break.
- Prefer focused updates to roadmap data over large rewrites.
- Use existing component patterns in `RoadmapNode` and `TopicPanel` when adding UI.
- Run lint, typecheck, and build before shipping changes.

## Quality Checks

Run the full local validation pass:

```bash
npm run lint
npm run typecheck
npm run build
```

## License

No license has been added yet. Add one before distributing or accepting external contributions.
