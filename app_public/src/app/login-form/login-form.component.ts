import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public formError = '';
  public credentials = {
    email: '',
    password: '',
    name: ''
  };
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  public onLoginSubmit() : void {
    if(!this.credentials.email || !this.credentials.password) {
      this.formError = 'email and password required';
      return;
    }
    this.authService.login(this.credentials)
      .then(() => this.router.navigateByUrl('/'))
      .catch((message) => this.formError = message);
  }

  ngOnInit() {
  }

}
