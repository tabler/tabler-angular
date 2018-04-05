import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-card',
  template: `
    <div class="card" [class.hide]="hidden" [class.card-fullscreen]="fullScreen">
      <div *ngIf="status" class="card-status bg-{{ status }}" [class.card-status-left]="statusLeft"></div>
      <div class="card-header">
        <h3 class="card-title">
          <i *ngIf="icon" class="{{ icon }}"></i>
          {{header}}
        </h3>
        <div class="card-options">
          <form action="" *ngIf="search">
            <div class="input-group">
              <input type="text"
                     class="form-control form-control-sm" [placeholder]="search.placeholder" name="s" [(ngModel)]="search.value">
              <span class="input-group-btn ml-2">
                <button class="btn btn-sm btn-default" type="submit" (click)="action.emit( { type: 'SEARCH', payload: search.value } )">
                  <span class="fe fe-search"></span>
                </button>
              </span>
            </div>
          </form>

          <ng-container *ngIf="!buttons">
            <a class="card-options-collapse" data-toggle="card-collapse" href="#"
               [class.hide]="!allowCollapse"
               (click)="collapse($event)">
              <i class="fe" [class.fe-chevron-down]="collapsed" [class.fe-chevron-up]="!collapsed"></i>
            </a>
            <a class="card-options-fullscreen" data-toggle="card-fullscreen" href="#"
               [class.hide]="!allowFullScreen"
               (click)="goFullScreen($event)">
              <i class="fe fe-maximize"></i>
            </a>
            <a class="card-options-remove" data-toggle="card-remove" href="#"
               [class.hide]="!allowHide"
               (click)="hide($event)">
              <i class="fe fe-x"></i>
            </a>
          </ng-container>

          <ng-container *ngIf="buttons">
            <ng-container *ngFor="let button of buttons">
              
              <button class="btn btn-secondary btn-sm ml-2"
                      *ngIf="button.type === 'button'"
                      (click)="action.emit( { type: button.action, payload: button.payload || '' })">
                <i *ngIf="button.icon" [class]="button.icon"></i>
                {{ button.text }}
              </button>

              <label class="custom-switch m-0"
                     *ngIf="button.type === 'switch'">
                <input type="checkbox" [value]="button.checked" class="custom-switch-input"
                       (change)="action.emit( { type: 'SWITCH', payload: button.checked } )"
                       [checked]="button.checked || false">
                <span class="custom-switch-indicator"></span>
              </label>

            </ng-container>
          </ng-container>

        </div>
      </div>
      
      <div [class.hide]="collapsed" [class.show]="!collapsed">

        <ng-container *ngIf="alert">
          <div class="card-alert alert alert-{{alert.type}} mb-0">
            {{alert.text}}
          </div>
        </ng-container>

        <ng-content></ng-content>
        
        <div class="card-footer" *ngIf="footer">{{footer}}</div>
      </div>
    </div>
  `,
  styles: [`
    .hide {
      display: none;
    }
    .show {
      display: block;
    }
  `]
})
export class CardComponent {
  @Input() public alert: any
  @Input() public allowCollapse = true
  @Input() public allowFullScreen = false
  @Input() public allowHide = true
  @Input() public buttons: any[]
  @Input() public collapsed = false
  @Input() public footer: string
  @Input() public fullScreen = false
  @Input() public header: string
  @Input() public hidden = false
  @Input() public icon: string
  @Input() public loader = false
  @Input() public search: any
  @Input() public status: string
  @Input() public statusLeft = false

  @Output() public action = new EventEmitter()

  public collapse(e) {
    e.preventDefault()
    this.collapsed = !this.collapsed
  }

  public hide(e) {
    e.preventDefault()
    this.hidden = !this.hidden
  }

  public goFullScreen(e) {
    e.preventDefault()
    this.fullScreen = !this.fullScreen
    if (this.collapsed) {
      this.collapsed = false
    }
  }
}
