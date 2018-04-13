import { Component, Input } from '@angular/core'
import { UiLink } from '../../models'

@Component({
  selector: 'ui-link',
  template: `    
    <ng-container *ngIf="link.external">
      <a [href]="link.link" [class]="link.linkClass" [target]="link.target || '_self' ">
        <ui-link-content [link]="link"></ui-link-content>
      </a>
    </ng-container>
    <ng-container *ngIf="!link.external">
      <a [routerLink]="link.link" [class]="link.linkClass">
        <ui-link-content [link]="link"></ui-link-content>
      </a>
    </ng-container>
  `,
})
export class LinkComponent {
  @Input() link: UiLink

}
