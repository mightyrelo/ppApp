import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public pageContent = {
    header: {
      title: 'ppApp',
      strapline: '-  Your (p)ersonal (p)rofile (App)'
    },
    sideBar: {
      main: 'Looking to create a personal profile or update one for an upcoming job application? Or have you just secured that qualification and are looking to update your profile. ppApp was created to help job seekers get organized in their hunt for pap!',
      sub: 'Let ppApp help you collate personal, education, work and skills information as and when you upgrade them. Plus have the comfort of knowing that your information is globally accessible and can be printed, downloaded or updated at any given time '
    }
  };


  constructor() { }

  ngOnInit() {
  }

}
