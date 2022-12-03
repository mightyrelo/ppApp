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

@Component({
  selector: 'app-m-list',
  templateUrl: './m-list.component.html',
  styleUrls: ['./m-list.component.css']
})
export class MListComponent implements OnInit {

  public ms: M[];
  
  constructor(
    private mDataService: MDataService
  ) { }

  private getMs(): void {
    this.mDataService.getMs()
      .then(response => this.ms = response.reverse());
  }

  ngOnInit() {
    this.getMs();
  }

}
