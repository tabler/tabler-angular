import { Routes } from '@angular/router'
import { MessagesReadComponent } from '../../components/messages-read/messages-read.component'
import { PageEmailComponent } from './page-email.component'

import { MessagesComposeComponent } from '../../components/messages-compose/messages-compose.component'
import { MessagesListComponent } from '../../components/messages-list/messages-list.component'


export const EmailRoutes: Routes = [
  {
    path: 'email', component: PageEmailComponent, children: [
      { path: '', redirectTo: 'inbox', pathMatch: 'full' },
      { path: 'compose', component: MessagesComposeComponent, },
      { path: ':folder', component: MessagesListComponent, },
      { path: ':folder/:message', component: MessagesReadComponent, },
    ],
  },
]
