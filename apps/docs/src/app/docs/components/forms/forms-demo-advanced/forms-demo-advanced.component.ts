import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Field } from '@tabler/angular-forms'

@Component({
  selector: 'app-forms-demo-advanced',
  template: `
    <div class="row">
      <div class="col-12">
        <h2 class="card-title my-3">Advanced forms</h2>
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
export class FormsDemoAdvancedComponent {
  public _classCode = `public fields = [
  Field.radio('color', {
    label: 'Favorite color',
    options: [
      { value: 'No preference', key: null },
      { value: 'Green', key: 'green' },
      { value: 'Blue', key: 'blue' },
    ],
  }),
  Field.textarea('reason', {
    expressionProperties: {
      'templateOptions.label': '\`Why did you choose \${model.color}?\`',
    },
    hideExpression: '!model.color'
  }),
]`
  public _templateCode = `<ui-form
  [form]="form"
  [fields]="fields"
  [buttons]="buttons"
  (action)="handle($event)">
</ui-form>`

  public output

  public form = new FormGroup({})
  public fields = [
    Field.radio('color', {
      label: 'Favorite color',
      options: [
        { value: 'No preference', key: null },
        { value: 'Green', key: 'green' },
        { value: 'Blue', key: 'blue' },
      ],
    }),
    Field.textarea('reason', {
      expressionProperties: {
        'templateOptions.label': '`Why did you choose ${model.color}?`',
      },
      hideExpression: '!model.color',
    }),
  ]

  public buttons = [{ label: 'Save' }]

  handle({ type, payload }) {
    this.output = { type, payload }
  }
}
