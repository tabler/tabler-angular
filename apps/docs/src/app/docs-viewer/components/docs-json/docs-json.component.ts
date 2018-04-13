import { Component, ElementRef, Input, ViewChild } from '@angular/core'
import JSONFormatter from 'json-formatter-js'

@Component({
  selector: 'app-docs-json',
  template: `
    <pre [style.display]="'none'">{{ model }}</pre>
    <pre #modelPreview></pre>
  `,
})
export class DocsJsonComponent {

  private _prevModel: any

  private _model: any

  @Input() public set model(model) {
    this._model = model
  }

  public get model() {
    const model = JSON.stringify(this._model)
    if (this._prevModel !== model && this.modelPreviewRef && this.modelPreviewRef.nativeElement) {
      this._prevModel = model
      const formatter = new JSONFormatter(this._model, 5, { hoverPreviewEnabled: true })
      this.modelPreviewRef.nativeElement.innerHTML = ''
      this.modelPreviewRef.nativeElement.appendChild(formatter.render())
    }
    return this._model
  }

  @ViewChild('modelPreview') modelPreviewRef: ElementRef
}
