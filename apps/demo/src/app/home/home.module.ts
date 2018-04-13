import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NgxChartsModule } from '@swimlane/ngx-charts'
import { SharedModule } from '@tabler/angular-core'
import { ChartsModule } from 'ng2-charts'
import { HomeIndexComponent } from './containers/home-index/home-index.component'
import { DevelopmentActivityComponent } from './components/development-activity/development-activity.component'
import { TableUsersComponent } from './components/table-users/table-users.component'
import { CardBrowserStatsComponent } from './components/card-browser-stats/card-browser-stats.component'
import { CardProjectsComponent } from './components/card-projects/card-projects.component'
import { CardMembersComponent } from './components/card-members/card-members.component'
import { DevelopmentChartComponent } from './components/development-chart/development-chart.component'
import { TableInvoicesComponent } from './components/table-invoices/table-invoices.component'

import { DashboardChartComponent } from './components/dashboard-chart/dashboard-chart.component'
import { DashboardChartBgComponent } from './components/dashboard-chart-bg/dashboard-chart-bg.component'
import { DashboardDigitComponent } from './components/dashboard-digit/dashboard-digit.component'
import { DashboardIconBoxComponent } from './components/dashboard-icon-box/dashboard-icon-box.component'
import { DashboardStatsComponent } from './components/dashboard-stats/dashboard-stats.component'

const routes: Routes = [{ path: '', component: HomeIndexComponent }]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    NgxChartsModule,
    ChartsModule,
  ],
  declarations: [
    HomeIndexComponent,
    DevelopmentActivityComponent,
    TableUsersComponent,
    CardBrowserStatsComponent,
    CardProjectsComponent,
    CardMembersComponent,
    DevelopmentChartComponent,
    TableInvoicesComponent,
    DashboardChartComponent,
    DashboardChartBgComponent,
    DashboardDigitComponent,
    DashboardIconBoxComponent,
    DashboardStatsComponent,
  ],
})
export class HomeModule {}
