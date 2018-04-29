import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-messages-folders',
  templateUrl: './messages-folders.html',
  styles: [],
})
export class MessagesFoldersComponent {
  @Input() folders: any[]
}
