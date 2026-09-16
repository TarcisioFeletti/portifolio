import { CONTENT, canonicalPath } from './content';
import { SiteContent } from './content.model';

function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, shape(v)]));
  }
  return typeof value;
}

describe('site content', () => {
  it('keeps Portuguese and English structurally identical', () => {
    expect(shape(CONTENT.en)).toEqual(shape(CONTENT.pt));
  });

  it.each(['pt', 'en'] as const)('has no empty strings in %s', (lang) => {
    const empty: string[] = [];
    const walk = (value: unknown, path: string) => {
      if (typeof value === 'string' && !value.trim()) empty.push(path);
      else if (value && typeof value === 'object') {
        for (const [k, v] of Object.entries(value)) walk(v, `${path}.${k}`);
      }
    };
    walk(CONTENT[lang] satisfies SiteContent, lang);
    expect(empty).toEqual([]);
  });

  it('builds trailing-slash canonical paths that match the prerendered folders', () => {
    expect(canonicalPath('pt')).toBe('/');
    expect(canonicalPath('en')).toBe('/en/');
  });
});
