import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personals-page',
  templateUrl: './personals-page.component.html',
  styleUrls: ['./personals-page.component.css']
})
export class PersonalsPageComponent implements OnInit {

  public pageContent = {
    header: {
      title: 'List of Personal Infos',
      strapline: ''
    },
    sideBar: {
      main: '',
      sub: ''
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
