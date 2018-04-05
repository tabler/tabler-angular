import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-profile-card',
  template: `
    <div class="card card-profile">
      <div class="card-header" [style.background-image]="backgroundImage"></div>
      <div class="card-body text-center">
        <img class="card-profile-img" src="{{ user.photo }}">

        <h3 class="mb-3">{{ user.name }} {{ user.surname }}</h3>

        <p class="mb-4">
          Big belly rude boy, million dollar hustler. Unemployed.
        </p>

        <button class="btn btn-outline-primary btn-sm">
          <span class="fa fa-twitter"></span> Follow
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class ProfileCardComponent {
  public get backgroundImage() {
    return `url(${this.user.backgroundImage})`
  }
  @Input() public user
}
