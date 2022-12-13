import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edu-list-page',
  templateUrl: './edu-list-page.component.html',
  styleUrls: ['./edu-list-page.component.css']
})
export class EduListPageComponent implements OnInit {

public pageContent = {
    header: {
      title: 'Academic Info',
      strapline: 'what qualifications have you attained?'
    },
    sideBar: {
      main: 'academic history',
      sub: 'qualifications are obtained from certain institutions'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
