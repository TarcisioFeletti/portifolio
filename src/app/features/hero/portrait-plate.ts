import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../../core/data/content.model';

@Component({
  selector: 'app-portrait-plate',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  templateUrl: './portrait-plate.html',
  styleUrl: './portrait-plate.scss',
})
export class PortraitPlate {
  readonly plate = input.required<SiteContent['plate']>();
}
