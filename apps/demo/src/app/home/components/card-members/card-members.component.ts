import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-card-members',
  templateUrl: './card-members.html',
  styles: [],
})
export class CardMembersComponent {
  @Input() users

  get members() {
    return this.users.slice(30, 36)
  }
}
