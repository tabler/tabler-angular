import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-dashboard-chart-bg',
  template: `
    <div class="card">
      <div class="card-body">
      <!--<div class="card-body">-->
        <div class="card-value pull-right text-{{ color }}">{{ rate }}</div>
        <h3 class="mb-1">{{ title}}</h3>
        <div class="text-muted">{{ description }}</div>
      </div>
      <div class="card-img">
          <canvas baseChart 
                  class="pt-5"
                  height="160"
                  [datasets]="datasets"
                  [labels]="labels"
                  [options]="options"
                  [colors]="colors"
                  chartType="line"></canvas>
        </div>
    </div>
  `,
  styles: [
    `
    .card-body {
      background-color: transparent;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 1.25rem;
    }
  `,
  ],
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
