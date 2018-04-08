import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { SharedModule } from '@tabler/angular-core';
import { AuthService } from './services/auth.service';
import { AuthIndexComponent } from './containers/auth-index/auth-index.component';

export const AuthModuleRoutes: Routes = [
  {
    path: '',
    component: AuthIndexComponent,
  }
]

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [AuthIndexComponent],
  providers: [AuthService]
})
export class AuthModule { }
