import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-list-page',
  templateUrl: './work-list-page.component.html',
  styleUrls: ['./work-list-page.component.css']
})
export class WorkListPageComponent implements OnInit {

  constructor() { }

  public pageContent = {
    header: {
      title: 'Work Info',
      strapline: 'where have you worked in the past?'
    },
    sideBar: {
      main: 'works history',
      sub: 'roles performed working at certain company'
    }
  };

  ngOnInit() {
  }

}
