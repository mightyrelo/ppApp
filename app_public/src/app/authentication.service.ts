import { Inject, Injectable } from '@angular/core';


import { BROWSER_STORAGE } from './storage';
import { User } from './user';
import { AuthResponse } from './auth-response';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private userDataService: UserDataService
  ) { }

  private readToken() : string {
    return (this.storage.getItem('ppApp-token'));
  }

  private saveToken(token: string) : void {
    this.storage.setItem('ppApp-token', token);
  }


  public register(user: User) : Promise<any> {
    return this.userDataService.register(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));   
  }

  public login(user: User) : Promise<any> {
    return this.userDataService.login(user) 
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }

  public logout() : void {
    this.storage.removeItem('ppApp-token');
  }
}

