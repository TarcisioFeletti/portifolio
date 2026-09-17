import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Accent, SiteContent } from '../../core/data/content.model';
import { AccentPipe } from '../../shared/ui/accent.pipe';

const CHIP_ACCENTS: Accent[] = [
  'yellow',
  'teal',
  'pink',
  'paper',
  'orange',
  'green',
  'teal',
  'paper',
  'yellow',
  'pink',
  'green',
  'orange',
];
const CHIP_ROTATIONS = [-2, 1.5, -1, 2, -1.5, 1, -2.5, 1, 2, -1, 1.5, -2];

@Component({
  selector: 'app-stack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AccentPipe],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class Stack {
  readonly stack = input.required<SiteContent['stack']>();

  protected readonly chips = computed(() =>
    this.stack().skills.map((label, i) => ({
      label,
      num: String(i + 1).padStart(2, '0'),
      accent: CHIP_ACCENTS[i % CHIP_ACCENTS.length] ?? 'paper',
      rotation: `rotate(${CHIP_ROTATIONS[i % CHIP_ROTATIONS.length] ?? 0}deg)`,
    })),
  );
}
