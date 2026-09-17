import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../../core/data/content.model';

@Component({
  selector: 'app-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class Stack {
  readonly stack = input.required<SiteContent['stack']>();
}
