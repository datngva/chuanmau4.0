import { defaultLang, localeTags, ogLocales, routeMap, ui } from './ui';
import type { Lang, RouteKey, UIKey } from './ui';

export type { Lang, RouteKey, UIKey } from './ui';

/** Strip the trailing slash so '/bang-gia/' and '/bang-gia' compare equal. Root stays '/'. */
const normalize = (path: string): string => {
  const p = path.split('?')[0].split('#')[0];
  return p !== '/' && p.endsWith('/') ? p.slice(0, -1) : p;
};

/** Read the active language off the URL. Anything not under /en/ is Vietnamese. */
export const getLangFromUrl = (url: URL | string): Lang => {
  const pathname = normalize(typeof url === 'string' ? url : url.pathname);
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : defaultLang;
};

/** Translate UI strings. Falls back to the Vietnamese entry, then to the key itself. */
export const useTranslations = (lang: Lang) => {
  return function t(key: UIKey): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key] ?? key;
  };
};

/** Resolve a canonical route key to its real path in the given language. */
export const getRoute = (key: RouteKey, lang: Lang): string => routeMap[key][lang];

/** BCP 47 tag for <html lang> and Intl. */
export const getLocaleTag = (lang: Lang): string => localeTags[lang];

/** og:locale value. */
export const getOgLocale = (lang: Lang): string => ogLocales[lang];

/**
 * Given any path, return its equivalent in `targetLang`.
 *
 * Falls back to that language's home page when the page has no counterpart
 * (for example blog posts, which are Vietnamese-only for now).
 */
export const getAlternatePath = (path: string, targetLang: Lang): string => {
  const current = normalize(path);
  const sourceLang = getLangFromUrl(current);

  if (sourceLang === targetLang) return path;

  for (const key of Object.keys(routeMap) as RouteKey[]) {
    if (normalize(routeMap[key][sourceLang]) === current) {
      return routeMap[key][targetLang];
    }
  }

  return routeMap.home[targetLang];
};

/** True when the page has a real counterpart in the other language. */
export const hasAlternate = (path: string): boolean => {
  const current = normalize(path);
  const sourceLang = getLangFromUrl(current);
  return (Object.keys(routeMap) as RouteKey[]).some((key) => normalize(routeMap[key][sourceLang]) === current);
};
