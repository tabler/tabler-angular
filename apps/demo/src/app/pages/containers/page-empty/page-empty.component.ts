import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-empty',
  template: `
    <app-page>
      <!-- Page intentionally left blank -->
    </app-page>
  `,
  styles: [`
    app-page {
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
