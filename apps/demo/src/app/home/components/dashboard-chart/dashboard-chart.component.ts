import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-dashboard-chart',
  templateUrl: './dashboard-chart.html',
  styles: [],
})
export class DashboardChartComponent {
  @Input() height = '10rem'
  @Input() title = ''
  @Input() data = []
  @Input() doughnut = false

  view: any[] = [230, 192]
  showLegend = false
  showLabels = false
}
