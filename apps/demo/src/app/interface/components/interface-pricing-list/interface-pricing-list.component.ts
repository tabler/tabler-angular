import { Component } from '@angular/core'

@Component({
  selector: 'app-interface-pricing-list',
  templateUrl: './interface-pricing-list.html',
  styles: [],
})
export class InterfacePricingListComponent {
  public features = ['Sharing Tools', 'Design Tools', 'Private Messages', 'Twitter API']

  public prices = [
    {
      price: '0',
      users: 3,
      category: 'Free',
      hasFeatures: this.features.slice(0, 1),
    },
    {
      price: '49',
      users: 10,
      category: 'Premium',
      hasFeatures: this.features.slice(0, 2),
      color: 'green',
    },
    {
      price: '99',
      category: 'Enterprise',
      users: 100,
      hasFeatures: this.features.slice(0, 3),
    },
    {
      price: '139',
      category: 'Unlimited',
      users: 'Unlimited',
      hasFeatures: this.features,
    },
  ]
}
