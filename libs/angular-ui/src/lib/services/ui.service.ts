import { Injectable } from '@angular/core'
import { UiLink } from '../modules'
import { Observable } from 'rxjs/Observable'
import { ReplaySubject } from 'rxjs/ReplaySubject'

export class UiNotification {
  from?: string
  text?: string
  avatarText?: string
  date?: any
}

export class UiBadge {
  label: string
  color: string
}

export class UiProfile {
  id?: string
  name?: string
  email?: string
  description?: string
  title?: string
  avatar?: string
  avatarText?: string
  [key: string]: any
}

export class UiLayout {
  appLink?: string
  appLogo?: string
  appName?: string

  headerNav?: UiLink[]
  headerSubNav?: UiLink[]

  profile?: UiProfile
  profileNav?: UiLink[]

  notifications?: UiNotification[]

  footerNav?: UiLink[]
  footerText?: string

  footerSubNav?: UiLink[][]
  footerSubText?: string

  private configSubject = new ReplaySubject<UiLayout>()

  public config$: Observable<UiLayout> = this.configSubject.asObservable()

  /**
   * Update the config by emitting values
   */
  public updateLayout(config: UiLayout = this) {
    Object.assign(this, config)
    this.configSubject.next(this)
  }

  constructor() {
    this.updateLayout()
  }
}
