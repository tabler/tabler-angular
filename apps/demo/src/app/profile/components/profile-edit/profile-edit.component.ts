import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.html',
  styles: [],
})
export class ProfileEditComponent {
  @Input() public user
}
