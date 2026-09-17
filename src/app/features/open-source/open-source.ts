import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../../core/data/content.model';
import { PROFILE } from '../../core/data/profile';

@Component({
  selector: 'app-open-source',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './open-source.html',
  styleUrl: './open-source.scss',
})
export class OpenSource {
  readonly openSource = input.required<SiteContent['openSource']>();

  protected readonly profile = PROFILE;
}
