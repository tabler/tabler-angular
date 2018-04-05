import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-interface-charts',
  template: `
    <app-page>
      <app-page-title
        title="Charts"
        icon="fe fe-pie-chart"
        badge="TBD"
        badgeStyle="info">
      </app-page-title>
    </app-page>
  `,
  styles: []
})
export class InterfaceChartsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
