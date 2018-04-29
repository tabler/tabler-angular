import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.html',
  styles: [],
})
export class ProfileCardComponent {
  public get backgroundImage() {
    return `url(${this.user.backgroundImage})`
  }
  @Input() public user
}
