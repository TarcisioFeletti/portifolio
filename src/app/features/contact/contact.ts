import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../../core/data/content.model';
import { PROFILE } from '../../core/data/profile';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeader],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly contact = input.required<SiteContent['contact']>();
  readonly ctaCv = input.required<string>();

  protected readonly profile = PROFILE;
}
