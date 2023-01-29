import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.css'],
})
export class CountryChartComponent implements OnInit, OnChanges {
  @Input() country: string = 'India';

  barChartData: ChartDataSets[] = [
    {
      data: [],
      label: 'Confirmed Cases'
    },
  ];
  barChartLabels: Label[] = [];
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.getCountryData();
  }

  getCountryData() {
    this.dataService
      .getCountryDataByDate(
        this.country,
        'from=2020-03-03T00:00:00&to=2022-06-06T:00:00:00'
      )
      .subscribe((response: any) => {
        this.barChartData[0].data = response.map((obj: any) => obj['Cases']);
        this.barChartLabels = response.map((obj: any) => obj['Date'].substring(0, 10))
      });
  }
}
