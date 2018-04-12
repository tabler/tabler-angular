import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-message-list',
  template: `
    <div class="list-group list-group- my-5">

      <div *ngIf="messages && !messages.length">
        <div class="alert alert-info">No messages found...</div>
      </div>

      <div class="list-group-item list-group-ixtem-action mb-3"
           *ngFor="let message of messages">

        <app-message [user]="user" [message]="message" (action)="handleAction($event)"></app-message>

      </div>
    </div>
  `,
  styles: [],
})
export class MessageListComponent {
  @Input() public messages = []
  @Input() public user
  @Output() public action = new EventEmitter()

  handleAction($event) {
    console.log($event)
    this.action.emit($event)
  }
}
