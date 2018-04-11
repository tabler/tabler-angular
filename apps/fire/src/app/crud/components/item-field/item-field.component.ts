import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-item-field',
  template: `
    <a href="" (click)="click($event, item)" *ngIf="field.link">
      {{ item[field.key] }}
    </a>
    <ng-container *ngIf="!field.link">
      <span *ngIf="field.type === 'string'">
        {{ item[field.key] }}
      </span>
      <span *ngIf="field.type === 'date'">
        {{ item[field.key] | date: 'short' }}
      </span>
    </ng-container>
  `,
})
export class ItemFieldComponent {
  @Input() public field
  @Input() public first
  @Input() public item
  @Output() public action = new EventEmitter()
  click(e, payload) {
    e.preventDefault()
    this.action.emit({ type: 'EDIT', payload })
  }
}
