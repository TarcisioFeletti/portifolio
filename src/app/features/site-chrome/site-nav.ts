import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LANG_PATHS } from '../../core/data/content';
import { SiteContent } from '../../core/data/content.model';
import { PROFILE } from '../../core/data/profile';

@Component({
  selector: 'app-site-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './site-nav.html',
  styleUrl: './site-nav.scss',
  host: { '(document:keydown.escape)': 'closeMenu()' },
})
export class SiteNav {
  readonly nav = input.required<SiteContent['nav']>();
  readonly lang = input.required<SiteContent['lang']>();

  protected readonly profile = PROFILE;
  protected readonly menuOpen = signal(false);
  protected readonly homePath = computed(() => LANG_PATHS[this.lang()]);
  protected readonly switchPath = computed(() => LANG_PATHS[this.lang() === 'pt' ? 'en' : 'pt']);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
