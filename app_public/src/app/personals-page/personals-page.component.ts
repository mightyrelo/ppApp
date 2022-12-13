import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personals-page',
  templateUrl: './personals-page.component.html',
  styleUrls: ['./personals-page.component.css']
})
export class PersonalsPageComponent implements OnInit {

  public pageContent = {
    header: {
      title: 'Personal Info',
      strapline: 'what makes you, you?'
    },
    sideBar: {
      main: 'main',
      sub: 'side'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
