import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SumaryPageComponent } from './components/sumary-page/sumary-page.component';

const routes: Routes = [
  { path: '', component: SumaryPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryRoutingModule { }
