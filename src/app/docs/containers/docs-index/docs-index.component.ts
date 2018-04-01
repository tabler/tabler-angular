import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-index',
  template: `
    <div class="container">

      <div class="page-header">
        <h1 class="page-title">
          Documentation
        </h1>
      </div>

      <div class="row">
        <div class="col-lg-3 order-lg-1 mb-4">
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
    </div>
  `,
  styles: []
})
export class DocsIndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
