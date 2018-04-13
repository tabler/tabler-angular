import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-header-profile-link',
  template: `
    <a *ngIf="link.link" class="dropdown-item" [routerLink]="link.link">
      <ui-badge *ngIf="link.badge" class="float-right" [color]="link.badge.color" [label]="link.badge.label">
      </ui-badge>

      <i *ngIf="link.icon" [class]="link.icon" [class.dropdown-icon]="true"></i>

      <span *ngIf="link.label">{{link.label}}</span>
    </a>
    <div *ngIf="link.divider" class="dropdown-divider"></div>
  `,
  styles: [],
})
export class HeaderProfileLinkComponent {
  @Input() link
}
