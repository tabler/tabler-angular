import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { LayoutComponent } from '@tabler/angular-ui'
import { AppConfig } from './app.config'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { config: AppConfig },
    children: [
      { path: '', redirectTo: 'fire', pathMatch: 'full' },
      { path: 'fire', loadChildren: './fire/fire.module#FireModule' }
    ]
  },
  { path: '**', redirectTo: '/404' },
]

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(
  routes
)
