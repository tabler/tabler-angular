import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '@tabler/angular-core'

import { DocsViewerModule } from '../docs-viewer/docs-viewer.module'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'alerts', pathMatch: 'full' },
      { path: 'alerts', loadChildren: './alerts/alerts.module#AlertsModule' },
      { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
    ],
    data: {
      chapters: [
        { id: 'alerts', icon: 'fe fe-info', path: ['/alerts'], label: 'Alerts' },
        { id: 'buttons', icon: 'fe fe-info', path: ['/buttons'], label: 'Buttons' },
        { id: 'forms', icon: 'fe fe-check-square', path: ['/forms'], label: 'Forms' },
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
