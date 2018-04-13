import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TimeAgoPipe } from '../../pipes/time-ago.pipe'

import { AvatarModule } from '../avatar'
import { BadgeModule } from '../badge'

import { HeaderComponent } from './components/header/header.component'
import { HeaderLinksComponent } from './components/header-links/header-links.component'
import { HeaderNotificationItemComponent } from './components/header-notification-item/header-notification-item.component'
import { HeaderNotificationsComponent } from './components/header-notifications/header-notifications.component'
import { HeaderProfileComponent } from './components/header-profile/header-profile.component'
import { HeaderProfileLinkComponent } from './components/header-profile-link/header-profile-link.component'
import { MenuComponent } from './components/menu/menu.component'

@NgModule({
  imports: [CommonModule, RouterModule, AvatarModule, BadgeModule],
  declarations: [
    TimeAgoPipe,
    HeaderComponent,
    HeaderNotificationsComponent,
    HeaderNotificationItemComponent,
    HeaderProfileComponent,
    HeaderProfileLinkComponent,
    HeaderLinksComponent,
    MenuComponent,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule {}
