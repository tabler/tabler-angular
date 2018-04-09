import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-header-profile',
  template: `
    <div class="dropdown" dropdown *ngIf="profile">
      <a class="nav-link pr-0" data-toggle="dropdown" dropdownToggle>
        <ui-avatar [image]="profile.avatar" [text]="profile.avatarText"></ui-avatar>
        <span class="ml-2 d-none d-lg-block">
          <span class="text-default">{{ profile.name }}</span>
          <small class="text-muted d-block mt-1">
            {{ profile.description || profile.title || profile.email }}
          </small>
        </span>
      </a>

      <div *dropdownMenu class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
        <ng-container *ngFor="let link of links">

          <ui-header-profile-link [link]="link"></ui-header-profile-link>

        </ng-container>
      </div>
    </div>
  `,
})
export class HeaderProfileComponent {
  @Input() public profile
  @Input() public links
}
