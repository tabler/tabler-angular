import { Component } from '@angular/core'

@Component({
  selector: 'app-auth-index',
  template: `
    <ui-page>
      <div class="row">
        <div class="col-md-8 col-lg-6 mx-auto">
          <router-outlet></router-outlet>
        </div>
      </div>
    </ui-page>
  `,
})
export class AuthIndexComponent {}
