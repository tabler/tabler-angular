import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-footer',
  template: `
    <footer class="footer" *ngIf="config">
      <div class="container">
        <div class="row align-items-center flex-row-reverse">
          <div class="col-auto ml-auto">
            <div class="row align-items-center">
              <div class="col-auto">
                <ul class="list-inline list-inline-dots mb-0">
                  <ng-container *ngFor="let link of config?.links">
                    <li class="list-inline-item">
                      <a [href]="link.link" [class]="link.class" [target]="link.target || '_self'">
                        <i [class]="link.icon"></i>
                        {{ link.label }}
                      </a>
                    </li>
                  </ng-container>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-auto mt-3 mt-lg-0 text-center" [innerHtml]="config?.disclaimer">
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {
  @Input() public config
}
