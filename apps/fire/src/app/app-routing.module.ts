import { ExtraOptions, RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { AuthModuleRoutes } from './auth/auth.module'
import { LoggedInGuard } from './auth/guards/logged-in.guard'

const routes: Routes = [
  { path: '', redirectTo: 'fire', pathMatch: 'full' },
  { path: 'auth', children: [...AuthModuleRoutes] },
  {
    path: 'crud',
    loadChildren: './crud/crud.module#CrudModule',
    canActivate: [LoggedInGuard],
  },
  { path: 'fire', loadChildren: './fire/fire.module#FireModule' },
  { path: '**', redirectTo: '/404' },
]

const options: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
}

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, options)
