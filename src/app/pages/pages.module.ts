import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppSharedModule } from '../app-shared.module'
import { LayoutBaseComponent } from '../ui/containers/layout-base/layout-base.component'

import { LayoutComponent } from '../ui/containers/layout/layout.component'

import { PagesAuthComponent } from './containers/pages-auth/pages-auth.component'
import { AuthRoutes } from './containers/pages-auth/auth-routing.module'
import { AuthLoginComponent } from './components/auth-login/auth-login.component'
import { AuthRegisterComponent } from './components/auth-register/auth-register.component'
import { AuthForgotComponent } from './components/auth-forgot/auth-forgot.component'
import { AuthResetComponent } from './components/auth-reset/auth-reset.component'

import { PagesErrorComponent } from './containers/pages-error/pages-error.component'
import { ErrorRoutes } from './containers/pages-error/error-routing.module'
import { ErrorPageComponent } from './components/error-page/error-page.component'

import { PageEmailComponent } from './containers/page-email/page-email.component'
import { PageEmptyComponent } from './containers/page-empty/page-empty.component'
import { PageProfileComponent } from './containers/page-profile/page-profile.component'


const routes: Routes = [
  {
    path: '', component: LayoutBaseComponent, children: [
      ...AuthRoutes,
      ...ErrorRoutes,
    ]
  },
  {
    path: 'pages', component: LayoutComponent, children: [
      { path: 'email', component: PageEmailComponent },
      { path: 'empty', component: PageEmptyComponent },
      { path: 'profile', component: PageProfileComponent },
    ]
  },
]

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PagesErrorComponent,
    PagesAuthComponent,
    AuthLoginComponent,
    AuthRegisterComponent,
    AuthForgotComponent,
    AuthResetComponent,
    ErrorPageComponent,
    PageEmailComponent,
    PageEmptyComponent,
    PageProfileComponent,
  ]
})
export class PagesModule {
}
