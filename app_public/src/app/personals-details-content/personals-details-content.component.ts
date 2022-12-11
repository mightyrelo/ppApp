import { Component, OnInit, Input } from '@angular/core';

import { Personals } from '../personals';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-personals-details-content',
  templateUrl: './personals-details-content.component.html',
  styleUrls: ['./personals-details-content.component.css']
})
export class PersonalsDetailsContentComponent implements OnInit {

  @Input() dbPers : Personals

  public pageContent = {
    header: {
      title: '',
      strapline: 'Details of a specific personals',
    },
    sideBar: {
      main: 'personal details',
      sub: 'details for a specific person'
    }
  };

  constructor(
    private authService: AuthenticationService,
  ) { }


  ngOnInit() {
  }

}
