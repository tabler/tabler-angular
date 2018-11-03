import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-interface-charts',
  template: `
    <ui-page>
      <ui-page-title
        title="Charts"
        icon="fe fe-pie-chart"
        badge="TBD"
        badgeStyle="info">
      </ui-page-title>
    </ui-page>
  `,
  styles: [],
})
export class InterfaceChartsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
