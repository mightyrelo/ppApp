import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personals-details-page',
  templateUrl: './personals-details-page.component.html',
  styleUrls: ['./personals-details-page.component.css']
})
export class PersonalsDetailsPageComponent implements OnInit {

  public pageContent = {
    header: {
      title: '',
      strapline: 'Personals Details Page'
    },
    sideBar: {
      main: 'main details',
      sub: 'side details'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
