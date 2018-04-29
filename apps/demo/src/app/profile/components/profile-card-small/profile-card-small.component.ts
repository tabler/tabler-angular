import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-profile-card-small',
  templateUrl: './profile-card-small.html',
  styles: [],
})
export class ProfileCardSmallComponent {
  @Input() public user
}
