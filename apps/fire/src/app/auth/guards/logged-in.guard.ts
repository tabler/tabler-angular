import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

import { AuthService } from '../services/auth.service'

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const redirectUrl = state.url || '/auth/profile'

    return this.auth.authState$
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if (!authenticated) {
          return this.login(redirectUrl)
        }
      })
  }

  login(redirectUrl) {
    return this.router.navigate([ `/auth/login` ], {
      queryParams: {
        url: redirectUrl,
      },
    })
  }

}
