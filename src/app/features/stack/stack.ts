import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { SiteContent } from '../../core/data/content.model';

@Component({
  selector: 'app-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class Stack {
  readonly stack = input.required<SiteContent['stack']>();

  protected readonly chips = computed(() =>
    this.stack().skills.map((label, i) => ({
      label,
      num: String(i + 1).padStart(2, '0'),
    })),
  );
}
