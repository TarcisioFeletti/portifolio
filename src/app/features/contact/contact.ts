import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../../core/data/content.model';
import { PROFILE } from '../../core/data/profile';
import { SectionHeading } from '../../shared/ui/section-heading';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeading],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly contact = input.required<SiteContent['contact']>();

  protected readonly profile = PROFILE;
  protected readonly linkedin = PROFILE.socials[0];
  protected readonly github = PROFILE.socials[1];
}
