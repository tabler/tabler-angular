import { Component } from '@angular/core'

@Component({
  selector: 'app-docs-index',
  template: `
    <app-page>
      <app-page-title
        title="Documentation"
        icon="fe fe-file-text"
        badge="develop"></app-page-title>
      <div class="row">
        <div class="col-lg-3 order-lg-0 mb-4">
          <app-docs-sidebar></app-docs-sidebar>
        </div>
        <div class="col-lg-9">
          <div class="card">
            <div class="card-body">
              <router-outlet></router-outlet>
            </div>
          </div>
        </div>
      </div>
    </app-page>
  `,
  styles: []
})
export class DocsIndexComponent {

}
