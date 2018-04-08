import { Component } from '@angular/core';

@Component({
  selector: 'app-fire-index',
  template: `
    <ui-page>
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <router-outlet></router-outlet>
        </div>
      </div>
    </ui-page>
  `
})
export class FireIndexComponent {

}
