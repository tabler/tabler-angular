import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { Collection } from '../../data.typings'

@Component({
  selector: 'app-item-list',
  template: `
    <div class="card">
      <div>
        <h3 class="card-title m-3">
          <i class="{{ collection.icon || 'fa fa-fw fa-database' }} mr-3"></i>
          {{ collection.name }}
          <button class="btn btn-sm btn-outline-success float-right" (click)="add()">
            <i class="fa fa-plus"></i>
          </button>
        </h3>
      </div>
      <table class="table table-hover mb-0">
        <tr>
          <th style="width: 48px;"></th>
          <th *ngFor="let field of collection.fields" class="{{field.headerClass}}">
            {{ field.label || field.key }}
          </th>
          <th style="width: 80px;"></th>
        </tr>
        <tr *ngFor="let item of items">
          <td>
            <ui-avatar *ngIf="item.user" size="sm" [image]="item.user.avatar"></ui-avatar>
            <ui-avatar *ngIf="!item.user" size="sm" text="?"></ui-avatar>
          </td>
          <td *ngFor="let field of collection.fields" class="{{field.columnClass}}">
            <app-item-field [field]="field"
                            [item]="item"
                            (action)="action.emit($event)">
            </app-item-field>
          </td>
          <td class="text-right p-3 text-nowrap">
            <button class="btn btn-sm btn-outline-primary" (click)="inspect(item)">
              <i class="fa fa-eyedropper"></i>
            </button>
            <ng-container *ngIf="canDelete(item)">
              <button class="btn btn-sm btn-outline-danger" (click)="delete(item.id)">
                <i class="fa fa-trash"></i>
              </button>
            </ng-container>
          </td>
        </tr>
      </table>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent {
  @Input() collection: Collection
  @Input() items
  @Input() user: any
  @Output() action = new EventEmitter()

  delete(id) {
    if (window.confirm('Are you sure?')) {
      this.action.emit({ type: 'DELETE', payload: id })
    }
  }

  inspect(item) {
    this.action.emit({ type: 'INSPECT', payload: item })
  }

  add() {
    this.action.emit({ type: 'ADD' })
  }
  canDelete(item) {
    if (!item || !this.user ) {
      return false
    }
    const isAdmin = this.user['admin']
    const isOwner = item.user && item.user.id === this.user.id

    return isAdmin || isOwner
  }
}
