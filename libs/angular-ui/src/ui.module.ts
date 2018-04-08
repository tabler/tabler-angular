import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { NgxChartsModule } from '@swimlane/ngx-charts'
import { AlertModule } from '@tabler/angular-ui/src/modules/alert/alert.module';
import { ChartsModule } from 'ng2-charts'
import { NgPipesModule } from 'angular-pipes'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { HighlightModule } from 'ngx-highlightjs'

import { TimeAgoPipe } from './pipes/time-ago.pipe'

import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { LayoutComponent } from './containers/layout/layout.component'
import { LayoutBaseComponent } from './containers/layout-base/layout-base.component'
import { MenuComponent } from './components/menu/menu.component'
import { PageComponent } from './components/page/page.component'
import { PageTitleComponent } from './components/page-title/page-title.component'

import { DashboardChartComponent } from './components/dashboard-chart/dashboard-chart.component'
import { DashboardChartBgComponent } from './components/dashboard-chart-bg/dashboard-chart-bg.component'
import { DashboardDigitComponent } from './components/dashboard-digit/dashboard-digit.component'
import { DashboardIconBoxComponent } from './components/dashboard-icon-box/dashboard-icon-box.component'
import { DashboardStatsComponent } from './components/dashboard-stats/dashboard-stats.component'

import { AvatarComponent } from './components/avatar/avatar.component'
import { CardComponent } from './components/card/card.component'
import { CardBodyComponent } from './components/card-body/card-body.component'
import { FooterLinksComponent } from './components/footer-links/footer-links.component'
import { HighlightComponent } from './components/highlight/highlight.component'
import { HeaderNotificationsComponent } from './components/header-notifications/header-notifications.component'
import { HeaderNotificationItemComponent } from './components/header-notification-item/header-notification-item.component'
import { HeaderProfileComponent } from './components/header-profile/header-profile.component'
import { HeaderProfileLinkComponent } from './components/header-profile-link/header-profile-link.component'
import { BadgeComponent } from './components/badge/badge.component';
import { HeaderLinksComponent } from './components/header-links/header-links.component'

const uiModules = [
  AlertModule,
]

const exported = [
  ...uiModules,
  LayoutComponent,
  LayoutBaseComponent,
  PageComponent,
  PageTitleComponent,
  DashboardStatsComponent,
  DashboardIconBoxComponent,
  DashboardDigitComponent,
  DashboardChartComponent,
  DashboardChartBgComponent,
  AvatarComponent,
  CardComponent,
  CardBodyComponent,
  HighlightComponent,
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    ChartsModule,
    NgPipesModule,
    BsDropdownModule.forRoot(),
    HighlightModule.forRoot({
      theme: 'atom-one-light',
    }),
    ...uiModules
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    FooterLinksComponent,
    LayoutComponent,
    LayoutBaseComponent,
    MenuComponent,
    PageTitleComponent,
    PageComponent,
    DashboardStatsComponent,
    DashboardIconBoxComponent,
    DashboardDigitComponent,
    DashboardChartComponent,
    AvatarComponent,
    DashboardChartBgComponent,
    CardComponent,
    CardBodyComponent,
    HighlightComponent,
    HeaderNotificationsComponent,
    HeaderNotificationItemComponent,
    HeaderProfileComponent,
    HeaderProfileLinkComponent,
    BadgeComponent,
    TimeAgoPipe,
    HeaderLinksComponent,
  ],
  exports: [
    ...exported,
    NgxChartsModule,
    ChartsModule,
    NgPipesModule,
    RouterModule,
  ]
})
export class UiModule {
}
