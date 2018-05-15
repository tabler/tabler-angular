import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.html',
  styles: [],
})
export class AuthRegisterComponent {
  constructor(private router: Router) {}

  submit() {
    this.router.navigate(['/'])
  }
}
