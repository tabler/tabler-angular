import { Component } from '@angular/core'
import { UiService } from '../../../../services/ui.service'

@Component({
  selector: 'ui-layout',
  template: `
    <div class="page" *ngIf="ui.config$ | async as config; else loading">
      <div class="page-main">
        <ui-header [config]="config"></ui-header>
        <div class="page-content">
          <router-outlet></router-outlet>
        </div>
        <ui-footer [config]="config"></ui-footer>
      </div>
    </div>
    <ng-template #loading>
      Loading...
    </ng-template>
  `,
})
export class LayoutComponent {
  constructor(public ui: UiService) {}
}
