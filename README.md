# Blenis Portfolio

A React portfolio website scaffold for presenting personal information, professional experience, and projects.

## Current Status

This repository is currently the starting scaffold for the portfolio. The main page and layout component files have been created, but they do not contain UI implementation yet. The Vite scripts and frontend dependencies are configured for development.

## Tech Stack

- React
- TSX component files (TypeScript tooling is not configured yet)
- Vite
- Tailwind CSS `4.3.3` for responsive styling and UI utilities
- Lucide React for icons
- ESLint for code quality checks

## Project Structure

```text
.
├── package.json
├── package-lock.json
├── README.md
├── src/
│   ├── assets/                 # Images and other static assets
│   └── components/
│       ├── layout/
│       │   ├── footer.tsx      # Shared footer component
│       │   └── navbar.tsx      # Shared navigation component
│       └── pages/
│           ├── about.tsx       # About page
│           ├── experience.tsx  # Experience page
│           ├── home.tsx        # Home page
│           └── projects.tsx    # Projects page
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

## Styling

Tailwind CSS is configured through the Vite plugin. Import the project stylesheet from the application entry point when the app is wired up:

```tsx
import "./index.css";
```

The stylesheet imports Tailwind with:

```css
@import "tailwindcss";
```

## Planned Portfolio Sections

- Home: introduction and primary call to action
- About: background, skills, and profile information
- Experience: education and professional history
- Projects: selected work with descriptions and links
- Shared navigation and footer across pages

## Current Setup Notes

- The package is private and is not configured for npm publishing.
- The `tests/` directory is present but currently empty.
- An application entry point and `index.html` still need to be added before the portfolio can be run as a complete website.