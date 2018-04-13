import { Component, Input } from '@angular/core'
import { UiLayout } from '../../../../services/ui.service'

@Component({
  selector: 'ui-header',
  template: `
    <ng-container>
      <div class="header">
        <div class="container">
          <div class="d-flex">
            <a class="navbar-brand" [routerLink]="config.appLink">
              <img *ngIf="config.appLogo" [attr.src]="config.appLogo" class="navbar-brand-img">
              <span *ngIf="config.appName" class="d-none d-md-inline">
                {{ config.appName }}
              </span>
            </a>
            <div class="ml-auto d-flex order-lg-2">
              <ui-header-links class="nav-item" [links]="config.headerSubNav"></ui-header-links>

              <ui-header-notifications [notifications]="config.notifications"
                                       (action)="handleAction($event)"></ui-header-notifications>

              <ui-header-profile [profile]="config.profile" [links]="config.profileNav"></ui-header-profile>
            </div>
          </div>
        </div>
      </div>

      <div class="header-nav" *ngIf="config.headerNav">
        <div class="container">
          <div class="row align-items-center">
            <div class="col">
              <ui-menu [links]="config.headerNav"></ui-menu>
            </div>
          </div>
        </div>
      </div>
    </ng-container>
  `,
})
export class HeaderComponent {
  @Input() public config: UiLayout

  handleAction($event) {
    console.log('Header Event')
    console.log($event)
  }
}
