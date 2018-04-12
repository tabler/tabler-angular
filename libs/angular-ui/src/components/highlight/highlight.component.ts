import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-highlight',
  template: `
    <pre class="m-0 p-0"><code highlight [textContent]="code"></code></pre>
  `,
})
export class HighlightComponent {
  @Input() code: string
}
