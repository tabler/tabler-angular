import { Component, OnInit } from '@angular/core'
import { DemoService } from '../../../demo/services/demo.service'

@Component({
  selector: 'app-messages-list',
  template: `
    <div class="mb-5">
      <ui-page-title title="Inbox" [header]="false"></ui-page-title>
    </div>

    <div class="card">
      <div class="table-responsive">
        <table class="table table-hover table-outline table-vcenter text-nowrap card-table">
          <thead>
          <tr>
            <th class="text-center w-1"><i class="icon-people"></i></th>
            <th>From</th>
            <th>Subject</th>
            <th class="text-right">Date</th>
          </tr>
          </thead>
          <tbody>

          <tr *ngFor="let message of getMessages()">
            <td class="text-center">
              <ui-avatar [image]="message.from.photo" status="green"></ui-avatar>
            </td>
            <td>
              <a class="text-default" href="" [routerLink]="[ message.id ]">
                <div>{{ message.from.name }} {{ message.from.surname }}</div>
              </a>
            </td>
            <td>
              <a class="text-default" href="" [routerLink]="[ message.id ]">
                {{message.subject}}  
              </a>
            </td>
            <td class="text-right text-muted">
              {{message.datetime | date: 'medium'}}
            </td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>

  `,
  styles: []
})
export class MessagesListComponent implements OnInit {
  public messages = []
  constructor(public demoService: DemoService) {
    this.messages = this.demoService.messages
    console.log(this.messages)
  }

  ngOnInit() {
  }
  public getMessages() {
    return this.messages
  }

}
