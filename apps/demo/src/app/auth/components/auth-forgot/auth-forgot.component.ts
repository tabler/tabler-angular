import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-forgot',
  template: `
    <form class="card">

      <div class="card-body p-6">
        <div class="card-title">Forgot password</div>

        <p class="text-muted">Enter your email address and your password will be reset and emailed to you.</p>
        <div class="form-group">
          <label class="form-label" for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                 placeholder="Enter email">
        </div>
        <div class="form-footer">
          <button type="button" class="btn btn-primary btn-block" (click)="submit()">Send me new password</button>
        </div>
      </div>
    </form>
    <div class="text-center text-muted">
      Forget it, <a routerLink="/login">send me back</a> to the sign in screen.
    </div>
  `,
  styles: [],
})
export class AuthForgotComponent {
  constructor(private router: Router) {}

  submit() {
    this.router.navigate(['/reset-password'])
  }
}
