import { Component } from '@angular/core'

@Component({
  selector: 'app-components-index',
  template: `
    <app-page>
      <router-outlet></router-outlet>
    </app-page>
  `,
})
export class ComponentsIndexComponent {
}
