import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { response } from 'express';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message'
  name=''
  welcomeMsgFromService:string=''

  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService
  ){}

  ngOnInit(){
  //console.log(this.route.snapshot.params['name']);
  this.name=this.route.snapshot.params['name']
  
  }

  getWelcomeMessage(){
    ///console.log(this.service.executeHelloWorldService());
    this.service.executeHelloWorldService().subscribe(
      response=> this.handleSuccessfilResponse(response),
      error=>this.handleErrorresponse(error)
    );

    //console.log('last line of getWelcomeMessage');
  }

  getWelcomeMessageWithVariable(){
    ///console.log(this.service.executeHelloWorldService());
    this.service.executeHelloWorldServiceWithVariable(this.name).subscribe(
      response=> this.handleSuccessfilResponse(response),
      error=>this.handleErrorresponse(error)
    );

    //console.log('last line of getWelcomeMessage');
  }

  handleSuccessfilResponse(response:any){
    this.welcomeMsgFromService = response.message
    console.log(response.message);
  }

  handleErrorresponse(error:any){
    this.welcomeMsgFromService=error.error.message
  }

}


