import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-page-title',
  template: `
    <div class="page-header">
      <h1 class="page-title">
        
        <i *ngIf="icon" class="{{ icon }} page-title-icon"></i>

        {{ title }}
      </h1>

      <div *ngIf="subTitle" class="page-subtitle">
        {{subTitle}}
      </div>
      
      
      <div *ngIf="options" class="page-options">
        {{options}}
      </div>
      
      <!--{% comment %}-->
      <!--<nav class="page-breadcrumb breadcrumb">-->
        <!--<a class="breadcrumb-item" href="javascript:void(0)">Library</a>-->
        <!--<span class="breadcrumb-item active">Cards</span>-->
      <!--</nav>-->
      <!--{% endcomment %}-->
    </div>
  `,
  styles: []
})
export class PageTitleComponent {
  @Input() icon
  @Input() title
  @Input() subTitle
  @Input() options
}
