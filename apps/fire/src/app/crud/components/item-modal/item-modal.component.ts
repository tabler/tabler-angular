import { Component, EventEmitter, Input, Output } from '@angular/core'
import { BsModalRef } from 'ngx-bootstrap'

@Component({
  selector: 'app-item-modal',
  template: `
    <div class="card" *ngIf="type === 'inspect' && item">
      <div class="card-body">
        <h4 class="card-title">Inspect item</h4>
        <pre>{{ item | json }}</pre>
      </div>
    </div>
    <app-item-form
      *ngIf="type === 'form'"
      [item]="item"
      [user]="user"
      [properties]="properties"
      (action)="handleAction($event)"></app-item-form>
  `,
})
export class ItemModalComponent {
  @Input() type: 'inspect'|'form' = 'form'
  @Input() public item
  @Input() public user
  @Input() public properties
  @Output() public action = new EventEmitter()

  constructor(public bsModalRef: BsModalRef) { }

  handleAction({ type, payload }) {
    switch (type) {
      case 'SAVE':
        return this.action.emit({ type: 'SAVE', payload })
      case 'SAVE_CLOSE':
        return this.action.emit({ type: 'SAVE_CLOSE', payload })
      case 'CANCEL':
        return this.action.emit({ type: 'CANCEL', payload })
      default:
        this.action.emit({ type, payload })
    }
  }

}
