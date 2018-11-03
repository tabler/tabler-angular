import { Component, OnInit } from '@angular/core'
import { DemoService } from '../../../demo/services/demo.service'

@Component({
  selector: 'app-gallery-index',
  template: `
    <ui-page>
      <ui-page-title title="Gallery" subTitle="1 - 12 of 1713 photos" icon="fe fe-image">
        <app-gallery-page-options></app-gallery-page-options>
      </ui-page-title>
      <app-gallery-list [photos]="photos" [users]="users"></app-gallery-list>
    </ui-page>
  `,
  styles: [],
})
export class GalleryIndexComponent implements OnInit {
  public photos = []
  public users = []

  constructor(public demoService: DemoService) {}

  ngOnInit() {
    this.photos = this.demoService.photos
    this.users = this.demoService.users
  }
}
