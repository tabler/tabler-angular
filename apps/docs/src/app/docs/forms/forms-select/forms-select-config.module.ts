import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '@tabler/angular-core'
import { DocsViewerComponent } from '../../../docs-viewer'
import { FormsSelectComponent } from './forms-select.component'

@NgModule({
  imports: [SharedModule, RouterModule.forChild([
    {
      path: '',
      component: DocsViewerComponent,
      data: {
        examples: [
          {
            description: require('!!html-loader!markdown-loader!./README.md'),
            component: FormsSelectComponent,
            files: [
              {
                file: 'select.component.ts',
                content: require('!!prismjs-loader?lang=typescript!./forms-select.component.ts'),
              },
            ],
          },
        ],
      },
    },
  ])],
})
export class FormsSelectConfigModule {

}
