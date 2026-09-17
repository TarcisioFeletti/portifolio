import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Accent, SiteContent } from '../../core/data/content.model';
import { AccentPipe } from '../../shared/ui/accent.pipe';

const JOB_ACCENTS: Accent[] = ['yellow', 'teal', 'orange'];

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AccentPipe],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly experience = input.required<SiteContent['experience']>();

  protected accentFor(index: number): Accent {
    return JOB_ACCENTS[index % JOB_ACCENTS.length] ?? 'yellow';
  }

  protected numberFor(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
