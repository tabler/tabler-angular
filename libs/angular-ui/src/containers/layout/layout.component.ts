import { Component } from '@angular/core'

@Component({
  selector: 'ui-layout',
  template: `
    <div class="page">
      <div class="page-main">
        <ui-header></ui-header>
        <div class="page-content">
          <router-outlet></router-outlet>
        </div>
        <ui-footer></ui-footer>
      </div>
    </div>
  `,
})
export class LayoutComponent {
}
