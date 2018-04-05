import { Injectable } from '@angular/core'

import {
  articles,
  donut,
  pie,
  invoices,
  users,
  photos,
  products,
  purchases,
  messages,
} from './data'
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

  public messages = messages
    .map((message, id) => Object
      .assign({}, message, { id, from: users[ message.from ] })
    )
}
