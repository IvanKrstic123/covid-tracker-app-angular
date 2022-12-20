import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SumaryPageComponent } from './components/sumary-page/sumary-page.component';


@NgModule({
  declarations: [
    SumaryPageComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule
  ]
})
export class SummaryModule { }
