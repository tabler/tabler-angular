import { Component } from '@angular/core'
import { UiLayout } from '@tabler/angular-ui'

@Component({
  selector: 'ui-layout',
  template: `
    <div class="page" *ngIf="ui.config$ | async as UiLayout; else loading">
      <div class="page-main">
        <ui-header [config]="ui"></ui-header>
        <div class="page-content">
          <router-outlet></router-outlet>
        </div>
        <ui-footer [config]="ui"></ui-footer>
      </div>
    </div>
    <ng-template #loading>
      Loading...
    </ng-template>
  `,
})
export class LayoutComponent {
  constructor(public ui: UiLayout) {}
}
