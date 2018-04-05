import { Component } from '@angular/core'
import { DemoService } from '../../../demo/services/demo.service'

@Component({
  selector: 'app-components-store',
  template: `
    <app-page-title title="Store Components"></app-page-title>


    <div class="row row-cards">
      <div class="col-lg-3">
        <div class="row">
          <div class="col-md-6 col-lg-12">
            <app-components-store-product
              [product]="demoService.products[0]"></app-components-store-product>
            <!--{% include cards/store-product.html product=0 %}-->
          </div>
          <div class="col-md-6 col-lg-12">
            <app-components-store-product
              [product]="demoService.products[3]"></app-components-store-product>
            <!--{% include cards/store-product.html product=3 %}-->
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <app-components-store-list
          [products]="demoService.products"></app-components-store-list>
        <!--{% include cards/store-list.html %}-->
      </div>
    </div>
  `,
})
export class ComponentsStoreComponent {
  constructor(public demoService: DemoService) {}
}
