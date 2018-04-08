import { Component } from '@angular/core'

@Component({
  selector: 'app-fire-index',
  template: `
    <ui-page>
      <ui-page-title
        title="Fire"
        icon="fa fa-fire"></ui-page-title>
      <div class="row">
        <div class="col-lg-3 order-lg-0 mb-4">
          <app-fire-sidebar></app-fire-sidebar>
        </div>
        <div class="col-lg-9">
          <div class="card">
            <div class="card-body">
              <router-outlet></router-outlet>
            </div>
          </div>
        </div>
      </div>
    </ui-page>
  `,
  styles: []
})
export class FireIndexComponent {

}
