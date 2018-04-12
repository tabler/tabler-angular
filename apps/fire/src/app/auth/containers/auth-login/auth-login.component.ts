import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-auth-login',
  template: `
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
  `,
  styles: [],
})
export class AuthLoginComponent {
  private readonly redirectUrl: string
  public error = null

  constructor(public auth: AuthService, private route: ActivatedRoute, private router: Router) {
    this.redirectUrl = this.route.snapshot.queryParams['url'] || '/auth/profile'
  }

  redirect() {
    return this.router.navigate([this.redirectUrl])
  }

  login(provider) {
    this.error = false
    this.auth.login(provider).subscribe(() => this.redirect(), err => (this.error = err.message))
  }
}
