import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-register',
  template: `
    <form class="card">
      <div class="card-body p-6">
        <div class="card-title">Create new account</div>

        <div class="form-group">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" placeholder="Enter name">
        </div>
        <div class="form-group">
          <label class="form-label">Email address</label>
          <input type="email" class="form-control" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" placeholder="Password">
        </div>
        <div class="form-group">
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input"/>
            <span class="custom-control-label">Agree the <a [routerLink]="[]">terms and conditions</a></span>
          </label>
        </div>

        <div class="form-footer">
          <button type="button" class="btn btn-primary btn-block" (click)="submit()">Create new account</button>
        </div>
      </div>
    </form>

    <div class="text-center text-muted">
      Already have account? <a [routerLink]="['/login']">Sign in here!</a>
    </div>
  `,
  styles: []
})
export class AuthRegisterComponent {

  constructor(private router: Router) {
  }

  submit() {
    this.router.navigate([ '/' ])
  }
}
