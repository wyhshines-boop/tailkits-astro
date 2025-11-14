import zh from './locales/zh.json';
import en from './locales/en.json';

export const languages = {
  zh: 'zh',
  en: 'en',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'zh';

export const ui = {
  zh,
  en,
} as const;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}
