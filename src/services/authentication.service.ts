
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()

export class AuthenticationService{
  private host:string="http://localhost:8080";
  
  constructor(private http:HttpClient){
    
  }
  login(user){
    
    return  this.http.post(this.host+"/login",user,{observe:'response'});
  }
  
  
 
  
  
}