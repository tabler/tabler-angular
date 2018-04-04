import { Component } from '@angular/core'
import { DemoService } from '../../../demo/services/demo.service'

@Component({
  selector: 'app-components-blog',
  template: `
    <app-page-title title="Blog components"></app-page-title>
    <div class="row row-cards row-deck">

      <div class="col-sm-6 col-xl-3" *ngFor="let article of demoService.articles.slice(0, 4)">
        <app-components-blog-single
          [article]="article" type="image"
          [author]="demoService.users[article.author]"
          [photo]="demoService.photos[article.image].small">
        </app-components-blog-single>
      </div>

      <div class="col-lg-4" *ngFor="let article of demoService.articles.slice(4, 7)">
        <app-components-blog-single
          [article]="article" 
          [author]="demoService.users[article.author]"
          [photo]="demoService.photos[article.image].small">
        </app-components-blog-single>
      </div>

      <div class="col-lg-6" *ngFor="let article of demoService.articles.slice(0, 2)">
        <app-components-blog-single
          [article]="article"
          type="aside"
          [author]="demoService.users[article.author]"
          [photo]="demoService.photos[article.image].small">
        </app-components-blog-single>
      </div>

      <div class="col-lg-6" *ngFor="let article of demoService.articles.slice(4, 6)">
        <app-components-blog-single
          [article]="article"
          type="aside"
          asideClass="w-50"
          [truncate]="200"
          [author]="demoService.users[article.author]"
          [photo]="demoService.photos[article.image].small">
        </app-components-blog-single>
      </div>

    </div>
  `,
})
export class ComponentsBlogComponent {
  constructor(public demoService: DemoService) {}
}
