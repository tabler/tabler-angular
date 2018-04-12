import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '@tabler/angular-core'
import { GuestbookComponent } from './containers/guestbook/guestbook.component'
import { FireIndexComponent } from './containers/fire-index/fire-index.component'
import { FireSidebarComponent } from './containers/fire-sidebar/fire-sidebar.component'
import { FireService } from './services/fire.service'
import { MessageListComponent } from './components/message-list/message-list.component'
import { MessageFormComponent } from './components/message-form/message-form.component'
import { MessageComponent } from './components/message/message.component'

const routes: Routes = [
  {
    path: '',
    component: FireIndexComponent,
    children: [
      { path: '', redirectTo: 'guestbook', pathMatch: 'full' },
      { path: 'guestbook', component: GuestbookComponent },
    ],
  },
]

@NgModule({
  imports: [SharedModule, ReactiveFormsModule, FormsModule, RouterModule.forChild(routes)],
  declarations: [
    GuestbookComponent,
    FireIndexComponent,
    FireSidebarComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageComponent,
  ],
  providers: [FireService],
})
export class FireModule {}
