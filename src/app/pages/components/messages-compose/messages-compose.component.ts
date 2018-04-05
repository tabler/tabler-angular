import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-messages-compose',
  template: `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Compose new message</h3>
      </div>

      <div class="card-body">

        <form action="">
          <div class="form-group">
            <div class="row align-items-center">
              <label class="col-sm-2">To:</label>
              <div class="col-sm-10">
                <input type="text" class="form-control">
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="row align-items-center">
              <label class="col-sm-2">Subject:</label>
              <div class="col-sm-10">
                <input type="text" class="form-control">
              </div>
            </div>
          </div>

          <textarea rows="10" class="form-control"></textarea>

          <div class="btn-list mt-4 text-right">
            <button type="button" class="btn btn-secondary btn-space">Cancel</button>
            <button type="submit" class="btn btn-primary btn-space">Send message</button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class MessagesComposeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
