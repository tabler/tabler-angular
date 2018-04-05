import { Component } from '@angular/core'

@Component({
  selector: 'app-page',
  template: `
     <div class="container">
      <ng-content></ng-content>
    </div>
  `,
})
export class PageComponent {
}
