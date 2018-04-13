import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ButtonsBasicModule } from './buttons-basic/buttons-basic.module'

@NgModule({
  imports: [
    ButtonsBasicModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          { path: '', redirectTo: 'basic', pathMatch: 'full' },
          { path: 'basic', loadChildren: './buttons-basic/buttons-basic-config.module#ButtonsBasicConfigModule' },
        ],
        data: {
          section: {
            chapter: 'buttons',
            items: [
              { icon: 'fe fe-check-square', path: '/buttons/basic', label: 'Basic buttons' },
            ],
          },
        },
      },
    ]),
  ],
})
export class ButtonsModule {}
