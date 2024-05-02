import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
   //isUserLoggerIn : boolean = false;
  constructor(public hardcodedAuthenticationService : HardcodedAuthenticationService){}

  ngOnInit(){
    //this.isUserLoggerIn = this.hardcodedAuthenticationService.isUserLoggerIn();
  }
}
