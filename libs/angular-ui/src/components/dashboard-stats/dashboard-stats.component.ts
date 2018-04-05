import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-dashboard-stats',
  template: `
    <div class="card">
      <div class="card-body p-3 text-center">
        <div class="text-right" [class.text-green]="isPositive()" [class.text-red]="!isPositive()" >
          <span *ngIf="percentage">
            {{percentage}}%
            <i *ngIf="isPositive()" class="fe fe-chevron-up"></i>
            <i *ngIf="!isPositive()" class="fe fe-chevron-down"></i>
          </span>
        </div>
        <div class="h1 m-0">{{ number }}</div>
        <div class="text-muted mb-4">{{ title }}</div>
      </div>
    </div>
  `,
  styles: []
})
export class DashboardStatsComponent {
  @Input() number: number
  @Input() percentage: number
  @Input() title: string
  public isPositive() {
    return this.percentage > 0
  }
}
