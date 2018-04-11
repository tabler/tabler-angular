import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { Item } from '../data.typings'

@Injectable()
export abstract class AbstractDataService {

  abstract getItems(collectionId: string): Observable<Item[]>

  abstract addItem(collectionId: string, item: Item): Observable<Item>

  abstract updateItem(collectionId: string, item: Item): Observable<Item>

  abstract upsertItem(collectionId: string, item: Item): Observable<Item>

  abstract deleteItem(collectionId: string, id: string): Observable<boolean>

}
