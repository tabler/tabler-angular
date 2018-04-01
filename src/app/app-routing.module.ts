import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'docs', loadChildren: './docs/docs.module#DocsModule' },
]

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes)
