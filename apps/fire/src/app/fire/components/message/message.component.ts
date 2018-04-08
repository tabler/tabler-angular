import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div>
      <div class="float-right">
        <span class="text-muted my-4">
          {{message.created | date: 'short' }}
        </span>
        <a class="text-danger ml-2"
           (click)="deleteMessage(message.id)">
          <i class="fa fa-trash"></i>
        </a>
      </div>
      {{message.message}}
    </div>
  `,
  styles: []
})
export class MessageComponent {
  @Input() public message;
  @Output() action = new EventEmitter()
  deleteMessage(id) {
    this.action.emit({ type: 'DELETE', payload: id })
  }
}
