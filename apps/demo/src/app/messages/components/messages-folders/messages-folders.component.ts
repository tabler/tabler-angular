import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-messages-folders',
  template: `
    <div>
      <div class="list-group list-group-transparent mb-0">
        <ng-container *ngFor="let folder of folders">
          <a [routerLink]="[ folder.id ]"
             routerLinkActive="active"
             class="list-group-item list-group-item-action d-flex align-items-center">
            
            <span class="icon mr-3">
              <i [class]="folder.icon"></i>
            </span>
            
            {{folder.label}}
            
            <span *ngIf="folder.badge" class="ml-auto badge badge-{{folder.badge.type}}">
              {{folder.badge.label}}
            </span>
          </a>
        </ng-container>
      </div>

      <div class="mt-6">
        <a [routerLink]="['compose']" class="btn btn-secondary btn-block" routerLinkActive="active">
          Compose new Message
        </a>
      </div>
    </div>

  `,
  styles: []
})
export class MessagesFoldersComponent {
  @Input() folders: any[]
}
