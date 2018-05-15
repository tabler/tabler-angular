import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-interface-pricing',
  templateUrl: './interface-pricing.html',
  styles: [],
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
