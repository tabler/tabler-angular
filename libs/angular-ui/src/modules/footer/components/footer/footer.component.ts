import { Component, Input } from '@angular/core'
import { UiLayout } from '../../../../services/ui.service'

@Component({
  selector: 'ui-footer',
  template: `
    <ng-container *ngIf="config.footerSubNav || config.footerSubText" >
      <ui-footer-links [config]="config"></ui-footer-links>
    </ng-container>
    <ng-container *ngIf="config.footerNav || config.footerText" >
      <footer class="footer">
        <div class="container">
          <div class="row align-items-center flex-row-reverse">
            <div class="col-auto ml-auto">
              <div class="row align-items-center">
                <div class="col-auto">
                  <ul class="list-inline list-inline-dots mb-0">
                    <ng-container *ngFor="let link of config?.footerNav">
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
            <div class="col-12 col-lg-auto mt-3 mt-lg-0 text-center" [innerHtml]="config?.footerText">
            </div>
          </div>
        </div>
      </footer>
    </ng-container>
  `,
})
export class FooterComponent {
  @Input() public config: UiLayout
}
