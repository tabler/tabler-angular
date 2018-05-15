import { Component, OnInit } from '@angular/core'
import { BsModalRef } from 'ngx-bootstrap'

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.html',
  styles: [],
})
export class GalleryModalComponent implements OnInit {
  public index
  public user
  public photo

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}
}
