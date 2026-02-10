import type { Locale } from "@/types/content";

export const LOCALES: Locale[] = ["ja", "en"];

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function localeLabel(locale: Locale): string {
  return locale === "ja" ? "日本語" : "English";
}
