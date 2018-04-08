import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '@tabler/angular-core'

import { IntroductionComponent } from './components/introduction/introduction.component'
import { AlertsComponent } from './components/alerts/alerts.component'
import { BadgesComponent } from './components/badges/badges.component'
import { ButtonsComponent } from './components/buttons/buttons.component'
import { ColorsComponent } from './components/colors/colors.component'
import { CardsComponent } from './components/cards/cards.component'
import { FormsComponent } from './components/forms/forms.component'
import { TagsComponent } from './components/tags/tags.component'
import { DocsIndexComponent } from './containers/docs-index/docs-index.component'
import { DocsSidebarComponent } from './containers/docs-sidebar/docs-sidebar.component'

const routes: Routes = [ {
  path: '', component: DocsIndexComponent, children: [
    { path: '', redirectTo: 'guestbook', pathMatch: 'full' },
    { path: 'guestbook', component: IntroductionComponent },
    { path: 'alerts', component: AlertsComponent },
    { path: 'badges', component: BadgesComponent },
    { path: 'buttons', component: ButtonsComponent },
    { path: 'colors', component: ColorsComponent },
    { path: 'cards', component: CardsComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'tags', component: TagsComponent },
  ]
} ]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IntroductionComponent,
    AlertsComponent,
    BadgesComponent,
    ButtonsComponent,
    ColorsComponent,
    CardsComponent,
    FormsComponent,
    TagsComponent,
    DocsIndexComponent,
    DocsSidebarComponent,
  ]
})
export class DocsModule {
}
