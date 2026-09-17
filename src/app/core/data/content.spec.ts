import { CONTENT, canonicalPath } from './content';
import { SiteContent } from './content.model';
import { PROFILE } from './profile';

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

  it.each(['pt', 'en'] as const)(
    'orders jobs from newest to oldest and formats periods in %s (RN-04)',
    (lang) => {
      const jobs = CONTENT[lang].experience.jobs;
      const periodPattern = /^\d{2}\/\d{4} — \d{2}\/\d{4}$/;
      for (const job of jobs) {
        expect(job.period).toMatch(periodPattern);
      }

      const startTimes = jobs.map((job) => {
        const match = /^(\d{2})\/(\d{4})/.exec(job.period);
        const [, month, year] = match ?? [];
        return new Date(Number(year), Number(month) - 1).getTime();
      });
      const sorted = [...startTimes].sort((a, b) => b - a);
      expect(startTimes).toEqual(sorted);
    },
  );

  it.each(['pt', 'en'] as const)(
    'links only the portfolio project to its repository in %s',
    (lang) => {
      const linked = CONTENT[lang].projects.items.filter((project) => project.link);
      expect(linked.map((project) => project.link)).toEqual([PROFILE.repo]);
    },
  );
});
