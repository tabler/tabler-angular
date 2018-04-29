import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-dashboard-icon-box',
  templateUrl: './dashboard-icon-box.html',
  styles: [],
})
export class DashboardIconBoxComponent {
  @Input() color = 'red'
  @Input() icon = 'fa fa-dollar'
  @Input() value = '16'
  @Input() description = 'Sales'
  @Input() subtitle = '6 waiting payments'
}
