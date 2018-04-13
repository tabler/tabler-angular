import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-docs-chapters',
  template: `
    <div class="list-group list-group-transparent mb-0">
    
      <ng-container *ngFor="let chapter of chapters">
        <a class="list-group-item list-group-item-action"
           [routerLink]="chapter.path"
           routerLinkActive="active"
           [style.background]="'none'">
        <span class="icon mr-3" *ngIf="chapter.icon">
          <i class="{{ chapter.icon }}"></i>
        </span>
          {{ chapter.label }}
        </a>

        <div *ngIf="chapter && section && chapter.id === section.chapter">

          <ng-container *ngFor="let item of section.items">
            <a class="ml-5 pl-2 my-2 list-group-item list-group-item-action"
               [routerLink]="item.path"
               routerLinkActive="active">
              <span class="icon mr-3">
                <i class="{{ item.icon }}"></i>
              </span>
              {{ item.label }}
            </a>
          </ng-container>

        </div>

      </ng-container>

    </div>
  `,
})
export class DocsChaptersComponent {
  @Input() public chapters = []
  @Input() public section: any = {}
}
