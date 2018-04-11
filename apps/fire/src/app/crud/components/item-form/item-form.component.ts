import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-item-form',
  template: `
    <div>
      <div class="modal-header">
        {{ editMode ? 'Edit' : 'Add' }}

        <span class="pull-right">
          
          <button class="close" (click)="cancel()">
            <span>&times;</span>
          </button>
        </span>

      </div>
      <div class="modal-body">

        <form>
          <div class="form-group" *ngFor="let p of properties">
            <label for="collectionId">{{p.id}}</label>
            <input class="form-control" required type="text" id="collectionId"
                   [(ngModel)]="item[p.id]" [name]="'prop_' + p.id" [attr.placeholder]="field">
          </div>
        </form>

      </div>
      <div class="modal-footer">
        <button class="btn btn-outline-primary"
                [disabled]="!canEdit(item)"
                (click)="save()">
          Save
        </button>
        <button class="btn btn-outline-primary"
                [disabled]="!canEdit(item)"
                (click)="save(true)">
          Save and close
        </button>
        <button class="btn btn-outline-secondary"
                (click)="cancel()">
          Close
        </button>
        <button class="btn btn-light"
                (click)="toggleInspect($event)">
          <i class="fa fa-bug"></i>
        </button>
      </div>
      <pre class="m-0" *ngIf="inspect">{{ item | json }}</pre>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemFormComponent implements OnInit {
  private initialItem
  @Input() public item: any
  @Input() public user: any
  @Input() public properties: any[]
  @Input() public editMode: boolean
  @Output() public action = new EventEmitter()
  public inspect = false
  ngOnInit() {
    this.initialItem = Object.assign({}, this.item)
    this.editMode = this.editMode || !!this.item.id
  }

  public cancel() {
    this.action.emit({ type: 'CANCEL' })
  }

  public save(close = false) {
    if (!this.canEdit(this.item)) {
      alert('Sorry, you are not allowed to edit this item!')
    }
    const type = close ? 'SAVE_CLOSE' : 'SAVE'
    this.action.emit({ type, payload: this.item })
    if (!this.editMode) {
      this.item = Object.assign({}, this.initialItem)
    }
  }

  public toggleInspect(e) {
    e.preventDefault()
    this.inspect = !this.inspect
  }

  canEdit(item) {
    if (!item || !this.user) {
      return false
    }
    const isNew = typeof item.id === 'undefined'
    const isAdmin = this.user['admin']
    const isOwner = item.user && item.user.id === this.user.id

    return isNew || isAdmin || isOwner
  }
}
