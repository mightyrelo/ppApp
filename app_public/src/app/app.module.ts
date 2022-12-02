import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { MListComponent } from './m-list/m-list.component';
import { AppendSPipe } from './append-s.pipe';


@NgModule({
  declarations: [
    MListComponent,
    AppendSPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MListComponent]
})
export class AppModule { }
