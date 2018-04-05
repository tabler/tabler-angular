import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-cards',
  template: `
    <div class="text-wrap p-lg-6">
      <h2 class="mt-0 mb-4">Cards</h2>
      <p>
        A card is a flexible and extensible content container. It includes options for headers and footers,
        a wide variety of content, contextual background colors, and powerful display options.
      </p>
      <p>
        The <code class="highlighter-rouge">.card</code> element is simply a
        container with a shadow, a border, a radius, and some padding. Built with
        flexbox, they offer easy alignment and mix well with other Bootstrap components.
      </p>
    </div>
    <ui-highlight [code]="code" name="highlight.component.ts" icon="fe fe-typescript"></ui-highlight>
  `,
  styles: []
})
export class CardsComponent implements OnInit {
  public code = `import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-highlight',
  template: \`
    <pre>{{code | json}}</pre>
  \`,
  styles: []
})
export class HighlightComponent {
  @Input() code
}
  `
  constructor() { }

  ngOnInit() {
  }

}
