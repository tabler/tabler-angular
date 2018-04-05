import { Component, OnInit } from '@angular/core'
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-docs-index',
  template: `
    <ui-page>
      <ui-page-title
        title="Documentation"
        subTitle="You are being redirected..."
        icon="fe fe-file-text"></ui-page-title>
    </ui-page>
  `,
  styles: []
})
export class DocsIndexComponent implements OnInit {

  ngOnInit() {
    setTimeout(() => {
      window.location.href = environment.urls.docs
    }, 5000)
  }

}
