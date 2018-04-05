import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-dashboard-icon-box',
  template: `
    <div class="card p-3">
      <div class="d-flex align-items-center">
		<span class="stamp stamp-md bg-{{ color }} mr-3">
			<i class="{{ icon }}"></i>
		</span>
        <div>
          <h4 class="m-0"><a href="javascript:void(0)">{{ value }} <small>{{ description }}</small></a></h4>
          <small class="text-muted">{{ subtitle }}</small>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class DashboardIconBoxComponent {
  @Input() color = 'red'
  @Input() icon = 'fa fa-dollar'
  @Input() value = '16'
  @Input() description = 'Sales'
  @Input() subtitle = '6 waiting payments'
}
