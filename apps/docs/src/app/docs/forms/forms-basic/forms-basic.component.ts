import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Field } from '@tabler/angular-forms'

@Component({
  selector: 'app-forms-demo-basic',
  template: `    
    <ui-form [form]="form" [fields]="fields" [model]="model"></ui-form>
  `,
})
export class FormsBasicComponent {
  public form = new FormGroup({})
  public model = {}
  public fields = [
    Field.input('name', {
      label: 'Name',
    }),
  ]
}
