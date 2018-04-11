import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { BsModalRef, BsModalService } from 'ngx-bootstrap'
import { AuthService } from '../../../auth/services/auth.service'
import { ItemModalComponent } from '../../components/item-modal/item-modal.component'
import { Collection } from '../../data.typings'
import { DataService } from '../../services'
import 'rxjs/add/operator/take'

export const getProperties = o => Object.keys(o || {})
  .map(id => (Object.assign({}, o[id], { id })))
  .filter(prop => prop.id !== 'id')

@Component({
  selector: 'app-notes-index',
  template: `
    <ui-page>
      <div class="py-5">
        <div class="row">
          <div class="col-8">
            <app-item-list [items]="items$ | async"
                            [user]="user"
                            [collection]="collection"
                            (action)="handleAction($event)">
            </app-item-list>
          </div>
          <div class="col-4">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Crud Models</h3>
                <p>
                  The UI of the CRUD models is dynamically generated using a Model
                  definition.
                </p>
                <p>
                  Using an Angular resolver we pass the Model information to the
                  components. Each model is backed by a Firebase collection.
                </p>
                <p>
                  This allows you to quickly create CRUD interfaces for existing
                  data by adding more model definitions! 
                </p>
              </div>
              <pre class="m-0">{{ collection | json }}</pre>
            </div>
          </div>
        </div>
      </div>
    </ui-page>
  `,
})
export class ItemsIndexComponent implements OnInit {
  private modalRef: BsModalRef
  public collection: Collection
  public properties: any[]
  public items$
  public user

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private data: DataService,
    private modal: BsModalService) {}

  ngOnInit() {
    this.route.data
      .map(res => this.parseCollection(res[ 'collection' ]))
      .map(res => res && res.id)
      .subscribe(id => this.items$ = this.data.getItems(id))
    this.auth.user$
      .subscribe(user => this.user = user)
  }

  parseCollection(collection) {
    this.collection = collection
    this.properties = getProperties(collection.properties || {})
    return collection
  }

  hideModal() {
    this.modalRef.hide()
  }

  showModal(type, item) {
    const initialState = {
      item: Object.assign({}, item),
      properties: this.properties,
      user: this.user,
      type,
    }
    this.modalRef = this.modal.show(ItemModalComponent, { initialState })
    this.modalRef.content.action.subscribe(event => this.handleAction(event))
  }

  handleAction({ type, payload }) {
    switch (type) {
      case 'DELETE':
        return this.data.deleteItem(this.collection.id, payload)
      case 'CANCEL':
        return this.hideModal()
      case 'INSPECT':
        return this.showModal('inspect', payload)
      case 'EDIT':
        return this.showModal('form', payload)
      case 'ADD':
        return this.showModal('form', { user: this.user })
      case 'SAVE_CLOSE':
      case 'SAVE':
        return this.data.upsertItem(this.collection.id, payload)
          .subscribe(
            () => type === 'SAVE_CLOSE' && this.hideModal(),
            err => console.log('err', err)
          )
      default:
        console.log(`Unknown type: ${type}. Payload: `, payload)
    }
  }

}
