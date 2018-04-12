import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Field } from '@tabler/angular-forms'

@Component({
  selector: 'app-forms-demo-select',
  template: `
    <ui-form [form]="form" [fields]="fields" [buttons]="buttons" (action)="handle($event)"></ui-form>
    <pre>{{output | json}}</pre>
  `,
})
export class FormsSelectComponent {
  public output
  public form = new FormGroup({})
  public fields = [
    Field.select('marvel1', {
      label: 'Normal Select',
      options: [
        { label: 'Iron Man', value: 'iron_man' },
        { label: 'Captain America', value: 'captain_america' },
        { label: 'Black Widow', value: 'black_widow' },
        { label: 'Hulk', value: 'hulk' },
        { label: 'Captain Marvel', value: 'captain_marvel' },
      ],
    }),
    Field.select('marvel2', {
      label: 'Grouped Select',
      options: [
        { label: 'Iron Man', value: 'iron_man', group: 'Male' },
        { label: 'Captain America', value: 'captain_america', group: 'Male' },
        { label: 'Black Widow', value: 'black_widow', group: 'Female' },
        { label: 'Hulk', value: 'hulk', group: 'Male' },
        { label: 'Captain Marvel', value: 'captain_marvel', group: 'Female' },
      ],
    }),
    Field.select('marvel3', {
      label: 'Select with custom name/value/group',
      options: [
        { label: 'Iron Man', id: 'iron_man', gender: 'Male' },
        { label: 'Captain America', id: 'captain_america', gender: 'Male' },
        { label: 'Black Widow', id: 'black_widow', gender: 'Female' },
        { label: 'Hulk', id: 'hulk', gender: 'Male' },
        { label: 'Captain Marvel', id: 'captain_marvel', gender: 'Female' },
      ],
      groupProp: 'gender',
      valueProp: 'id',
      labelProp: 'label',
    }),
    Field.select('multiselect', {
      label: 'Multi-select',
      multiple: true,
      options: [
        { label: 'Iron Man', value: 'iron_man' },
        { label: 'Captain America', value: 'captain_america' },
        { label: 'Black Widow', value: 'black_widow' },
        { label: 'Hulk', value: 'hulk' },
        { label: 'Captain Marvel', value: 'captain_marvel' },
      ],
    }),
  ]

  public buttons = [{ label: 'Save' }]

  handle({ type, payload }) {
    this.output = { type, payload }
  }
}
