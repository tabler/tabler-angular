import { Component, Input } from '@angular/core'
import { UiLayout } from '../../../../services/ui.service'

@Component({
  selector: 'ui-footer-links',
  template: `
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-6 col-md-3" *ngFor="let links of config.footerSubNav">
                <ul class="list-unstyled mb-0">
                  <li *ngFor="let link of links">
                    <ui-link [link]="link"></ui-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mt-4 mt-lg-0" [innerHtml]="config.footerSubText"></div>
        </div>
      </div>
    </div>
  `,
})
export class FooterLinksComponent {
  @Input() public config: UiLayout
}
