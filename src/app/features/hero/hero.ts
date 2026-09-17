import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { SiteContent } from '../../core/data/content.model';
import { PROFILE } from '../../core/data/profile';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly hero = input.required<SiteContent['hero']>();

  protected readonly profile = PROFILE;
  protected readonly linkedin = computed(() => this.profile.socials[0]);
  protected readonly otherSocials = computed(() => this.profile.socials.slice(1));
}
