import { Component, Input } from '@angular/core'
import { UiLink } from '../../models'

@Component({
  selector: 'ui-links',
  template: `
    <ng-container *ngFor="let link of links">
      <ui-link [link]="link"></ui-link>
    </ng-container>
  `,
})
export class LinksComponent {
  @Input() links: UiLink[]
}
