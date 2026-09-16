import { CONTENT_EN } from './content.en';
import { Lang, SiteContent } from './content.model';
import { CONTENT_PT } from './content.pt';

export const CONTENT: Record<Lang, SiteContent> = { pt: CONTENT_PT, en: CONTENT_EN };

export const LANG_PATHS: Record<Lang, string> = { pt: '/', en: '/en' };

export function isLang(value: unknown): value is Lang {
  return value === 'pt' || value === 'en';
}

export function canonicalPath(lang: Lang): string {
  return lang === 'pt' ? '/' : `${LANG_PATHS[lang]}/`;
}
