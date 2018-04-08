import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-index',
  template: `
    <ui-page>
      <ui-page-title title="Authentication" icon="fe fe-lock"></ui-page-title>


      <div *ngIf="error">
        <ui-alert type="danger">
          <strong>An error occurred.</strong>
          {{error}}
        </ui-alert>
      </div>

      <div *ngIf="(user$ | async) as user; else loggedOut">

        <div class="row">
          <div class="col-6">

            <div class="p-3">
              <div class="float-right p-1">
                <button class="btn btn-outline-primary" (click)="logout()">
                  <i class="fe fe-log-out"></i>
                </button>
              </div>
              <ui-avatar class="float-left mr-3"
                         [image]="user.avatar" size="lg">
              </ui-avatar>
              <span class="">
                <span class="text-default">{{ user.name }}</span>
                <small class="text-muted d-block mt-1">
                  {{ user.email }}
                </small>
              </span>
            </div>




          </div>
          <div class="col-6">
            <pre>{{ authState$ | async | json }}</pre>
          </div>
        </div>

      </div>

      <ng-template #loggedOut>
        <button class="btn btn-primary" (click)="login()">
          Login
        </button>
      </ng-template>

    </ui-page>
  `,
  styles: []
})
export class AuthIndexComponent implements OnInit {

  public authState$;
  public user$;
  public error = null;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authState$ = this.authService.authState$;
    this.user$ = this.authService.user$;
  }

  login() {
    this.authService.login()
      .subscribe(
        res => console.log('res', res),
        err => this.error = err.message
      );
  }

  logout() {
    this.authService.logout()
      .subscribe(
        res => console.log('res', res),
        err => this.error = err.message
      );
  }

}
