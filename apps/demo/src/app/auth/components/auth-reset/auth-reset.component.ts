import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-reset',
  templateUrl: './auth-reset.html',
})
export class AuthResetComponent {
  constructor(private router: Router) {}

  submit() {
    this.router.navigate(['/'])
  }
}
