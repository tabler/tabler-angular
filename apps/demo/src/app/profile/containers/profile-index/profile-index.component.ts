import { Component, OnInit } from '@angular/core'
import { DemoService } from '../../../demo/services/demo.service'

@Component({
  selector: 'app-profile-index',
  templateUrl: './profile-index.html',
})
export class ProfileIndexComponent implements OnInit {
  public userId
  public users = []
  public user = []
  public timeline = []

  constructor(public demoService: DemoService) {}

  ngOnInit() {
    this.users = this.demoService.users
    this.userId = 4
    this.user = this.users[this.userId]
    this.user['backgroundImage'] = this.demoService.photos[18].small
    this.timeline = this.users
  }
}
