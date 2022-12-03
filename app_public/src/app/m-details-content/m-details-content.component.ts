import { Component, OnInit, Input } from '@angular/core';

import { M } from '../m-list/m-list.component';

@Component({
  selector: 'app-m-details-content',
  templateUrl: './m-details-content.component.html',
  styleUrls: ['./m-details-content.component.css']
})
export class MDetailsContentComponent implements OnInit {

  @Input() dbM: M;

  constructor() { }

  ngOnInit() : void {
    console.log('child m', this.dbM);
  }

}
