import { Component, Input } from '@angular/core'
import { BsModalRef, BsModalService } from 'ngx-bootstrap'
import { GalleryModalComponent } from '../gallery-modal/gallery-modal.component'

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.html',
  styles: [],
})
export class GalleryItemComponent {
  @Input() public user
  @Input() public photo
  @Input() public index

  public modalRef: BsModalRef

  constructor(private modalService: BsModalService) {}

  public open(photo, user, index) {
    const initialState = {
      photo,
      user,
      index,
    }
    this.modalRef = this.modalService.show(GalleryModalComponent, {
      initialState,
      class: 'modal-lg',
    })
    this.modalRef.content.closeBtnName = 'Close'
  }
}
