import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../../core/data/content.model';
import { PROFILE } from '../../core/data/profile';

@Component({
  selector: 'app-readout-strip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './readout-strip.html',
  styleUrl: './readout-strip.scss',
})
export class ReadoutStrip {
  readonly strip = input.required<SiteContent['strip']>();

  protected readonly monogram = `${PROFILE.initials} / ${String(PROFILE.year).slice(-2)}`;
}
