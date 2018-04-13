import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '@tabler/angular-core'
import { DocsViewerComponent } from '../../../docs-viewer'
import { FormsAdvancedComponent } from './forms-advanced.component'

@NgModule({
  imports: [SharedModule, RouterModule.forChild([
    {
      path: '',
      component: DocsViewerComponent,
      data: {
        sections: [
          {
            description: require('!!html-loader!markdown-loader!./README.md'),
            component: FormsAdvancedComponent,
            files: [
              {
                file: 'forms-advanced.component.ts',
                content: require('!!prismjs-loader?lang=typescript!./forms-advanced.component.ts'),
              },
            ],
          },
        ],
      },
    },
  ])],

})
export class FormsAdvancedConfigModule {

}
