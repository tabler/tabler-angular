import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-forms',
  template: `
    <div class="my-5">
      <app-forms-demo-basic></app-forms-demo-basic>
    </div>
    <div class="my-5">
      <app-forms-demo-advanced></app-forms-demo-advanced>
    </div>
    <div class="my-5">
      <app-forms-demo-select></app-forms-demo-select>
    </div>
  `,
  styles: [],
})
export class FormsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
