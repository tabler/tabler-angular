import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-components-blog-single',
  template: `
    <div class="card" [class.card-aside]="type === 'aside'">
      
      <a href="#" *ngIf="type === 'image'">
        <img class="card-img-top" [attr.src]="photo" alt="{{ article.title }}">
      </a>

      <a href="#" *ngIf="type === 'aside'" 
         class="card-aside-column {{ asideClass }}"
         [style.background-image]="backgroundImage()">
      </a>

      <div class="card-body d-flex flex-column">
        <h4><a href="#">{{ article.title }}</a></h4>

        <div class="text-muted">{{ article.description | truncate: truncate }}</div>

        <div class="d-flex align-items-center pt-5 mt-auto">
          <ui-avatar class="mr-3" size="md" [image]="author.photo"></ui-avatar>
          <div>
            <a href="profile.html" class="text-default">{{ author.name }} {{ author.surname }}</a>
            <small class="d-block text-muted">3 days ago</small>
          </div>
          <div class="ml-auto" [class.text-red]="liked" [class.text-muted]="!liked">
            <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3"><i class="fe fe-heart mr-1"></i></a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ComponentsBlogSingleComponent {
  @Input() article: any
  @Input() asideClass: string
  @Input() author: any
  @Input() liked = false
  @Input() photo: string
  @Input() truncate = 100
  @Input() type: string
  backgroundImage() {
    return this.photo ? `url(${this.photo})` : ''
  }
}
