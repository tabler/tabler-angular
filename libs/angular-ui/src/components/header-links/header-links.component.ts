import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-header-links',
  template: `
    <ng-container *ngFor="let link of links">
      <a [href]="link.link" [class]="link.class" [target]="link.target || '_self' ">
        <i [class]="link.icon"></i>
        <span class="d-none d-lg-inline">{{ link.label }}</span>
      </a>
    </ng-container>
  `,
})
export class HeaderLinksComponent {
  @Input() public links = []
}
