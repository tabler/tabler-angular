import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppSharedModule } from '../app-shared.module'
import { PagesIndexComponent } from './containers/pages-index/pages-index.component';
import { PagesErrorComponent } from './containers/pages-error/pages-error.component';
import { PagesAuthComponent } from './containers/pages-auth/pages-auth.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthRegisterComponent } from './components/auth-register/auth-register.component';
import { AuthForgotComponent } from './components/auth-forgot/auth-forgot.component';
import { AuthResetComponent } from './components/auth-reset/auth-reset.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  { path: '', component: PagesIndexComponent },
  { path: '400', component: PagesErrorComponent, data: { code: '400' } },
  { path: '401', component: PagesErrorComponent, data: { code: '401' } },
  { path: '403', component: PagesErrorComponent, data: { code: '403' } },
  { path: '404', component: PagesErrorComponent, data: { code: '404' } },
  { path: '500', component: PagesErrorComponent, data: { code: '500' } },
  { path: '503', component: PagesErrorComponent, data: { code: '503' } },
  {
    path: '', component: PagesAuthComponent, children: [
      { path: 'login', component: AuthLoginComponent },
      { path: 'register', component: AuthRegisterComponent },
      { path: 'forgot', component: AuthForgotComponent },
      { path: 'reset', component: AuthResetComponent },
    ],
  },
]

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PagesIndexComponent,
    PagesErrorComponent,
    PagesAuthComponent,
    AuthLoginComponent,
    AuthRegisterComponent,
    AuthForgotComponent,
    AuthResetComponent,
    ErrorPageComponent,
  ]
})
export class PagesModule { }
