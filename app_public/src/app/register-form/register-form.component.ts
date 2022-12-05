import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  public credentials = {
    name: '',
    email: '',
    password: ''
  };

  public formError = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  public onRegisterSubmit() : void {
    if(!this.credentials.name || !this.credentials.email || !this.credentials.password) {
      this.formError = 'all fields required, leka gape!';
      return;
    }
    this.authService.register(this.credentials)
      .then(() => {
        this.router.navigateByUrl('/');
      })
  }

  ngOnInit() {
  }

}
