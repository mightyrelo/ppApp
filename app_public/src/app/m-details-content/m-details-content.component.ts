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
    b2: null
  };

  public formError = '';
  public displayForm : boolean = false;



  

  constructor(
    private mDataService : MDataService,
    private smDataService : SmDataService
  ) { }

  private smFormIsValid() : boolean {
    if(!this.formSM.b1 || !this.formSM.b2) {
      return false;
    } else {
      return true;
    }
  }

  public resetAndHideSMForm() : void {
    this.displayForm = false;
    this.formSM.b1 = '';
    this.formSM.b2 = null;
    this.formError = '';
  }

  public onSMSubmit() : void {
    if(this.smFormIsValid()) {
      console.log('form valid');
      /*this.smDataService.postSM(this.dbM._id.toString(), this.formSM)
        .then(sm => {
          console.log('sm saved', sm);
          //save sm on m
          let sms = this.dbM.sms.slice(0);
          sms.unshift(sm);
          this.dbM.sms = sms;
        });*/

    } else {
      this.formError = 'all fields required, leka gape';
    }


  }

  ngOnInit() : void {
   
  }

}
