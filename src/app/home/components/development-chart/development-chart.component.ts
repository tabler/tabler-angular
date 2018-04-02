import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-development-chart',
  template: `
    <div style="display: block;">
      <canvas baseChart
              height="100"
              [datasets]="datasets"
              [labels]="labels"
              [options]="options"
              chartType="line"></canvas>
    </div>
  `,
})
export class DevelopmentChartComponent implements OnInit {
  @Input() data = []
  @Input() label = ''

  // lineChart
  public datasets: any[] = []

  public get labels () {
    return this.datasets[ 0 ].data
  }

  public options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    },
    animation: {
      duration: 0, // general animation time
    },
    responsive: true,
    // scales: {
    //   ticks: {
    //     display: false,
    //   },
    //   xAxes: [ {
    //     display: false,
    //   } ],
    //   yAxes: [ {
    //     display: false,
    //   } ],
    // },
    elements: {
      line: {
        tension: 0, // disables bezier curves
      }
    },
  }

  constructor() { }

  ngOnInit() {
    this.datasets = [
      {
        data: this.data,
        label: this.label,
      }
    ]
  }

}
