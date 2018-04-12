import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { of } from 'rxjs/observable/of'

@Injectable()
export class ProfileResolver implements Resolve<any> {
  constructor() {}

  resolve() {
    return of({})
  }
}
