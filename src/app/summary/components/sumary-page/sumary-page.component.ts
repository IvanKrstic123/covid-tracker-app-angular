import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-sumary-page',
  templateUrl: './sumary-page.component.html',
  styleUrls: ['./sumary-page.component.css']
})
export class SumaryPageComponent implements OnInit {
  covidData: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getSummaryData()
    .subscribe(
      (data:any) => {
        this.covidData = data;
    }); 
  }

}
