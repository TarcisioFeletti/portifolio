import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
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
})
export class SiteNav {
  readonly nav = input.required<SiteContent['nav']>();
  readonly lang = input.required<SiteContent['lang']>();

  protected readonly profile = PROFILE;
  protected readonly homePath = computed(() => LANG_PATHS[this.lang()]);
  protected readonly switchPath = computed(() => LANG_PATHS[this.lang() === 'pt' ? 'en' : 'pt']);
}
