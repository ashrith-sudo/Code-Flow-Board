# Code Flow Board 🚀

*A minimalist, developer-first collaborative code editor for real-time pair programming, featuring live cursors, syntax highlighting, and instant synchronization — like Google Docs for code.*

---

## Table of Contents

- [Features](#features)

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Customization](#customization)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Features ✨

- **Real-time Collaboration:** Multiple users can edit code together, with changes instantly synchronized across all participants.
- **Live Cursors:** See where your collaborators are in the code, with unique colors and names for each user.
- **Instant Syntax Highlighting:** Keywords, strings, numbers, and comments are colorized in real time for improved readability.
- **Session Management:** A sidebar displays active collaborators, session information (language, creation time, last edit), and recent session history.
- **Easy Sharing:** Share your current session with teammates using "Copy Link" or "Share" buttons.
- **Run Code Button:** A convenient button in the editor (currently a placeholder, easily extendable for code execution).
- **Responsive Design:** Clean, modern UI adapts to any screen size, with glowing animations and custom scrollbars for a polished experience.

---

## Getting Started ⚡

### Prerequisites

- **Node.js** (v16 or later recommended)
- **npm** or **yarn**

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ashrith-sudo/code-flow-board.git
cd code-flow-board
npm install
```

### Running Locally

Start the development server:

```bash
npm run dev
```

Then, open [http://localhost:8080](http://localhost:8080) in your browser to use the app.

---

## Project Structure 🗂️

```
.
├── src/
│   ├── components/
│   │   ├── DevFlowEditor.tsx        # Main collaborative code editor
│   │   └── ui/                      # Reusable UI components (Button, Card, Badge, Avatar, Textarea, etc.)
│   ├── pages/
│   │   └── Index.tsx                # App entry point, loads the editor
│   ├── lib/
│   │   └── utils.ts                 # Utility functions (e.g., class name merging)
│   ├── index.css                    # Global and editor-specific styles
├── index.html                       # Main HTML file
├── vite.config.ts                   # Build and dev server config
└── package.json
```

---

## Usage 🛠️

### 1. Start a Session

- Launch the app and begin coding immediately in the editor.

### 2. Collaborate

- Invite others by sharing the session link (using "Copy Link" or "Share").
- Collaborators are displayed in the header and sidebar, with colored avatars and live status indicators.

### 3. Edit Together

- Code updates and cursor positions are synchronized live.
- Each collaborator's cursor is visible, color-coded, and labeled.

### 4. Run Code

- Click the "Run Code" button (currently a placeholder; can be extended for actual code execution).

### 5. Session Info

- The sidebar provides session details:
  - **Language:** (e.g., JavaScript)
  - **Created:** Timestamp for session creation
  - **Last Edit:** Live update of last edit time
  - **Collaborators:** List with avatar colors and online/offline status
  - **Recent Sessions:** Quick access to previous coding sessions, with time and language tags

### Editor Highlights

- **Syntax Highlighting:** Achieved through custom regex functions and CSS variables, instantly marking keywords, strings, numbers, and comments.
- **Live Cursors:** Each user's cursor smoothly animates and updates position, simulating real-time presence.
- **Collaborators:** Visual avatars, colored badges, and active/inactive status for each user.

---

## Customization 🎨

- **Themes & Styles:** Modify CSS variables in `src/index.css` for editor background, syntax colors, gradients, and more.
- **Editor Behavior:** Extend or enhance collaborative features by editing `DevFlowEditor.tsx`.
- **UI Elements:** All UI components are modular and reusable, located in `src/components/ui/`.

---

## Tech Stack 🧑‍💻

- **TypeScript** — Strong static typing for robust code.
- **React** — Declarative, component-based UI framework.
- **Vite** — Fast build tool and dev server.
- **Tailwind CSS & Custom CSS** — Utility-first styling, plus custom variables for syntax highlighting and theme control.

---


## License 📄

MIT License. See [LICENSE](LICENSE) for details.

---

## Acknowledgments

- Inspired by collaborative editing tools like Google Docs.
- Built for developer experience and productivity.
