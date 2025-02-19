import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function scrollToTop() {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }

// utils.ts
export const sanitizeString = (input: string): string => {
  return (
    input
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "unknown"
  );
};
