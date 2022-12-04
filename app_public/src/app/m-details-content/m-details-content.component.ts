import { Component, OnInit, Input } from '@angular/core';

import { M } from '../m-list/m-list.component';
import { MDataService } from '../m-data.service';
import { SmDataService } from '../sm-data.service';

@Component({
  selector: 'app-m-details-content',
  templateUrl: './m-details-content.component.html',
  styleUrls: ['./m-details-content.component.css']
})
export class MDetailsContentComponent implements OnInit {

  @Input() dbM: M;

  public formSM = {
    b1: '',
    b2: 0
  };

  public formError = '';
  public displayForm : boolean = false;



  

  constructor(
    private mDataService : MDataService,
    private smDataService : SmDataService
  ) { }

  private smFormIsValid() {}

  public onSMSubmit() : void {


  }

  ngOnInit() : void {
   
  }

}
