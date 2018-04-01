import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-docs-sidebar',
  template: `
    <a href="" class="btn btn-block btn-primary mb-6">
      <i class="fe fe-github mr-2"></i>Browse source code
    </a>

    <!--{% for group in site.docs-menu %}-->
    <!--&lt;!&ndash; {{ group.title }} &ndash;&gt;-->
    <div class="list-group list-group-transparent mb-0">
    <!--{% for p in group.pages %}-->
    <!--{% assign doc = site.docs | where: "slug", p | first %}-->
      
    <a href="" class="list-group-item list-group-item-action"
       *ngFor="let item of items"
       [routerLink]="['/docs', item.url]"
       routerLinkActive="active">
      <span class="icon mr-3"><i class="{{ item.icon }}"></i></span>
      {{ item.title }}
    </a>
    <!--{% endfor %}-->
    </div>

    
    <div class="d-none d-lg-block mt-6">
      <!--<a href="{{ site.github_url }}/edit/dev/src/{{ page.path }}" class="text-muted">Edit this page</a>-->
    </div>

  `,
  styles: []
})
export class DocsSidebarComponent implements OnInit {

  public items = [
    {
      url: 'introduction',
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
