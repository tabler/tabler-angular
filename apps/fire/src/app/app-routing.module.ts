import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { AuthModuleRoutes } from './auth/auth.module'

const routes: Routes = [
  { path: '', redirectTo: 'fire', pathMatch: 'full' },
  { path: 'fire', loadChildren: './fire/fire.module#FireModule' },
  { path: 'auth', children: [...AuthModuleRoutes]},
  { path: '**', redirectTo: '/404' },
]

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(
  routes
)
