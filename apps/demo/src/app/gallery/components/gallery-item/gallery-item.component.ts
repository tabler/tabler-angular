import { Component, Input } from '@angular/core'
import { BsModalRef, BsModalService } from 'ngx-bootstrap'
import { GalleryModalComponent } from '../gallery-modal/gallery-modal.component'

@Component({
  selector: 'app-gallery-item',
  template: `
    <div class="card p-3">
      <a href="javascript:void(0)" class="mb-3" (click)="open(photo, user, index)">
        <img [attr.src]="photo.small" alt="Photo by {{ user.name }} {{ user.surname }}" class="rounded">
      </a>

      <div class="d-flex align-items-center px-2">
        <ui-avatar size="md" [image]="user.photo" class="mr-3"></ui-avatar>
        <div>
          <div>{{ user.name }} {{ user.surname }}</div>
          <small class="d-block text-muted">{{ index | random: 3: 20 | round }} days ago</small>
        </div>
        <div class="ml-auto text-muted">
          <a href="javascript:void(0)" class="icon"><i class="fe fe-eye mr-1"></i>
            {{ index | random: 3: 20 | round }}
          </a>
          <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i
            class="fe fe-heart mr-1"></i>
            {{ index | random | round }}
          </a>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class GalleryItemComponent {
  @Input() public user
  @Input() public photo
  @Input() public index

  public modalRef: BsModalRef

  constructor(private modalService: BsModalService) {
  }

  public open(photo, user, index) {
    const initialState = {
      photo,
      user,
      index
    }
    this.modalRef = this.modalService.show(GalleryModalComponent, { initialState, class: 'modal-lg' })
    this.modalRef.content.closeBtnName = 'Close'
  }
}
