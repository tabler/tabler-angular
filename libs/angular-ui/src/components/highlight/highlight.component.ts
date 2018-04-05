import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-highlight',
  template: `
    <ui-card [header]="name" [icon]="icon" [buttons]="[]">
      <div class="p-5">
        <pre class="m-0 p-0">
          <code highlight [textContent]="code"></code>
        </pre>
      </div>
    </ui-card>
  `,
})
export class HighlightComponent {
  @Input() code
  @Input() icon = 'fe fe-code'
  @Input() name = 'Code snippet'
}
