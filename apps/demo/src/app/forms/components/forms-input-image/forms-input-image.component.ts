import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-forms-input-image',
  template: `
    <div class="form-group">
      <label class="form-label">Image Check</label>
      <div class="row gutters-sm">
        <div class="col-6 col-sm-4" *ngFor="let photo of photos">
          <label class="imagecheck mb-4">
            <input name="imagecheck" type="checkbox" [checked]="photo.checked" class="imagecheck-input" />
            <figure class="imagecheck-figure">
              <img [attr.src]="photo.small" class="imagecheck-image">
            </figure>
          </label>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class FormsInputImageComponent {
  @Input() public photos = []
}
