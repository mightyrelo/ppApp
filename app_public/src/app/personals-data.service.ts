import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BROWSER_STORAGE } from './storage';

import { Personals } from './personals';


@Injectable({
  providedIn: 'root'
})
export class PersonalsDataService {

  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) { }

  public readPersonals() : Promise<Personals[]> {
    const url : string = `${this.apiBaseUrl}/personals`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Personals[])
      .catch(this.handleError);

  }

  public addPersonals(formPersonals: Personals) : Promise<Personals> {
    const url: string = `${this.apiBaseUrl}/personals`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('ppApp-token')}`
      })
    };
    return this.http
      .post(url, formPersonals, httpOptions)
      .toPromise()
      .then(response => response as Personals)
      .catch(this.handleError);
  }

  private handleError(error: any) : Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }



}
