import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TimeAgoPipe } from '../../pipes/time-ago.pipe'

import { AvatarModule } from '../avatar/avatar.module'
import { BadgeModule } from '../badge/badge.module'
import { LinkModule } from '../link/link.module'

import { HeaderComponent } from './components/header/header.component'
import { HeaderNotificationItemComponent } from './components/header-notification-item/header-notification-item.component'
import { HeaderNotificationsComponent } from './components/header-notifications/header-notifications.component'
import { HeaderProfileComponent } from './components/header-profile/header-profile.component'
import { MenuComponent } from './components/menu/menu.component'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'

@NgModule({
  imports: [CommonModule, RouterModule, AvatarModule, BadgeModule, BsDropdownModule.forRoot(), LinkModule],
  declarations: [
    TimeAgoPipe,
    HeaderComponent,
    HeaderNotificationsComponent,
    HeaderNotificationItemComponent,
    HeaderProfileComponent,
    MenuComponent,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
