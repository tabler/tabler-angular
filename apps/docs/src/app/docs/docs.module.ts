import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '@tabler/angular-core'

import { DocsViewerModule } from '../docs-viewer/docs-viewer.module'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'forms', pathMatch: 'full' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'advanced', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsModule' },
      { path: 'select', loadChildren: './forms/forms.module#FormsModule' },
    ],
    data: {
      chapters: [
        { id: 'forms', icon: 'fe fe-check-square', path: '/docs/forms', label: 'Forms' },
        { id: 'advanced', icon: 'fe fe-info', path: '/docs/advanced', label: 'Alerts' },
        { id: 'buttons', icon: 'fe fe-info', path: '/docs/buttons', label: 'Buttons' },
        { id: 'select', icon: 'fe fe-info', path: '/docs/select', label: 'Cards' },
      ],
      section: {
        chapter: '',
        items: [],
      }
    },
  },
]

@NgModule({
  imports: [SharedModule, DocsViewerModule, RouterModule.forChild(routes)],
})
export class DocsModule {}
