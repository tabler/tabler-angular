import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-dashboard-digit',
  templateUrl: './dashboard-digit.html',
  styles: [],
})
export class DashboardDigitComponent {
  @Input() color = 'blue'
  @Input() title = 'Today Expenses'
  @Input() digit = '$8500'
  @Input() width = '54%'
}
