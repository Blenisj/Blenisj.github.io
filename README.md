# Blenis Portfolio

A React portfolio website scaffold for presenting personal information, professional experience, and projects.

## Current Status

This repository contains the initial portfolio page, responsive navigation, and Bootstrap-based styling. The Vite scripts and frontend dependencies are configured for development.

## Tech Stack

- React
- TypeScript and TSX
- Vite
- Bootstrap `5.3` for responsive styling and UI utilities
- MUI for the responsive navbar component
- Lucide React for icons
- ESLint for code quality checks

## Project Structure

```text
.
├── package.json
├── package-lock.json
├── README.md
├── src/
│   ├── app/App.tsx             # Main portfolio page
│   ├── assets/                 # Images and other static assets
│   ├── components/layout/
│   │   └── navbar.tsx          # Responsive navigation
│   └── styles/globals.css      # Custom theme styles
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

Bootstrap is imported by the application entry point:

```tsx
import "bootstrap/dist/css/bootstrap.min.css";
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
- The application entry point is `src/main.tsx` and loads `src/styles/globals.css`.