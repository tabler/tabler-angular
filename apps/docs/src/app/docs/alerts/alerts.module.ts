import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AlertsBasicModule } from './alerts-basic/alerts-basic.module'

@NgModule({
  imports: [
    AlertsBasicModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          { path: '', redirectTo: 'basic', pathMatch: 'full' },
          { path: 'basic', loadChildren: './alerts-basic/alerts-basic-config.module#AlertsBasicConfigModule' },
        ],
        data: {
          section: {
            chapter: 'alerts',
            items: [
              { icon: 'fe fe-check-square', path: '/alerts/basic', label: 'Basic alerts' },
            ],
          },
        },
      },
    ]),
  ],
})
export class AlertsModule {}
