import { ExtraOptions, RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { LayoutComponent } from '@tabler/angular-ui'
import { AuthModuleRoutes } from './auth/auth.module'
import { LoggedInGuard } from './auth/guards/logged-in.guard'

const routes: Routes = [
  { path: '', redirectTo: 'guestbook', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'auth', children: [...AuthModuleRoutes] },
      { path: 'guestbook', loadChildren: './fire/fire.module#FireModule' },
      {
        path: 'crud',
        loadChildren: './crud/crud.module#CrudModule',
        canActivate: [LoggedInGuard],
      },
    ],
  },
  { path: '**', redirectTo: '/404' },
]

const options: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
}

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, options)
