import { Component } from '@angular/core'

@Component({
  selector: 'ui-page-email',
  templateUrl: './messages-index.html',
  styles: [],
})
export class MessagesIndexComponent {
  public folders = [
    {
      id: 'inbox',
      icon: 'fe fe-inbox',
      label: 'Inbox',
      badge: {
        type: 'primary',
        label: '14',
      },
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
      },
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
