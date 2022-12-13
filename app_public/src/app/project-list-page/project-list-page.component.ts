import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list-page',
  templateUrl: './project-list-page.component.html',
  styleUrls: ['./project-list-page.component.css']
})
export class ProjectListPageComponent implements OnInit {

  public pageContent = {
    header: {
      title: 'Project Info',
      strapline: 'what projects have you worked on in the past?'
    },
    sideBar: {
      main: 'projects history',
      sub: 'roles performed working at certain company'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
