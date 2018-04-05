import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-reset',
  template: `
    <form class="card">
      <div class="card-body p-6">
        <div class="card-title">Reset password</div>
        <p class="text-muted">Please enter your new password.</p>
        <div class="form-group">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" placeholder="Password">
        </div>
        <div class="form-footer">
          <button type="button" class="btn btn-primary btn-block" (click)="submit()">Save new password</button>
        </div>
      </div>
    </form>
    <div class="text-center text-muted">
      Forget it, <a routerLink="/login">send me back</a> to the sign in screen.
    </div>
  `,
})
export class AuthResetComponent {

  constructor(private router: Router) { }

  submit() {
    this.router.navigate(['/'])
  }
}
