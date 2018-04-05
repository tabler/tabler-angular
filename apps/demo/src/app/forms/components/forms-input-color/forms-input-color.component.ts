import { Component } from '@angular/core'

@Component({
  selector: 'app-forms-input-color',
  template: `
    <div class="form-group">
      <label class="form-label">Color Input</label>
      <div class="row gutters-xs">

        <div class="col-auto" *ngFor="let color of colors">
          <label class="colorinput">
            <input name="color" type="checkbox" value="{{ color }}" class="colorinput-input"
                   [checked]="color === selectedColor "/>

            <span class="colorinput-color bg-{{ color }}"></span>
          </label>
        </div>

      </div>
    </div>
  `,
  styles: []
})
export class FormsInputColorComponent {

  public colors = [
    'azure',
    'indigo',
    'purple',
    'pink',
    'red',
    'orange',
    'yellow',
    'lime',
    'green',
    'teal',
  ]

  public selectedColor = this.colors[ 1 ]

}
