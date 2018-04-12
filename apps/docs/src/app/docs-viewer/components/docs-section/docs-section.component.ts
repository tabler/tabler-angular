import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core'
import JSONFormatter from 'json-formatter-js'

@Component({
  selector: 'app-docs-example',
  template: `
    <div class="card">
      <div class="card-header" *ngIf="title">
        <h2 class="card-title my-3">
          {{title}}
        </h2>
      </div>
      <div class="card-body">

        <div *ngIf="description" [innerHtml]="description"></div>

        <div class="row my-5">
          <div class="col-6">
            <h3>Example</h3>
            <ng-template #demo></ng-template>
          </div>
          <div class="col-6">
            <div *ngIf="demoComponentRef">
              <h3>Example model</h3>
              <pre [style.display]="'none'">{{ model }}</pre>
              <pre #modelPreview></pre>
            </div>
          </div>
        </div>

        <div *ngFor="let file of files">

          <div class="my-3">
            <h4 class="card-title">
              {{file.file}}
              <ui-button class="float-right"
                         size="sm" color="secondary" icon="fa fa-copy"
                         (action)="copySource(textContent)">
              </ui-button>
            </h4>
          </div>
          <pre [innerHtml]="file.content" #textContent></pre>
        </div>
      </div>
    </div>

  `,
})
export class DocsSectionComponent implements OnInit, OnDestroy {
  @Input() public title
  @Input() public description
  @Input() public component
  @Input() public files: { file: string; content: string }[]

  _prevModel: any

  @ViewChild('demo', { read: ViewContainerRef })
  demoRef: ViewContainerRef

  @ViewChild('modelPreview') modelPreviewRef: ElementRef
  demoComponentRef: ComponentRef<any>

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  get model() {
    const model = JSON.stringify(this.demoComponentRef.instance.model)
    if (this._prevModel !== model && this.modelPreviewRef && this.modelPreviewRef.nativeElement) {
      this._prevModel = model
      const formatter = new JSONFormatter(this.demoComponentRef.instance.model, 5, { hoverPreviewEnabled: true })
      this.modelPreviewRef.nativeElement.innerHTML = ''
      this.modelPreviewRef.nativeElement.appendChild(formatter.render())
    }

    return this.demoComponentRef.instance.model
  }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component)
    this.demoComponentRef = this.demoRef.createComponent(componentFactory)
  }

  ngOnDestroy() {
    if (this.demoComponentRef) {
      this.demoComponentRef.destroy()
    }
  }

  copySource(content) {
    console.log(content)
    // this.copier.copyText(content.innerText);
  }
}
