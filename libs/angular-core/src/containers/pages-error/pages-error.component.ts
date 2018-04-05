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
  public code: number | string
  public message: string

  constructor(private location: Location, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.code = this.route.snapshot.data.code || 500
    this.message = this.route.snapshot.data.message
      || this.route.snapshot.queryParams.message
      || 'Unknown error...'
  }

  public handleAction() {
    this.location.back()
  }
}
