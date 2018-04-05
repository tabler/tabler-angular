import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-page-title',
  template: `
    <div [class.page-header]="header">
      <h1 class="page-title">
        <i *ngIf="icon" class="{{ icon }} page-title-icon m-3"></i>
        {{ title }}
        <small *ngIf="badge" class="badge badge-{{badgeStyle}} m-3">
          {{badge}}
        </small>
      </h1>

      <div *ngIf="subTitle" class="page-subtitle">
        {{subTitle}}
      </div>

      <div class="page-options">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: []
})
export class PageTitleComponent {
  @Input() badge
  @Input() badgeStyle = 'default'
  @Input() header = true
  @Input() icon
  @Input() title
  @Input() subTitle
}
