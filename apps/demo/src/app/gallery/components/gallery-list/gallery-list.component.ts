import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-gallery-list',
  template: `
    <div class="row row-cards">
      <div class="col-sm-6 col-lg-4" *ngFor="let photo of photos; let index = index">
        <app-gallery-item [photo]="photo" [user]="users[index]" [index]="index"></app-gallery-item>
      </div>
    </div>
  `,
  styles: [],
})
export class GalleryListComponent {
  @Input() public photos = []
  @Input() public users = []
}
