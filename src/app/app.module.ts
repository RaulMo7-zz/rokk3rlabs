import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';
import { AppComponent } from './app.component';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { AnalyticsModule } from 'app/analytics/analytics.module';
import { SidebarComponent } from 'app/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AnalyticsModule
  ],
 
  bootstrap: [AppComponent, SidebarComponent]
})
export class AppModule { }
