import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-interface-pricing',
  template: `
    <div class="card">
      
      <div *ngIf="color" class="card-status bg-{{ color }}"></div>

      <div class="card-body text-center">
        <div class="card-category">{{ category }}</div>
        <div class="display-3 my-4">$ {{ price }}</div>

        <ul class="list-unstyled leading-loose">
          <li><strong>{{ users }}</strong> Users</li>

          <li *ngFor="let feature of features">
            <i class="fe mr-2"
              [class.fe-check]="hasFeature(feature)" [class.text-success]="hasFeature(feature)"
              [class.fe-x]="!hasFeature(feature)" [class.text-danger]="!hasFeature(feature)"
              aria-hidden="true"></i>
            {{ feature }}
          </li>
        </ul>

        <div class="text-center mt-6">
          <a href="#" class="btn btn-{{ color || 'secondary' }} btn-block">Choose plan</a>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class InterfacePricingComponent {
  @Input() public category
  @Input() public color
  @Input() public features = []
  @Input() public hasFeatures = []
  @Input() public price
  @Input() public users

  hasFeature(feature) {
    return this.hasFeatures.indexOf(feature) > -1
  }
}
