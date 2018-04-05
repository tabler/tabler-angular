import { Component, OnInit } from '@angular/core'
import { DemoService } from '../../../demo/services/demo.service'

@Component({
  selector: 'app-profile-index',
  template: `
    <app-page>
      <app-page-title
        title="Profile"
        icon="fe fe-user"></app-page-title>
      <div class="row">
        <div class="col-lg-4">

          <app-profile-card [user]="user"></app-profile-card>

          <app-profile-card-small [user]="users[3]"></app-profile-card-small>

          <app-profile-edit [user]="users[46]"></app-profile-edit>
        </div>
        <div class="col-lg-8">
          <app-profile-timeline [timeline]="timeline"></app-profile-timeline>
          <app-profile-edit-big></app-profile-edit-big>
        </div>
      </div>
    </app-page>
  `,
})
export class ProfileIndexComponent implements OnInit {
  public userId
  public users = []
  public user = []
  public timeline = []

  constructor(public demoService: DemoService) {
  }


  ngOnInit() {
    this.users = this.demoService.users
    this.userId = 4
    this.user = this.users[ this.userId ]
    this.user['backgroundImage'] = this.demoService.photos[18].small
    this.timeline = this.users
  }

}
