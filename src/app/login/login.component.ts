import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username='aarti'
  password=''
  errorMsg='Invalid Credentials'
  invalidLogin=false

  constructor(private router : Router, private hardcodedAuthenticationService: HardcodedAuthenticationService){}

  handleLogin() {
    //console.log(this.username);
    //if(this.username==='aarti' && this.password==='dummy'){
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username])
      this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }
  }

}
