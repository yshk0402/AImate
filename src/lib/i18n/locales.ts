import type { Locale } from "@/types/content";

export const LOCALES: Locale[] = ["ja"];

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}
