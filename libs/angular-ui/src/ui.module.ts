import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { NgxChartsModule } from '@swimlane/ngx-charts'
import { ChartsModule } from 'ng2-charts'
import { NgPipesModule } from 'angular-pipes'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { HighlightModule } from 'ngx-highlightjs'

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
import { FooterLinksComponent } from './components/footer-links/footer-links.component';
import { HighlightComponent } from './components/highlight/highlight.component'

const exported = [
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
