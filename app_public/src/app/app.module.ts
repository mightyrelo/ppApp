import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MListComponent } from './m-list/m-list.component';

@NgModule({
  declarations: [
    MListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MListComponent]
})
export class AppModule { }
