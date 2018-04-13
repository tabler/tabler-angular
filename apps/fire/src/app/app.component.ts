import { Component } from '@angular/core'
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  template: `
    <ui-layout [config]="app.config$ | async"></ui-layout>
  `,
})
export class AppComponent {
  constructor(public app: AppService) {}
}
