
import { HttpClient, HttpClientModule , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("Execute hello world bean");
  }
  executeHelloWorldServiceWithVariable(name:any){
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/${name}`,{headers});
    //console.log("Execute hello world bean");
  }

  createBasicAuthenticationHttpHeader(){
    let username='aarti'
    let password='dummy'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
