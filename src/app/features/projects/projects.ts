import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../../core/data/content.model';
import { SectionHeading } from '../../shared/ui/section-heading';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeading],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects = input.required<SiteContent['projects']>();

  protected number(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
