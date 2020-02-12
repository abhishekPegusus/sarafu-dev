import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { EchartsPieComponent } from "./echarts/echarts-pie.component";
import { EarningCardComponent } from "./earning-card/earning-card.component";
import { EarningCardBackComponent } from "./earning-card/back-side/earning-card-back.component";
import { EarningPieChartComponent } from "./earning-card/back-side/earning-pie-chart.component";
import { EarningCardFrontComponent } from "./earning-card/front-side/earning-card-front.component";
import { EarningLiveUpdateChartComponent } from "./earning-card/front-side/earning-live-update-chart.component";
import { ECommerceVisitorsAnalyticsComponent } from "./visitors-analytics/visitors-analytics.component";
import { ECommerceVisitorsAnalyticsChartComponent } from "./visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component";
import { ECommerceVisitorsStatisticsComponent } from "./visitors-analytics/visitors-statistics/visitors-statistics.component";
import { ECommerceLegendChartComponent } from "./legend-chart/legend-chart.component";

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule
} from "@nebular/theme";

import { NgxEchartsModule } from "ngx-echarts";
import { FormsModule } from "@angular/forms";
import { SlideOutComponent } from "./slide-out/slide-out.component";

@NgModule({
  declarations: [
    DashboardComponent,
    EchartsPieComponent,
    EarningCardComponent,
    EarningCardFrontComponent,
    EarningCardBackComponent,
    EarningPieChartComponent,
    EarningLiveUpdateChartComponent,

    ECommerceVisitorsAnalyticsComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,
    ECommerceLegendChartComponent,
    SlideOutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbRadioModule,
    NbSelectModule,
    NbTabsetModule,
    NbUserModule,
    NbListModule,
    NgxEchartsModule,
    FormsModule
  ]
})
export class DashboardModule {}
