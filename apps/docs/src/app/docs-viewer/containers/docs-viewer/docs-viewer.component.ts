import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-docs-viewer',
  template: `
    <div class="container-fluid">
      <div class="row">
        <ng-container *ngIf="route.data | async as data">
          <div class="col-lg-3 order-lg-0 mb-4">
            <app-docs-chapters [chapters]="data.chapters" [section]="data.section">
            </app-docs-chapters>
          </div>
          <div class="col-lg-9">
            <app-docs-examples [examples]="data.examples"></app-docs-examples>
          </div>
        </ng-container>
      </div>
    </div>
  `,
})
export class DocsViewerComponent {
  constructor(public route: ActivatedRoute) {}
}
