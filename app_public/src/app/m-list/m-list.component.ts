import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { MDataService } from '../m-data.service';
import { M } from '../m';
import { AuthenticationService } from '../authentication.service';

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
    a2: null,
    a3: null,
    a4: '',
    a5: '',
    facilities: [],
    sms: [],
    duration: [],
    user: ''
  };

  public errorInForm = '';

  public ms: M[];
  
  constructor(
    private mDataService: MDataService,
    private route: ActivatedRoute,
    private authService: AuthenticationService
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
    this.formM.a2 = null;
    this.formM.a3 = null;
    this.formM.a4 = '';
    this.formM.a5 = '';
    this.formM.facilities = [];
    this.openForm = false;
  }

  private getUserName() : string {
    const {name} = this.authService.getCurrentUser();
    return name ? name : 'guest';
  }

  public isLoggedIn() : boolean {
    return this.authService.isLoggedIn();
  }

  public onMSubmit() : void {
    this.formM.user = this.getUserName();
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
      this.errorInForm = 'all fields are required, leka gape';
    }

  }

  ngOnInit() {
    this.getMs();
    //
    this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
       let id = params.get('mId');
       return this.mDataService.deleteMById(id);
      })
    )
    .subscribe((none: any) => {
      console.log('deleted');
    });
 }
}


