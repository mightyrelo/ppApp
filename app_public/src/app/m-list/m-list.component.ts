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

  public formM : M = {
    _id: '',
    a1: '',
    a2: 0,
    a3: 0,
    a4: '',
    a5: '',
    facilities: [],
  }

  public ms: M[];
  
  constructor(
    private mDataService: MDataService
  ) { }

  private getMs(): void {
    this.mDataService.getMs()
      .then(response => this.ms = response.reverse());
  }

  public onMSubmit() : void {
    this.mDataService.postM(this.formM)
      .then(response => {console.log('m saved', response)});

  }

  ngOnInit() {
    this.getMs();
  }

}
