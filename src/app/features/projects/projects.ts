import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Accent, SiteContent } from '../../core/data/content.model';
import { PROFILE } from '../../core/data/profile';
import { AccentPipe } from '../../shared/ui/accent.pipe';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

const PROJECT_ACCENTS: Accent[] = ['yellow', 'pink', 'teal', 'green'];

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeader, AccentPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects = input.required<SiteContent['projects']>();

  protected readonly profile = PROFILE;

  protected accentFor(index: number): Accent {
    return PROJECT_ACCENTS[index % PROJECT_ACCENTS.length] ?? 'yellow';
  }

  protected numberFor(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
