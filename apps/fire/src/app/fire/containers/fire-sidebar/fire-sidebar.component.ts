import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-fire-sidebar',
  template: `
    <div class="list-group list-group-transparent mb-0">
      
      <a class="list-group-item list-group-item-action"
         *ngFor="let item of items" 
         [routerLink]="['/fire', item.url]"
         routerLinkActive="active">
        <span class="icon mr-3"><i class="{{ item.icon }}"></i></span>
        {{ item.title }}
      </a>
    </div>
  `,
  styles: [],
})
export class FireSidebarComponent implements OnInit {
  public items = [
    {
      url: 'guestbook',
      title: 'Guestbook',
      icon: 'fe fe-book',
    },
  ]

  constructor() {}

  ngOnInit() {}
}
