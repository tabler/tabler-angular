import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs/operators'

@Component({
  selector: 'ui-layout',
  template: `
    <div class="page">
      <div class="page-main">
        <ui-header [config]="config?.header"></ui-header>
        <div class="page-content">
          <router-outlet></router-outlet>
        </div>
        <ui-footer-links [config]="config?.subfooter"></ui-footer-links>
        <ui-footer [config]="config?.footer"></ui-footer>
      </div>
    </div>
  `,
})
export class LayoutComponent implements OnInit {
  @Input() public config: any

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data.config)
      )
      .subscribe(config => this.config = config)
  }
}
