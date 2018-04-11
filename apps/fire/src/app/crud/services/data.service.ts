import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Item } from '../data.typings'

import { AbstractDataService } from './abstract-data.service'

@Injectable()
export class DataService {
  private _service: AbstractDataService

  public set service(service) {
    this._service = service
  }

  public get service() {
    return this._service
  }

  public upsertItem(collectionId: string, item: Item): Observable<Item> {
    return this.service.upsertItem(collectionId, item)
  }

  public deleteItem(collectionId: string, id: string): Observable<boolean> {
    return this.service.deleteItem(collectionId, id)
  }

  public getItems(collectionId: string): Observable<Item[]> {
    return this.service.getItems(collectionId)
  }

}
