import { Component } from '@angular/core'

@Component({
  selector: 'app-page',
  template: `
    <div class="page-content">
      <div class="container">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class PageComponent {
}
