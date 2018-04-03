import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
  { path: 'docs', loadChildren: './docs/docs.module#DocsModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'interface', loadChildren: './interface/interface.module#InterfaceModule' },
]

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes)
