import { Component, OnInit } from '@angular/core';

export class M {
  _id: String;
  a1: String;
  a2: number;
  a3: String;
  a4: String;
  a5: String;
  facilities: String[];
}

@Component({
  selector: 'app-m-list',
  templateUrl: './m-list.component.html',
  styleUrls: ['./m-list.component.css']
})
export class MListComponent implements OnInit {

  
  constructor() { }

  ms: M[] = [{
    _id: '638829265ee405f5ce4d01c1',
    a1: 'a1',
    a2: 2,
    a3: 'a3',
    a4: 'a4',
    a5: 'a5',
    facilities: ['aa1', 'aa2', 'aa3']
  },{
    _id: '638829265ee405f5ce4d01c1',
    a1: 'b1',
    a2: 4,
    a3: 'b3',
    a4: 'b4',
    a5: 'b5',
    facilities: ['bb1', 'bb2', 'bb3']
  }];


  ngOnInit() {
  }



}
