import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor() {
    this.options = {
      chart: { type: 'spline' },
      title: { text: 'dynamic data example' },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
      },
      series: [{ data: [2, 3, 5, 8, 13] }]
    };
    setInterval(() => this.chart.series[0].addPoint(Math.random() * 10), 30000);
  }
  chart: any;
  options: Object;
  saveInstance(chartInstance) {
    this.chart = chartInstance;
  }
}
