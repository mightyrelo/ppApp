import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personals-details-content',
  templateUrl: './personals-details-content.component.html',
  styleUrls: ['./personals-details-content.component.css']
})
export class PersonalsDetailsContentComponent implements OnInit {

  public pageContent = {
    header: {
      title: '',
      strapline: 'Details of a specific personals',
    },
    sideBar: {
      main: 'personal details',
      sub: 'details for a specific person'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
