import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-table-invoices',
  template: `    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Invoices</h3>
      </div>

      <div class="table-responsive">
        <table class="table card-table table-vcenter text-nowrap">
          <thead>
          <tr>
            <th class="w-1">No.</th>
            <th>Invoice Subject</th>
            <th>Client</th>
            <th>VAT No.</th>
            <th>Created</th>
            <th>Status</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
          </thead>

          <tbody>

          <tr *ngFor="let invoice of invoices; let i = index">
            <td>
              <span class="text-muted">
                00{{ index + 1400 }}
              </span>
            </td>
            <td><a href="invoice.html" class="text-inherit">{{ invoice.name }}</a></td>
            <td>
              {{ invoice.client }}
            </td>
            <td>
              {{ invoice.vatNo }}
            </td>
            <td>
              {{ invoice.date }}
            </td>
            <td>
              <span class="status-icon bg-{{ invoice.status }}"></span> {{ invoice.statusName }}
            </td>
            <td>{{ invoice.price }}</td>

            <td class="text-right">
              <a href="javascript:void(0)" class="btn btn-secondary btn-sm">Manage</a>
              <div class="dropdown">
                <button class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
              </div>
            </td>
            <td>
              <a class="icon" href="javascript:void(0)">
                <i class="fe fe-edit"></i>
              </a>
            </td>
          </tr>

          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [],
})
export class TableInvoicesComponent {
  @Input() invoices = []
}
