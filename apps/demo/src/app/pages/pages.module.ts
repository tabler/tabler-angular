import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SharedModule } from '@tabler/angular-core'
import { LayoutBaseComponent, LayoutComponent } from '@tabler/angular-ui'

import { PagesAuthComponent } from './containers/pages-auth/pages-auth.component'
import { AuthRoutes } from './containers/pages-auth/auth-routing.module'
import { AuthLoginComponent } from './components/auth-login/auth-login.component'
import { AuthRegisterComponent } from './components/auth-register/auth-register.component'
import { AuthForgotComponent } from './components/auth-forgot/auth-forgot.component'
import { AuthResetComponent } from './components/auth-reset/auth-reset.component'

import { PageEmptyComponent } from './containers/page-empty/page-empty.component'


const routes: Routes = [
  {
    path: '', component: LayoutBaseComponent, children: [
      ...AuthRoutes,
    ]
  },
  {
    path: 'pages', component: LayoutComponent, children: [
      { path: 'empty', component: PageEmptyComponent },
    ]
  },
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PagesAuthComponent,
    AuthLoginComponent,
    AuthRegisterComponent,
    AuthForgotComponent,
    AuthResetComponent,
    PageEmptyComponent,
  ]
})
export class PagesModule {
}
