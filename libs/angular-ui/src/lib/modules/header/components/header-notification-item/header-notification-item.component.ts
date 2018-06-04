import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-header-notification-item',
  template: `
    <a href="#" class="dropdown-item d-flex" (click)="onClick($event)">
      <ui-avatar [text]="notification.avatarText" class="mr-3 align-self-center"></ui-avatar>
      <div>
        <strong>{{ notification.from }}</strong> {{ notification.text }}

        <div class="small text-muted">
          {{ notification.date | timeAgo }}
        </div>
      </div>
    </a>
  `,
  styles: [],
})
export class HeaderNotificationItemComponent {
  @Input() public notification
  @Output() public action = new EventEmitter()

  public onClick(e) {
    e.preventDefault()
    this.action.emit({
      type: 'NOTIFICATION_CLICK',
      payload: this.notification,
    })
  }
}
