import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppSharedModule } from '../app-shared.module'
import { HomeIndexComponent } from './containers/home-index/home-index.component';
import { DevelopmentActivityComponent } from './components/development-activity/development-activity.component';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { CardBrowserStatsComponent } from './components/card-browser-stats/card-browser-stats.component';
import { CardProjectsComponent } from './components/card-projects/card-projects.component';
import { CardMembersComponent } from './components/card-members/card-members.component';
import { DevelopmentChartComponent } from './components/development-chart/development-chart.component';
import { TableInvoicesComponent } from './components/table-invoices/table-invoices.component'

const routes: Routes = [
  { path: '', component: HomeIndexComponent }
]

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ HomeIndexComponent, DevelopmentActivityComponent, TableUsersComponent, CardBrowserStatsComponent, CardProjectsComponent, CardMembersComponent, DevelopmentChartComponent, TableInvoicesComponent ]
})
export class HomeModule {
}
