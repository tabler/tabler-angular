import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-development-activity',
  template: `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Development Activity</h3>
      </div>
      <app-development-chart [data]="purchases" label="Purchases"></app-development-chart>
      <div class="table-responsive">
        <table class="table card-table table-striped table-vcenter">
          <thead>
          <tr>
            <th colspan="2">User</th>
            <th>Commit</th>
            <th>Date</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="w-1">
              <app-avatar [image]="users[10].photo"></app-avatar>
            </td>
            <td>{{ users[ 10 ].name }} {{ users[ 10 ].surname }}</td>
            <td>Initial commit</td>
            <td class="text-nowrap">May 6, 2018</td>
            <td class="w-1"><a href="#" class="icon"><i class="fe fe-trash"></i></a></td>
          </tr>
          <tr>
            <td>
              <app-avatar text="BM"></app-avatar>
            </td>
            <td>{{ users[ 17 ].name }} {{ users[ 17 ].surname }}</td>
            <td>Main structure</td>
            <td class="text-nowrap">April 22, 2018</td>
            <td><a href="#" class="icon"><i class="fe fe-trash"></i></a></td>
          </tr>
          <tr>
            <td>
              <app-avatar [image]="users[16].photo"></app-avatar>
            </td>
            <td>{{ users[ 16 ].name }} {{ users[ 16 ].surname }}</td>
            <td>Left sidebar adjustments</td>
            <td class="text-nowrap">April 15, 2018</td>
            <td><a href="#" class="icon"><i class="fe fe-trash"></i></a></td>
          </tr>
          <tr>
            <td>
              <app-avatar [image]="users[12].photo"></app-avatar>
            </td>
            <td>{{ users[ 12 ].name }} {{ users[ 12 ].surname }}</td>
            <td>Topbar dropdown style</td>
            <td class="text-nowrap">April 8, 2018</td>
            <td><a href="#" class="icon"><i class="fe fe-trash"></i></a></td>
          </tr>
          <tr>
            <td>
              <app-avatar [image]="users[19].photo"></app-avatar>
            </td>
            <td>{{ users[ 19 ].name }} {{ users[ 19 ].surname }}</td>
            <td>Fixes #625</td>
            <td class="text-nowrap">April 9, 2018</td>
            <td><a href="#" class="icon"><i class="fe fe-trash"></i></a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: []
})
export class DevelopmentActivityComponent {
  @Input() public purchases = []
  @Input() public users = []
}
