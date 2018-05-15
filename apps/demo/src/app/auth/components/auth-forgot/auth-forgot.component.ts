import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-forgot',
  templateUrl: './auth-forgot.html',
  styles: [],
})
export class AuthForgotComponent {
  constructor(private router: Router) {}

  submit() {
    this.router.navigate(['/reset-password'])
  }
}
