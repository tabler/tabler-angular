import { Component } from '@angular/core'

@Component({
  selector: 'app-layout',
  template: `
    <div class="page">
      <div class="page-main">
        <app-header></app-header>
        <div class="page-content">
          <router-outlet></router-outlet>
        </div>
        <app-footer></app-footer>
      </div>
    </div>
  `,
})
export class LayoutComponent {
}
