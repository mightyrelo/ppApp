import { Component, OnInit } from '@angular/core';
import { MDataService } from '../m-data.service';

export class M {
  _id: String;
  a1: String;
  a2: number;
  a3: number;
  a4: String;
  a5: String;
  facilities: String[];
  sms: any[];
}

export class SM {
  b1: String;
  b2: number;
}

@Component({
  selector: 'app-m-list',
  templateUrl: './m-list.component.html',
  styleUrls: ['./m-list.component.css']
})
export class MListComponent implements OnInit {

  public openForm : boolean = false;

  public formM : M = {
    _id: '',
    a1: '',
    a2: 0,
    a3: 0,
    a4: '',
    a5: '',
    facilities: [],
    sms: []
  };

  public errorInForm = '';

  public ms: M[];
  
  constructor(
    private mDataService: MDataService
  ) { }

  private getMs(): void {
    this.mDataService.getMs()
      .then(response => this.ms = response.reverse());
  }

  private formIsValid() : boolean {
    if(!this.formM.a1 || !this.formM.a2 || !this.formM.a3 || !this.formM.a4 || !this.formM.a5 || !this.formM.facilities) {
      return false;
    } else {
      return true;
    }
  }

  public resetAndHideMForm() : void {
    this.errorInForm = '';
    this.formM.a1 = '';
    this.formM.a2 = 0;
    this.formM.a3 = 0 ;
    this.formM.a4 = '';
    this.formM.a5 = '';
    this.formM.facilities = [];
    this.openForm = false;
  }

  public onMSubmit() : void {
    if(this.formIsValid()) {
      this.mDataService.postM(this.formM)
      .then(mDb => {
        console.log('m saved', mDb);
        let ms = this.ms.slice(0);
        ms.unshift(mDb);
        this.ms = ms;
        this.resetAndHideMForm();
      });
    } else {
      console.log('hello');
      this.errorInForm = 'all fields are required, leka gape';
    }

  }

  ngOnInit() {
    this.getMs();
  }

}
