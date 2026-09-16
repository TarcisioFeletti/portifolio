import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="index">Sec {{ index() }}</span>
    <span class="ticks" aria-hidden="true"></span>
    <span>{{ reel() }}</span>
  `,
  host: { class: 'hud', '[class.on-paper]': 'onPaper()' },
  styles: `
    :host {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: clamp(18px, 2.6vw, 28px);
    }
    .index {
      color: var(--color-paper);
    }
    .ticks {
      flex: 1;
      color: var(--color-line-strong);
    }
    :host(.on-paper) {
      color: var(--color-paper-muted);
    }
    :host(.on-paper) .index {
      color: var(--color-ink);
    }
    :host(.on-paper) .ticks {
      color: var(--color-muted);
    }
  `,
})
export class SectionHeader {
  readonly index = input.required<string>();
  readonly reel = input.required<string>();
  readonly onPaper = input(false);
}
