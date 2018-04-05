import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-auth',
  template: `
    <p>
      pages-auth works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class PagesAuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
