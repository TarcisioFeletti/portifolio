import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../../core/data/content.model';
import { SectionHeading } from '../../shared/ui/section-heading';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeading],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly about = input.required<SiteContent['about']>();
}
