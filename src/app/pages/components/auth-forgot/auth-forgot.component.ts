import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-auth-forgot',
  template: `
    <form class="card" action="">

      <div class="card-body p-6">
        <div class="card-title">Forgot password</div>

        <p class="text-muted">Enter your email address and your password will be reset and emailed to you.</p>
        <div class="form-group">
          <label class="form-label" for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                 placeholder="Enter email">
        </div>
        <div class="form-footer">
          <button type="submit" class="btn btn-primary btn-block">Send me new password</button>
        </div>
      </div>
    </form>
    <div class="text-center text-muted">
      Forget it, <a routerLink="/login">send me back</a> to the sign in screen.
    </div>
  `,
  styles: []
})
export class AuthForgotComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
