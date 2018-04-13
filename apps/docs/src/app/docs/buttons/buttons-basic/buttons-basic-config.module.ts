import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '@tabler/angular-core'
import { DocsViewerComponent } from '../../../docs-viewer'
import { ButtonsBasicComponent } from './buttons-basic.component'

@NgModule({
  imports: [SharedModule, RouterModule.forChild([
    {
      path: '',
      component: DocsViewerComponent,
      data: {
        sections: [
          {
            description: require('!!html-loader!markdown-loader!./README.md'),
            component: ButtonsBasicComponent,
            files: [
              {
                file: 'buttons-basic.component.ts',
                content: require('!!prismjs-loader?lang=typescript!./buttons-basic.component.ts'),
              },
            ],
          },
        ],
      },
    },
  ])],

})
export class ButtonsBasicConfigModule {

}
