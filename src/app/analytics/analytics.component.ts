import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'app/analytics/services/analytics.service';
import * as _ from "lodash";
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  data: any;
  chart: any;
  chartSpeed: any;
  chartTimes: any;
  optionsCount: Object;
  optionsSpeed: Object;
  optionsTimes: Object;

  constructor(private _analyticsServiceService: AnalyticsService) {

  }

  saveInstance(chartInstance) {
    this.chart = chartInstance;
  }
  saveInstanceChartSpeed(instance) {
    this.chartSpeed = instance;
  }
  saveInstanceChartTimes(instance) {
    this.chartTimes = instance;
  }

  ngOnInit() {
    this._analyticsServiceService.getData().subscribe((resp) => {
      this.data = resp;
      this.generateChartsFromData(resp);
      console.log();
    });
  }

  generateChartsFromData(data) {
    let categories = _.map(data, (re: any) => re.zoneId);
    let counts = _.map(data, (re: any) => re.data.count);
    let speeds = _.map(data, (re: any) => re.data.speed);
    let times = _.map(data, (re: any) => re.data.time);

    this.setChartCount(categories, counts);
    this.setChartSpeed(categories, speeds);
    this.setChartTime(categories, times);
  }

  setChartCount(categories, counts) {
    this.optionsCount = {
      chart: { type: 'column' },
      title: { text: 'Count chart' },
      xAxis: {
        categories: categories
      },
      series: [{ data: counts }]
    };
    /* setInterval(() => this.generateNewRandomData, 5000); */
    setInterval(() => this.chart.series[0].addPoint(Math.random() * 10), 5000);
  }

  generateNewRandomData() {
    _.forEach(this.data, (dat) => {
      dat.data.count = Math.floor((Math.random() * 10) + 1);
      dat.data.speed = Math.floor((Math.random() * 20) + 1);
    })
  }

  setChartSpeed(categories, speeds) {
    this.optionsSpeed = {
      chart: { type: 'spline' },
      title: { text: 'Speed chart' },
      xAxis: {
        categories: categories
      },
      series: [{ data: speeds }]
    };
    setInterval(() => this.chartSpeed.series[0].addPoint(Math.random() * 10), 5000);
  }

  setChartTime(categories, times) {
    this.optionsTimes = {
      chart: { type: 'pie' },
      title: { text: 'Time chart' },
      xAxis: {
        categories: categories
      },
      series: [{ data: times }]
    };
    setInterval(() => this.chartTimes.series[0].addPoint(Math.random() * 10), 5000);
  }

}
