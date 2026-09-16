import { Pipe, PipeTransform } from '@angular/core';
import { Accent } from '../../core/data/content.model';

@Pipe({ name: 'accent' })
export class AccentPipe implements PipeTransform {
  transform(accent: Accent): string {
    return `var(--color-${accent})`;
  }
}
