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

  public formVisible: boolean = false;

  public formSM = {
    b1: 'b1',
    b2: 3
  };

  public formError = '';

  constructor(
    private mDataService : MDataService,
    private smDataService : SmDataService
  ) { }

  private sMFormIsValid(): boolean {
    if(!this.formSM.b1 || !this.formSM.b2) {
        return false;
    } else {
      return true;
    }
  }

  public onSMSubmit() : void {
    if(this.sMFormIsValid) {
      console.log('form is valid');
    } else {
      this.formError = 'all fields required, leka gape.'
    }

  }

  ngOnInit() : void {
   
  }

}
