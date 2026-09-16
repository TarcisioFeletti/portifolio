import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../../core/data/content.model';

@Component({
  selector: 'app-top-hud',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="hud row">
      <span class="rec"><span class="rec-dot" aria-hidden="true"></span>{{ hud().rec }}</span>
      <span class="frame">{{ hud().frame }}</span>
      <span class="meta">{{ hud().meta }}</span>
    </div>
    <div class="hud rule" aria-hidden="true">
      <span>[</span>
      <span class="ticks"></span>
      <span>]</span>
    </div>
  `,
  styles: `
    .row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 8px 16px;
      align-items: center;
      padding: 12px var(--gutter) 4px;
    }
    .rec {
      display: inline-flex;
      align-items: center;
      gap: 7px;
    }
    .rec-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--color-pink);
      animation: rec 1.1s steps(1) infinite;
    }
    .frame {
      text-align: center;
      color: var(--color-paper);
    }
    .meta {
      text-align: right;
    }
    .rule {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 0 var(--gutter) 10px;
      color: var(--color-line-strong);
    }
    .ticks {
      flex: 1;
      color: var(--color-hud-dim);
    }
    @media (max-width: 520px) {
      .frame,
      .meta {
        text-align: left;
      }
    }
    @keyframes rec {
      0%,
      45% {
        opacity: 1;
      }
      55%,
      100% {
        opacity: 0.12;
      }
    }
  `,
})
export class TopHud {
  readonly hud = input.required<SiteContent['hud']>();
}
