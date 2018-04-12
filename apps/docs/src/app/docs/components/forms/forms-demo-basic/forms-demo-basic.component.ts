import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Field } from '@tabler/angular-forms'

@Component({
  selector: 'app-forms-demo-basic',
  template: `    
    <div class="row">
      <div class="col-12">
        <h2 class="card-title my-3">Basic forms</h2>
        <p>
          The <code>ui-form</code> component allows you to generate forms with
          the minimal amount of code possible. 
        </p>
        <p>
          It's built as a small syntactic layer over <a href="https://github.com/formly-js/ngx-formly">ngx-formly</a>
          and should support all of it's functionality. If not, then this is a bug.
        </p>
        <h3 class="card-title my-3">Form fields</h3>
        <p>
          The fields of the form are defined in an array. The items in the array
          can be created using the <code>Field</code> helper class. 
        </p>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-6">
        <ui-form
          [form]="form"
          [fields]="fields"
          [buttons]="buttons"
          (action)="handle($event)">
        </ui-form>
      </div>
      <div class="col-6">
        <ui-highlight *ngIf="output" [code]="output | json"></ui-highlight>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-6">
        <h5 class="card-title my-3">Class</h5>
        <ui-highlight [code]="_classCode"></ui-highlight>
      </div>
      <div class="col-6">
        <h5 class="card-title my-3">Template</h5>
        <ui-highlight [code]="_templateCode"></ui-highlight>
      </div>
    </div>
  `,
})
export class FormsDemoBasicComponent {
  public _templateCode = `<ui-form [form]="form"
         [fields]="fields"
         [buttons]="buttons"
         (action)="handle($event)">
</ui-form>`

  public _classCode = `public form = new FormGroup({})
public fields = [
  Field.input('name', {
    label: 'Name'
  }),
]
public model = {}
public buttons = [ { label: 'Save' }]`

  public output

  public form = new FormGroup({})

  public fields = [
    Field.input('name', {
      label: 'Name',
    }),
  ]

  public buttons = [{ label: 'Save' }]

  handle({ type, payload }) {
    this.output = { type, payload }
  }
}
