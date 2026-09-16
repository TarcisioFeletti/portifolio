import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SiteContent } from '../../core/data/content.model';

@Component({
  selector: 'app-education',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  readonly education = input.required<SiteContent['education']>();
}
