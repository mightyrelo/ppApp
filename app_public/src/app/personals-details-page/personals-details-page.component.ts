import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';



import { Personals } from '../personals';
import { PersonalsDataService } from '../personals-data.service';

@Component({
  selector: 'app-personals-details-page',
  templateUrl: './personals-details-page.component.html',
  styleUrls: ['./personals-details-page.component.css']
})
export class PersonalsDetailsPageComponent implements OnInit {

  public dbPers: Personals

  public pageContent = {
    header: {
      title: '',
      strapline: ''
    },
    sideBar: {
      main: '',
      sub: ''
    }
  };

  constructor(
    private persDataService: PersonalsDataService,
    private route: ActivatedRoute
  ) { }

  

  ngOnInit() : void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let id = params.get('personalsId');
          return this.persDataService.getPersonalsById(id);
        })
      )
      .subscribe((newPers: Personals) => {
        this.dbPers = newPers;
        console.log(this.dbPers);
        this.pageContent.header.title = newPers.name;
        this.pageContent.sideBar.main = `${newPers.name} is on ppApp because they are serious about putting pap on the table.`;
        this.pageContent.sideBar.sub = `ppApp was made for people like ${newPers.name}`;
      })
  }
}
