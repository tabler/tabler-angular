import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '@tabler/angular-core'
import { DocsViewerComponent } from '../../../docs-viewer'
import { AlertsBasicComponent } from './alerts-basic.component'

@NgModule({
  imports: [SharedModule, RouterModule.forChild([
    {
      path: '',
      component: DocsViewerComponent,
      data: {
        sections: [
          {
            description: require('!!html-loader!markdown-loader!./README.md'),
            component: AlertsBasicComponent,
            files: [
              {
                file: 'alerts-basic.component.ts',
                content: require('!!prismjs-loader?lang=typescript!./alerts-basic.component.ts'),
              },
            ],
          },
        ],
      },
    },
  ])],

})
export class AlertsBasicConfigModule {

}
