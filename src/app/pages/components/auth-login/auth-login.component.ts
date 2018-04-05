import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-login',
  template: `
    <form class="card">
      <div class="card-body p-6">
        <div class="card-title">Login to your account</div>

        <div class="form-group">
          <label class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                 placeholder="Enter email">
        </div>
        <div class="form-group">
          <label class="form-label">
            Password
            <a [routerLink]="['/forgot-password']" class="float-right small">I forgot my password</a>
          </label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group">
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input"/>
            <span class="custom-control-label">Remember me</span>
          </label>
        </div>
        <div class="form-footer">
          <button type="button" class="btn btn-primary btn-block" (click)="submit()">Sign in</button>
        </div>
      </div>
    </form>
    <div class="text-center text-muted">
      Don't have account yet? <a [routerLink]="['/register']">Sign up here!</a>
    </div>
  `,
  styles: []
})
export class AuthLoginComponent {

  constructor(private router: Router) {
  }

  submit() {
    this.router.navigate([ '/' ])
  }
}
