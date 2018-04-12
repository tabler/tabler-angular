import { Component, Input, OnInit } from '@angular/core'

export type badgeTypes = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'

@Component({
  selector: 'ui-badge',
  template: `
    <span class="badge badge-{{type}}">
      {{label}}
    </span>
  `,
})
export class BadgeComponent implements OnInit {
  @Input() public label: string
  @Input() public type: badgeTypes
  @Input() public badge: { label: 'string'; type: badgeTypes }

  ngOnInit() {
    if (this.badge) {
      this.label = this.badge.label
      this.type = this.badge.type
    }
  }
}
