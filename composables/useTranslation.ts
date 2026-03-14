export type Locale = "en" | "it";

type Translations = typeof import("../translations/en.json");
export async function useTranslation(locale: Locale) {
  const { data: translations } = await useAsyncData<Translations>(`translations-${locale}`, async () => (await import(`../translations/${locale}.json`)).default);

  if (!translations.value) {
    throw new Error(`Translations for locale "${locale}" not found.`);
  }

  type TranslationKey<T extends object> = {
    [K in keyof T]: K extends string
      ? T[K] extends string
        ? K
        : T[K] extends object
          ? `${K}.${TranslationKey<T[K]>}`
          : never
      : never
  }[keyof T];

  const t = (key: TranslationKey<Translations>, replacements?: Record<string, string>) => {
    const keys = key.split(".");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let current = translations.value as Record<string, any> | string;
    for (const k of keys) {
      if (typeof current !== "object" || current === null || !(k in current)) {
        console.warn(`Translation key "${key}" not found.`);
        return "";
      }
      current = current[k];
    }

    if (typeof current !== "string") {
      console.warn(`Translation key "${key}" does not point to a string.`);
      return "";
    }

    if (!replacements) return current;

    const matches = current.match(/{[a-zA-Z_]+}/g) || [];
    for (const match of matches) {
      const placeholder = match.slice(1, -1); // Remove { and }
      if (placeholder in replacements && typeof replacements[placeholder] === "string") {
        current = current.replace(match, replacements[placeholder]);
      }
      else {
        console.warn(`Variable "${placeholder}" not found in translation key "${key}".`);
      }
    }

    return current;
  };

  return {
    t,
  };
}
