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
                  <li class="list-inline-item">
                    <a routerLink="/docs">Documentation</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="/faq">FAQ</a>
                  </li>
                </ul>
              </div>
              <div class="col-auto">
                <a href="https://github.com/tabler/tabler-angular" target="_blank" class="btn btn-outline-primary btn-sm">Source code</a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-auto mt-3 mt-lg-0 text-center" [innerHtml]="config?.disclaimer">
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  @Input() public config
}
