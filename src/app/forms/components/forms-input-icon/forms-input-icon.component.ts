import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-forms-input-icon',
  template: `
    <div class="form-group">
      <label class="form-label">Icon input</label>
      <div class="input-icon mb-3">
        <input type="text" class="form-control" placeholder="Search for...">
        <span class="input-icon-addon">
			<i class="fe fe-search"></i>
		</span>
      </div>
      <div class="input-icon">
		<span class="input-icon-addon">
			<i class="fe fe-user"></i>
		</span>
        <input type="text" class="form-control" placeholder="Username">
      </div>
    </div>
  `,
  styles: []
})
export class FormsInputIconComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
