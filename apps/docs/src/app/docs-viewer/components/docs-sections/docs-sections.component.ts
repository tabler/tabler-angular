import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-docs-examples',
  template: `
    <ng-container *ngFor="let example of examples">
      <app-docs-example [component]="example.component"
                        [description]="example.description"
                        [title]="example.title"
                        [files]="example.files">
      </app-docs-example>
    </ng-container>
  `,
})
export class DocsSectionsComponent {
  @Input() examples = []
}
