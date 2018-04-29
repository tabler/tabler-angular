import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-table-invoices',
  templateUrl: './table-invoices.html',
  styles: [],
})
export class TableInvoicesComponent {
  @Input() invoices = []
}
