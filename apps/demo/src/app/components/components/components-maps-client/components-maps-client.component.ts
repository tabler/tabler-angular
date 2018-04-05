import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-components-maps-client',
  template: `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Client card</h3>
        <div class="card-options">
          <button type="button" class="btn btn-option" data-toggle="tooltip" title="Edit">
            <i class="si si-pencil"></i>
          </button>
          <div class="dropdown card-options-dropdown">
            <button type="button" class="btn btn-option dropdown-toggle" data-toggle="dropdown">
              <i class="si si-options"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="si si-bell mr-3"></i>News
              </a>
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="si si-envelope mr-3"></i>Messages
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="javascript:void(0)">
                <i class="si si-pencil mr-3"></i>Edit Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="card-map card-map-placeholder" [style.background-image]="backgroundImage()"></div>

      <div class="card-body">
        <div class="media mb-5">
          <img class="d-flex mr-5 rounded"
               [attr.src]="'assets/placeholder.svg'" alt="Generic placeholder image">
          <div class="media-body">
            <h5>Axa Global Group</h5>
            <address class="text-muted small">
              1290 Avenua of The Americas<br>
              New York, NY 101040105
            </address>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <div class="h6">Relationship</div>
            <p>Client</p>
          </div>
          <div class="col-6">
            <div class="h6">Business Type</div>
            <p>Insurance Company</p>
          </div>
          <div class="col-6">
            <div class="h6">Website</div>
            <p><a href="javascript:void(0)">http://www.axa.com</a></p>
          </div>
          <div class="col-6">
            <div class="h6">Office Phone</div>
            <p>+123456789</p>
          </div>
        </div>

        <div class="h6">Description</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dignissimos doloribus eum fugiat itaque
          laboriosam maiores nisi nostrum perspiciatis vero.
        </p>
      </div>
    </div>
  `,
  styles: []
})
export class ComponentsMapsClientComponent {

  constructor() {
  }

  backgroundImage() {
    return 'url(assets/staticmap.png)'
  }
}
