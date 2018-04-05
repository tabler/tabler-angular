import { Component, OnInit } from '@angular/core'
import { BsModalRef } from 'ngx-bootstrap'

@Component({
  selector: 'app-gallery-modal',
  template: `
    <div class="modal-header">
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div class="modal-body">
      <img [attr.src]="photo.big" alt="Photo by {{ user.name }} {{ user.surname }}" class="rounded">
    </div>
    <div class="card-footer">

      <div class="d-flex align-items-center px-2">
        <app-avatar size="md" [image]="user.photo" class="mr-3"></app-avatar>
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
export class GalleryModalComponent implements OnInit {
  public index
  public user
  public photo

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
