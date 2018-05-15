import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-development-activity',
  templateUrl: './development-activity.html',
  styles: [],
})
export class DevelopmentActivityComponent {
  @Input() public purchases = []
  @Input() public users = []
}
