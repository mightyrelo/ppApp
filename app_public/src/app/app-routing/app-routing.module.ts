import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { HomePageComponent } from '../home-page/home-page.component';
import { MDetailsPageComponent } from '../m-details-page/m-details-page.component';
import { MPageComponent } from '../m-page/m-page.component';

const routes : Routes = 
  [{
    path: '',
    component: HomePageComponent
  }, {
    path: 'ms',
    component: MPageComponent
  }, {
    path: 'ms/:mId',
    component: MDetailsPageComponent
  }, {
    path: 'ms/:mId/sms/new',
    component: MDetailsPageComponent
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
