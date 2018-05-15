import { Component, Input } from '@angular/core'
import { until } from 'selenium-webdriver'

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.html',
  styles: [],
})
export class TableUsersComponent {
  @Input() public users = []

  public getUsers() {
    return this.users.slice(50, 58)
  }
  public get percentage() {
    return Math.floor(Math.random())
  }
}
