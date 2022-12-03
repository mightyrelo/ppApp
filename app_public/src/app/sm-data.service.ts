import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { M, SM } from './m-list/m-list.component';

@Injectable({
  providedIn: 'root'
})
export class SmDataService {

  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) { }

  public postSM(mId: string, formSm: SM) : Promise<any> {
    const url: string = `${this.apiBaseUrl}/ms/${mId}/sms`;
    return this.http
      .post(url, formSm)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);

  }

  private handleError(error: any) : Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
