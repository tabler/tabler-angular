import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-card-body',
  template: `
    <div class="card-body">
      <ng-container *ngIf="loader">
        <div class="dimmer active">
          <div class="loader"></div>
          <div class="dimmer-content">
            <ng-content></ng-content>
          </div>
        </div>
      </ng-container>
      <ng-container *ngIf="!loader">
        <ng-content></ng-content>
      </ng-container>
    </div>
  `,
  styles: [],
})
export class CardBodyComponent {
  @Input() loader = false
}
