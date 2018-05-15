import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-dashboard-chart-bg',
  templateUrl: './dashboard-chart-bg.html',
  styleUrls: ['./dashboard-chart-bg.scss', ],
})
export class DashboardChartBgComponent {
  @Input() rate
  @Input() color
  @Input() title
  @Input() description

  // lineChart3
  public datasets = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'Series A',
    },
  ]
  public labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  public options = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
        },
      ],
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false,
    },
    animation: {
      duration: 0,
    },
  }
  public colors: Array<any> = [
    {
      backgroundColor: 'rgba(70,127,207,0.1)',
      borderColor: 'rgba(70,127,207)',
    },
  ]
}
