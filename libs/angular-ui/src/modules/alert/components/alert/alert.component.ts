import { Component, Input, OnInit } from '@angular/core'

export type alertTypes = 'primary'|'secondary'|'success'|'danger'|'warning'|'info'

@Component({
  selector: 'ui-alert',
  template: `
    <div class="alert alert-{{type}}">
      <ng-content></ng-content>
      {{label}}
    </div>
  `,
})
export class AlertComponent implements OnInit {
  @Input() public label: string
  @Input() public type: alertTypes
  @Input() public alert: { label: 'string', type: alertTypes }

  ngOnInit() {
    if (this.alert) {
      this.label = this.alert.label
      this.type = this.alert.type
    }
  }
}
