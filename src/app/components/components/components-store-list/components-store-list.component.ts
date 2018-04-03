import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-components-store-list',
  template: `
    <div class="card">
      <table class="table card-table table-vcenter">
        
        <tr *ngFor="let product of products; let i = index">
          <td><img [attr.src]="product.image" alt="" class="h-8"></td>
          <td>
            {{ product.name }}
            <div *ngIf="i % 2 === 0" class="badge badge-default badge-md">New</div>
          </td>
          <td class="text-right text-muted d-none d-md-table-cell text-nowrap">
            {{ i | random:4:100 | round }} reviews
          </td>
          <td class="text-right text-muted d-none d-md-table-cell text-nowrap">
            {{ i | random:4:50 | round }} offers
          </td>
          <td class="text-right">
            <strong>{{ product.price }}</strong>
          </td>
        </tr>
        
      </table>
    </div>
  `,
  styles: []
})
export class ComponentsStoreListComponent implements OnInit {
  @Input() products
  constructor() { }

  ngOnInit() {
  }

}
