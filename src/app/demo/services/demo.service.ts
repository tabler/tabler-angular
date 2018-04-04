import { Injectable } from '@angular/core'

import { articles, donut, pie, invoices, users, photos, products, purchases } from './data'
import { icons } from './icons'

@Injectable()
export class DemoService {

  public purchases = purchases

  public donut = donut

  public pie = pie

  public invoices = invoices

  public users = users

  public photos = photos

  public products = products

  public icons = icons

  public articles = articles
}
