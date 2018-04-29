import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.html',
  styles: [],
})
export class GalleryListComponent {
  @Input() public photos = []
  @Input() public users = []
}
