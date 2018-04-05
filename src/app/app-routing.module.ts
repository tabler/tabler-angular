import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { LayoutComponent } from './ui/containers/layout/layout.component'

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      { path: 'docs', loadChildren: './docs/docs.module#DocsModule' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'interface', loadChildren: './interface/interface.module#InterfaceModule' },
      { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'gallery', loadChildren: './gallery/gallery.module#GalleryModule' },
    ],
  },
  { path: '', loadChildren: './pages/pages.module#PagesModule' },
  { path: '**', redirectTo: '/404?message=Invalid route' },
]

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes)
