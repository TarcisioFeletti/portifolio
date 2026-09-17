import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { SectionTitle } from '../../../core/data/content.model';

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p class="kicker">[ {{ number() }} ] {{ kicker() }}</p>
    <h2 class="title" [id]="titleId()" [class.large]="size() === 'large'">
      {{ title().lead }} <span class="highlight">{{ title().highlight }}</span>
    </h2>
  `,
  styles: `
    :host {
      display: block;
    }
    .kicker {
      display: inline-block;
      margin-bottom: 22px;
      padding: 6px 12px;
      border: 1px solid var(--color-line-label);
      border-radius: 5px;
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--color-accent);
    }
    .title {
      max-width: 20ch;
      font-family: var(--font-display);
      font-weight: 400;
      font-size: var(--title-size);
      line-height: 1.02;
      text-transform: uppercase;
      color: var(--color-text-strong);
      text-wrap: balance;
    }
    .title.large {
      max-width: 16ch;
      font-size: clamp(36px, 6vw, 72px);
      line-height: 1;
    }
    .highlight {
      color: var(--color-highlight);
    }
  `,
})
export class SectionHeading {
  readonly index = input.required<number>();
  readonly kicker = input.required<string>();
  readonly title = input.required<SectionTitle>();
  readonly titleId = input.required<string>();
  readonly size = input<'default' | 'large'>('default');

  protected readonly number = computed(() => String(this.index()).padStart(2, '0'));
}
