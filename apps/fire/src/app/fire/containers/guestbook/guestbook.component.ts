import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { FireService } from '../../services/fire.service';

@Component({
  selector: 'app-guestbook',
  template: `
    <ui-page-title
      title="Guestbook"
      icon="fa fa-fire"
      subTitle="Rock a guestbook like it's 1999! 🚀 ">
    </ui-page-title>

    <app-message-form
      [message]="message"
      [user]="auth.user$ | async"
      (action)="handleAction($event)">
    </app-message-form>

    <div *ngIf="error">
      <ui-alert type="info">
        {{error}}
      </ui-alert>
    </div>

    <app-message-list
      [messages]="fire.collection$ | async"
      [user]="auth.user$ | async"
      (action)="handleAction($event)">
    </app-message-list>
  `,
})
export class GuestbookComponent {
  public error = null
  public message = ''

  constructor(public auth: AuthService, public fire: FireService) {}

  addMessage({ message, user }) {
    this.error = null
    if (message === '') {
      this.error = 'Please write a message first!'
      return
    }
    this.fire.upsert({ message, user })
      .subscribe(() => console.log('Item added'))
  }

  deleteMessage(id) {
    this.fire.delete(id)
      .subscribe(() => console.log('Item deleted'))
  }

  handleAction({ type, payload }) {
    switch (type) {
      case 'ADD':
        return this.addMessage(payload)
      case 'DELETE':
        return this.deleteMessage(payload)
      default:
        return console.log('Unknown type', type, payload)
    }
  }
}
