import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts/highmaps';
import * as worldMap from '@highcharts/map-collection/custom/world.geo.json';

@Component({
  selector: 'app-live-page',
  templateUrl: './live-page.component.html',
  styleUrls: ['./live-page.component.css']
})
export class LivePageComponent implements OnInit {

  constructor() {}
  
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'mapChart';

  chartOptions: Highcharts.Options | any = {
    chart: {
      map: worldMap
    },
    title: {
      text: 'COVID-19 World Data'
    },
    subtitle: {
      text: 'Confirmed Cases Live'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox'
      }
    },
    legend: {
      enabled: true
    },
    colorAxis: {
      min: 0
    },
    series: [{
      type: 'map',
      name: 'COVID-19 Data',
      states: {
        hover: {
          color: '#dc3545'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      },
      allAreas: false,
      data: [['af', 89],
      ['al', 21],
      ['dz', 78],
      ['as', 46],
      ['ad', 59],
      ['ao', 33],
      ['ai', 91],
      ['aq', 19],
      ['ag', 73],
      ['ar', 12],
      ['am', 65],
      ['aw', 54],
      ['au', 27],
      ['at', 8],
      ['az', 77],
      ['bs', 47],
      ['bh', 18],
      ['bd', 20],
      ['bb', 67],
      ['by', 6],
      ['be', 22],
      ['bz', 88],
      ['bj', 4],
      ['bm', 75],
      ['bt', 95],
      ['bo', 68],
      ['ba', 43],
      ['bw', 37],
      ['bv', 71],
      ['br', 15],
      ['io', 31],
      ['bn', 80],
      ['bg', 51],
      ['bf', 82],
      ['bi', 36],
      ['kh', 98],
      ['cm', 14],
      ['ca', 57],
      ['cv', 10],
      ['ky', 55],
      ['cf', 29],
      ['td', 61],
      ['cl', 23],
      ['cn', 69],
      ['cx', 83],
      ['cc', 87],
      ['co', 58],
      ['km', 35],
      ['cg', 90],
      ['cd', 17],
      ['ck', 76],
      ['cr', 7],
      ['ci', 39],
      ['hr', 50],
      ['cu', 44],
      ['cy', 72],
      ['cz', 45],
      ['dk', 81],
      ['dj', 94],
      ['dm', 93],
      ['do', 25],
      ['ec', 5],
      ['eg', 62],
      ['sv', 74],
      ['gq', 30]]
    }]
  };
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
