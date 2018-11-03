import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-avatar',
  template: `
    <span class="avatar avatar-{{size}}" [style.background-image]="backgroundImage()">
      {{text}}
      <span *ngIf="status" class="avatar-status bg-{{status}}"></span>
    </span>
  `,
  styles: [],
})
export class AvatarComponent {
  @Input() image: string
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  @Input() status
  @Input() text: string
  backgroundImage() {
    return this.image ? `url(${this.image})` : ''
  }
}
