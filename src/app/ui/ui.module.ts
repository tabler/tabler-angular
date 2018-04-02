import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NgxChartsModule } from '@swimlane/ngx-charts'
import { ChartsModule } from 'ng2-charts'

import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { LayoutComponent } from './containers/layout/layout.component'
import { MenuComponent } from './components/menu/menu.component'
import { PageComponent } from './components/page/page.component'
import { PageTitleComponent } from './components/page-title/page-title.component'

import { DashboardChartComponent } from './components/dashboard-chart/dashboard-chart.component'
import { DashboardChartBgComponent } from './components/dashboard-chart-bg/dashboard-chart-bg.component'
import { DashboardDigitComponent } from './components/dashboard-digit/dashboard-digit.component'
import { DashboardIconBoxComponent } from './components/dashboard-icon-box/dashboard-icon-box.component'
import { DashboardStatsComponent } from './components/dashboard-stats/dashboard-stats.component'

import { AvatarComponent } from './components/avatar/avatar.component';

const exported = [
  LayoutComponent,
  PageComponent,
  PageTitleComponent,
  DashboardStatsComponent,
  DashboardIconBoxComponent,
  DashboardDigitComponent,
  DashboardChartComponent,
  DashboardChartBgComponent,
  AvatarComponent,
]

@NgModule({
  imports: [
    CommonModule, RouterModule, NgxChartsModule, ChartsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    MenuComponent,
    PageTitleComponent,
    PageComponent,
    DashboardStatsComponent,
    DashboardIconBoxComponent,
    DashboardDigitComponent,
    DashboardChartComponent,
    AvatarComponent,
    DashboardChartBgComponent,
  ],
  exports: [ ...exported, NgxChartsModule, ChartsModule ]
})
export class UiModule {
}
