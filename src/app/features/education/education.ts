import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../../core/data/content.model';
import { SectionHeading } from '../../shared/ui/section-heading';

@Component({
  selector: 'app-education',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeading],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  readonly education = input.required<SiteContent['education']>();
}
