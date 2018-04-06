import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-header-notifications',
  template: `
    <div class="dropdown d-none d-md-flex py-2" dropdown *ngIf="notifications">
      <a dropdownToggle class="nav-link icon" data-toggle="dropdown">
        <i class="fe fe-bell"></i>
        <span class="nav-unread"></span>
      </a>
      <div *dropdownMenu class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">

        <ui-header-notification-item *ngFor="let notification of notifications"
                                     [notification]="notification"
                                     (action)="action.emit($event)">
        </ui-header-notification-item>

        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item text-center text-muted-dark"
           (click)="onClick($event)">
          {{ actionText }}
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class HeaderNotificationsComponent {
  @Input() public notifications = []
  @Input() public actionText = 'Mark all as read'
  @Input() public actionType = 'MARK_ALL_READ'
  @Output() public action = new EventEmitter()

  public onClick(e) {
    e.preventDefault()
    this.action.emit({ type: this.actionType })
  }
}
