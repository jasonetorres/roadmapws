export type NodeStatus = 'default' | 'done' | 'in-progress' | 'skipped';

export interface RoadmapTopic {
  id: string;
  label: string;
  description: string;
  isOptional?: boolean;
}

export interface RoadmapSection {
  id: string;
  title: string;
  accent: string;
  topics: RoadmapTopic[];
}

export const roadmapSections: RoadmapSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    accent: '#3b82f6',
    topics: [
      { id: 'install', label: 'Install WebStorm', description: 'Download and install WebStorm from JetBrains website. Choose the correct installer for your OS (Windows, macOS, Linux).' },
      { id: 'license', label: 'License & Activation', description: 'Activate with a JetBrains account, subscription, or use the 30-day trial. Educational licenses are free for students.' },
      { id: 'first-run', label: 'First Run Setup', description: 'Configure initial settings: UI theme, keymap (IntelliJ, VS Code, etc.), font preferences, and plugins during first launch.' },
      { id: 'ui-overview', label: 'IDE Interface Overview', description: 'Learn the main areas: Project tool window, Editor, Status bar, Tool window bar, Navigation bar, and Context menus.' },
    ],
  },
  {
    id: 'core-editor',
    title: 'Core Editor',
    accent: '#10b981',
    topics: [
      { id: 'code-completion', label: 'Code Completion', description: 'Basic completion (Ctrl+Space), Smart completion (Ctrl+Shift+Space), and Postfix completion for writing code faster.' },
      { id: 'intentions', label: 'Intentions & Quick Fixes', description: 'Alt+Enter shows contextual actions: fix errors, improve code, add imports, create missing methods, and more.' },
      { id: 'live-templates', label: 'Live Templates', description: 'Expand abbreviations into full code snippets. Use built-in templates like `if`, `for`, `cl` or create custom ones.' },
      { id: 'multiple-cursors', label: 'Multiple Cursors & Selections', description: 'Alt+Click to add cursors, Ctrl+G to select next occurrence, Ctrl+Shift+Alt+J to select all occurrences.' },
      { id: 'code-formatting', label: 'Code Formatting', description: 'Reformat code with Ctrl+Alt+L. Configure code style per language. Use EditorConfig for shared project settings.' },
      { id: 'folding', label: 'Code Folding', description: 'Collapse/expand code regions, functions, imports. Ctrl+- to fold, Ctrl++ to expand, Ctrl+Shift+- to fold all.' },
    ],
  },
  {
    id: 'navigation',
    title: 'Navigation & Search',
    accent: '#f59e0b',
    topics: [
      { id: 'goto-everywhere', label: 'Go To Everywhere (Double Shift)', description: 'The most powerful navigation: search for any file, class, symbol, or action from a single dialog.' },
      { id: 'goto-definition', label: 'Go to Declaration / Definition', description: 'Ctrl+B or Ctrl+Click to jump to where a function, variable, or component is defined.' },
      { id: 'find-usages', label: 'Find Usages', description: 'Alt+F7 shows all places where a symbol is used. Essential for understanding code dependencies.' },
      { id: 'structural-search', label: 'Structural Search & Replace', description: 'Search for code patterns using code structure rather than plain text. Found under Edit > Find > Structural Search.' },
      { id: 'bookmarks', label: 'Bookmarks & Breakpoints', description: 'F11 to add bookmark, Shift+F11 to view all bookmarks. Use mnemonic bookmarks (Ctrl+Shift+<digit>) for quick jumps.' },
      { id: 'recent-files', label: 'Recent Files & Locations', description: 'Ctrl+E for recent files, Ctrl+Shift+E for recent code locations. Faster than navigating the project tree.' },
    ],
  },
  {
    id: 'refactoring',
    title: 'Refactoring',
    accent: '#ef4444',
    topics: [
      { id: 'rename', label: 'Rename (Shift+F6)', description: 'Safely rename variables, functions, files, and components across the entire project with all references updated.' },
      { id: 'extract', label: 'Extract Variable / Function / Component', description: 'Ctrl+Alt+V for variable, Ctrl+Alt+M for method, Ctrl+Alt+C for constant. Reduces duplication instantly.' },
      { id: 'inline', label: 'Inline (Ctrl+Alt+N)', description: 'The opposite of extract — replace a variable or function call with its content directly.' },
      { id: 'move', label: 'Move (F6)', description: 'Move a file, class, or function to another location with all imports automatically updated.' },
      { id: 'change-signature', label: 'Change Signature', description: 'Add, remove, or reorder function parameters and have all call sites updated automatically.' },
      { id: 'safe-delete', label: 'Safe Delete', description: 'Delete a symbol only if it has no usages, preventing broken references.' },
    ],
  },
  {
    id: 'language-support',
    title: 'Language & Framework Support',
    accent: '#8b5cf6',
    topics: [
      { id: 'javascript', label: 'JavaScript (ES6+)', description: 'Full support for modern JS: modules, destructuring, async/await, optional chaining, and all ES2024+ features.' },
      { id: 'typescript', label: 'TypeScript', description: 'Built-in TS support with type checking, type inference, and navigation through type definitions.' },
      { id: 'html-css', label: 'HTML / CSS / SCSS', description: 'Emmet abbreviations, CSS completion, color pickers, and SCSS variable tracking.' },
      { id: 'react', label: 'React / JSX / TSX', description: 'Component navigation, prop type checking, hooks support, and React-specific refactorings.' },
      { id: 'vue', label: 'Vue.js', description: 'Single File Component support, template completion, and Vuex/Pinia integration via plugin.', isOptional: true },
      { id: 'angular', label: 'Angular', description: 'Angular CLI integration, template binding support, and RxJS operator completion via plugin.', isOptional: true },
      { id: 'nodejs', label: 'Node.js', description: 'Node.js built-in module completion, run/debug configurations, and npm/yarn script integration.' },
      { id: 'graphql', label: 'GraphQL', description: 'Schema validation, query autocompletion, and fragment navigation via the JS GraphQL plugin.', isOptional: true },
    ],
  },
  {
    id: 'version-control',
    title: 'Version Control',
    accent: '#06b6d4',
    topics: [
      { id: 'git-basics', label: 'Git Integration', description: 'Commit, push, pull, and fetch directly from the IDE. The Git tool window shows branches, log, and stashes.' },
      { id: 'commit-window', label: 'Commit Tool Window', description: 'Stage individual files or lines, write commit messages, review diffs, and run pre-commit checks in one place.' },
      { id: 'branches', label: 'Branch Management', description: 'Create, checkout, merge, and delete branches from the IDE. The branch popup (bottom right) is the quickest way.' },
      { id: 'merge-conflicts', label: 'Merge Conflict Resolution', description: 'Three-way merge editor clearly shows conflicts with accept/ignore buttons. Much easier than CLI.' },
      { id: 'blame', label: 'Git Blame & History', description: 'Annotate files with Git blame (Alt+A in VCS menu), view file history, and compare with previous versions.' },
      { id: 'github', label: 'GitHub / GitLab Integration', description: 'Pull request creation, code review, and issue browsing via the integrated GitHub/GitLab plugins.', isOptional: true },
    ],
  },
  {
    id: 'debugging',
    title: 'Debugging',
    accent: '#f97316',
    topics: [
      { id: 'run-configs', label: 'Run/Debug Configurations', description: 'Configure how your app starts: specify entry point, env variables, arguments, and Node.js version per project.' },
      { id: 'breakpoints', label: 'Breakpoints', description: 'Click the gutter to set breakpoints. Use conditional breakpoints, log breakpoints, and exception breakpoints.' },
      { id: 'debug-controls', label: 'Debug Controls', description: 'Step over (F8), Step into (F7), Step out (Shift+F8), Resume (F9). Use the Frames panel to navigate the call stack.' },
      { id: 'watches', label: 'Watches & Evaluate', description: 'Add watch expressions to monitor values. Use "Evaluate Expression" (Alt+F8) to run arbitrary code mid-debug.' },
      { id: 'nodejs-debug', label: 'Node.js Debugging', description: 'Attach to running Node processes or launch with the debugger. Supports source maps for transpiled code.' },
      { id: 'chrome-debug', label: 'Browser / Chrome Debugging', description: 'Debug client-side JS directly in WebStorm with a connected Chrome instance using the JavaScript Debugger.' },
    ],
  },
  {
    id: 'testing',
    title: 'Testing',
    accent: '#84cc16',
    topics: [
      { id: 'jest', label: 'Jest', description: 'Run individual tests, test files, or the entire suite from the editor. Green/red gutter indicators show test status.' },
      { id: 'test-coverage', label: 'Code Coverage', description: 'Run tests with coverage to see which lines are covered. Green/red/yellow gutter highlights show coverage inline.' },
      { id: 'mocha', label: 'Mocha / Vitest', description: 'Configure Mocha or Vitest as the test runner. WebStorm auto-detects configuration files.', isOptional: true },
      { id: 'test-debug', label: 'Debug Tests', description: 'Place breakpoints in test files and run "Debug Test" to step through failing tests interactively.' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Integrations',
    accent: '#ec4899',
    topics: [
      { id: 'terminal', label: 'Built-in Terminal', description: 'Alt+F12 opens the terminal. Configure your preferred shell. Multiple sessions can run simultaneously.' },
      { id: 'npm-scripts', label: 'NPM / Yarn Scripts', description: 'Run npm scripts directly from the package.json file or the npm tool window with a single click.' },
      { id: 'http-client', label: 'HTTP Client', description: 'Create .http files to send API requests. Store responses, use environment variables, and share with the team.' },
      { id: 'database', label: 'Database Tools', description: 'Connect to databases, browse schemas, run SQL, and view query results via the Database tool window.', isOptional: true },
      { id: 'docker', label: 'Docker Integration', description: 'Manage containers, images, and Compose files. Run/debug apps inside containers via the Docker plugin.', isOptional: true },
    ],
  },
  {
    id: 'customization',
    title: 'Customization',
    accent: '#14b8a6',
    topics: [
      { id: 'keymaps', label: 'Keymaps', description: 'Choose from built-in keymaps (IntelliJ IDEA, VS Code, Eclipse) or customize individual shortcuts.' },
      { id: 'themes', label: 'Themes & Color Schemes', description: 'Switch between Darcula, Light, High Contrast themes. Install additional themes from the plugin marketplace.' },
      { id: 'plugins', label: 'Plugin Marketplace', description: 'Extend WebStorm with thousands of plugins: Prettier, ESLint, GitHub Copilot, Rainbow Brackets, and more.' },
      { id: 'file-templates', label: 'File & Code Templates', description: 'Customize the default content for new files. Create component templates so every new file starts correctly.' },
      { id: 'editor-settings', label: 'Editor Settings', description: 'Font size, line height, tab width, soft wrap, whitespace display — all configurable per language.' },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced',
    accent: '#6366f1',
    topics: [
      { id: 'inspections', label: 'Code Inspections', description: 'Configure which inspections run, their severity, and suppress them per-file or project-wide.' },
      { id: 'intentions-advanced', label: 'Custom Live Templates', description: 'Create project-specific templates with variables, macros, and context restrictions for your team.' },
      { id: 'remote-dev', label: 'Remote Development', description: 'Connect to a remote server via SSH and develop as if the project is local, using the full IDE.' },
      { id: 'monorepo', label: 'Monorepo Support', description: 'Configure multiple package.json roots, per-directory code styles, and separate run configurations per package.' },
      { id: 'performance', label: 'Performance Tuning', description: 'Adjust JVM heap size, disable unused plugins, exclude directories from indexing to keep the IDE fast.' },
      { id: 'ai-assistant', label: 'AI Assistant', description: 'Use JetBrains AI Assistant for code generation, explanations, commit message suggestions, and chat-based help.', isOptional: true },
    ],
  },
];
