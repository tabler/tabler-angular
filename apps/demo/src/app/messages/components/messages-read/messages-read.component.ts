import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { DemoService } from '../../../demo/services/demo.service'

@Component({
  selector: 'app-messages-read',
  templateUrl: './messages-read.html',
  styleUrls: ['./messages-read.scss', ],
})
export class MessagesReadComponent implements OnInit {
  public buttons = [
    {
      type: 'button',
      icon: 'fe fe-arrow-left',
      action: 'BACK',
    },
    {
      type: 'button',
      icon: 'fe fe-trash',
      action: 'DELETE',
    },
  ]

  public message

  constructor(private route: ActivatedRoute, private demoService: DemoService) {}

  ngOnInit() {
    const messageId = this.route.snapshot.params['message']
    this.message = this.demoService.messages[messageId]
  }
}
