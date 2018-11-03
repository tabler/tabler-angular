import { Component } from '@angular/core'

@Component({
  selector: 'app-interface-cards',
  template: `
    <ui-page>
      <ui-page-title
        title="Cards"
        icon="fe fe-box">
      </ui-page-title>

      <div class="row">
        <div class="col-md-6 col-xl-4" *ngFor="let card of cards">
          <ui-card
            [allowFullScreen]="card.allowFullScreen"
            [collapsed]="card.collapsed"
            [header]="card.header"
            [footer]="card.footer"
            [status]="card.status"
            [statusLeft]="card.statusLeft">
            <ui-card-body>
              {{ bodyText }}
            </ui-card-body>
          </ui-card>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6" *ngFor="let card of formCards">
          <ui-card
            (action)="handleAction($event)"
            [header]="card.header"
            [buttons]="card.buttons"
            [search]="card.search">
            <ui-card-body>
              {{ bodyText }}
            </ui-card-body>
          </ui-card>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-xl-4" *ngFor="let card of moreCards">
          <ui-card
            (action)="handleAction($event)"
            [alert]="card.alert"
            [buttons]="card.buttons"
            [header]="card.header">
            <ui-card-body
              [loader]="card.loader">
              {{ bodyText }}
            </ui-card-body>
          </ui-card>
        </div>
      </div>
    </ui-page>
  `,
  styles: [],
})
export class InterfaceCardsComponent {
  public bodyText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, 
    itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, 
    deserunt eaque error nulla temporibus!
  `

  public cards = [
    {
      header: 'This is a standard card',
      footer: 'This is standard card footer',
    },
    {
      header: 'Built card',
    },
    {
      header: 'Card blue',
      status: 'blue',
    },
    {
      header: 'Card green',
      status: 'green',
    },
    {
      header: 'Card orange',
      status: 'orange',
    },
    {
      header: 'Card red',
      status: 'red',
    },
    {
      header: 'Card yellow',
      status: 'yellow',
    },
    {
      header: 'Card teal',
      status: 'teal',
    },
    {
      header: 'Card purple',
      status: 'purple',
    },
    {
      header: 'Card status on left side',
      status: 'blue',
      statusLeft: true,
    },
    {
      header: 'Initial collapsed card',
      collapsed: true,
    },
    {
      header: 'With additional fullscreen button\n',
      allowFullScreen: true,
    },
  ]

  public formCards = [
    {
      header: 'Panel with custom buttons',
      buttons: [
        {
          text: 'Action 1',
          type: 'button',
          action: 'ACTION_1',
          payload: 'ACTION_1_PAYLOAD',
        },
        {
          text: 'Action 2',
          type: 'button',
          action: 'ACTION_2',
          payload: 'ACTION_2_PAYLOAD',
        },
      ],
    },
    {
      header: 'Card with search form\n',
      search: {
        placeholder: 'Search something',
        value: '',
      },
      buttons: [],
    },
  ]

  public moreCards = [
    {
      header: 'Card with alert',
      alert: {
        type: 'success',
        text: 'Adding action was successful',
      },
    },
    {
      header: 'Card with alert',
      alert: {
        type: 'danger',
        text: 'Adding action failed',
      },
    },
    {
      header: 'Card with switch',
      buttons: [
        {
          type: 'switch',
          checked: true,
          payload: 'MY_SWITCH',
        },
      ],
    },
    {
      header: 'Card with loader',
      loader: true,
    },
  ]

  public handleAction($event) {
    console.log($event)
  }
}
