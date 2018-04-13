import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Field } from '@tabler/angular-forms'

@Component({
  selector: 'app-forms-demo-basic',
  template: `
    <div class="row">
      <div class="col">
        <ui-form [form]="form" [fields]="fields" [model]="model"></ui-form>
      </div>
      <div class="col">
        <app-docs-json [model]="model"></app-docs-json>
      </div>
    </div>
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
