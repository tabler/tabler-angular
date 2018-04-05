import { Component } from '@angular/core'

@Component({
  selector: 'ui-page',
  template: `
     <div class="container">
      <ng-content></ng-content>
    </div>
  `,
})
export class PageComponent {
}
