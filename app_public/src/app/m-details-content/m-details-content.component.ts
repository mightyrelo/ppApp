import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { M } from '../m';
import {SM} from '../sm';
import { SmDataService } from '../sm-data.service';

@Component({
  selector: 'app-m-details-content',
  templateUrl: './m-details-content.component.html',
  styleUrls: ['./m-details-content.component.css']
})
export class MDetailsContentComponent implements OnInit {

  @Input() dbM: M;

  public formSM : SM = {
    b1: '',
    b2: null,
  };

  public formError = '';
  public displayForm : boolean = false;

  constructor(

    private smDataService : SmDataService,
    private route : ActivatedRoute
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
      this.smDataService.postSM(this.dbM._id.toString(), this.formSM)
        .then((sm: SM) => {
          console.log('sm saved', sm);
          //save sm on m
          let sms = this.dbM.sms.slice(0);
          sms.unshift(sm);
          this.dbM.sms = sms; 
          this.resetAndHideSMForm();
        });
    } else {
      this.formError = 'all fields required, leka gape';
    }
  }

  ngOnInit() : void {
    this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
       let mId = params.get('mId');
       let smId = params.get('smId');
       let del = false;
       if(mId && smId) {
        del = true;
        return this.smDataService.deleteSMByIds(mId, smId);
       }
      })
    )
    .subscribe((none: any) => {
        console.log('deleted');
    });
   
  }

}
