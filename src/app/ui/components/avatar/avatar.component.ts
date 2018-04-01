import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-avatar',
  template: `
    <span class="avatar" *ngIf="image" [style.background-image]="'url(' + image + ')'"></span>
    <span class="avatar" *ngIf="text">{{text}}</span>
  `,
  styles: []
})
export class AvatarComponent {
  @Input() image
  @Input() text
}
