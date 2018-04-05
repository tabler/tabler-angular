import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pages-error',
  template: `
    <app-error-page [code]="code" [message]="message" (action)="handleAction()"></app-error-page>
  `,
  styles: []
})
export class PagesErrorComponent implements OnInit {
  public code
  public message
  public messages = {
    400: 'We are sorry but your request contains bad syntax and cannot be fulfilled',
    401: 'We are sorry but you are not authorized to access this page',
    403: 'We are sorry but you do not have permission to access this page',
    404: 'We are sorry but our service is currently not available',
    500: 'We are sorry but your request contains bad syntax and cannot be fulfilled',
    503: 'We are sorry but our service is currently not available',
  }

  constructor(private location: Location, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.code = this.route.snapshot.data.code || 500
    this.message = this.route.snapshot.queryParams.message || this.messages[this.code]
  }

  public handleAction() {
    this.location.back()
  }
}
