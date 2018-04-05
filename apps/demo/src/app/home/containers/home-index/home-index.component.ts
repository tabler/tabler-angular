import { Component } from '@angular/core'
import { DemoService } from '../../../demo/services/demo.service'

@Component({
  selector: 'app-home-index',
  template: `
    <app-page>
      <app-page-title title="Dashboard"></app-page-title>


      <div class="row row-cards">

        <div class="col-6 col-sm-4 col-lg-2">
          <app-dashboard-stats number="43" title="New Tickets" percentage=6></app-dashboard-stats>
        </div>
        <div class="col-6 col-sm-4 col-lg-2">
          <app-dashboard-stats number="17" title="Closed Today" percentage=-3></app-dashboard-stats>
        </div>
        <div class="col-6 col-sm-4 col-lg-2">
          <app-dashboard-stats number="7" title="New Replies" percentage=9></app-dashboard-stats>
        </div>
        <div class="col-6 col-sm-4 col-lg-2">
          <app-dashboard-stats number="27.3K" title="Followers" percentage=3></app-dashboard-stats>
        </div>
        <div class="col-6 col-sm-4 col-lg-2">
          <app-dashboard-stats number="$95" title="Daily Earnings" percentage=-2></app-dashboard-stats>
        </div>
        <div class="col-6 col-sm-4 col-lg-2">
          <app-dashboard-stats number="621" title="Products" percentage=-1></app-dashboard-stats>
        </div>
        <div class="col-lg-6">
          <app-development-activity
            [purchases]="demoService.purchases"
            [users]="demoService.users">
          </app-development-activity>
        </div>

        <div class="col-md-6">
          <div class="alert alert-primary">
            Are you in trouble? <a [routerLink]="['/docs']" class="alert-link">
            Read our documentation</a> with code samples.
          </div>

          <div class="row">
            <div class="col-sm-6">
              <app-dashboard-chart title="Chart title" [data]="demoService.donut" [doughnut]="true"></app-dashboard-chart>
            </div>
            <div class="col-sm-6">
              <app-dashboard-chart title="Chart title" [data]="demoService.pie"></app-dashboard-chart>
            </div>
            <div class="col-sm-4">
              <app-dashboard-digit color="red" title="New fedbacks" digit="62" width="28%"></app-dashboard-digit>
            </div>
            <div class="col-sm-4">
              <app-dashboard-digit color="green" title="Today profit" digit="$652" width="84%"></app-dashboard-digit>
            </div>
            <div class="col-sm-4">
              <app-dashboard-digit color="yellow" title="Users online" digit="76" width="34%"></app-dashboard-digit>
            </div>
          </div>
        </div>


        <div class="col-sm-6 col-lg-3">
          <app-dashboard-icon-box
            color="blue"
            icon="fe fe-dollar-sign"
            value="132"
            description="Sales"
            subtitle="12 waiting payments"></app-dashboard-icon-box>
        </div>
        <div class="col-sm-6 col-lg-3">
          <app-dashboard-icon-box
            color="green"
            icon="fe fe-shopping-cart"
            value="78"
            description="Orders"
            subtitle="32 shipped"></app-dashboard-icon-box>
        </div>
        <div class="col-sm-6 col-lg-3">
          <app-dashboard-icon-box
            color="red"
            icon="fe fe-users"
            value="1,352"
            description="Members"
            subtitle="163 registered today"></app-dashboard-icon-box>
        </div>
        <div class="col-sm-6 col-lg-3">
          <app-dashboard-icon-box
            color="yellow"
            icon="fe fe-message-square"
            value="132"
            description="Comments"
            subtitle="16 waiting"></app-dashboard-icon-box>
        </div>
      </div>

      <div class="row row-cards row-deck">
        <!--{% for article in site.data.articles limit: 2 %}-->
        <div class="col-lg-6">
          <!--{% include cards/blog-single.html article=article type="aside" %}-->
        </div>
        <!--{% endfor %}-->
      </div>

      <div class="row row-cards row-deck">

        <div class="col-12">
          <app-table-users [users]="demoService.users"></app-table-users>
        </div>

        <div class="col-sm-6 col-lg-4">
          <app-card-browser-stats></app-card-browser-stats>
        </div>
        <div class="col-sm-6 col-lg-4">
          <app-card-projects></app-card-projects>
        </div>
        <div class="col-md-6 col-lg-4">
          <app-card-members [users]="demoService.users"></app-card-members>
        </div>

        <div class="col-md-6 col-lg-12">
          <div class="row">
            <div class="col-sm-6 col-lg-3">
              <app-dashboard-chart-bg title="423" description="Users online" color="blue" rate="+5%"></app-dashboard-chart-bg>
            </div>
            <div class="col-sm-6 col-lg-3">
              <app-dashboard-chart-bg title="423" description="Users online" color="red" rate="-3%"></app-dashboard-chart-bg>
            </div>
            <div class="col-sm-6 col-lg-3">
              <app-dashboard-chart-bg title="423" description="Users online" color="green" rate="-3%"></app-dashboard-chart-bg>
            </div>
            <div class="col-sm-6 col-lg-3">
              <app-dashboard-chart-bg title="423" description="Users online" color="yellow" rate="9%"></app-dashboard-chart-bg>
            </div>
          </div>
        </div>

        <div class="col-12">
          <app-table-invoices [invoices]="demoService.invoices"></app-table-invoices>
          <!--{% include cards/invoices.html %}-->
        </div>
      </div>

    </app-page>
  `,
  styles: []
})
export class HomeIndexComponent {

  constructor(public demoService: DemoService) {}
}
