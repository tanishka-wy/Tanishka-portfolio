# Technical Implementation Plan: Developer Portfolio Website

**Spec Reference**: [`specs/001-portfolio-website/spec.md`](file:///C:/Users/ARCHIT/.gemini/antigravity/scratch/portfolio/specs/001-portfolio-website/spec.md)  
**Status**: `Approved`

## 1. Architecture Overview
The application is built as a single-page modern React web app powered by Vite. Styling is implemented using modular, custom-property-driven Vanilla CSS in `src/index.css` to ensure full control over glassmorphism, HSL color tokens, animations, and theme state management.

```
src/
├── assets/            # Static assets & generated project mockups
├── data/
│   └── portfolioData.js # Structured data for skills, projects, timeline, CLI commands
├── components/
│   ├── Navbar.jsx      # Top sticky glassmorphic navigation & theme switcher
│   ├── Hero.jsx        # Hero section with headline, badges, action buttons
│   ├── Skills.jsx      # Skill matrix with category filter & visual meters
│   ├── Projects.jsx    # Projects grid, category filter, detail modal popup
│   ├── Terminal.jsx    # Interactive CLI emulator component
│   ├── Experience.jsx  # Interactive career timeline
│   ├── Contact.jsx     # Contact form with validation & toast notification
│   ├── Footer.jsx      # Footer with live time indicator & back-to-top button
│   └── Toast.jsx       # Floating notification alert component
├── index.css           # Global design system, HSL color tokens, glassmorphism, animations
├── App.jsx             # Main layout shell & global state (theme, toasts, active section)
└── main.jsx            # Entry point
```

## 2. Design System Tokens (`src/index.css`)

### Color Palette (HSL tailorable variables)
- Dark Theme (Default):
  - `--bg-primary`: `hsl(222, 47%, 7%)` (`#0b0f19`)
  - `--bg-secondary`: `hsl(217, 33%, 12%)` (`#141c2e`)
  - `--bg-card`: `hsla(217, 33%, 15%, 0.65)`
  - `--text-primary`: `hsl(210, 40%, 98%)`
  - `--text-secondary`: `hsl(215, 20%, 65%)`
  - `--accent-cyan`: `hsl(187, 92%, 55%)` (`#22d3ee`)
  - `--accent-indigo`: `hsl(245, 82%, 67%)` (`#6366f1`)
  - `--accent-violet`: `hsl(270, 91%, 65%)` (`#a855f7`)
  - `--glass-border`: `rgba(255, 255, 255, 0.1)`
- Light Theme:
  - `--bg-primary`: `hsl(210, 40%, 98%)` (`#f8fafc`)
  - `--bg-secondary`: `hsl(210, 40%, 96%)` (`#f1f5f9`)
  - `--bg-card`: `rgba(255, 255, 255, 0.8)`
  - `--text-primary`: `hsl(222, 47%, 11%)`
  - `--text-secondary`: `hsl(215, 16%, 47%)`
  - `--accent-cyan`: `hsl(190, 95%, 39%)`
  - `--accent-indigo`: `hsl(243, 75%, 59%)`
  - `--glass-border`: `rgba(0, 0, 0, 0.08)`

### Glassmorphism & Elevation
- `--backdrop-blur`: `blur(16px)`
- `--shadow-card`: `0 8px 32px 0 rgba(0, 0, 0, 0.25)`
- `--shadow-glow`: `0 0 20px rgba(34, 211, 238, 0.25)`

## 3. Component Details & Data Flow

### State Management
- `theme`: `'dark' | 'light'` stored in `localStorage` & reflected on `<html data-theme="...">`.
- `toast`: `{ message, type, id }` array for transient feedback.
- `selectedProject`: `Object | null` for controlling project modal view.
- `terminalHistory`: Array of CLI command log entries.

## 4. Dependencies
- `react`, `react-dom`
- `vite`
- `lucide-react` (high quality modern UI icons)
