import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SumaryPageComponent } from './components/sumary-page/sumary-page.component';
import { SummaryCardsComponent } from './components/summary-cards/summary-cards.component';


@NgModule({
  declarations: [
    SumaryPageComponent,
    SummaryCardsComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule
  ]
})
export class SummaryModule { }
