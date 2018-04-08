import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable()
export class FireService {

  private collection = 'Items'

  public collection$

  constructor(
    private db: AngularFirestore
  ) {
    this.collection$ = db
      .collection(this.collection, ref => ref.orderBy('created', 'desc'))
      .valueChanges()
  }


  public create(data) {
    const id = this.db.createId()
    const created = new Date()
    return fromPromise(this.db
      .collection(this.collection)
      .doc(id)
      .set(Object.assign({}, data, { id, created })))
  }

  public update(id, data) {
    const updated = new Date()
    return fromPromise(this.db
      .collection(this.collection)
      .doc(id)
      .update(Object.assign({}, data, { updated })))
  }

  public delete(id) {
    return fromPromise(this.db
      .collection(this.collection)
      .doc(id)
      .delete())
  }

  public upsert(data) {
    return data.id ? this.update(data.id, data) : this.create(data)
  }

}
