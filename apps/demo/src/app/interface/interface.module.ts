import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AppSharedModule } from '../app-shared.module'
import { InterfaceIndexComponent } from './containers/interface-index/interface-index.component'
import { InterfacePricingComponent } from './components/interface-pricing/interface-pricing.component'
import { InterfaceCardsComponent } from './components/interface-cards/interface-cards.component'
import { InterfaceChartsComponent } from './components/interface-charts/interface-charts.component';
import { InterfacePricingListComponent } from './components/interface-pricing-list/interface-pricing-list.component'

const routes: Routes = [
  {
    path: '', component: InterfaceIndexComponent, children: [
      { path: '', redirectTo: 'cards', pathMatch: 'full' },
      { path: 'cards', component: InterfaceCardsComponent },
      { path: 'charts', component: InterfaceChartsComponent },
      { path: 'pricing-cards', component: InterfacePricingListComponent },
    ]
  }
]

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ InterfaceIndexComponent, InterfacePricingComponent, InterfaceCardsComponent, InterfaceChartsComponent, InterfacePricingListComponent ]
})
export class InterfaceModule {
}
