import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-film-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="scanlines"></div>
    <div class="grain"></div>
    <div class="vignette"></div>
  `,
  host: { 'aria-hidden': 'true' },
  styles: `
    div {
      position: fixed;
      pointer-events: none;
    }
    .vignette {
      inset: 0;
      z-index: 89;
      box-shadow: inset 0 0 220px 60px rgb(0 0 0 / 75%);
    }
    .scanlines {
      inset: 0;
      z-index: 90;
      mix-blend-mode: soft-light;
      opacity: 0.55;
      background-image: repeating-linear-gradient(
        0deg,
        rgb(255 255 255 / 9%) 0 1px,
        transparent 1px 3px
      );
      animation: scan 1.4s steps(3) infinite;
    }
    .grain {
      inset: -20%;
      z-index: 91;
      opacity: 0.09;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='160' height='160' filter='url(%23n)'/></svg>");
      animation: grain 0.5s steps(2) infinite;
      will-change: transform;
    }
    @keyframes scan {
      to {
        transform: translateY(6px);
      }
    }
    @keyframes grain {
      25% {
        transform: translate(-2%, 1%);
      }
      50% {
        transform: translate(1%, -2%);
      }
      75% {
        transform: translate(-1%, -1%);
      }
    }
  `,
})
export class FilmOverlay {}
