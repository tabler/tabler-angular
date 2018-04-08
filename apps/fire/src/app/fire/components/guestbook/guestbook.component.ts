import { Component, OnInit } from '@angular/core';
import { FireService } from '../../services/fire.service';

@Component({
  selector: 'app-introduction',
  template: `
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <ui-page-title
          title="Firebase Guestbook"
          subTitle="Rock a guestbook like it's 1999! 🚀 "></ui-page-title>


        <div class="card">
          <div class="card-body">

            <div class="my-3 py-3">
              <div class="input-group input-xl">
                <input type="text"
                       class="form-control"
                       placeholder="Message"
                       [(ngModel)]="message"
                       (keydown.enter)="sendMessage()">
                <div class="input-group-append">
                  <button type="button"
                          class="btn btn-secondary"
                          (click)="sendMessage()">
                    <i class="fe fe-send"></i>
                  </button>
                </div>
              </div>
            </div>


            <div class="list-group list-group- my-5">

              <div *ngIf="(fire.collection$ | async) as collection">

                <div *ngIf="!collection.length">
                  <div class="alert alert-info">No messages found...</div>
                </div>

                <ng-container >
                  <div class="list-group-item list-group-item-action mb-3"
                       *ngFor="let item of collection">
                    <div>
                      {{item.message}}
                      <div class="float-right">
                    <span class="text-muted mr-4">
                      {{item.created | date: 'short' }}
                    </span>
                        <button class="btn btn-sm text-danger"
                                (click)="deleteMessage(item.id)">
                          <i class="fa fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </ng-container>

              </div>
            </div>
          </div>
        </div>



      </div>
    </div>

  `,
  styles: []
})
export class GuestbookComponent implements OnInit {
  public message: string

  constructor(public fire: FireService) {}

  ngOnInit() {
    this.reset()
  }

  addMessage(message: string) {
    this.fire.upsert({ message })
      .subscribe(res => {
        console.log('Item added', res)
      })
  }

  sendMessage() {
    this.addMessage(this.message)
    this.reset()
  }

  deleteMessage(id) {
    this.fire.delete(id)
      .subscribe(res => {
        console.log('Item deleted', res)
      })
  }

  reset() {
    this.message = ''
  }
}
