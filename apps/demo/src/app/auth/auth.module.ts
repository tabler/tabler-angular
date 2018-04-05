import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../../../../../libs/angular-core'
import { AuthIndexComponent } from './container/auth-index/auth-index.component'

import { AuthLoginComponent } from './components/auth-login/auth-login.component'
import { AuthRegisterComponent } from './components/auth-register/auth-register.component'
import { AuthForgotComponent } from './components/auth-forgot/auth-forgot.component'
import { AuthResetComponent } from './components/auth-reset/auth-reset.component'

const routes: Routes = [
  {
    path: '', component: AuthIndexComponent, children: [
      { path: 'login', component: AuthLoginComponent },
      { path: 'register', component: AuthRegisterComponent },
      { path: 'forgot-password', component: AuthForgotComponent },
      { path: 'reset-password', component: AuthResetComponent },
    ],
  },
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AuthIndexComponent,
    AuthLoginComponent,
    AuthRegisterComponent,
    AuthForgotComponent,
    AuthResetComponent,
  ]
})
export class AuthModule { }
