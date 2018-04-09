import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-login',
  template: `
    <ui-page>
      <ui-page-title title="Log in"
                     subTitle="Please select your login provider"
                     icon="fe fe-log-in">
      </ui-page-title>

      <ui-alert type="danger" *ngIf="error">
        <strong>An error occurred.</strong>
        {{error}}
      </ui-alert>

      <div class="card">
        <div class="card-body">

          <div *ngFor="let provider of auth.providers" class="my-3">
            <button type="button"
                    class="btn btn-block btn-{{provider.id}}"
                    (click)="login(provider.id)">
              <i class="fa fa-{{provider.id}} mr-2"></i>
              {{provider.name}}
            </button>
          </div>
          
        </div>
      </div>
    </ui-page>
  `,
  styles: []
})
export class AuthLoginComponent {
  public error = null

  constructor(public auth: AuthService, private router: Router) {
  }

  login(provider) {
    this.error = false
    this.auth.login(provider)
      .subscribe(
        () => this.router.navigate(['/auth']),
        err => this.error = err.message
      );
  }

}
