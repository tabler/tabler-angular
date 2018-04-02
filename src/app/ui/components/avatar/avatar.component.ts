import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-avatar',
  template: `
    <span class="avatar" *ngIf="image" [style.background-image]="'url(' + image + ')'">
      <span *ngIf="status" class="avatar-status bg-{{status}}"></span>
    </span>
    <span class="avatar" *ngIf="text">
      {{text}}
      <span *ngIf="status" class="avatar-status bg-{{status}}"></span>
    </span>
  `,
  styles: []
})
export class AvatarComponent {
  @Input() image
  @Input() status
  @Input() text
}
