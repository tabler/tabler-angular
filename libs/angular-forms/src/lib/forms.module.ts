import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule as NgFormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap'
import { FormlyModule } from '@ngx-formly/core'
import { UiModule } from '@tabler/angular-ui'
import { config } from './forms.config'

import { FormComponent } from './components/form/form.component'
import { HorizontalComponent } from './wrappers/horizontal/horizontal.component'

@NgModule({
  imports: [
    CommonModule,
    NgFormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(config),
    FormlyBootstrapModule,
    UiModule,
  ],
  exports: [NgFormsModule, ReactiveFormsModule, FormlyModule, FormComponent],
  declarations: [FormComponent, HorizontalComponent],
})
export class FormsModule {}
