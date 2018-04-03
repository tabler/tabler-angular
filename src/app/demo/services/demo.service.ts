import { Injectable } from '@angular/core'

import { donut, pie, invoices, users, products, purchases } from './data'
import { icons } from './icons'

@Injectable()
export class DemoService {

  public purchases = purchases

  public donut = donut

  public pie = pie

  public invoices = invoices

  public users = users

  public products = products

  public icons = icons
}
