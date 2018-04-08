import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-docs-sidebar',
  template: `
    <div class="list-group list-group-transparent mb-0">
      
      <a class="list-group-item list-group-item-action"
         *ngFor="let item of items" 
         [routerLink]="['/docs', item.url]"
         routerLinkActive="active">
        <span class="icon mr-3"><i class="{{ item.icon }}"></i></span>
        {{ item.title }}
      </a>
    </div>
  `,
  styles: []
})
export class DocsSidebarComponent implements OnInit {

  public items = [
    {
      url: 'guestbook',
      title: 'Introduction',
      icon: 'fe fe-flag',
    },
    {
      url: 'alerts',
      title: 'Alerts',
      icon: 'fe fe-alert-triangle',
    },
    {
      url: 'avatars',
      title: 'Avatars',
      icon: 'fe fe-user',
    },
    {
      url: 'buttons',
      title: 'Buttons',
      icon: 'fe fe-plus-square',
    },
    {
      url: 'cards',
      title: 'Cards',
      icon: 'fe fe-image',
    },
    {
      url: 'colors',
      title: 'Colors',
      icon: 'fe fe-feather',
    },
    {
      url: 'forms',
      title: 'Form components',
      icon: 'fe fe-check-square',
    },
    {
      url: 'tags',
      title: 'Tags',
      icon: 'fe fe-tag',
    },
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
