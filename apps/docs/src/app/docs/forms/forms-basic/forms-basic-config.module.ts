import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '@tabler/angular-core'
import { DocsViewerComponent } from '../../../docs-viewer'
import { FormsBasicComponent } from './forms-basic.component'

@NgModule({
  imports: [SharedModule, RouterModule.forChild([
    {
      path: '',
      component: DocsViewerComponent,
      data: {
        sections: [
          {
            description: require('!!html-loader!markdown-loader!./README.md'),
            component: FormsBasicComponent,
            files: [
              {
                file: 'forms-basic.component.ts',
                content: require('!!prismjs-loader?lang=typescript!./forms-basic.component.ts'),
              },
            ],
          },
        ],
      },
    },
  ])],

})
export class FormsBasicConfigModule {

}
