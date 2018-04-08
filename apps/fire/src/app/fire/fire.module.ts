import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@tabler/angular-core';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { FireIndexComponent } from './containers/fire-index/fire-index.component';
import { FireSidebarComponent } from './containers/fire-sidebar/fire-sidebar.component';

const routes: Routes = [ {
  path: '', component: FireIndexComponent, children: [
    { path: '', redirectTo: 'introduction', pathMatch: 'full' },
    { path: 'introduction', component: IntroductionComponent }
  ]
} ];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IntroductionComponent,
    FireIndexComponent,
    FireSidebarComponent

  ]
})
export class FireModule {}
