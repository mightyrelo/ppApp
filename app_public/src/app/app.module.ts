import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { MListComponent } from './m-list/m-list.component';
import { AppendSPipe } from './append-s.pipe';
import { FrameworkComponent } from './framework/framework.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MPageComponent } from './m-page/m-page.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { MDetailsPageComponent } from './m-details-page/m-details-page.component';
import { MDetailsContentComponent } from './m-details-content/m-details-content.component';


@NgModule({
  declarations: [
    MListComponent,
    AppendSPipe,
    FrameworkComponent,
    NavBarComponent,
    FooterComponent,
    HomePageComponent,
    MPageComponent,
    PageHeaderComponent,
    SideBarComponent,
    HomeContentComponent,
    MDetailsPageComponent,
    MDetailsContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: '',
      component: HomePageComponent
    }, {
      path: 'ms',
      component: MPageComponent
    }, {
      path: 'ms/:msId',
      component: MDetailsPageComponent
    }])
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
