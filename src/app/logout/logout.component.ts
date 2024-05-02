import { Component } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private hardcodedAuthenticatedService : HardcodedAuthenticationService){}

  ngOnInit(){
    this.hardcodedAuthenticatedService.logout();
  }
}
