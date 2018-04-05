import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-empty',
  template: `
    <div class="empty">
      <!-- Page intentionally left blank -->
    </div>
  `,
  styles: [`
    .empty {
      min-height: 120px;
    }
  `]
})
export class PageEmptyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
