import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from 'app/analytics/analytics.component';
import { RouterModule } from '@angular/router';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { ChartModule } from 'angular2-highcharts';
import { AnalyticsService } from 'app/analytics/services/analytics.service';
export function highchartsFactory() {
  return require('highcharts');
}
@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    AnalyticsRoutingModule
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    AnalyticsService
  ],
  exports: [RouterModule],
  declarations: [AnalyticsComponent]
})
export class AnalyticsModule { }
