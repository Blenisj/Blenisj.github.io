/** Translucent tint of the page background, used by cards and the navbar. */
export const surface = (opacity: number) =>
  `color-mix(in srgb, var(--portfolio-background) ${opacity}%, transparent)`;

export const cardSx = {
  backgroundColor: surface(60),
  color: "var(--portfolio-muted)",
} as const;
