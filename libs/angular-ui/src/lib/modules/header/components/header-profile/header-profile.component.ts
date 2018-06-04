import { Component, Input } from '@angular/core'
import { UiProfile } from '../../../../services/ui.service'
import { UiLink } from '../../../../modules'

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

      <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow" *dropdownMenu>
        <ng-container *ngFor="let link of links">
          <div *ngIf="link.divider; else linkEl" class="dropdown-divider"></div>
          <ng-template #linkEl>
            <ui-link [link]="link"></ui-link>
          </ng-template>
        </ng-container>
      </div>
    </div>
  `,
})
export class HeaderProfileComponent {
  @Input() public profile: UiProfile
  @Input() public links: UiLink[]
}
