import { Component, Input } from '@angular/core'
import { UiLink } from '../../models'

@Component({
  selector: 'ui-link',
  template: `    
    <ng-container *ngIf="link && link.external; else internal">
      <a [href]="link.link" [class]="link.linkClass" [target]="link.target || '_self' ">
        <ui-link-content [link]="link"></ui-link-content>
      </a>
    </ng-container>
    <ng-template #internal>
      <a *ngIf="link" [routerLink]="link.link" [class]="link.linkClass">
        <ui-link-content [link]="link"></ui-link-content>
      </a>
    </ng-template>
  `,
})
export class LinkComponent {
  @Input() link: UiLink = {}

}
