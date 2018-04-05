import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ui-page-email',
  template: `
    <ui-page>
      <div class="row">
        <div class="col-md-3">
          <div class="mb-5">
            <ui-page-title title="Messages" [header]="false"></ui-page-title>
          </div>
          <app-messages-folders [folders]="folders"></app-messages-folders>
        </div>
        <div class="col-md-9">
          <router-outlet></router-outlet>
        </div>
      </div>
    </ui-page>
  `,
  styles: []
})
export class PageEmailComponent {

  public folders = [
    {
      id: 'inbox',
      icon: 'fe fe-inbox',
      label: 'Inbox',
      badge: {
        type: 'primary',
        label: '14',
      }
    },
    {
      id: 'sent',
      icon: 'fe fe-send',
      label: 'Sent Mail',
    },
    {
      id: 'important',
      icon: 'fe fe-alert-circle',
      label: 'Important',
      badge: {
        type: 'secondary',
        label: '3',
      }
    },
    {
      id: 'starred',
      icon: 'fe fe-star',
      label: 'Starred',
    },
    {
      id: 'drafts',
      icon: 'fe fe-file',
      label: 'Drafts',
    },
    {
      id: 'tags',
      icon: 'fe fe-tag',
      label: 'Tags',
    },
    {
      id: 'trash',
      icon: 'fe fe-trash-2',
      label: 'Trash',
    },
  ]

}
