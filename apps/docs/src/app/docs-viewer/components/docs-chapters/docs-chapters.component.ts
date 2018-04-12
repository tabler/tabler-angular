import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-docs-chapters',
  template: `
    <div class="list-group list-group-transparent mb-0">
    
      <ng-container *ngFor="let chapter of chapters">
        <a class="list-group-item list-group-item-action"
           [routerLink]="[chapter.path]"
           routerLinkActive="active">
        <span class="icon mr-3" *ngIf="chapter.icon">
          <i class="{{ chapter.icon }}"></i>
        </span>
          {{ chapter.label }}
        </a>

        <div *ngIf="chapter && section && chapter.id === section.chapter">

          <div class="ml-5 my-2">
            <a class="list-group-item list-group-item-action"
               *ngFor="let item of section.items"
               [routerLink]="[item.path]"
               [style.background]="'none'"
               routerLinkActive="active">
            <span class="icon mr-3">
              <i class="{{ item.icon }}"></i>
            </span>
              {{ item.label }}
            </a>
          </div>

        </div>

      </ng-container>

    </div>
  `,
})
export class DocsChaptersComponent {
  @Input() public chapters = []
  @Input() public section: any = {}
}
