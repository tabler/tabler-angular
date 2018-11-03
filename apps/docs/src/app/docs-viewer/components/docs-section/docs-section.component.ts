import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core'
import { CopierService } from '../../services/copier.service'

@Component({
  selector: 'app-docs-section',
  template: `
    <div class="card">
      <div class="card-header" *ngIf="title">
        <h2 class="card-title my-3">
          {{title}}
        </h2>
      </div>
      <div class="card-body">
        <div *ngIf="description" [innerHtml]="description"></div>

        <h3 class="my-5">Example</h3>

        <ng-template #demo></ng-template>

        <ng-container *ngIf="files.length">
          <h3 class="my-5">Files</h3>
          <div *ngFor="let file of files">
            <div class="my-3">
              <ui-button class="float-right"
                         size="sm" color="secondary" icon="fa fa-copy"
                         (action)="copySource(textContent)">
              </ui-button>
              <h4 class="card-title pt-1">
                <i class="fa fa-file-o mx-3"></i>
                <a href="" (click)="toggle($event, file.file)">{{file.file}}</a>
              </h4>
            </div>
            <ng-container *ngIf="show[file.file]">
              <pre [innerHtml]="file.content" #textContent></pre>
            </ng-container>
          </div>
        </ng-container>
      </div>
    </div>
  `,
})
export class DocsSectionComponent implements OnInit, OnDestroy {
  @Input() public title
  @Input() public description
  @Input() public component
  @Input() public files: { file: string; content: string }[] = []
  public show = {}

  @ViewChild('demo', { read: ViewContainerRef })
  demoRef: ViewContainerRef
  demoComponentRef: ComponentRef<any>

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private copier: CopierService,
  ) {}

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
    this.copier.copyText(content.innerText);
  }
  toggle(e, file) {
    e.preventDefault()
    this.show[file] = !this.show[file]
  }
}
