import { Component, OnInit } from '@angular/core';

import { PersonalsDataService } from '../personals-data.service';
import { Personals } from '../personals';

@Component({
  selector: 'app-personals-list',
  templateUrl: './personals-list.component.html',
  styleUrls: ['./personals-list.component.css']
})
export class PersonalsListComponent implements OnInit {

  public personals: Personals[];

  constructor(
    private persDataService : PersonalsDataService
  ) { }

  //create wrappers
  public readPersonals(): void {
    
    this.persDataService.readPersonals()
      .then((response) => {this.personals = response;  console.log(this.personals)});
  }



  ngOnInit() {
    this.readPersonals();
  }

}
