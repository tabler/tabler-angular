import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.html',
  styles: [],
})
export class AuthLoginComponent {
  constructor(private router: Router) {}

  submit() {
    this.router.navigate(['/'])
  }
}
