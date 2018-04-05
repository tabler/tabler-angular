import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { DemoService } from '../../../demo/services/demo.service'

@Component({
  selector: 'app-messages-read',
  template: `
    <ui-card [header]="message.subject" [buttons]="buttons">
      <div class="card-body">
        <div class="mb-5">
          <div class="float-right text-muted">
            {{message.datetime | date: 'medium' }}
          </div>
          <div class="float-left mr-3">
            <ui-avatar [image]="message.from.photo" status="green" size="lg"></ui-avatar>
          </div>
          <div class="d-none d-lg-block">
            <span class="text-default">
              {{ message.from.name }} {{ message.from.surname }}
            </span>
            <small class="text-muted d-block mt-1">
              {{ message.from.email }}
            </small>
          </div>
        </div>
        <div class="message" [innerHtml]="message.body"></div>
      </div>
    </ui-card>
  `,
  styles: [ `
    .message {
      white-space: pre-line;
    }
  ` ]
})
export class MessagesReadComponent implements OnInit {

  public buttons = [ {
    type: 'button',
    icon: 'fe fe-arrow-left',
    action: 'BACK',
  }, {
    type: 'button',
    icon: 'fe fe-trash',
    action: 'DELETE',
  }
  ]

  public message

  constructor(
    private route: ActivatedRoute,
    private demoService: DemoService,
  ) {
  }

  ngOnInit() {
    const messageId = this.route.snapshot.params[ 'message' ]
    this.message = this.demoService.messages[ messageId ]
  }

}
