import { Routes } from '@angular/router'

import { PagesAuthComponent } from './pages-auth.component'

import { AuthForgotComponent } from '../../components/auth-forgot/auth-forgot.component'
import { AuthLoginComponent } from '../../components/auth-login/auth-login.component'
import { AuthRegisterComponent } from '../../components/auth-register/auth-register.component'
import { AuthResetComponent } from '../../components/auth-reset/auth-reset.component'

export const AuthRoutes: Routes = [
  {
    path: '', component: PagesAuthComponent, children: [
      { path: 'login', component: AuthLoginComponent },
      { path: 'register', component: AuthRegisterComponent },
      { path: 'forgot-password', component: AuthForgotComponent },
      { path: 'reset-password', component: AuthResetComponent },
    ],
  },
]
