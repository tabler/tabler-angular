import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-development-chart',
  template: `
    <div style="display: block;">
      <canvas baseChart
              height="160"
              [datasets]="datasets"
              [labels]="labels"
              [options]="options"
              [colors]="colors"
              chartType="line"></canvas>
    </div>
  `,
})
export class DevelopmentChartComponent implements OnInit {
  @Input() data = []
  @Input() label = ''

  // lineChart
  public datasets: any[] = []

  public get labels() {
    return this.datasets[0].data
  }

  public options: any = {
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
        tension: 0,
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
      duration: 0, // general animation time
    },
    responsive: true,
  }

  public colors: Array<any> = [
    {
      backgroundColor: 'rgba(70,127,207,0.1)',
      borderColor: 'rgba(70,127,207)',
    },
  ]

  ngOnInit() {
    this.datasets = [
      {
        data: this.data,
        label: this.label,
      },
    ]
  }
}
