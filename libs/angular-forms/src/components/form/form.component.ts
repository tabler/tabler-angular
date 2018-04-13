import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormArray, FormGroup } from '@angular/forms'
import { FormlyFormBuilder, FormlyFormOptions } from '@ngx-formly/core'
import { FormlyFieldConfig } from '@ngx-formly/core/src/components/formly.field.config'
import { UiButton } from '@tabler/angular-ui'

@Component({
  selector: 'ui-form',
  template: `
    <form [formGroup]="form" novalidate (ngSubmit)="action.emit(model)">
      <formly-form [model]="model" [fields]="fields" [form]="form" [options]="options"
                   (modelChange)="modelChange.emit($event)">
        <ng-content></ng-content>
        <ui-buttons *ngIf="buttons"
                    [disabled]="!form.valid"
                    [config]="buttons"
                    [payload]="model"
                    (action)="action.emit($event)">
        </ui-buttons>
      </formly-form>
    </form>
  `,
})
export class FormComponent implements OnInit {
  @Input() public buttons: UiButton[]
  @Input() public fields: FormlyFieldConfig[] = []
  @Input() public form: FormGroup | FormArray = new FormGroup({})
  @Input() public model: any = {}
  @Input() public options: FormlyFormOptions = {}
  @Output() public action = new EventEmitter()
  @Output() public modelChange = new EventEmitter<any>()

  constructor(private builder: FormlyFormBuilder) {}

  public ngOnInit() {
    this.builder.buildForm(this.form, this.fields, this.model, this.options)
  }
}
