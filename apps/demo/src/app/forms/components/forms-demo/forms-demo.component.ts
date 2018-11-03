import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { ButtonGroup, Field } from '@tabler/angular-forms'

@Component({
  selector: 'app-forms-demo',
  template: `
    <div class="card">
      <div class="card-header d-block py-4">

        <ui-button class="float-right"
                   size="sm" color="outline-primary"
                   icon="fa fa-bug"
                   (action)="debug()">
        </ui-button>

        <h3 class="card-title pt-1">Forms demo</h3>
      </div>
      <div class="card-body">

        <div class="row">
          <div class="col-8">

            <ui-form [form]="form"
                     [fields]="fields"
                     [model]="model"
                     [buttons]="buttons"
                     (action)="handleAction($event)">
            </ui-form>

          </div>
          <div class="col-4">
            <ui-button color="primary"
                       size="sm"
                       (action)="debug()">
              <i class="fa fa-bug"></i>
            </ui-button>
            <button class="btn btn-outline-primary" (click)="debug()">
              <i class="fa fa-bug"></i>
            </button>
            <pre>{{ model | json }}</pre>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class FormsDemoComponent {
  public form = new FormGroup({})
  public buttons = ButtonGroup.saveAndClose()
  public fields = [
    Field.input('name', {
      label: 'Name',
    }),
    Field.inputHorizontal('name', {
      label: 'Name',
    }),
    Field.email('email', {
      label: 'Email',
    }),
  ]
  public model = {}

  handleAction({ type, payload }) {
    console.log('handleAction')
    console.log(type, payload)
  }

  debug() {
    console.log('this.form', this.form)
    console.log('this.fields', this.fields)
    console.log('this.model', this.model)
  }
}
