/**
 * Shared design-token class presets used across marketing sections.
 */
export const cardStyles = {
  subtle:
    "p-space-lg rounded-xl bg-surface-container border border-outline-variant/40 flex flex-col gap-2",
  outlined:
    "p-space-lg rounded-xl bg-surface-container border border-outline-variant/50 flex flex-col gap-3",
  heading: "font-headline-sm text-headline-sm text-on-surface font-semibold",
  description: "font-body-sm text-body-sm text-on-surface-variant",
};

/**
 * Joins truthy class names into a single space-delimited string.
 * @param {...(string|false|null|undefined)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
