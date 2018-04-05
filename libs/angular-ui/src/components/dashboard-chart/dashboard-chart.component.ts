import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-dashboard-chart',
  template: `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">{{ title }}</h3>
      </div>
      <div class="card-body">
        <div [style.height]="height">
          <ngx-charts-pie-chart
            scheme="air"
            [view]="view"
            [results]="data"
            [legend]="showLegend"
            [labels]="showLabels"
            [doughnut]="doughnut"
            [gradient]="false">
          </ngx-charts-pie-chart>
        </div>
      </div>
    </div>
  `,
  styles: []
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
