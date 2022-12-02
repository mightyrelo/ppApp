import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-details-page',
  templateUrl: './m-details-page.component.html',
  styleUrls: ['./m-details-page.component.css']
})
export class MDetailsPageComponent implements OnInit {

  public pageContent = {
    header: {
      title: 'M Details',
      strapline: 'Details of M'

    },
    sideBar: {
      main: 'M\'s specific details M\'s specific details M\'s specific details M\'s specific details M\'s specific details M\'s specific details M\'s specific details M\'s specific details M\'s specific details M\'s specific details ',
      sub: 'details specific to M details specific to M details specific to M details specific to M details specific to M details specific to M details specific to M details specific to M details specific to M '
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
