import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { M } from './m';

@Injectable({
  providedIn: 'root'
})
export class MDataService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getMs() : Promise<M[]> {
    const path = '/ms';
    const url: string = `${this.apiBaseUrl}${path}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as M[])
      .catch(this.handleError);
  }

  public getMById(mId: string) : Promise<M> {
    const url : string = `${this.apiBaseUrl}/ms/${mId}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as M)
      .catch(this.handleError);
  }

  public postM(formM: M) : Promise<M> {
    const url : string = `${this.apiBaseUrl}/ms`;
    return this.http
      .post(url, formM)
      .toPromise()
      .then(response => response as M)
      .catch(this.handleError);
  }

  public deleteMById(mId: string) : Promise<null> {
    const url : string = `${this.apiBaseUrl}/ms/${mId}`;
    return this.http
      .delete(url)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }
  

  private handleError(error: any) : Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
