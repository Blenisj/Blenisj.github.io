# Blenis Portfolio

A React portfolio website for presenting personal information, skills, professional experience, and projects.

## Current Status

The site includes a floating responsive navbar, scroll animations, an experience timeline, skills and tools cards, About interest cards with modals, contact links, resume download, and dedicated project detail pages.

## Tech Stack

- React
- TypeScript and TSX
- Vite
- Bootstrap `5.3` for responsive styling and UI utilities
- MUI for cards and modal content
- Lucide React for icons
- `react-fast-marquee` for the About section carousel
- ESLint for code quality checks

## Project Structure

```text
.
├── package.json
├── package-lock.json
├── README.md
├── public/                     # Public images and downloadable resume
├── src/
│   ├── app/App.tsx             # Main page and project path selection
│   ├── components/             # Layout, pages, and modal components
│   ├── constants/              # Shared portfolio content
│   ├── styles/                 # Shared and feature-specific styles
│   └── types/                  # Shared TypeScript types
└── tests/                      # Reserved for automated tests
```

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

From the project root, install the dependencies:

```bash
npm install
```

### Development

Start the Vite development server:

```bash
npm run dev
```

Vite will print the local URL in the terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build with Vite. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint across the project. |

## Portfolio Content

Shared navigation, skills, interests, experiences, contact links, and projects are stored in:

```text
src/constants/portfolio.constants.ts
```

Project cards link to detail pages using paths such as:

```text
/projects/portfolio-site
/projects/interactive-experience
/projects/full-stack-application
```

Add or update project entries in `portfolio.constants.ts` to change the detail pages.

## Public Assets

Place files that should be reachable directly by URL in `public/`. Add your resume as `public/resume.pdf`, or update the filename in the Contact component.

## Styling

Bootstrap is imported by the application entry point:

```tsx
import "bootstrap/dist/css/bootstrap.min.css";
```

The portfolio uses Bootstrap utilities for layout and responsive behavior. Custom CSS handles the gradient background, scroll animations, experience timeline progress, and visual theme.

## Portfolio Sections

- Home: introduction and primary call to action
- Skills: frameworks, languages, libraries, and tools
- Experience: professional history displayed as a scrolling timeline
- Projects: selected work with links to dedicated detail views
- About: personal interests displayed as marquee cards with modals
- Contact: resume download, email, LinkedIn, and GitHub links

## Current Setup Notes

- The package is private and is not configured for npm publishing.
- The `tests/` directory is present but currently empty.
- The application entry point is `src/main.tsx` and loads `src/styles/globals.css`.
- Project detail pages use the Vite SPA fallback and inspect `window.location.pathname`; no routing package is required.