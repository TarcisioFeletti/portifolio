import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../../core/data/content.model';
import { SectionHeading } from '../../shared/ui/section-heading';

@Component({
  selector: 'app-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeading],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class Stack {
  readonly stack = input.required<SiteContent['stack']>();
}
