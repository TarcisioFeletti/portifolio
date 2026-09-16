import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../../core/data/content.model';
import { AccentPipe } from '../../shared/ui/accent.pipe';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeader, AccentPipe],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly about = input.required<SiteContent['about']>();
}
