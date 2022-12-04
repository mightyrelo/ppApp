import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SM } from './sm';

@Injectable({
  providedIn: 'root'
})
export class SmDataService {

  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) { }

  public postSM(mId: string, formSm: SM) : Promise<SM> {
    const url: string = `${this.apiBaseUrl}/ms/${mId}/sms`;
    return this.http
      .post(url, formSm)
      .toPromise()
      .then(response => response as SM)
      .catch(this.handleError);

  }

  public deleteSMByIds(mId: string, smId: string) : Promise<any> {
    const url: string = `${this.apiBaseUrl}/ms/${mId}/sms/${smId}`;
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
