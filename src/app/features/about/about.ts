import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../../core/data/content.model';
import { AccentPipe } from '../../shared/ui/accent.pipe';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AccentPipe],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly about = input.required<SiteContent['about']>();
}
