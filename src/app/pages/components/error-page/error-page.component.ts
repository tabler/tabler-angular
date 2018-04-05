import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-error-page',
  template: `
    <div class="page">
      <app-page class="container text-center">
        <div class="display-1 text-muted mb-5"><i class="si si-exclamation"></i> {{ code }}</div>

        <h1 class="h2 mb-3">Oops.. You just found an error page..</h1>
        <p class="h4 text-muted font-weight-normal mb-7">{{ message }}&hellip;</p>

        <a class="btn btn-primary" href="#" (click)="back($event)">
          <i class="fe fe-arrow-left mx-2"></i> Go back
        </a>
        <a class="btn btn-secondary" [routerLink]="['/']">
          <i class="fe fe-home mx-2"></i> Go home
        </a>

      </app-page>
  `,
  styles: []
})
export class ErrorPageComponent {
  @Input() code = '500'
  @Input() message = 'We are sorry but your request contains bad syntax and cannot be fulfilled'
  @Output() action = new EventEmitter()

  public back($event) {
    $event.preventDefault()
    this.action.emit({ type: 'BACK' })
  }
}
