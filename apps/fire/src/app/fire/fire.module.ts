import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@tabler/angular-core';
import { GuestbookComponent } from './components/guestbook/guestbook.component';
import { FireIndexComponent } from './containers/fire-index/fire-index.component';
import { FireSidebarComponent } from './containers/fire-sidebar/fire-sidebar.component';
import { FireService } from './services/fire.service';

const routes: Routes = [ {
  path: '', component: FireIndexComponent, children: [
    { path: '', redirectTo: 'guestbook', pathMatch: 'full' },
    { path: 'guestbook', component: GuestbookComponent }
  ]
} ];

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    GuestbookComponent,
    FireIndexComponent,
    FireSidebarComponent

  ],
  providers: [FireService]
})
export class FireModule {}
