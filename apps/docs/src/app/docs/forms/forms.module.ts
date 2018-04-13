import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { FormsAdvancedModule } from './forms-advanced/forms-advanced.module'
import { FormsBasicModule } from './forms-basic/forms-basic.module'
import { FormsSelectModule } from './forms-select/forms-select.module'

@NgModule({
  imports: [
    FormsBasicModule,
    FormsAdvancedModule,
    FormsSelectModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          { path: '', redirectTo: 'basic', pathMatch: 'full' },
          { path: 'basic', loadChildren: './forms-basic/forms-basic-config.module#FormsBasicConfigModule' },
          { path: 'advanced', loadChildren: './forms-advanced/forms-advanced-config.module#FormsAdvancedConfigModule' },
          { path: 'select', loadChildren: './forms-select/forms-select-config.module#FormsSelectConfigModule' },
        ],
        data: {
          section: {
            chapter: 'forms',
            items: [
              { icon: 'fe fe-check-square', path: ['/forms/basic'], label: 'Basic forms' },
              { icon: 'fe fe-check-square', path: ['/forms/advanced'], label: 'Advanced forms' },
              { icon: 'fe fe-check-square', path: ['/forms/select'], label: 'Select types' },
            ],
          },
        },
      },
    ]),
  ],
})
export class FormsModule {}
