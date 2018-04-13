import { Component } from '@angular/core'

@Component({
  selector: 'app-buttons',
  template: `
    <div class="row">
      <div class="col">
        <ui-buttons [config]="buttons" (action)="handleAction($event)"></ui-buttons>
      </div>
      <div class="col">
        <app-docs-json [model]="action"></app-docs-json>
      </div>
    </div>
  `,
})
export class ButtonsBasicComponent {
  public action = {}
  public buttons = [
    {
      type: 'success',
      label: 'Save',
      event: 'SAVE',
    },
    {
      type: 'outline-success',
      label: 'Save and close',
      event: 'SAVE_CLOSE',
    },
    {
      type: 'outline-secondary',
      label: 'Close',
      event: 'CLOSE',
    },
  ]

  handleAction($event) {
    this.action = $event
  }
}
