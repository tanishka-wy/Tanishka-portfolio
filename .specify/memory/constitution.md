# Developer Portfolio Constitution

## Core Principles

### I. Visual & Aesthetic Excellence (NON-NEGOTIABLE)
The portfolio must wow visitors immediately. Designs must feature rich dark/light modes, harmonious HSL color palettes, subtle glassmorphism (`backdrop-filter`), glowing borders, dynamic gradients, and refined micro-animations. Standard unstyled HTML or basic boilerplate visual output is strictly forbidden.

### II. Spec-Driven Development (SDD)
All features, components, and project assets must map directly to written specifications in `specs/001-portfolio-website/spec.md`. Any structural change or enhancement must update the spec and task list accordingly.

### III. Component Modularization & Clean Architecture
Components must remain focused, reusable, and maintainable. Logic, UI components, static project data, and design tokens must be strictly separated.

### IV. Responsive & Accessible First
The portfolio must render flawlessly across mobile (320px+), tablet, desktop, and ultra-wide displays. All interactive elements must maintain clear focus rings, high contrast text ratios, and keyboard navigation support.

### V. Interactive Engagement
The website must feel alive and interactive. Hover effects, interactive project filters, detail modal popups, an interactive terminal CLI, theme toggling, and instant toast notifications must respond immediately to user interactions.

## Technology & Design Constraints
- **Framework**: React (Vite)
- **Styling**: Modern CSS3 with Custom Properties (variables), Flexbox/Grid, Glassmorphism, CSS `@keyframes`
- **Icons**: `lucide-react` modern icon library
- **Typography**: `Inter` (sans-serif) & `Fira Code` (monospace) via Google Fonts

## Development Workflow
1. **Spec**: Define functional specs in `specs/001-portfolio-website/spec.md`.
2. **Plan**: Define component hierarchy and token architecture in `plan.md`.
3. **Tasks**: Break into executable items in `tasks.md`.
4. **Implement & Verify**: Build React components, verify with Vite build & local dev server.

**Version**: 1.0.0 | **Ratified**: 2026-07-23 | **Last Amended**: 2026-07-23
