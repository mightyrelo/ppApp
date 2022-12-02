import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-page',
  templateUrl: './m-page.component.html',
  styleUrls: ['./m-page.component.css']
})
export class MPageComponent implements OnInit {

  public pageContent = {
    header: {
      title: 'titl',
      strapline: 'strap'
    },
    sideBar: {
      main: 'main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main ',
      sub: 'support support support support support support support support support support support support support support support support support support support support support support support support support support support support support support support support support support support '
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
