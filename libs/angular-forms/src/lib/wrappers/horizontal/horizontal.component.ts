import { Component, ViewChild, ViewContainerRef } from '@angular/core'
import { FieldWrapper } from '@ngx-formly/core'

@Component({
  selector: 'app-formly-horizontal',
  template: `
    <div class="row">
      <label [attr.for]="key" class="{{labelClasses}} form-control-label">
        {{ label }}
        {{ required ? '*' : '' }}
      </label>
      <div class="{{fieldClasses}}">
        <ng-template #fieldComponent></ng-template>
      </div>
    </div>
  `,
})
export class HorizontalComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef })
  public fieldComponent: ViewContainerRef

  get labelClasses() {
    return (this.to && this.to.labelClasses) || 'col-sm-4'
  }

  get fieldClasses() {
    return (this.to && this.to.fieldClasses) || 'col-sm-8'
  }

  get label() {
    return (this.to && this.to.label) || ''
  }

  get required() {
    return (this.to && this.to.required) || null
  }
}
