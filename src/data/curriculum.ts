export interface Shortcut {
  keys: string;
  description: string;
}

export interface Resource {
  title: string;
  url: string;
  type: 'docs' | 'video' | 'article';
}

export interface CurriculumSection {
  heading: string;
  body: string;
}

export interface TopicCurriculum {
  overview: string;
  sections: CurriculumSection[];
  shortcuts?: Shortcut[];
  resources?: Resource[];
}

export const curriculum: Record<string, TopicCurriculum> = {
  // ── Getting Started ────────────────────────────────────────────────────────

  install: {
    overview:
      'WebStorm is a commercial IDE by JetBrains built specifically for JavaScript and web development. Installation takes a few minutes and it runs on Windows, macOS, and Linux.',
    sections: [
      {
        heading: 'System Requirements',
        body: '8 GB RAM minimum (16 GB recommended), 3.5 GB disk space, 64-bit OS. Runs on JVM 17 (bundled — you do not need to install Java).',
      },
      {
        heading: 'Recommended: JetBrains Toolbox App',
        body: 'Install the free JetBrains Toolbox App first. It manages all JetBrains IDEs in one place, handles updates automatically, and lets you roll back to previous versions. Find it at jetbrains.com/toolbox-app.',
      },
      {
        heading: 'Direct Installation',
        body: 'Alternatively download the installer from jetbrains.com/webstorm. On macOS drag the .app to Applications. On Windows run the .exe installer. On Linux extract the tar.gz and run bin/webstorm.sh.',
      },
      {
        heading: 'First Launch',
        body: 'On first launch you will be asked to import settings from a previous installation. If this is your first time, choose "Do not import settings." You will then be taken through the initial configuration wizard.',
      },
    ],
    resources: [
      { title: 'WebStorm Installation Guide', url: 'https://www.jetbrains.com/help/webstorm/installation-guide.html', type: 'docs' },
      { title: 'JetBrains Toolbox App', url: 'https://www.jetbrains.com/toolbox-app/', type: 'docs' },
    ],
  },

  license: {
    overview:
      'WebStorm requires a license after the 30-day free trial. JetBrains offers individual subscriptions, company licenses, and free licenses for students and open-source projects.',
    sections: [
      {
        heading: 'Trial',
        body: 'WebStorm includes a free 30-day trial with all features. No credit card required. Activate through the "Start Trial" option in the license activation dialog.',
      },
      {
        heading: 'Subscription Options',
        body: 'Individual subscriptions are billed monthly or yearly. The yearly plan costs less per month and is most common. Company licenses are per-seat. All subscriptions include all JetBrains IDEs through the All Products Pack.',
      },
      {
        heading: 'Free Licenses',
        body: 'Students and teachers can get a free license through JetBrains Educational Pack using a .edu email or enrollment proof. Open-source maintainers of projects with at least 3 months of active development can also apply for a free license.',
      },
      {
        heading: 'Activation',
        body: 'Go to Help → Register or the gear icon in the IDE. You can sign in with your JetBrains account, use an activation code, or use a license server for team deployments. The IDE works fully offline once activated.',
      },
    ],
    resources: [
      { title: 'JetBrains License FAQ', url: 'https://sales.jetbrains.com/hc/en-gb/articles/207240845-What-is-a-personal-license', type: 'docs' },
      { title: 'Free Educational License', url: 'https://www.jetbrains.com/community/education/', type: 'docs' },
    ],
  },

  'first-run': {
    overview:
      'The first-run wizard lets you choose your keymap, theme, and install plugins. Getting these right from the start saves time later.',
    sections: [
      {
        heading: 'Keymap',
        body: 'Choose a keymap scheme. "IntelliJ IDEA" is the default and most documented. "VS Code" is available if you are migrating. You can always change this later in Settings → Keymap.',
      },
      {
        heading: 'UI Theme',
        body: 'Choose Darcula (dark), IntelliJ Light, or High Contrast. You can install additional themes from the plugin marketplace later.',
      },
      {
        heading: 'Recommended First-Run Plugins',
        body: 'Consider installing: ".env files support" for dotenv files, "Prettier" for opinionated formatting, "GitToolBox" for enhanced Git status, and "Rainbow Brackets" for nested bracket visibility.',
      },
      {
        heading: 'Settings to Review Early',
        body: 'Editor → Font: set a coding font like JetBrains Mono (bundled) at 14–16pt. Editor → General → Auto Import: enable "Add unambiguous imports on the fly" for JS/TS. Tools → Terminal: set your preferred shell.',
      },
    ],
    shortcuts: [
      { keys: 'Ctrl+Alt+S / ⌘,', description: 'Open Settings / Preferences' },
    ],
    resources: [
      { title: 'Configuring WebStorm', url: 'https://www.jetbrains.com/help/webstorm/configuring-project-and-ide-settings.html', type: 'docs' },
    ],
  },

  'ui-overview': {
    overview:
      'Understanding the IDE layout will make everything else faster. WebStorm\'s UI is divided into a few key persistent areas that you will use constantly.',
    sections: [
      {
        heading: 'Project Tool Window',
        body: 'The left sidebar (Alt+1 / ⌘1) shows your project files. Right-click for file operations. Use the gear icon inside it to toggle "Show Members" (shows class/module members inline) and "Compact Middle Packages."',
      },
      {
        heading: 'Editor Tabs',
        body: 'Open files appear as tabs. Ctrl+Tab cycles through recent files. Middle-click to close a tab. Right-click a tab to split the editor or compare with another file.',
      },
      {
        heading: 'Tool Window Bar',
        body: 'Narrow strips on the left, right, and bottom hold tool windows: Terminal, Git, Run, Debug, etc. Click to toggle them open. Double-click the title bar of any tool window to maximize it.',
      },
      {
        heading: 'Status Bar',
        body: 'The bottom status bar shows: current branch (click to switch), encoding, line ending, indentation, and background task progress. Clicking most items opens a related popup or settings panel.',
      },
      {
        heading: 'Navigation Bar',
        body: 'The top breadcrumb bar (View → Appearance → Navigation Bar) shows your file path and lets you navigate the project structure without opening the Project tool window.',
      },
    ],
    shortcuts: [
      { keys: 'Alt+1 / ⌘1', description: 'Toggle Project tool window' },
      { keys: 'Alt+F12 / ⌥F12', description: 'Toggle Terminal' },
      { keys: 'Shift+Esc', description: 'Hide active tool window' },
      { keys: 'Ctrl+Shift+F12 / ⌘⇧F12', description: 'Maximize editor (hide all tool windows)' },
    ],
    resources: [
      { title: 'WebStorm User Interface Overview', url: 'https://www.jetbrains.com/help/webstorm/guided-tour-around-the-user-interface.html', type: 'docs' },
    ],
  },

  // ── Core Editor ─────────────────────────────────────────────────────────────

  'code-completion': {
    overview:
      'Code completion is the single most time-saving feature in WebStorm. It uses static analysis and type information to suggest the most relevant completions as you type.',
    sections: [
      {
        heading: 'Basic Completion',
        body: 'Ctrl+Space triggers basic completion. It completes variable names, keywords, function names, and file paths. WebStorm often triggers it automatically as you type — you can control the delay in Settings → Editor → General → Code Completion.',
      },
      {
        heading: 'Type-Based / Smart Completion',
        body: 'Ctrl+Shift+Space filters suggestions by the expected type. If a function expects a string, only string-typed variables and functions are shown. Extremely useful in TypeScript projects.',
      },
      {
        heading: 'Postfix Completion',
        body: 'Type an expression, then add a postfix to wrap it. Examples: "someArray.forEach" + Tab expands to a forEach call. "condition.if" wraps in an if statement. "value.log" expands to console.log(value). View all postfixes in Settings → Editor → General → Postfix Completion.',
      },
      {
        heading: 'AI-Assisted Completion',
        body: 'With the JetBrains AI Assistant plugin, full-line and multi-line completions are available (similar to GitHub Copilot). These appear as grayed-out ghost text and are accepted with Tab.',
      },
    ],
    shortcuts: [
      { keys: 'Ctrl+Space / ^Space', description: 'Basic code completion' },
      { keys: 'Ctrl+Shift+Space / ^⇧Space', description: 'Smart / type-based completion' },
      { keys: 'Ctrl+Shift+Enter / ⌘⇧↩', description: 'Complete statement (adds semicolon, closing bracket, etc.)' },
    ],
    resources: [
      { title: 'Code Completion in WebStorm', url: 'https://www.jetbrains.com/help/webstorm/auto-completing-code.html', type: 'docs' },
    ],
  },

  intentions: {
    overview:
      'Intentions and Quick Fixes are context-sensitive actions triggered by Alt+Enter. This single shortcut can fix errors, suggest improvements, add imports, create missing functions, and hundreds of other things.',
    sections: [
      {
        heading: 'The Yellow Bulb vs Red Bulb',
        body: 'A red bulb indicates an error with a suggested fix. A yellow bulb indicates an improvement opportunity (intention action). Both are triggered the same way: Alt+Enter.',
      },
      {
        heading: 'Common Fix Actions',
        body: 'Add missing import, implement interface members, create missing function/variable, change return type, add missing case to switch, convert var to const/let, and make async.',
      },
      {
        heading: 'Common Improvement Intentions',
        body: 'Convert to arrow function, merge nested if statements, invert if condition, replace string concatenation with template literal, convert loop to Array method (map/filter/reduce), and destructure object/array.',
      },
      {
        heading: 'Inspections vs Intentions',
        body: 'Inspections find problems (shown as wavy underlines). Intentions are suggestions that can be applied anywhere, not just on errors. You can configure which inspections are enabled in Settings → Editor → Inspections.',
      },
    ],
    shortcuts: [
      { keys: 'Alt+Enter / ⌥↩', description: 'Show intention actions / quick fixes' },
      { keys: 'F2 / ⌥F2 then Alt+Enter', description: 'Jump to next error, then fix it' },
    ],
    resources: [
      { title: 'Intention Actions', url: 'https://www.jetbrains.com/help/webstorm/intention-actions.html', type: 'docs' },
    ],
  },

  'live-templates': {
    overview:
      'Live Templates are abbreviations that expand into code snippets. They\'re faster than copy-pasting and can include smart variables that auto-populate from context.',
    sections: [
      {
        heading: 'Using Built-In Templates',
        body: 'Type the abbreviation and press Tab. Common JS/TS templates: "cl" → console.log(), "if" → if statement, "fore" → for-of loop, "fun" → function declaration, "afun" → async function, "prom" → new Promise(...).',
      },
      {
        heading: 'Viewing All Templates',
        body: 'Go to Settings → Editor → Live Templates to see all available templates organized by language. You can also press Ctrl+J in the editor to show a popup of all applicable templates.',
      },
      {
        heading: 'Creating Custom Templates',
        body: 'Click "+" in the Live Templates settings. Give it an abbreviation, description, and template text. Use $VARIABLE_NAME$ placeholders. Define each variable\'s default value or expression. Click "Change" to set which file types the template applies in.',
      },
      {
        heading: 'Template Variables',
        body: 'Built-in functions for variables: $END$ (cursor position after expansion), $SELECTION$ (wraps selected text), $date()$, $time()$, $user()$, $lineNumber()$. You can also call predefined functions like complete() to trigger code completion inside the template.',
      },
    ],
    shortcuts: [
      { keys: 'Tab', description: 'Expand a live template abbreviation' },
      { keys: 'Ctrl+J / ⌘J', description: 'Show all applicable live templates' },
    ],
    resources: [
      { title: 'Live Templates', url: 'https://www.jetbrains.com/help/webstorm/using-live-templates.html', type: 'docs' },
    ],
  },

  'multiple-cursors': {
    overview:
      'Multiple cursors let you edit multiple places simultaneously, making repetitive edits dramatically faster.',
    sections: [
      {
        heading: 'Adding Cursors Manually',
        body: 'Alt+Click to place an additional cursor anywhere. Alt+Shift+Click to add a cursor at a specific point. You can have as many cursors as you want.',
      },
      {
        heading: 'Select Next/All Occurrences',
        body: 'With your cursor on a word, Ctrl+G (⌃G) selects the next occurrence of that word. Keep pressing to add more. Ctrl+Shift+G deselects the last one. Alt+J / ⌘G selects all occurrences at once.',
      },
      {
        heading: 'Column / Block Selection',
        body: 'Hold Alt+Shift and drag the mouse to select a rectangular block of text. This creates multiple cursors at each line of the selection. Useful for editing aligned columns of code.',
      },
      {
        heading: 'Clone Caret Above/Below',
        body: 'Ctrl+Alt+Shift+Up/Down clones the caret above or below the current line. This is useful when you want to add identical text to multiple consecutive lines.',
      },
    ],
    shortcuts: [
      { keys: 'Alt+Click / ⌥Click', description: 'Add cursor at click position' },
      { keys: 'Ctrl+G / ⌃G', description: 'Select next occurrence' },
      { keys: 'Ctrl+Alt+Shift+J / ⌃⌥⇧J', description: 'Select all occurrences' },
      { keys: 'Ctrl+Alt+Shift+↑↓ / ⌃⌥⇧↑↓', description: 'Clone caret above / below' },
    ],
    resources: [
      { title: 'Multiple Carets and Selections', url: 'https://www.jetbrains.com/help/webstorm/multicursor.html', type: 'docs' },
    ],
  },

  'code-formatting': {
    overview:
      'WebStorm\'s formatter rewrites your code to match the configured style. Combined with EditorConfig and Prettier integration, it keeps code style consistent across a team.',
    sections: [
      {
        heading: 'Reformat Code',
        body: 'Ctrl+Alt+L (⌘⌥L) reformats the current file or selection. If you have a region selected, only that region is formatted. If nothing is selected, the whole file is formatted.',
      },
      {
        heading: 'Code Style Settings',
        body: 'Go to Settings → Editor → Code Style → JavaScript (or TypeScript, CSS, etc.). Configure indent size, semicolons, trailing commas, quote style, and more. These settings can be per-language.',
      },
      {
        heading: 'EditorConfig Support',
        body: 'Place an .editorconfig file in your project root. WebStorm respects it automatically. EditorConfig settings override IDE settings for that project, making style consistent for all editors on the team.',
      },
      {
        heading: 'Prettier Integration',
        body: 'Install the Prettier plugin and enable it in Settings → Languages & Frameworks → JavaScript → Prettier. Use "On save" to auto-format on every save. Prettier overrides WebStorm\'s built-in formatter for JS/TS/CSS files when enabled.',
      },
      {
        heading: 'Format on Save',
        body: 'Settings → Tools → Actions on Save lets you configure actions that run automatically on file save: reformat code, optimize imports, run ESLint --fix, and run Prettier.',
      },
    ],
    shortcuts: [
      { keys: 'Ctrl+Alt+L / ⌘⌥L', description: 'Reformat file or selection' },
      { keys: 'Ctrl+Alt+O / ⌃⌥O', description: 'Optimize imports (remove unused)' },
    ],
    resources: [
      { title: 'Reformat and Rearrange Code', url: 'https://www.jetbrains.com/help/webstorm/reformat-and-rearrange-code.html', type: 'docs' },
      { title: 'Prettier Integration', url: 'https://www.jetbrains.com/help/webstorm/prettier.html', type: 'docs' },
    ],
  },

  folding: {
    overview:
      'Code folding collapses regions of code to reduce visual noise. WebStorm folds imports, functions, comment blocks, and arbitrary custom regions.',
    sections: [
      {
        heading: 'Folding Shortcuts',
        body: 'Ctrl+- to fold (collapse) the current region. Ctrl++ to expand. Ctrl+Shift+- to fold all regions in the file. Ctrl+Shift++ to expand all. Click the arrow in the gutter (left margin) to fold/unfold a specific block.',
      },
      {
        heading: 'Folding by Default',
        body: 'In Settings → Editor → General → Code Folding you can configure which regions are folded by default when you open a file (e.g. import statements, doc comments).',
      },
      {
        heading: 'Custom Folding Regions',
        body: 'Wrap any code with // region My Label and // endregion to create a foldable section with a custom label. This is useful for organizing long files into named logical sections.',
      },
    ],
    shortcuts: [
      { keys: 'Ctrl+- / ⌘-', description: 'Fold current region' },
      { keys: 'Ctrl++ / ⌘+', description: 'Expand current region' },
      { keys: 'Ctrl+Shift+- / ⌘⇧-', description: 'Fold all' },
      { keys: 'Ctrl+Shift++ / ⌘⇧+', description: 'Expand all' },
    ],
    resources: [
      { title: 'Code Folding', url: 'https://www.jetbrains.com/help/webstorm/code-folding.html', type: 'docs' },
    ],
  },

  // ── Navigation ──────────────────────────────────────────────────────────────

  'goto-everywhere': {
    overview:
      'Double Shift opens the "Search Everywhere" dialog — the most versatile navigation shortcut in WebStorm. It can find files, classes, symbols, IDE actions, and settings from one input.',
    sections: [
      {
        heading: 'What It Searches',
        body: 'By default it searches across all categories. Tabs at the top filter by: All, Classes, Files, Symbols, Actions, Git, and Run Configurations.',
      },
      {
        heading: 'Smart Matching',
        body: 'Matching is fuzzy and case-insensitive. Type initials for CamelCase names: "UC" matches "UserComponent". Type a file extension like ".ts" to filter to TypeScript files only.',
      },
      {
        heading: 'Running Actions',
        body: 'Switch to the "Actions" tab (or press Double Shift then click Actions). You can run any IDE action by name — like "Split Right", "Enable Distraction-Free Mode", or "Maximize Tool Window." This is how you discover features without memorizing every shortcut.',
      },
      {
        heading: 'Go To File vs Go To Class',
        body: 'Ctrl+Shift+N goes directly to files. Ctrl+N goes to classes/components. Ctrl+Alt+Shift+N goes to any symbol (function, variable, etc.). These are faster than Double Shift when you know what kind of thing you\'re looking for.',
      },
    ],
    shortcuts: [
      { keys: 'Shift Shift', description: 'Search Everywhere' },
      { keys: 'Ctrl+N / ⌘O', description: 'Go to Class / Component' },
      { keys: 'Ctrl+Shift+N / ⌘⇧O', description: 'Go to File' },
      { keys: 'Ctrl+Alt+Shift+N / ⌘⌥O', description: 'Go to Symbol' },
    ],
    resources: [
      { title: 'Searching Everywhere', url: 'https://www.jetbrains.com/help/webstorm/searching-everywhere.html', type: 'docs' },
    ],
  },

  'goto-definition': {
    overview:
      'Navigating to a declaration shows you exactly where something was defined. This is essential for understanding unfamiliar code and refactoring safely.',
    sections: [
      {
        heading: 'Go To Declaration',
        body: 'Ctrl+B or Ctrl+Click on any identifier to jump to its declaration. In TypeScript this navigates to the type definition. For third-party packages it navigates to the .d.ts type declarations.',
      },
      {
        heading: 'Go To Type Declaration',
        body: 'Ctrl+Shift+B navigates to the type of the current expression, rather than the declaration of the variable itself.',
      },
      {
        heading: 'Quick Definition',
        body: 'Ctrl+Shift+I (⌘Y) shows the declaration in a popup without leaving the current file. Press Escape to dismiss it. Press Enter to navigate fully into it.',
      },
      {
        heading: 'Navigate Back / Forward',
        body: 'After jumping around, Ctrl+Alt+Left (⌘⌥←) navigates back to where you were. Ctrl+Alt+Right moves forward in history. This is your "undo" for navigation.',
      },
    ],
    shortcuts: [
      { keys: 'Ctrl+B / ⌘B', description: 'Go to declaration' },
      { keys: 'Ctrl+Click / ⌘Click', description: 'Go to declaration (mouse)' },
      { keys: 'Ctrl+Shift+I / ⌘Y', description: 'Quick Definition popup' },
      { keys: 'Ctrl+Alt+← / ⌘⌥←', description: 'Navigate back' },
    ],
    resources: [
      { title: 'Navigating Through the Source Code', url: 'https://www.jetbrains.com/help/webstorm/navigating-through-the-source-code.html', type: 'docs' },
    ],
  },

  'find-usages': {
    overview:
      'Find Usages shows every place a symbol is referenced. It\'s the safest way to understand the impact of a change before making it.',
    sections: [
      {
        heading: 'Basic Find Usages',
        body: 'Press Alt+F7 with your cursor on any identifier. The results appear in the Find tool window at the bottom, grouped by usage type (function calls, type references, assignments, etc.) and file.',
      },
      {
        heading: 'Highlight Usages in File',
        body: 'Ctrl+Shift+F7 (⌘⇧F7) highlights all occurrences of the identifier in the current file only. Press Escape to clear the highlighting. Use F3/Shift+F3 to jump between highlighted occurrences.',
      },
      {
        heading: 'Show Usages Popup',
        body: 'Ctrl+Alt+F7 (⌘⌥F7) shows a compact inline popup of all usages. Click an entry to navigate. Faster than opening the full Find tool window.',
      },
      {
        heading: 'Usage Filtering',
        body: 'In the Find tool window you can group usages by file, directory, module, or usage type. Use the filter dropdown to show only reads, writes, or import statements.',
      },
    ],
    shortcuts: [
      { keys: 'Alt+F7 / ⌥F7', description: 'Find Usages' },
      { keys: 'Ctrl+Alt+F7 / ⌘⌥F7', description: 'Show Usages popup' },
      { keys: 'Ctrl+Shift+F7 / ⌘⇧F7', description: 'Highlight usages in file' },
    ],
    resources: [
      { title: 'Find Usages', url: 'https://www.jetbrains.com/help/webstorm/find-highlight-usages.html', type: 'docs' },
    ],
  },

  'structural-search': {
    overview:
      'Structural Search and Replace finds code by its structural pattern, not just text. This lets you find all arrow functions, all console.log calls, or any other syntactic pattern.',
    sections: [
      {
        heading: 'Opening Structural Search',
        body: 'Menu: Edit → Find → Search Structurally. Or use Double Shift and search for "Search Structurally." This is an advanced feature most users discover later.',
      },
      {
        heading: 'Writing Patterns',
        body: 'Use $variable$ placeholders in your pattern to match any expression. For example: "console.$method$($args$)" matches any console.log, console.error, console.warn, etc.',
      },
      {
        heading: 'Structural Replace',
        body: 'Structural Replace uses the same pattern syntax but with a replacement. You can rewrite code patterns across your entire codebase. Useful for migrations like converting one API shape to another.',
      },
    ],
    shortcuts: [
      { keys: 'Ctrl+Shift+F / ⌘⇧F', description: 'Find in files (plain text)' },
      { keys: 'Ctrl+Shift+R / ⌘⇧R', description: 'Replace in files (plain text)' },
    ],
    resources: [
      { title: 'Structural Search and Replace', url: 'https://www.jetbrains.com/help/webstorm/structural-search-and-replace.html', type: 'docs' },
    ],
  },

  bookmarks: {
    overview:
      'Bookmarks and mnemonics let you pin locations in the codebase for fast recall, especially useful when working on a large feature across many files.',
    sections: [
      {
        heading: 'Anonymous Bookmarks',
        body: 'Press F11 to toggle a bookmark on the current line. A bookmark icon appears in the gutter. Open the Bookmarks tool window (Shift+F11) to see all bookmarks with their file and line info.',
      },
      {
        heading: 'Mnemonic Bookmarks',
        body: 'Press Ctrl+Shift+<digit> (0–9) to assign a numbered bookmark to the current line. Press Ctrl+<digit> from anywhere to jump directly to that bookmark. This is the fastest navigation method in the IDE.',
      },
      {
        heading: 'Breakpoints as Bookmarks',
        body: 'Breakpoints can be converted to bookmarks. Right-click a breakpoint and enable "More" to keep it as a bookmark even when not debugging.',
      },
    ],
    shortcuts: [
      { keys: 'F11', description: 'Toggle anonymous bookmark' },
      { keys: 'Ctrl+Shift+0–9', description: 'Set mnemonic bookmark' },
      { keys: 'Ctrl+0–9', description: 'Jump to mnemonic bookmark' },
      { keys: 'Shift+F11 / ⇧F11', description: 'Show all bookmarks' },
    ],
    resources: [
      { title: 'Bookmarks', url: 'https://www.jetbrains.com/help/webstorm/bookmarks.html', type: 'docs' },
    ],
  },

  'recent-files': {
    overview:
      'Recent Files and Recent Locations let you bounce between files quickly without using the project tree or file tabs.',
    sections: [
      {
        heading: 'Recent Files Popup',
        body: 'Ctrl+E shows a popup of recently opened files. Start typing to filter. Press Enter to open. The most recently used file is highlighted by default, so Ctrl+E, Enter is a one-keystroke "go to last file."',
      },
      {
        heading: 'Recent Locations',
        body: 'Ctrl+Shift+E shows a popup of recent code locations with a snippet preview. This is more useful than Recent Files when you need to get back to a specific place you were editing.',
      },
      {
        heading: 'Switcher',
        body: 'Ctrl+Tab opens the Switcher — a live list of open files and tool windows. Hold Ctrl and use arrow keys or Tab to cycle. Release Ctrl to jump to the selection. This is like Alt+Tab for the IDE.',
      },
    ],
    shortcuts: [
      { keys: 'Ctrl+E / ⌘E', description: 'Recent Files popup' },
      { keys: 'Ctrl+Shift+E / ⌘⇧E', description: 'Recent Locations popup' },
      { keys: 'Ctrl+Tab', description: 'Switcher (open tabs + tool windows)' },
    ],
    resources: [
      { title: 'Recent Files and Locations', url: 'https://www.jetbrains.com/help/webstorm/navigating-through-the-source-code.html#recent_files', type: 'docs' },
    ],
  },

  // ── Refactoring ──────────────────────────────────────────────────────────────

  rename: {
    overview:
      'Rename is the most commonly used refactoring. WebStorm updates every reference to the renamed symbol across the entire project, including dynamic references and string literals it can detect.',
    sections: [
      {
        heading: 'Renaming a Symbol',
        body: 'Press Shift+F6 with your cursor on any variable, function, class, file, or component. Type the new name. WebStorm shows a preview of all the places that will change. Press Refactor to apply.',
      },
      {
        heading: 'Rename vs In-Place Rename',
        body: 'For simple local renames WebStorm does an in-place rename — just type the new name inline. For renames that affect multiple files a full dialog is shown with preview. Press Esc to cancel.',
      },
      {
        heading: 'Renaming Files',
        body: 'Rename a file in the Project tool window (Shift+F6 or right-click → Refactor → Rename). WebStorm offers to update all imports that reference the file.',
      },
      {
        heading: 'Scope of Rename',
        body: 'The rename dialog has a "Search in comments and strings" option. Enable this to catch cases where the name appears in JSDoc comments or string-based references (like dynamic imports).',
      },
    ],
    shortcuts: [
      { keys: 'Shift+F6 / ⇧F6', description: 'Rename' },
    ],
    resources: [
      { title: 'Rename Refactorings', url: 'https://www.jetbrains.com/help/webstorm/rename-refactorings.html', type: 'docs' },
    ],
  },

  extract: {
    overview:
      'Extract refactorings pull a piece of code out into a named abstraction: a variable, constant, parameter, or function. They reduce duplication and improve readability without copy-pasting.',
    sections: [
      {
        heading: 'Extract Variable',
        body: 'Select an expression (or place cursor in it) and press Ctrl+Alt+V (⌘⌥V). WebStorm wraps the expression in a new variable. It detects if the same expression appears elsewhere and offers to replace all occurrences.',
      },
      {
        heading: 'Extract Constant',
        body: 'Ctrl+Alt+C extracts to a module-level constant. Useful for magic numbers and repeated string literals.',
      },
      {
        heading: 'Extract Function / Method',
        body: 'Select multiple lines of code and press Ctrl+Alt+M (⌘⌥M). WebStorm analyzes the selection, determines which variables need to be parameters, and generates the function signature automatically.',
      },
      {
        heading: 'Extract Parameter',
        body: 'Ctrl+Alt+P turns a hardcoded value inside a function into a parameter that callers must pass. All call sites are updated to pass the extracted value.',
      },
    ],
    shortcuts: [
      { keys: 'Ctrl+Alt+V / ⌘⌥V', description: 'Extract Variable' },
      { keys: 'Ctrl+Alt+C / ⌘⌥C', description: 'Extract Constant' },
      { keys: 'Ctrl+Alt+M / ⌘⌥M', description: 'Extract Method / Function' },
      { keys: 'Ctrl+Alt+P / ⌘⌥P', description: 'Extract Parameter' },
    ],
    resources: [
      { title: 'Extract Refactorings', url: 'https://www.jetbrains.com/help/webstorm/extract-method.html', type: 'docs' },
    ],
  },

  inline: {
    overview:
      'Inline is the inverse of Extract. It replaces a variable, constant, or function with its definition directly at every call site.',
    sections: [
      {
        heading: 'Inline Variable',
        body: 'Press Ctrl+Alt+N (⌘⌥N) on a variable declaration. WebStorm replaces every usage of that variable with the right-hand side expression and removes the declaration.',
      },
      {
        heading: 'When to Use Inline',
        body: 'Use inline when a variable or function is used only once and the abstraction isn\'t adding clarity. Also useful when you\'ve previously extracted something and decided it was unnecessary.',
      },
      {
        heading: 'Inline Method',
        body: 'Inline works on functions too. Place the cursor on a function call or definition and press Ctrl+Alt+N. The function body replaces every call site and the function is removed.',
      },
    ],
    shortcuts: [
      { keys: 'Ctrl+Alt+N / ⌘⌥N', description: 'Inline Variable / Method' },
    ],
    resources: [
      { title: 'Inline Refactoring', url: 'https://www.jetbrains.com/help/webstorm/inline.html', type: 'docs' },
    ],
  },

  move: {
    overview:
      'Move refactoring moves files, functions, or classes to a new location and updates all import paths automatically.',
    sections: [
      {
        heading: 'Moving Files',
        body: 'Select a file in the Project tool window and press F6, or drag and drop it. WebStorm detects all import statements that reference the moved file and offers to update them.',
      },
      {
        heading: 'Moving Functions',
        body: 'Place your cursor on a top-level function and press F6 (or Refactor → Move). WebStorm will ask which file to move it to and update all references.',
      },
      {
        heading: 'Bulk Moves',
        body: 'You can select multiple files in the Project tree (Ctrl+Click / ⌘Click to multi-select) and move them all at once. All imports across the project are updated in one operation.',
      },
    ],
    shortcuts: [
      { keys: 'F6', description: 'Move' },
      { keys: 'Ctrl+Shift+F6 / ⌘⇧F6', description: 'Change type signature (TS)' },
    ],
    resources: [
      { title: 'Move Refactoring', url: 'https://www.jetbrains.com/help/webstorm/move-refactorings.html', type: 'docs' },
    ],
  },

  'change-signature': {
    overview:
      'Change Signature modifies a function\'s parameters — adding, removing, reordering, or changing defaults — and updates all call sites automatically.',
    sections: [
      {
        heading: 'Opening Change Signature',
        body: 'Place your cursor on a function name and press Ctrl+F6 (⌘F6). The dialog shows the current parameters and lets you add, remove, rename, or reorder them.',
      },
      {
        heading: 'Adding Parameters',
        body: 'Click "+" to add a parameter. Set a default value — this default is inserted at existing call sites that don\'t explicitly pass the parameter.',
      },
      {
        heading: 'Reordering Parameters',
        body: 'Select a parameter and use the Up/Down arrows to reorder. All calls are updated to pass arguments in the new order. This is much safer than manual find-and-replace.',
      },
    ],
    shortcuts: [
      { keys: 'Ctrl+F6 / ⌘F6', description: 'Change Signature' },
    ],
    resources: [
      { title: 'Change Signature', url: 'https://www.jetbrains.com/help/webstorm/change-signature.html', type: 'docs' },
    ],
  },

  'safe-delete': {
    overview:
      'Safe Delete removes a symbol from the codebase only if it has no usages. It prevents you from accidentally deleting something that is still referenced.',
    sections: [
      {
        heading: 'Using Safe Delete',
        body: 'Right-click a file, function, or variable → Refactor → Safe Delete. Or use the Refactor menu. WebStorm searches for usages first. If none are found, the deletion proceeds. If usages are found, it shows them so you can decide.',
      },
      {
        heading: 'Search in Comments',
        body: 'Enable "Search in comments and strings" in the Safe Delete dialog to catch references that appear in JSDoc or string literals.',
      },
    ],
    resources: [
      { title: 'Safe Delete', url: 'https://www.jetbrains.com/help/webstorm/safe-delete.html', type: 'docs' },
    ],
  },

  // ── Language Support ─────────────────────────────────────────────────────────

  javascript: {
    overview:
      'WebStorm has built-in, deep support for modern JavaScript. No plugins needed. It understands ES2024+ syntax, modules, JSDoc types, and provides full static analysis.',
    sections: [
      {
        heading: 'Language Level',
        body: 'Set the language level in Settings → Languages & Frameworks → JavaScript. This controls which syntax features are recognized. "ECMAScript 6+" is the recommended setting for modern projects.',
      },
      {
        heading: 'JSDoc Type Checking',
        body: 'Add @type, @param, and @returns JSDoc annotations to get type checking and completion in plain .js files without converting to TypeScript. Useful for libraries that need to stay in JS.',
      },
      {
        heading: 'Module System Detection',
        body: 'WebStorm auto-detects CommonJS vs ESM from package.json "type" field. It shows the correct import style for your project and warns when you mix them accidentally.',
      },
      {
        heading: 'ESLint Integration',
        body: 'WebStorm integrates with ESLint automatically when it finds .eslintrc in your project. Violations show as wavy underlines. Use Alt+Enter → Apply ESLint fix on any flagged line.',
      },
    ],
    resources: [
      { title: 'JavaScript in WebStorm', url: 'https://www.jetbrains.com/help/webstorm/javascript-specific-guidelines.html', type: 'docs' },
    ],
  },

  typescript: {
    overview:
      'WebStorm\'s TypeScript support is first-class and built-in. It uses the TypeScript language service directly for type checking, completion, and navigation.',
    sections: [
      {
        heading: 'TypeScript Service',
        body: 'WebStorm bundles a TypeScript version and uses the TypeScript language service for analysis. You can switch to the TypeScript version from your local node_modules in Settings → Languages & Frameworks → TypeScript.',
      },
      {
        heading: 'tsconfig.json Awareness',
        body: 'WebStorm reads your tsconfig.json and respects all compiler options. Multiple tsconfig files in a monorepo are supported. Use the "TypeScript" tool window (bottom) to see compilation errors project-wide.',
      },
      {
        heading: 'Type-Driven Navigation',
        body: 'Go-to-Definition navigates to .d.ts type declaration files for third-party packages. Ctrl+Shift+B (⌘⇧B) navigates to the type of the expression under cursor, not the value.',
      },
      {
        heading: 'TypeScript-Specific Intentions',
        body: 'Alt+Enter on a JS file can offer "Convert to TypeScript." On a TypeScript error, it can suggest adding type assertions, explicit annotations, or "as any" escape hatches.',
      },
    ],
    shortcuts: [
      { keys: 'Ctrl+Shift+B / ⌘⇧B', description: 'Go to type declaration' },
    ],
    resources: [
      { title: 'TypeScript Support', url: 'https://www.jetbrains.com/help/webstorm/typescript-support.html', type: 'docs' },
    ],
  },

  'html-css': {
    overview:
      'WebStorm provides excellent HTML and CSS support including Emmet abbreviations, live CSS completion, color pickers, and SCSS/Less variable tracking.',
    sections: [
      {
        heading: 'Emmet',
        body: 'Emmet is built in. Type CSS-like abbreviations and press Tab to expand: "ul>li*3>a" creates a list with 3 links. "div.container>header+main+footer" creates the full structure. Works in HTML, JSX, and TSX files.',
      },
      {
        heading: 'CSS Completion',
        body: 'Full CSS property and value completion. Unknown properties show as warnings. Vendor prefix insertion can be automated. Class name completion works across HTML and CSS files in the same project.',
      },
      {
        heading: 'Color Picker',
        body: 'Click the color square in the gutter next to any CSS color value to open a graphical color picker. Change the color there and the hex/rgb/hsl value updates automatically.',
      },
      {
        heading: 'SCSS / Less',
        body: 'Full SCSS support: variable completion, mixin completion, nesting visualization, and "Go to variable declaration" works across SCSS files. Less is also supported.',
      },
    ],
    resources: [
      { title: 'HTML in WebStorm', url: 'https://www.jetbrains.com/help/webstorm/editing-html-files.html', type: 'docs' },
      { title: 'CSS and SCSS', url: 'https://www.jetbrains.com/help/webstorm/style-sheets.html', type: 'docs' },
    ],
  },

  react: {
    overview:
      'WebStorm\'s React support is built-in and includes JSX/TSX syntax, prop type checking, hooks analysis, React-specific navigation, and component-aware refactorings.',
    sections: [
      {
        heading: 'Component Navigation',
        body: 'Ctrl+Click on a JSX tag navigates to the component definition. Go to Definition works on props, hooks, and context values. Alt+F7 on a component shows all the places it is rendered.',
      },
      {
        heading: 'Prop Completion and Type Checking',
        body: 'WebStorm reads PropTypes definitions and TypeScript interfaces for props. It completes prop names and warns about missing required props or incorrect types in JSX.',
      },
      {
        heading: 'React Hooks Support',
        body: 'WebStorm understands hook rules: it warns about hooks called conditionally or in loops. It also completes hook names and navigates to custom hook definitions.',
      },
      {
        heading: 'JSX Formatting',
        body: 'Configure JSX-specific formatting in Settings → Editor → Code Style → HTML. Control whether attributes wrap, how JSX expressions are indented, and whether to auto-close JSX tags.',
      },
    ],
    resources: [
      { title: 'React in WebStorm', url: 'https://www.jetbrains.com/help/webstorm/react.html', type: 'docs' },
    ],
  },

  vue: {
    overview:
      'Vue.js development in WebStorm requires the Vue.js plugin (free, by JetBrains). It provides full Single File Component support, template completion, and Vuex/Pinia integration.',
    sections: [
      {
        heading: 'Install the Plugin',
        body: 'Go to Settings → Plugins → Marketplace and search for "Vue.js." Install it and restart. The plugin is maintained by JetBrains and kept up to date with Vue 3.',
      },
      {
        heading: 'Single File Components',
        body: 'In .vue files, each block (<template>, <script>, <style>) has its own syntax highlighting and completion. Script setup syntax with defineProps/defineEmits is fully supported.',
      },
      {
        heading: 'Template Completion',
        body: 'WebStorm resolves component props, emits, and slots inside templates. v-model, v-if, v-for, and other directives have completion. Component names auto-import from the components folder.',
      },
    ],
    resources: [
      { title: 'Vue.js in WebStorm', url: 'https://www.jetbrains.com/help/webstorm/vue-js.html', type: 'docs' },
    ],
  },

  angular: {
    overview:
      'Angular support in WebStorm requires the Angular and AngularJS plugin. It provides template binding resolution, Angular CLI integration, and RxJS operator completion.',
    sections: [
      {
        heading: 'Install the Plugin',
        body: 'Settings → Plugins → Marketplace → search "Angular and AngularJS." This plugin is by JetBrains and supports Angular 2+ (not just AngularJS).',
      },
      {
        heading: 'Template Support',
        body: 'Component property and method bindings in HTML templates are resolved. [(ngModel)] two-way binding, *ngIf, *ngFor, and event bindings (click)="handler()" all have completion and navigation.',
      },
      {
        heading: 'Angular CLI Integration',
        body: 'Run "ng generate component MyComp" from the IDE\'s terminal or right-click a folder → New → Angular CLI. The generated files are opened automatically.',
      },
    ],
    resources: [
      { title: 'Angular in WebStorm', url: 'https://www.jetbrains.com/help/webstorm/angular.html', type: 'docs' },
    ],
  },

  nodejs: {
    overview:
      'WebStorm has first-class Node.js support: it recognizes built-in modules, integrates with npm/yarn/pnpm, and provides run/debug configurations for server-side JS.',
    sections: [
      {
        heading: 'Configuring Node.js',
        body: 'Set the Node.js interpreter in Settings → Languages & Frameworks → Node.js. WebStorm auto-detects Node installations. You can configure different interpreters per project.',
      },
      {
        heading: 'Built-In Module Completion',
        body: 'require("fs"), require("path"), require("http") and all Node.js built-ins have full completion and documentation. Works in both CommonJS and ESM (import from "node:fs") syntax.',
      },
      {
        heading: 'Run Configurations',
        body: 'Create a Node.js run configuration (Run → Edit Configurations → +) to specify an entry point, environment variables, and command-line arguments for your server.',
      },
    ],
    resources: [
      { title: 'Node.js in WebStorm', url: 'https://www.jetbrains.com/help/webstorm/developing-node-js-applications.html', type: 'docs' },
    ],
  },

  graphql: {
    overview:
      'GraphQL support requires the JS GraphQL plugin. It provides schema-aware completion, query validation, and fragment navigation across .graphql files and inline gql`` template literals.',
    sections: [
      {
        heading: 'Install JS GraphQL Plugin',
        body: 'Settings → Plugins → Marketplace → "JS GraphQL" (by Jim Kynde Meyer). This is the standard plugin used by the community.',
      },
      {
        heading: 'Schema Integration',
        body: 'Point the plugin at your schema file or SDL endpoint in .graphqlrc.yml. Once connected, field completion and argument validation work inside all GraphQL operations.',
      },
      {
        heading: 'Tagged Template Literals',
        body: 'Queries written as gql`...` in JS/TS files get the same syntax highlighting, completion, and validation as .graphql files.',
      },
    ],
    resources: [
      { title: 'GraphQL Plugin Docs', url: 'https://jimkyndemeyer.github.io/js-graphql-intellij-plugin/', type: 'docs' },
    ],
  },

  // ── Version Control ──────────────────────────────────────────────────────────

  'git-basics': {
    overview:
      'WebStorm\'s Git integration covers every common workflow without needing the command line. The Git tool window provides a visual log, branch management, and stash operations.',
    sections: [
      {
        heading: 'The Git Tool Window',
        body: 'Alt+9 (⌘9) opens the Git tool window. The Log tab shows the full commit history with graph visualization. The Local Changes tab (now "Commit" tab) shows modified files. The Branches popup (bottom-right status bar) shows all branches.',
      },
      {
        heading: 'Basic Operations',
        body: 'Update Project (Ctrl+T / ⌘T) fetches and pulls. Push (Ctrl+Shift+K / ⌘⇧K) pushes the current branch. These cover 90% of day-to-day Git operations.',
      },
      {
        heading: 'Git Operations Menu',
        body: 'The VCS menu (renamed to "Git" once Git is detected) contains all Git operations: fetch, pull, push, stash, rebase, cherry-pick, and more.',
      },
      {
        heading: 'Gutter Markers',
        body: 'When a file is modified, colored bars appear in the editor gutter. Blue = changed, green = added, gray = deleted. Click a gutter bar to see the diff inline.',
      },
    ],
    shortcuts: [
      { keys: 'Ctrl+T / ⌘T', description: 'Update Project (pull)' },
      { keys: 'Ctrl+Shift+K / ⌘⇧K', description: 'Push' },
      { keys: 'Alt+9 / ⌘9', description: 'Git tool window' },
    ],
    resources: [
      { title: 'Git Integration in WebStorm', url: 'https://www.jetbrains.com/help/webstorm/using-git-integration.html', type: 'docs' },
    ],
  },

  'commit-window': {
    overview:
      'The Commit tool window (Ctrl+K) is WebStorm\'s staging area. It lets you craft commits with surgical precision: stage individual lines, review diffs inline, and run checks before committing.',
    sections: [
      {
        heading: 'Staging Individual Lines',
        body: 'In the Commit tool window, expand a file to see its diff. Hover over a hunk and use the "+" button to stage individual lines or hunks rather than the whole file. This lets you make atomic commits even when you\'ve changed many things at once.',
      },
      {
        heading: 'Commit Message',
        body: 'The commit message area at the bottom has a built-in spell checker and supports Conventional Commits format. If you have an issue tracker connected, typing "#" shows issue IDs to reference.',
      },
      {
        heading: 'Before Commit Checks',
        body: 'Expand the gear icon in the Commit tool window. You can run "Reformat code," "Optimize imports," "Analyze code," and "Run tests" automatically before every commit.',
      },
      {
        heading: 'Amend Last Commit',
        body: 'Check "Amend commit" in the Commit tool window to add staged changes to the previous commit. Only use this before pushing to a shared branch.',
      },
    ],
    shortcuts: [
      { keys: 'Ctrl+K / ⌘K', description: 'Open Commit tool window' },
      { keys: 'Ctrl+Shift+K / ⌘⇧K', description: 'Push commits' },
    ],
    resources: [
      { title: 'Commit and Push Changes', url: 'https://www.jetbrains.com/help/webstorm/commit-and-push-changes.html', type: 'docs' },
    ],
  },

  branches: {
    overview:
      'Branch management in WebStorm is done through the branch popup in the status bar. Creating, switching, merging, and deleting branches is faster than typing Git commands.',
    sections: [
      {
        heading: 'The Branch Popup',
        body: 'Click the branch name in the bottom-right status bar (or press Ctrl+` / ^`) to open the branch popup. It shows local and remote branches, lets you create new ones, checkout, merge, rebase, and delete.',
      },
      {
        heading: 'Creating & Switching',
        body: 'In the branch popup, click "+ New Branch" or type the name directly. To switch, click any branch and choose "Checkout."',
      },
      {
        heading: 'Compare Branches',
        body: 'In the branch popup, hover a branch and choose "Compare with Current." This shows a diff of all commits between the two branches in the Git log.',
      },
      {
        heading: 'Interactive Rebase',
        body: 'Right-click any commit in the Git log → Interactively Rebase from Here. This opens a dialog to squash, reorder, rename, or drop commits. Much friendlier than git rebase -i.',
      },
    ],
    shortcuts: [
      { keys: 'Ctrl+` / ^`', description: 'Open VCS quick operations popup' },
    ],
    resources: [
      { title: 'Branch Management', url: 'https://www.jetbrains.com/help/webstorm/manage-branches.html', type: 'docs' },
    ],
  },

  'merge-conflicts': {
    overview:
      'WebStorm\'s three-way merge editor makes resolving conflicts much more readable than raw conflict markers in text files.',
    sections: [
      {
        heading: 'The Three-Way Merge Editor',
        body: 'When a conflict is detected, WebStorm shows a "Resolve" link in the Merge Conflicts notification. Clicking it opens the three-panel editor: your changes on the left, base (common ancestor) in the center, their changes on the right. The result panel updates at the bottom.',
      },
      {
        heading: 'Accepting Changes',
        body: 'Use the ">>" and "<<" arrows to accept a change from the left or right panel. Use "X" to reject a change. Use "Ctrl+Z" to undo any accepted change. When you\'re satisfied, click Apply.',
      },
      {
        heading: 'Syntax Highlighting in Conflicts',
        body: 'Unlike most editors, WebStorm\'s merge editor has full syntax highlighting and code completion in all three panels. You can type new code directly in the result panel.',
      },
    ],
    resources: [
      { title: 'Resolve Git Conflicts', url: 'https://www.jetbrains.com/help/webstorm/resolve-conflicts.html', type: 'docs' },
    ],
  },

  blame: {
    overview:
      'Git Blame annotates each line with the commit, author, and date that last changed it. File History shows the full evolution of a file over time.',
    sections: [
      {
        heading: 'Enable Git Blame',
        body: 'Right-click in the editor gutter (left margin) → Annotate with Git Blame. Each line is annotated with the commit info. Click any annotation to open the full commit details.',
      },
      {
        heading: 'File History',
        body: 'Right-click a file → Git → Show History. This opens the Log for that file only, showing every commit that touched it. Click a commit to see the diff for that change.',
      },
      {
        heading: 'Line History',
        body: 'Select lines in the editor → right-click → Git → Show History for Selection. Shows only commits that changed those specific lines.',
      },
    ],
    resources: [
      { title: 'Git Blame Annotations', url: 'https://www.jetbrains.com/help/webstorm/investigate-changes.html', type: 'docs' },
    ],
  },

  github: {
    overview:
      'The GitHub plugin (pre-installed) lets you create pull requests, review PRs, and clone repositories directly from WebStorm.',
    sections: [
      {
        heading: 'Connecting Your Account',
        body: 'Settings → Version Control → GitHub → "+" → Log In. Use a personal access token or log in via browser. GitLab can be connected similarly via the GitLab plugin.',
      },
      {
        heading: 'Creating Pull Requests',
        body: 'Git menu → GitHub → Create Pull Request. Fill in title, description, base branch, and reviewers. The PR is created on GitHub without leaving the IDE.',
      },
      {
        heading: 'Reviewing PRs',
        body: 'Git → GitHub → View Pull Requests. Browse open PRs, leave comments on lines, approve or request changes. Inline comments appear in the editor.',
      },
    ],
    resources: [
      { title: 'GitHub Integration', url: 'https://www.jetbrains.com/help/webstorm/github.html', type: 'docs' },
    ],
  },

  // ── Debugging ────────────────────────────────────────────────────────────────

  'run-configs': {
    overview:
      'Run/Debug Configurations tell WebStorm how to start your application. You can have multiple configurations per project and switch between them instantly.',
    sections: [
      {
        heading: 'Creating a Configuration',
        body: 'Click the dropdown in the top-right toolbar → "Edit Configurations" → "+". Choose the type: Node.js, npm, JavaScript Debug, Jest, etc. The most important settings are the JavaScript file (entry point) and environment variables.',
      },
      {
        heading: 'npm Configurations',
        body: 'Create an npm configuration to run package.json scripts from the IDE with one click. Set the script name (e.g. "dev", "build", "test") and optionally add environment variables.',
      },
      {
        heading: 'Environment Variables',
        body: 'Each configuration has an "Environment variables" field. Click the icon to open the editor. Variables set here override your shell environment for that run only.',
      },
      {
        heading: 'Before Launch',
        body: 'Each configuration has a "Before Launch" section where you can add other configurations to run first — useful for running a build step before starting the dev server.',
      },
    ],
    shortcuts: [
      { keys: 'Shift+F10 / ⌃R', description: 'Run current configuration' },
      { keys: 'Shift+F9 / ⌃D', description: 'Debug current configuration' },
      { keys: 'Alt+Shift+F10 / ⌃⌥R', description: 'Choose and run configuration' },
    ],
    resources: [
      { title: 'Run/Debug Configurations', url: 'https://www.jetbrains.com/help/webstorm/run-debug-configuration.html', type: 'docs' },
    ],
  },

  breakpoints: {
    overview:
      'Breakpoints pause execution so you can inspect state at a specific point in the code. WebStorm supports line breakpoints, conditional breakpoints, and log-point breakpoints.',
    sections: [
      {
        heading: 'Setting Breakpoints',
        body: 'Click in the gutter (left margin) next to a line number to set a breakpoint. A red circle appears. Click it again to remove. Press Ctrl+Shift+F8 to view all breakpoints.',
      },
      {
        heading: 'Conditional Breakpoints',
        body: 'Right-click a breakpoint → "More" → add a Condition. The program only pauses when the condition is true. Example: i === 42. Extremely useful for loops and repeated callbacks.',
      },
      {
        heading: 'Log Breakpoints (non-suspending)',
        body: 'Right-click a breakpoint → "More" → disable "Suspend," enable "Log expression." This logs a value without pausing execution — like a zero-effort console.log that you can add/remove without editing code.',
      },
      {
        heading: 'Exception Breakpoints',
        body: 'Ctrl+Shift+F8 → "+" → JavaScript Exception Breakpoint. Pauses whenever a specific exception is thrown (or any exception). Useful when you know an exception is being swallowed somewhere.',
      },
    ],
    shortcuts: [
      { keys: 'Ctrl+F8 / ⌘F8', description: 'Toggle breakpoint on current line' },
      { keys: 'Ctrl+Shift+F8 / ⌘⇧F8', description: 'View all breakpoints' },
    ],
    resources: [
      { title: 'Breakpoints', url: 'https://www.jetbrains.com/help/webstorm/using-breakpoints.html', type: 'docs' },
    ],
  },

  'debug-controls': {
    overview:
      'The debug controls let you step through code one line at a time, examine the call stack, and understand the flow of execution.',
    sections: [
      {
        heading: 'Step Controls',
        body: 'F8 (Step Over) executes the current line and moves to the next. F7 (Step Into) enters a function call. Shift+F8 (Step Out) executes until the current function returns. These are the three most-used debug controls.',
      },
      {
        heading: 'Run to Cursor',
        body: 'Alt+F9 resumes execution until the line where your cursor is. Faster than setting a temporary breakpoint.',
      },
      {
        heading: 'Frames Panel',
        body: 'The Frames panel shows the call stack. Click any frame to jump to that level of the stack and inspect local variables at that point. Useful for understanding how you got to the current line.',
      },
      {
        heading: 'Drop Frame',
        body: 'Right-click a frame in the Frames panel → "Drop Frame" to go back in execution to a previous point. This is like an undo for debugging — not always possible, but very helpful when it is.',
      },
    ],
    shortcuts: [
      { keys: 'F8', description: 'Step Over' },
      { keys: 'F7', description: 'Step Into' },
      { keys: 'Shift+F8 / ⇧F8', description: 'Step Out' },
      { keys: 'F9', description: 'Resume Program' },
      { keys: 'Alt+F9 / ⌥F9', description: 'Run to Cursor' },
    ],
    resources: [
      { title: 'Debugging in WebStorm', url: 'https://www.jetbrains.com/help/webstorm/debugging-code.html', type: 'docs' },
    ],
  },

  watches: {
    overview:
      'Watches let you monitor specific expressions continuously while debugging. Evaluate Expression lets you run arbitrary code against the current state.',
    sections: [
      {
        heading: 'Adding a Watch',
        body: 'In the Debugger tool window, click the "+" in the Watches section and type any expression. It will be evaluated every time the program pauses. You can watch variables, property paths, and function calls.',
      },
      {
        heading: 'Evaluate Expression',
        body: 'Press Alt+F8 to open the Evaluate Expression dialog. Type any valid JavaScript expression — call functions, check conditions, modify state. The result is shown immediately. Code completion works here.',
      },
      {
        heading: 'Inline Values',
        body: 'WebStorm shows variable values inline in the editor while debugging (gray text at the end of lines). This is very helpful for seeing how values change as you step through loops.',
      },
    ],
    shortcuts: [
      { keys: 'Alt+F8 / ⌥F8', description: 'Evaluate Expression' },
    ],
    resources: [
      { title: 'Watches and Variables', url: 'https://www.jetbrains.com/help/webstorm/examining-suspended-program.html', type: 'docs' },
    ],
  },

  'nodejs-debug': {
    overview:
      'WebStorm can debug Node.js applications by launching them with the debugger attached or attaching to an already-running Node process.',
    sections: [
      {
        heading: 'Run with Debugger',
        body: 'Create a Node.js run configuration with your entry point, then click the green bug icon or press Shift+F9. WebStorm launches Node with the inspector protocol enabled and attaches automatically.',
      },
      {
        heading: 'Attach to Running Process',
        body: 'Start your app with: node --inspect app.js. In WebStorm create an "Attach to Node.js/Chrome" debug configuration and click Debug. Useful when you can\'t change how the process is started.',
      },
      {
        heading: 'Source Maps',
        body: 'For transpiled code (TypeScript, Babel), configure source maps in the run configuration. WebStorm maps execution positions back to the original source files so breakpoints work in your source, not the compiled output.',
      },
    ],
    resources: [
      { title: 'Debugging Node.js', url: 'https://www.jetbrains.com/help/webstorm/running-and-debugging-node-js.html', type: 'docs' },
    ],
  },

  'chrome-debug': {
    overview:
      'WebStorm can debug client-side JavaScript running in Chrome by connecting to the browser\'s remote debugging protocol.',
    sections: [
      {
        heading: 'JavaScript Debug Configuration',
        body: 'Create a "JavaScript Debug" run configuration. Set the URL to your local dev server (e.g. http://localhost:3000). Click Debug — WebStorm opens Chrome and connects to it. Breakpoints in WebStorm pause Chrome.',
      },
      {
        heading: 'Source Maps in the Browser',
        body: 'If your bundler generates source maps, WebStorm uses them to map Chrome\'s runtime positions back to your original source files. Breakpoints set in the source file stop execution in the browser.',
      },
      {
        heading: 'Browser Dev Tools + WebStorm',
        body: 'You can use Chrome DevTools and WebStorm simultaneously. Changes made in DevTools are reflected in WebStorm, and vice versa, through the Live Edit feature.',
      },
    ],
    resources: [
      { title: 'Debugging JavaScript in Chrome', url: 'https://www.jetbrains.com/help/webstorm/debugging-javascript-in-chrome.html', type: 'docs' },
    ],
  },

  // ── Testing ──────────────────────────────────────────────────────────────────

  jest: {
    overview:
      'WebStorm\'s Jest integration shows test results inline, lets you run single tests with a click, and provides red/green gutter indicators for every test.',
    sections: [
      {
        heading: 'Auto-Detection',
        body: 'WebStorm detects Jest in your node_modules and auto-configures a Jest run configuration. If your project has a jest.config.js or jest.config.ts, it is used automatically.',
      },
      {
        heading: 'Running Tests',
        body: 'Green "play" icons appear in the gutter next to each test and describe block. Click to run that specific test. Right-click for "Run with Coverage." Use the toolbar at the top of the Jest tool window to run all tests.',
      },
      {
        heading: 'Test Results Panel',
        body: 'The test runner tool window shows a tree of test suites and tests. Green check = passed, red X = failed. Click a failed test to see the error message and stack trace. Double-click the stack frame to jump to the failure.',
      },
      {
        heading: 'Watch Mode',
        body: 'In the Jest run configuration, enable "Jest: --watchAll" flag to keep tests running in watch mode. Failing tests are highlighted in the editor as you type.',
      },
    ],
    resources: [
      { title: 'Testing with Jest', url: 'https://www.jetbrains.com/help/webstorm/running-unit-tests-on-jest.html', type: 'docs' },
    ],
  },

  'test-coverage': {
    overview:
      'Run tests with coverage to see a color-coded view of which lines are exercised by your test suite.',
    sections: [
      {
        heading: 'Running with Coverage',
        body: 'Right-click a test file or the Jest run configuration → "Run \'...\' with Coverage." Alternatively use the shield icon in the gutter or toolbar.',
      },
      {
        heading: 'Coverage Gutter',
        body: 'After running with coverage, each line gets a colored gutter marker: green = covered, red = not covered, yellow = partially covered (e.g. one branch of an if). This persists until you run coverage again.',
      },
      {
        heading: 'Coverage Report',
        body: 'The Coverage tool window shows percentage per file and folder. Click a file to see which lines are uncovered. Use this to identify where to add tests.',
      },
    ],
    resources: [
      { title: 'Code Coverage', url: 'https://www.jetbrains.com/help/webstorm/code-coverage.html', type: 'docs' },
    ],
  },

  mocha: {
    overview:
      'WebStorm supports Mocha, Vitest, Jasmine, and Karma through dedicated run configuration types, similar to Jest integration.',
    sections: [
      {
        heading: 'Mocha Configuration',
        body: 'Create a Mocha run configuration. Set the Mocha package path (usually node_modules/mocha), the test patterns, and any extra Mocha options. WebStorm then shows the same gutter icons and test results tree.',
      },
      {
        heading: 'Vitest',
        body: 'Vitest support works via the built-in Vitest run configuration type (available from WebStorm 2023.1+). It detects vitest.config.ts automatically.',
      },
    ],
    resources: [
      { title: 'Testing with Mocha', url: 'https://www.jetbrains.com/help/webstorm/running-unit-tests-on-mocha.html', type: 'docs' },
    ],
  },

  'test-debug': {
    overview:
      'Debugging tests lets you step through test code to understand exactly why an assertion is failing.',
    sections: [
      {
        heading: 'Debugging a Single Test',
        body: 'Set a breakpoint inside a test. Click the red bug icon in the gutter next to the test or right-click the test → Debug. WebStorm starts Jest with the debugger attached and pauses at your breakpoint.',
      },
      {
        heading: 'Debugging Test Setup',
        body: 'Breakpoints work in beforeEach, afterEach, beforeAll, and afterAll hooks too. Use this to diagnose setup/teardown issues that cause unexpected test failures.',
      },
    ],
    resources: [
      { title: 'Debugging Tests', url: 'https://www.jetbrains.com/help/webstorm/running-unit-tests-on-jest.html#debugging', type: 'docs' },
    ],
  },

  // ── Tools ────────────────────────────────────────────────────────────────────

  terminal: {
    overview:
      'The built-in terminal runs your shell directly inside WebStorm. You can have multiple sessions, split them, and they automatically open in your project root.',
    sections: [
      {
        heading: 'Opening the Terminal',
        body: 'Press Alt+F12 (⌥F12) to toggle the terminal. A new tab opens in your project directory. Press the "+" button to open another session. Right-click a tab to split or rename it.',
      },
      {
        heading: 'Configuring Your Shell',
        body: 'Settings → Tools → Terminal → Shell path. Set it to your preferred shell: bash, zsh, fish, PowerShell, or WSL. On macOS, /bin/zsh is the default.',
      },
      {
        heading: 'Integration with the IDE',
        body: 'File paths printed in the terminal are clickable links that open in the editor. Error messages with file:line references also navigate on click. This makes npm error output much easier to work with.',
      },
      {
        heading: 'Sessions Persist',
        body: 'Terminal sessions survive IDE restarts (configurable). Running processes (like dev servers) are shown with a running indicator on the terminal tab.',
      },
    ],
    shortcuts: [
      { keys: 'Alt+F12 / ⌥F12', description: 'Toggle terminal' },
    ],
    resources: [
      { title: 'Terminal', url: 'https://www.jetbrains.com/help/webstorm/terminal-emulator.html', type: 'docs' },
    ],
  },

  'npm-scripts': {
    overview:
      'The npm tool window lists all scripts from package.json and lets you run or debug them with a double-click, without opening a terminal.',
    sections: [
      {
        heading: 'Opening the npm Tool Window',
        body: 'View → Tool Windows → npm (or double-click package.json in the Project tree). The tool window lists all scripts grouped by package.json file.',
      },
      {
        heading: 'Running Scripts',
        body: 'Double-click a script name to run it. A run configuration is created automatically. The output appears in the Run tool window. Right-click to "Debug" the script.',
      },
      {
        heading: 'Running From package.json',
        body: 'WebStorm shows green play icons next to each script in package.json. Click them to run the script without opening the npm tool window.',
      },
    ],
    resources: [
      { title: 'npm and package.json', url: 'https://www.jetbrains.com/help/webstorm/npm-pnpm-and-yarn.html', type: 'docs' },
    ],
  },

  'http-client': {
    overview:
      'The built-in HTTP Client lets you write and execute API requests directly in the IDE. Requests are stored in .http files that can be committed to version control.',
    sections: [
      {
        heading: 'Creating a Request File',
        body: 'New → HTTP Request File (.http or .rest). Write your request:\n\nGET https://api.example.com/users\nAuthorization: Bearer {{token}}\n\nClick the green play button in the gutter to execute.',
      },
      {
        heading: 'Environment Variables',
        body: 'Create an http-client.env.json file with environments: { "dev": { "host": "localhost:3000" }, "prod": { "host": "api.example.com" } }. Switch environments in the toolbar.',
      },
      {
        heading: 'Response Handling',
        body: 'Responses are shown in a separate tab. You can save response to a file, add assertions in a response handler script, and use the response body as variables in subsequent requests.',
      },
      {
        heading: 'Generating Requests',
        body: 'Right-click any URL string in the editor and choose "Open in HTTP Client" to generate a request file automatically.',
      },
    ],
    resources: [
      { title: 'HTTP Client', url: 'https://www.jetbrains.com/help/webstorm/http-client-in-product-code-editor.html', type: 'docs' },
    ],
  },

  database: {
    overview:
      'The Database tool window connects to SQL and NoSQL databases. Browse schemas, run queries, and view/edit data in a spreadsheet-like UI without leaving the IDE.',
    sections: [
      {
        heading: 'Connecting to a Database',
        body: 'Database tool window (View → Tool Windows → Database) → "+" → Data Source → choose your DB type. Enter host, port, database name, and credentials. Click "Test Connection" to verify.',
      },
      {
        heading: 'Query Console',
        body: 'Right-click a database → Open Query Console. Write SQL with full completion for table and column names. Press Ctrl+Enter to execute. Results appear in a table below.',
      },
      {
        heading: 'Table Editor',
        body: 'Double-click a table to open it in the table editor. Edit cells directly and submit with Ctrl+Enter. Add/delete rows with the toolbar buttons.',
      },
    ],
    resources: [
      { title: 'Database Tool Window', url: 'https://www.jetbrains.com/help/webstorm/database-tool-window.html', type: 'docs' },
    ],
  },

  docker: {
    overview:
      'The Docker plugin (by JetBrains) lets you manage containers and images, view logs, and run/debug applications inside containers from within WebStorm.',
    sections: [
      {
        heading: 'Install the Plugin',
        body: 'Settings → Plugins → Marketplace → "Docker." Restart. The Docker tool window appears in the sidebar showing your local Docker daemon connections.',
      },
      {
        heading: 'Docker Compose',
        body: 'Open a docker-compose.yml file. Play buttons appear in the gutter to start individual services or all services. The Services tool window shows running containers.',
      },
      {
        heading: 'Container Logs & Shell',
        body: 'Right-click a running container in the Docker tool window → "Attach Console" for an interactive shell. "Show Logs" shows the container output with real-time streaming.',
      },
    ],
    resources: [
      { title: 'Docker Integration', url: 'https://www.jetbrains.com/help/webstorm/docker.html', type: 'docs' },
    ],
  },

  // ── Customization ────────────────────────────────────────────────────────────

  keymaps: {
    overview:
      'WebStorm\'s keymap is fully customizable. You can use a built-in scheme as a base and override individual shortcuts, or switch to a VS Code-compatible scheme when migrating.',
    sections: [
      {
        heading: 'Switching Keymap Schemes',
        body: 'Settings → Keymap → Scheme dropdown. Built-in options: IntelliJ IDEA, macOS, VS Code, Eclipse, NetBeans, Emacs. VS Code compatibility is very good for common operations.',
      },
      {
        heading: 'Customizing Shortcuts',
        body: 'In the Keymap settings, search for any action by name. Double-click to add or change a shortcut. You can assign multiple shortcuts to the same action.',
      },
      {
        heading: 'Finding a Shortcut',
        body: 'Click the magnifier icon → "Find Actions by Shortcut." Press any key combination to find which action it is currently bound to.',
      },
      {
        heading: 'Sharing Keymaps',
        body: 'Export: Settings → Keymap → gear icon → "Export." The .xml file can be imported on another machine or shared with your team.',
      },
    ],
    shortcuts: [
      { keys: 'Ctrl+Shift+A / ⌘⇧A', description: 'Find Action (by name or shortcut)' },
    ],
    resources: [
      { title: 'Keymap Configuration', url: 'https://www.jetbrains.com/help/webstorm/configuring-keyboard-and-mouse-shortcuts.html', type: 'docs' },
    ],
  },

  themes: {
    overview:
      'WebStorm supports UI themes (controls the entire IDE look) and Editor Color Schemes (controls syntax colors). Both can be customized or downloaded from the marketplace.',
    sections: [
      {
        heading: 'Switching Themes',
        body: 'Settings → Appearance & Behavior → Appearance → Theme. Built-in options: Darcula, IntelliJ Light, High Contrast. For more options, install theme plugins.',
      },
      {
        heading: 'Editor Color Schemes',
        body: 'Settings → Editor → Color Scheme. This controls syntax highlighting colors. You can customize every token type. Popular community schemes include Dracula, One Dark, and Monokai.',
      },
      {
        heading: 'Installing Themes from Marketplace',
        body: 'Settings → Plugins → Marketplace → search "theme." Popular choices: GitHub Dark Theme, Catppuccin, Nord, Material Theme UI.',
      },
      {
        heading: 'Sync with OS',
        body: 'Settings → Appearance → "Sync with OS" automatically switches between light and dark themes when your system appearance changes.',
      },
    ],
    resources: [
      { title: 'Themes and Appearance', url: 'https://www.jetbrains.com/help/webstorm/user-interface-themes.html', type: 'docs' },
    ],
  },

  plugins: {
    overview:
      'The JetBrains Plugin Marketplace has thousands of plugins to extend WebStorm. Most commonly-needed plugins (ESLint, Prettier, Docker) are pre-installed or one-click installs.',
    sections: [
      {
        heading: 'Finding and Installing Plugins',
        body: 'Settings → Plugins → Marketplace tab. Search by name or browse by category. Click "Install" and restart when prompted.',
      },
      {
        heading: 'Essential Plugins to Know',
        body: '.env files support (dotenv syntax), GitToolBox (Git info inline), Rainbow Brackets (colorizes bracket pairs), WakaTime (time tracking), Conventional Commits (commit message helper), and GitHub Copilot.',
      },
      {
        heading: 'Managing Performance',
        body: 'Disable plugins you don\'t use. Each plugin adds to startup time and memory usage. Settings → Plugins → Installed → uncheck the ones you don\'t need.',
      },
    ],
    resources: [
      { title: 'Plugin Marketplace', url: 'https://plugins.jetbrains.com/', type: 'docs' },
      { title: 'Managing Plugins', url: 'https://www.jetbrains.com/help/webstorm/managing-plugins.html', type: 'docs' },
    ],
  },

  'file-templates': {
    overview:
      'File templates define the default content inserted when you create a new file of a given type. Code templates define the structure of generated code elements.',
    sections: [
      {
        heading: 'Editing File Templates',
        body: 'Settings → Editor → File and Code Templates. Select a template type (JavaScript File, TypeScript File, React Component, etc.) and edit the content. Variables like ${NAME} are replaced when the file is created.',
      },
      {
        heading: 'Available Template Variables',
        body: '${NAME} = the file name you type, ${DATE} = today\'s date, ${USER} = current user, ${YEAR} = current year. You can also use Apache Velocity scripting for conditional logic.',
      },
      {
        heading: 'Creating New Templates',
        body: 'Click "+" to create a custom template. Give it a name and extension. It will appear in the New file menu under that extension type.',
      },
    ],
    resources: [
      { title: 'File and Code Templates', url: 'https://www.jetbrains.com/help/webstorm/using-file-and-code-templates.html', type: 'docs' },
    ],
  },

  'editor-settings': {
    overview:
      'Fine-tuning the editor settings makes daily coding more comfortable. Font, line height, whitespace display, and soft wrap are the most impactful settings to review.',
    sections: [
      {
        heading: 'Font & Line Height',
        body: 'Settings → Editor → Font. Set the primary font (JetBrains Mono is excellent — it ships with the IDE), size (14–16pt), and line height (1.3–1.5). Enable ligatures if your font supports them.',
      },
      {
        heading: 'Soft Wrap',
        body: 'Settings → Editor → General → Soft Wraps. Enable for specific file types (Markdown, long text files). Disable for code files so line length is always visible.',
      },
      {
        heading: 'Whitespace Display',
        body: 'View → Active Editor → Show Whitespaces. Shows dots for spaces and arrows for tabs. Useful when debugging indentation issues or mixed whitespace in a file.',
      },
      {
        heading: 'Scrolling Behavior',
        body: 'Settings → Editor → General → "Show virtual space at file bottom" — allows scrolling so the last line is at the top of the screen. "Enable smooth scrolling" — enables pixel-level scrolling.',
      },
    ],
    resources: [
      { title: 'Editor Basics', url: 'https://www.jetbrains.com/help/webstorm/working-with-source-code.html', type: 'docs' },
    ],
  },

  // ── Advanced ──────────────────────────────────────────────────────────────────

  inspections: {
    overview:
      'Inspections are static analysis rules that detect potential bugs, code style violations, and improvement opportunities. They appear as colored underlines in the editor.',
    sections: [
      {
        heading: 'Understanding Severity',
        body: 'Red = Error (broken code). Orange = Warning (likely bug). Yellow = Weak Warning (style issue). Green = Info. Severity controls the color of the underline and whether the inspection blocks a commit.',
      },
      {
        heading: 'Configuring Inspections',
        body: 'Settings → Editor → Inspections. Browse by language. Enable/disable individual inspections, change their severity, or restrict them to specific file masks (e.g. only run an inspection on *.ts files).',
      },
      {
        heading: 'Suppressing Inspections',
        body: 'Alt+Enter on a flagged code → "Suppress inspection." This adds a // noinspection comment. For a whole file, move to the file-level comment. For the whole project, disable in settings.',
      },
      {
        heading: 'Run Inspection by Name',
        body: 'Analyze → Run Inspection by Name → type the inspection name. Runs it across the entire project or a specific scope and shows all violations in the Inspection Results tool window.',
      },
    ],
    resources: [
      { title: 'Code Inspections', url: 'https://www.jetbrains.com/help/webstorm/code-inspection.html', type: 'docs' },
    ],
  },

  'intentions-advanced': {
    overview:
      'Advanced Live Templates use variables with macro expressions, conditional applicability, and Velocity scripting to generate complex, context-aware code snippets.',
    sections: [
      {
        heading: 'Variable Expressions',
        body: 'In a live template, each $VAR$ can have an expression like: complete() (triggers completion), fileNameWithoutExtension() (inserts the filename), clipboard() (pastes clipboard content), or enum("option1","option2") (shows a dropdown).',
      },
      {
        heading: 'Surround Templates',
        body: 'Select code, then press Ctrl+Alt+J. This shows templates with $SELECTION$ as a variable — they wrap the selected code. Use this to add try/catch, if statements, or any other wrapper to existing code.',
      },
      {
        heading: 'Sharing Templates',
        body: 'Export Settings → Live Templates to an .xml file. Commit it to your repo or share with teammates. They import via Settings → Import Settings.',
      },
    ],
    shortcuts: [
      { keys: 'Ctrl+Alt+J / ⌘⌥J', description: 'Surround with live template' },
    ],
    resources: [
      { title: 'Live Template Variables', url: 'https://www.jetbrains.com/help/webstorm/template-variables.html', type: 'docs' },
    ],
  },

  'remote-dev': {
    overview:
      'Remote Development lets you run the WebStorm backend on a remote server (via SSH) while the UI runs locally. You get full IDE performance against remote files.',
    sections: [
      {
        heading: 'JetBrains Gateway',
        body: 'Install JetBrains Gateway (separate free app). Connect to a remote host via SSH. Gateway installs the IDE backend on the remote machine and streams the UI locally.',
      },
      {
        heading: 'Use Cases',
        body: 'Develop inside Docker containers, on cloud VMs (AWS, GCP, Azure), or on a powerful workstation from a laptop. The remote machine handles all indexing and compilation.',
      },
      {
        heading: 'Dev Containers',
        body: 'WebStorm supports the Dev Containers specification (devcontainer.json). Open a project inside a container with the full IDE, so your dev environment is reproducible across machines.',
      },
    ],
    resources: [
      { title: 'Remote Development', url: 'https://www.jetbrains.com/help/webstorm/remote-development-a.html', type: 'docs' },
    ],
  },

  monorepo: {
    overview:
      'Monorepos with multiple packages require some configuration in WebStorm to get correct imports, separate code styles, and proper test execution per package.',
    sections: [
      {
        heading: 'Multiple package.json Roots',
        body: 'WebStorm auto-detects multiple package.json files. Each sub-package gets its own node_modules indexing. You can configure which packages to include/exclude in Settings → Directories.',
      },
      {
        heading: 'Per-Directory Code Style',
        body: 'Place .editorconfig files in sub-packages to override code style settings for that package. WebStorm respects editorconfig hierarchy.',
      },
      {
        heading: 'TypeScript Project References',
        body: 'If your monorepo uses TypeScript project references (references field in tsconfig.json), WebStorm uses them for cross-package navigation and type checking.',
      },
    ],
    resources: [
      { title: 'Working with Monorepos', url: 'https://www.jetbrains.com/help/webstorm/yarn-2.html', type: 'docs' },
    ],
  },

  performance: {
    overview:
      'If WebStorm feels slow, a few targeted changes can dramatically improve responsiveness: more heap memory, fewer indexed files, and disabling unused plugins.',
    sections: [
      {
        heading: 'Increase Heap Memory',
        body: 'Help → Change Memory Settings. Set the maximum heap to at least 2048 MB (2 GB) for medium projects, 4096 MB for large ones. Restart required. The default of 750 MB is often too low.',
      },
      {
        heading: 'Exclude Directories from Indexing',
        body: 'Right-click a folder (e.g. build/, dist/, .cache/, large data folders) in the Project tree → Mark Directory as → Excluded. WebStorm stops indexing it, which speeds up searches and completion.',
      },
      {
        heading: 'Disable Unused Plugins',
        body: 'Settings → Plugins → Installed. Disable language plugins for languages you don\'t use (PHP, Ruby, Go, etc.). Each disabled plugin reduces startup time and memory usage.',
      },
      {
        heading: 'Power Save Mode',
        body: 'File → Power Save Mode disables background inspections, code analysis, and auto-completion. Use it when on battery or when opening a very large unfamiliar codebase.',
      },
    ],
    resources: [
      { title: 'Tuning WebStorm Performance', url: 'https://www.jetbrains.com/help/webstorm/increasing-memory-heap.html', type: 'docs' },
    ],
  },

  'ai-assistant': {
    overview:
      'JetBrains AI Assistant is a paid add-on that integrates AI-powered features directly into the IDE: code generation, explanations, refactoring suggestions, and a chat interface.',
    sections: [
      {
        heading: 'Installation',
        body: 'Settings → Plugins → Marketplace → "AI Assistant." It requires a separate JetBrains AI subscription (or is included in some tiers). After installation an AI chat icon appears in the toolbar.',
      },
      {
        heading: 'Inline Completion',
        body: 'AI Assistant provides full-line and multi-line gray ghost text completions as you type, similar to GitHub Copilot. Accept with Tab, reject with Esc, or accept word by word with Ctrl+Right.',
      },
      {
        heading: 'Chat Interface',
        body: 'Click the AI icon or press Alt+Shift+A to open the chat panel. Ask questions about your code, request refactorings, explain error messages, or generate tests. The AI has full context of your project.',
      },
      {
        heading: 'Commit Messages',
        body: 'In the Commit tool window, click the AI icon next to the message field. It generates a commit message based on the diff. A great time saver for writing meaningful commit messages.',
      },
    ],
    resources: [
      { title: 'JetBrains AI Assistant', url: 'https://www.jetbrains.com/ai/', type: 'docs' },
    ],
  },
};
