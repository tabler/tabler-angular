import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-components-icon-map',
  template: `
    <div class="card">
      <div class="card-header">
        <div class="card-title">{{ title }}</div>
      </div>
      <div class="card-body">

        <div class="row">
          <div class="col-3">
            <p>{{ description }} For more info <a [href]="url" target="_blank">click here</a>.</p>
            <p><code>&lt;i class="{{ iconClass }} {{ iconClass }}-ICON_NAME"&gt;&lt;/i&gt;</code></p>
          </div>
          <div class="col-9">
            <div class="icons-list-wrap">
              <ul class="icons-list">
                <li class="icons-list-item" *ngFor="let icon of icons">
                  <i class="{{ iconClass }} {{ icon }}" data-toggle="tooltip" [title]="iconClass + ' ' + icon"></i>
                </li>
                <li *ngFor="let space of spacers">{{space}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ComponentsIconMapComponent {
  @Input() public description
  @Input() public iconClass
  @Input() public icons
  @Input() public title
  @Input() public url

  public spacers = Array(13).fill('')
}
