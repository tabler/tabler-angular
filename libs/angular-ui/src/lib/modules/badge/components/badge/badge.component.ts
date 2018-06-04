import { Component, Input } from '@angular/core'

export type badgeColors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'

@Component({
  selector: 'ui-badge',
  template: `
    <span class="badge badge-{{color}}">
      {{label}}
    </span>
  `,
})
export class BadgeComponent {
  @Input() public label: string
  @Input() public color: badgeColors
}
