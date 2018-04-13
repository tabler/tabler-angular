import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-docs-sections',
  template: `
    <ng-container *ngFor="let section of sections">
      <app-docs-section [component]="section.component"
                        [description]="section.description"
                        [title]="section.title"
                        [files]="section.files">
      </app-docs-section>
    </ng-container>
  `,
})
export class DocsSectionsComponent {
  @Input() sections = []
}
