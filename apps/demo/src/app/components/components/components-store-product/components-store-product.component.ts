import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-components-store-product',
  template: `
    <div class="card">
      <div class="card-body">
        <div class="mb-4 text-center">
          <img [attr.src]="product.image" [alt]="product.name" class="img-fluid">
        </div>
        <h4 class="card-title"><a href="javascript:void(0)">{{ product.name }}</a></h4>
        <div class="card-subtitle">
          {{ product.producer }}
        </div>
        <div class="mt-5 d-flex align-items-center">
          <div class="product-price">
            <strong>{{ product.price }}</strong>
          </div>
          <div class="ml-auto">
            <a href="javascript:void(0)" class="btn btn-primary"><i class="fe fe-plus"></i> Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ComponentsStoreProductComponent {
  @Input() product
}
