/** Prefixes public assets and routes with Vite's base, so the site works under a subpath. */
export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
