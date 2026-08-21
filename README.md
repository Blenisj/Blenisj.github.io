# Blenis Portfolio

Personal portfolio site showcasing my skills, experience, and projects.

Built with React, TypeScript, Vite, and Bootstrap.

## Getting Started

```bash
npm install
npm run dev
```

Vite prints the local URL in the terminal.

## Scripts

| Command             | Description                               |
| ------------------- | ----------------------------------------- |
| `npm run dev`       | Start the dev server.                     |
| `npm run build`     | Type-check and create a production build. |
| `npm run preview`   | Preview the production build.             |
| `npm run lint`      | Run ESLint.                               |
| `npm run typecheck` | Run TypeScript only.                      |

## Structure

```text
public/                 Images, videos, and resume PDF
src/
  app/App.tsx           Page layout, section headers, and project routing
  components/           Layout, page sections, and modals
  constants/            All site content
  styles/               Global styles and scroll animations
```

## Editing Content

Nearly everything on the site — nav links, skills, experience, projects, interests, and contact links — lives in `src/constants/portfolio.constants.ts`.

Projects get a detail page at `/projects/{slug}` automatically. Each entry supports an optional `image`, `github`, and `externalUrl`.

Files in `public/` are served at the root, so `public/photo.jpg` is referenced as `/photo.jpg`.
