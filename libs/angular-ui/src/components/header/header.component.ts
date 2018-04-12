import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-header',
  template: `
    <div class="header">
      <div class="container">
        <div class="d-flex">
          <a class="navbar-brand" routerLink="/">
            <img src="assets/brand/tabler.svg" class="navbar-brand-img" alt="tabler.io">
            <span class="d-none d-md-inline">
              {{ config?.title }}
            </span>
          </a>
          <div class="ml-auto d-flex order-lg-2">

            <ui-header-links class="nav-item" [links]="config?.links"></ui-header-links>
            
            <ui-header-notifications [notifications]="config?.notifications"
                                     (action)="handleAction($event)"></ui-header-notifications>

            <ui-header-profile [profile]="config?.user" [links]="config?.profileLinks"></ui-header-profile>
          </div>
        </div>
      </div>
    </div>

    <div class="header-nav">
      <div class="container">
        <div class="row align-items-center">
          <div class="col">
            <ui-menu [links]="config?.menu"></ui-menu>
          </div>
          <div class="col-3 ml-auto" *ngIf="config?.search">
            <form class="input-icon">
              <input type="search" class="form-control header-search" placeholder="Search&hellip;" tabindex="1">
              <div class="input-icon-addon">
                <i class="fe fe-search"></i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HeaderComponent {
  @Input() public config

  constructor() {}

  handleAction($event) {
    console.log('Header Event')
    console.log($event)
  }
}
