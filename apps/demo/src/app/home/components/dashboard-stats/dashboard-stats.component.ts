import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-dashboard-stats',
  templateUrl: './dashboard-stats.html',
  styles: [],
})
export class DashboardStatsComponent {
  @Input() number: number
  @Input() percentage: number
  @Input() title: string
  public isPositive() {
    return this.percentage > 0
  }
}
