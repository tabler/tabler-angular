import { Component } from '@angular/core'

@Component({
  selector: 'app-components-maps',
  template: `
    <ui-page-title title="Maps" badge="WIP" badgeStyle="info"></ui-page-title>
    <div class="map-header">
      <div class="map-header-layer" id="map-background"></div>
    </div>

    <div class="container">

      <div class="row row-cards">
        <div class="col-lg-4 col-md-6">
          <app-components-maps-client></app-components-maps-client>
          <app-components-maps-germany></app-components-maps-germany>
        </div>
        <div class="col-lg-8 col-md-6">
          <app-components-maps-world></app-components-maps-world>

          <div class="row">
            <div class="col-6">
              <app-components-maps-metro></app-components-maps-metro>
            </div>
            <div class="col-6"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ComponentsMapsComponent {

  constructor() {
  }


  const
  default = {
    center: [ 37.772, -122.214 ]
  }

  headerBg = {
    center: [
      52.230119,
      20.983394
    ],
    customStyles: true,
    zoom: 5
  }

  metro = {
    center: [
      52.230119,
      20.983394
    ],
    pathColor: 'blue',
    customStyles: true,
    points: [
      [
        52.230119,
        20.983394
      ],
      [
        52.233063,
        20.998307
      ],
      [
        52.235192,
        21.00837
      ],
      [
        52.2369,
        21.017189
      ],
      [
        52.239817,
        21.03163
      ],
      [
        52.246991,
        21.043046
      ],
      [
        52.25419,
        21.03504
      ]
    ]
  }

}
