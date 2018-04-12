import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ButtonsBasicModule } from './buttons-basic/buttons-basic.module'
// import { AdvancedModule } from './forms-advanced/forms-advanced.module'
// import { BasicModule } from './buttons-basic/buttons-basic.module'
// import { SelectModule } from './select/select.module'

@NgModule({
  imports: [
    ButtonsBasicModule,
    // BasicModule,
    // AdvancedModule,
    // SelectModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          { path: '', redirectTo: 'buttons-basic', pathMatch: 'full' },
          { path: 'buttons-basic', loadChildren: './buttons-basic/config.module#ConfigModule' },
          // { path: 'forms-advanced', loadChildren: './forms-advanced/config.module#ConfigModule' },
          // { path: 'select', loadChildren: './select/config.module#ConfigModule' },
        ],
        data: {
          section: {
            chapter: 'buttons',
            items: [
              { icon: 'fe fe-check-square', path: '/docs/buttons/buttons-basic', label: 'Basic buttons' },
            ],
          },
        },
      },
    ]),
  ],
})
export class ButtonsModule {}
