import { Component, Input } from '@angular/core'
import { UiLink } from '../../../../modules'

@Component({
  selector: 'ui-menu',
  template: `
    <ul class="nav nav-tabs" style="white-space: nowrap;">
      <ng-container *ngFor="let item of links">
        <li class="nav-item d-inline-block">
          <a href="#" [routerLink]="item.link" class="nav-link" routerLinkActive="active">
            <i class="{{ item.icon }}" *ngIf="item.icon"></i>
            {{item.label}}
          </a>
          <div class="nav-submenu nav" *ngIf="item.children">
            <ng-container *ngFor="let sub of item.children">
              <a href="#" class="nav-item" [routerLink]="sub.link" routerLinkActive="active">
                <i class="{{ sub.icon }}" *ngIf="sub.icon"></i>
                {{sub.label}}
              </a>
            </ng-container>
          </div>
        </li>
      </ng-container>
    </ul>
  `,
  styles: [],
})
export class MenuComponent {
  @Input() public links: UiLink[] = []
}
