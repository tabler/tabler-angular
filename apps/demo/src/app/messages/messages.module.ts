import { NgModule } from '@angular/core'

import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../../../../../libs/angular-core'

import { MessagesComposeComponent } from './components/messages-compose/messages-compose.component'
import { MessagesFoldersComponent } from './components/messages-folders/messages-folders.component'
import { MessagesListComponent } from './components/messages-list/messages-list.component'
import { MessagesReadComponent } from './components/messages-read/messages-read.component'
import { MessagesIndexComponent } from './containers/messages-index/messages-index.component'

const routes: Routes = [
  {
    path: '',
    component: MessagesIndexComponent,
    children: [
      { path: '', redirectTo: 'inbox', pathMatch: 'full' },
      { path: 'compose', component: MessagesComposeComponent },
      { path: ':folder', component: MessagesListComponent },
      { path: ':folder/:message', component: MessagesReadComponent },
    ],
  },
]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [
    MessagesComposeComponent,
    MessagesFoldersComponent,
    MessagesListComponent,
    MessagesReadComponent,
    MessagesIndexComponent,
  ],
})
export class MessagesModule {}
