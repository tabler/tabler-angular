import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-dashboard-digit',
  template: `
    <div class="card">
      <div class="card-body text-center">
        <div class="h5">{{ title }}</div>
        <div class="display-4 font-weight-bold mb-4">{{ digit }}</div>
        <div class="progress progress-sm">
          <div class="progress-bar bg-{{ color }}" [style.width]="width"></div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class DashboardDigitComponent {
  @Input() color = 'blue'
  @Input() title = 'Today Expenses'
  @Input() digit = '$8500'
  @Input() width = '54%'
}
