import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-menu',
  template: `
    <ul class="nav nav-tabs">
      <li class="nav-item" *ngFor="let item of items">
        <a href="#" [routerLink]="item.url" class="nav-link" routerLinkActive="active">
          <i class="{{ item.icon }}" *ngIf="item.icon"></i>
          {{item.name}}
        </a>
        <div class="nav-submenu nav" *ngIf="item.subpages">
          <a href="#" [routerLink]="subitem.url" class="nav-item" *ngFor="let subitem of item.subpages">
            {{subitem.name}}
          </a>
        </div>
      </li>

    </ul>
  `,
  styles: []
})
export class MenuComponent implements OnInit {

  public items = [
    {
      name: 'Home',
      icon: 'fe fe-home',
      url: '/home',
    },
    {
      name: 'Interface',
      icon: 'fe fe-box',
      url: '/interface',
      subpages: [
        {
          name: 'Cards design',
          icon: 'fe fe-box',
          url: '/interface/cards'
        },
        {
          name: 'Charts',
          icon: 'fe fe-pie-chart',
          url: '/interface/charts'
        },
        {
          name: 'Pricing cards',
          url: '/interface/pricing-cards'
        }
      ]
    },
    {
      name: 'Components',
      icon: 'fe fe-calendar',
      url: '/components',
      subpages: [
        {
          name: 'Maps',
          icon: 'fe fe-map-pin',
          url: '/components/maps'
        },
        {
          name: 'Icons',
          icon: 'fe fe-heart',
          url: '/components/icons'
        },
        {
          name: 'Store',
          icon: 'fe fe-shopping-cart',
          url: '/components/store'
        },
        {
          name: 'Blog',
          icon: 'fe fe-shopping-cart',
          url: '/components/blog'
        }
      ],
    },
    {
      name: 'Pages',
      icon: 'fe fe-file',
      url: '/pages',
      subpages: [
        {
          name: 'Profile',
          icon: 'fe fe-user',
          url: '/pages/profile'
        },
        {
          name: 'Login',
          url: '/pages/login'
        },
        {
          name: 'Register',
          url: '/pages/register'
        },
        {
          name: 'Forgot password',
          url: '/pages/forgot-password'
        },
        {
          name: '400 error',
          url: '/pages/400'
        },
        {
          name: '401 error',
          url: '/pages/401'
        },
        {
          name: '403 error',
          url: '/pages/403'
        },
        {
          name: '404 error',
          url: '/pages/404'
        },
        {
          name: '500 error',
          url: '/pages/500'
        },
        {
          name: '503 error',
          url: '/pages/503'
        },
        {
          name: 'Email',
          url: '/pages/email'
        },
        {
          name: 'Empty page',
          url: '/pages/empty'
        }
      ],
    },
    {
      name: 'Forms',
      icon: 'fe fe-check-square',
      url: '/forms'
    },
    {
      name: 'Gallery',
      icon: 'fe fe-image',
      url: '/gallery'
    },
    {
      name: 'Documentation',
      icon: 'fe fe-file-text',
      url: '/docs'
    }
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
