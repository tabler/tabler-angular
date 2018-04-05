import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '@tabler/angular-core'

import { ProfileIndexComponent } from './containers/profile-index/profile-index.component'
import { ProfileCardComponent } from './components/profile-card/profile-card.component'
import { ProfileTimelineComponent } from './components/profile-timeline/profile-timeline.component'
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component'
import { ProfileEditBigComponent } from './components/profile-edit-big/profile-edit-big.component'
import { ProfileCardSmallComponent } from './components/profile-card-small/profile-card-small.component'

export const routes: Routes = [
  { path: '', component: ProfileIndexComponent },
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProfileIndexComponent,
    ProfileCardComponent,
    ProfileTimelineComponent,
    ProfileEditComponent,
    ProfileEditBigComponent,
    ProfileCardSmallComponent,
  ]
})
export class ProfileModule {
}
