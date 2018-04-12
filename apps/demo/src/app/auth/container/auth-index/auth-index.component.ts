import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ui-pages-auth',
  template: `
    <div class="page-single">
      <div class="container">
        <div class="row">
          <div class="col {{ colClass }} mx-auto">
            <div class="text-center mb-6">
              <img src="./assets/brand/tabler.svg" class="h-6" alt="">
            </div>

            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AuthIndexComponent implements OnInit {
  public colClass = 'col-login'
  constructor() {}

  ngOnInit() {}
}
