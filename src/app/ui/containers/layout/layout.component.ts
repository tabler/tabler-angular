import { Component } from '@angular/core'

@Component({
  selector: 'app-layout',
  template: `
    <app-header></app-header>
    <div>
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  styles: []
})
export class LayoutComponent {
}
