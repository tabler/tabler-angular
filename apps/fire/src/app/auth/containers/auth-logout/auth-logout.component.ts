import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-logout',
  template: `
    <ui-page-title
      [title]="loggedOut ? 'Logged out' : 'Logging out' "
      icon="fe fe-log-out">
    </ui-page-title>
    
    <div class="card">
      <div class="card-body">
        <a routerLink="/auth/login">Click here</a> to log in again.
      </div>
    </div>
  `,
  styles: []
})
export class AuthLogoutComponent implements OnInit {
  public loggedOut = false
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.logout()
      .subscribe(() => this.loggedOut = !this.loggedOut)
  }

}
