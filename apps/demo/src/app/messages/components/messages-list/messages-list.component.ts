import { Component, OnInit } from '@angular/core'
import { DemoService } from '../../../demo/services/demo.service'

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.html',
  styles: [],
})
export class MessagesListComponent implements OnInit {
  public messages = []
  constructor(public demoService: DemoService) {
    this.messages = this.demoService.messages
    console.log(this.messages)
  }

  ngOnInit() {}
  public getMessages() {
    return this.messages
  }
}
