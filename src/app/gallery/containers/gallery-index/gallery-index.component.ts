import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-gallery-index',
  template: `
    <app-page>
      <app-page-title
        title="Gallery"
        icon="fe fe-image"
        badge="TBD"
        badgeStyle="info">
      </app-page-title>
    </app-page>
  `,
  styles: []
})
export class GalleryIndexComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
