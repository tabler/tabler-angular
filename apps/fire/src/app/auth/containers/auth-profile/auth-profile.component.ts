import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-profile',
  template: `
    <ui-page-title title="Authentication" icon="fe fe-lock"></ui-page-title>
    
    <div *ngIf="error">
      <ui-alert type="danger">
        <strong>An error occurred.</strong>
        {{error}}
      </ui-alert>
    </div>

    <div *ngIf="(user$ | async) as user">

      <div class="card p-3">
        <div class="row justify-content-between">
          <div class="col-9">
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
          <div class="col-3 text-right align-self-center">
            <button class="btn bg-light text-dark" routerLink="/auth/logout">
              <i class="fe fe-log-out"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="card">
        <button class="btn btn-block btn-link m-3" (click)="debug = !debug">
          <i class="fa fa-bug"></i>
          {{ debug ? 'Hide' : 'Show' }} debug info
        </button>
        <pre *ngIf="debug">{{ authState$ | async | json }}</pre>
      </div>

    </div>
  `,
  styles: []
})
export class AuthProfileComponent implements OnInit {
  public authState$;
  public user$;
  public error = null;
  public debug = false

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authState$ = this.authService.authState$;
    this.user$ = this.authService.user$;
  }

}
