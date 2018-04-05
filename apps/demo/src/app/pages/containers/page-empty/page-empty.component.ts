import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-page-empty',
  template: `
    <ui-page>
      <!-- Page intentionally left blank -->
    </ui-page>
  `,
  styles: [`
    ui-page {
      display: block;
      min-height: 120px;
    }
  `]
})
export class PageEmptyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
