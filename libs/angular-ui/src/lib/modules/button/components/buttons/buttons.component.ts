import { Component, EventEmitter, Input, Output } from '@angular/core'
import { UiButton } from '../../models'

@Component({
  selector: 'ui-buttons',
  template: `
    <div>
      <ng-container *ngFor="let button of config">
        <ui-button [disabled]="disabled"
                   [config]="button"
                   [payload]="payload"
                   (action)="action.emit($event)">
        </ui-button>
      </ng-container>
    </div>
  `,
})
export class ButtonsComponent {
  @Input() public config: UiButton[] = []
  @Input() public disabled = false
  @Input() public payload: any
  @Output() public action = new EventEmitter()
}
