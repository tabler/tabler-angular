import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../../demo/services/demo.service'

@Component({
  selector: 'app-components-icons',
  template: `
    <app-page-title title="Icons"></app-page-title>
    <div *ngFor="let set of iconSets">
      <app-components-icon-map
        [description]="set.description"
        [iconClass]="set.iconClass"
        [icons]="set.icons"
        [url]="set.url"
        [title]="set.title">
      </app-components-icon-map>
    </div>
  `,
})
export class ComponentsIconsComponent implements OnInit {

  public iconSets = []

  constructor(public demoService: DemoService) { }

  ngOnInit() {
    this.iconSets = this.demoService.icons
  }

}
