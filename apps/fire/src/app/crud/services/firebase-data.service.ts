import { Injectable } from '@angular/core'
import { AngularFirestore } from 'angularfire2/firestore'
import { Observable } from 'rxjs/Observable'
import { fromPromise } from 'rxjs/observable/fromPromise'
import { Item } from '../data.typings'
import { AbstractDataService } from './abstract-data.service'

@Injectable()
export class FirebaseDataService implements AbstractDataService {
  private collectionsRef = (path: string): Observable<any[]> => {
    return this.db.collection<any[]>(path).valueChanges()
  }

  private docRef = (path: string) => {
    return this.db.doc<any>(path)
  }

  private colDocRef = (collectionId: string, itemId: string) => {
    return this.docRef(`${collectionId}/${itemId}`)
  }

  constructor(private db: AngularFirestore) {}

  public getItems(collectionId: string): Observable<any[]> {
    return this.collectionsRef(collectionId)
  }

  public addItem(collectionId: string, item: Item): Observable<any> {
    item.id = item.id || this.db.createId()
    item.created = new Date()
    return fromPromise(
      this.db
        .collection(collectionId)
        .doc(item.id)
        .set(item)
    )
  }

  public updateItem(collectionId: string, item: Item): Observable<any> {
    item.updated = new Date()
    return fromPromise(
      this.db
        .collection(collectionId)
        .doc(item.id)
        .update(item)
    )
  }

  public upsertItem(collectionId: string, item: Item): Observable<any> {
    return item.id ? this.updateItem(collectionId, item) : this.addItem(collectionId, item)
  }

  public deleteItem(collectionId: string, id: string): Observable<boolean> {
    return fromPromise(
      this.colDocRef(collectionId, id)
        .delete()
        .then(() => true)
    )
  }
}
