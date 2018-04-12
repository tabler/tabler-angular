import { Component } from '@angular/core'

@Component({
  selector: 'app-buttons',
  template: `
    <ui-buttons [config]="buttons" (action)="handleAction($event)"></ui-buttons>
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
