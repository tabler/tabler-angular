import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div>
      <ui-avatar class="float-left ml-0 mr-3" 
        *ngIf="message.user" [image]="message.user.avatar" size="sm"></ui-avatar>
      <ui-avatar class="float-left ml-0 mr-3"
                 *ngIf="!message.user" text="?" size="sm"></ui-avatar>
      <div class="float-right">
        <span class="text-muted my-4">
          {{message.created | date: 'short' }}
        </span>
        <a class="text-danger ml-2"
           *ngIf="user && message.user && message.user.id === user.id"
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
  @Input() public user;
  @Output() action = new EventEmitter()
  deleteMessage(id) {
    this.action.emit({ type: 'DELETE', payload: id })
  }
}
