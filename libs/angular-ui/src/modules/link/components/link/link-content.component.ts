import { Component, Input } from '@angular/core'
import { UiLink } from '../../models/'

@Component({
  selector: 'ui-link-content',
  template: `
    <ui-badge *ngIf="link.badge" class="float-right" [color]="link.badge.color" [label]="link.badge.label">
    </ui-badge>
    <i *ngIf="link.icon" [class]="link.icon"></i>
    <span *ngIf="link.label"  [class]="link.labelClass">{{ link.label }}</span>
  `,
})
export class LinkContentComponent {
  @Input() link: UiLink

}
