import { Component } from '@angular/core'

@Component({
  selector: 'app-layout-base',
  template: `
    <div class="page">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class LayoutBaseComponent {
}
