import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-form',
  template: `
    <div class="my-3 py-3">
      <div class="input-group input-xl">
        <div class="input-group-prepend" *ngIf="user">
          <button class="btn btn-secondary">
            <ui-avatar [image]="user.avatar" size="sm"></ui-avatar>
          </button>
        </div>
        <input type="text"
               class="form-control"
               placeholder="Type a message 🚀 "
               [(ngModel)]="message"
               (keydown.enter)="sendMessage()">
          <div class="input-group-append">
            <button type="button"
                    class="btn btn-secondary"
                    (click)="sendMessage()">
              <i class="fe fe-send"></i>
            </button>
          </div>
      </div>
    </div>
  `,
  styles: []
})
export class MessageFormComponent {
  @Input() message = ''
  @Input() user = ''
  @Output() action = new EventEmitter()

  sendMessage() {
    const payload = { message: this.message, user: this.user }
    this.action.emit({ type: 'ADD', payload })
    this.message = ''
  }
}
