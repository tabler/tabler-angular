import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-profile-card-small',
  template: `
    <div class="card">
      <div class="card-body">
        <div class="media">
          <app-avatar size="xxl" [image]="user.photo" class="mr-5"></app-avatar>
          <div class="media-body">
            <h4 class="m-0">{{ user.name }} {{ user.surname }}</h4>
            <p class="text-muted mb-0">Webdeveloper</p>

            <ul class="social-links list-inline mb-0 mt-2">
              <li class="list-inline-item">
                <a href="javascript:void(0)" title="Facebook" data-toggle="tooltip"><i class="fa fa-facebook"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="javascript:void(0)" title="Twitter" data-toggle="tooltip"><i class="fa fa-twitter"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="javascript:void(0)" title="1234567890" data-toggle="tooltip"><i class="fa fa-phone"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="javascript:void(0)" title="@skypename" data-toggle="tooltip"><i class="fa fa-skype"></i></a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProfileCardSmallComponent {
  @Input() public user
}
